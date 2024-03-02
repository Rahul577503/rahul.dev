import React from "react";
import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import Link from "next/link";
import Image from "next/legacy/image";

interface FrontMatter {
  title: string;
  date: string;
  description: string;
  image: string;
}

const BlogCard: React.FC<{ meta: FrontMatter; slug: string }> = ({
  meta,
  slug,
}) => (
  <div className="max-w-sm flex p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <Link href={`/blogs/${slug}`} passHref>
      <div className="flex-1">
        <Image
          src={meta.image}
          alt={meta.title}
          height={200}
          width={200}
          className="rounded-md"
        />
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {meta.title}
        </h3>
        <p className="ont-normal text-gray-700 dark:text-gray-400">
          {meta.date}
        </p>
        <p className="ont-normal text-gray-700 dark:text-gray-400">
          {meta.description}
        </p>
      </div>
      <div className="flex justify-end items-center"></div>
    </Link>
  </div>
);
const Mdx: React.FC = () => {
  const blogDir = "blogs";
  const files = fs.readdirSync(path.join(process.cwd(), blogDir));
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const frontMatter = matter(fileContent) as GrayMatterFile<string> & {
      data: FrontMatter;
    };

    return {
      meta: frontMatter.data,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <main className=" text-gray-200 py-[120px] max-w-[1280px] mx-auto">
      <h1 className="text-2xl font-bold text-center">Welcome To My Blog</h1>
      <br />
      <div className="flex justify-center items-center">
        <div className="py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} meta={blog.meta} slug={blog.slug} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Mdx;
