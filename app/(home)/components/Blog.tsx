import React from "react";
import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import Head from "next/head";
import Link from "next/link";

interface FrontMatter {
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
  <div className="w-full py-1 border-b border-gray-700 hover:bg-gray-800 transition-colors duration-300">
    <Link href={`/blogs/${slug}`} passHref>
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-yellow-400 hover:underline dark:text-yellow-500">
          {meta.title}
        </h3>
        <div className="text-sm text-gray-400 mt-1">{meta.date}</div>
      </div>
    </Link>
  </div>
);

interface BlogPageProps {
  blogs?: { meta: FrontMatter; slug: string }[]; // Made blogs optional
  limit?: number;
}

const BlogPage: React.FC<BlogPageProps> = ({ blogs = [], limit }) => {
  const displayedBlogs = limit ? blogs.slice(0, limit) : blogs;

  return (
    <main className="px-4 lg:px-0 py-4 text-gray-200 max-w-screen-lg mx-auto">
      <Head>
        <title>Blog - Rahul Maurya</title>
        <meta
          name="description"
          content="Welcome to my blog. Here you'll find interesting articles about various topics."
        />
      </Head>
      <div className="flex justify-center items-center gap-2">
        <h1 className="text-2xl font-bold">Blog</h1>
        <div className="mt-5 h-[0.5px] w-full bg-gray-200"></div>
      </div>
      <br />
      <div className="py-2 grid grid-row gap-4 w-full">
        {displayedBlogs.length > 0 ? (
          displayedBlogs.map((blog) => (
            <BlogCard key={blog.slug} meta={blog.meta} slug={blog.slug} />
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>
      {limit && blogs.length > limit && (
        <div className="text-center mt-4">
          <Link href="/blog" className="text-yellow-400 hover:underline">
            View All Posts
          </Link>
        </div>
      )}
    </main>
  );
};

export default BlogPage;

export async function fetchBlogs() {
  const blogDir = path.join(process.cwd(), "blogs");
  const files = fs.readdirSync(blogDir);
  const blogs = await Promise.all(
    files.map(async (filename) => {
      const fileContent = fs.readFileSync(
        path.join(blogDir, filename),
        "utf-8",
      );
      const frontMatter = matter(fileContent) as GrayMatterFile<string> & {
        data: FrontMatter;
      };

      return {
        meta: frontMatter.data,
        slug: filename.replace(".mdx", ""),
      };
    }),
  );

  return blogs;
}
