import React from "react";
import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import Link from "next/link";
import Image from "next/legacy/image";
import Head from "next/head";

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
 
  <div className="flex justify-between   items-center  border rounded-lg shadow text-sm tracking-widest text-indigo-600 transition-all duration-150 hover:border-b-2 hover:border-indigo-600 hover:text-indigo-700 xs:text-base">
    <Link href={`/blogs/${slug}`} passHref>
      <div className="flex  gap-4 items-center">
        <div className="mt-2">
          <Image
            src={meta.image}
            alt={meta.title}
            height={60}
            width={100}
            className="rounded-md"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight dark:text-white">
            {meta.title}
          </h3>
          <div className="flex gap-4">
          <p className="text-gray-700">{meta.date}</p>
          <p className="text-gray-700 ">{meta.description}</p>
          </div>
         
        </div>
      </div>
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

    <main className="px-4 lg:px-0 relative left-0 right-0 top-20 border-b py-4  text-gray-200  max-w-2xl mx-auto">
       <Head>
        <title> Blog-Rahul Maurya</title>
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
      <div className="flex justify-center items-center ">
        <div className="py-2 grid grid-row gap-4 w-full">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} meta={blog.meta} slug={blog.slug} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Mdx;
