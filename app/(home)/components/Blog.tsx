import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogList from "./BlogList";

export interface FrontMatter {
  title: string;
  date: string;
  description: string;
  image: string;
  tags?: string[];
}

interface BlogPageProps {
  blogs?: { meta: FrontMatter; slug: string }[];
  limit?: number;
}

export default function BlogPage({ blogs = [], limit }: BlogPageProps) {
  return <BlogList blogs={blogs} limit={limit} />;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isValidFrontMatter(data: any): data is FrontMatter {
  return (
    data &&
    typeof data.title === "string" &&
    typeof data.date === "string" &&
    typeof data.description === "string" &&
    typeof data.image === "string"
  );
}

export async function fetchBlogs(): Promise<
  { meta: FrontMatter; slug: string }[]
> {
  try {
    const blogDir = path.join(process.cwd(), "blogs");
    if (!fs.existsSync(blogDir)) {
      return [];
    }

    const files = fs.readdirSync(blogDir);
    const blogs = files
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => {
        const fileContent = fs.readFileSync(
          path.join(blogDir, filename),
          "utf-8",
        );
        const { data } = matter(fileContent);

        // Validate front matter
        if (!isValidFrontMatter(data)) {
          return null;
        }

        return {
          meta: data as FrontMatter,
          slug: filename.replace(".mdx", ""),
        };
      })
      .filter(
        (blog): blog is { meta: FrontMatter; slug: string } => blog !== null,
      )
      .sort(
        (a, b) =>
          new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime(),
      );

    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}
