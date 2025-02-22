import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export interface FrontMatter {
  title: string;
  date: string;
  description: string;
  image: string;
}

interface BlogCardProps {
  meta: FrontMatter;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ meta, slug }) => (
  <div className="w-full py-4 border-b border-gray-700 hover:bg-gray-800 transition-colors duration-300">
    <Link href={`/blogs/${slug}`} className="flex justify-between items-start">
      <h3 className="text-xl font-bold text-yellow-400 hover:underline">
        {meta.title}
      </h3>
      <span className="text-sm text-gray-400">{meta.date}</span>
    </Link>
  </div>
);

interface BlogPageProps {
  blogs?: { meta: FrontMatter; slug: string }[];
  limit?: number;
}

export default function BlogPage({ blogs = [], limit }: BlogPageProps) {
  const displayedBlogs = limit ? blogs.slice(0, limit) : blogs;

  return (
    <section className="py-8 text-gray-200 max-w-screen-lg mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>

      <div className="space-y-4">
        {displayedBlogs.length > 0 ? (
          displayedBlogs.map((blog) => (
            <BlogCard key={blog.slug} meta={blog.meta} slug={blog.slug} />
          ))
        ) : (
          <p className="text-center text-gray-400">No blog posts available.</p>
        )}
      </div>

      {limit && blogs.length > limit && (
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="text-yellow-400 hover:underline text-lg"
          >
            View All Posts
          </Link>
        </div>
      )}
    </section>
  );
}

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
          console.warn(
            `Invalid front matter in ${filename}. Expected title, date, description, and image.`,
          );
          return null;
        }

        return {
          meta: data,
          slug: filename.replace(".mdx", ""),
        };
      })
      .filter(
        (blog): blog is { meta: FrontMatter; slug: string } => blog !== null,
      ) // Remove invalid blogs
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
