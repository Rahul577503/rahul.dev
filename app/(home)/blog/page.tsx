import React from "react";
import BlogPage, { fetchBlogs } from "@/home-components/Blog";
const Blog = async () => {
  const blogs = await fetchBlogs();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors">
      <BlogPage blogs={blogs} />
    </div>
  );
};

export const metadata = {
  title: "Blog | Rahul Maurya",
  description: "Thoughts on software development, engineering, and technology.",
  openGraph: {
    title: "Blog | Rahul Maurya",
    description:
      "Thoughts on software development, engineering, and technology.",
    url: "https://rahul.dev/blog",
    type: "website",
    images: [
      {
        url: "https://rahul.dev/img/me.jpg",
        width: 1200,
        height: 630,
        alt: "Rahul Maurya Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Rahul Maurya",
    description:
      "Thoughts on software development, engineering, and technology.",
    images: ["https://rahul.dev/img/me.jpg"],
  },
  alternates: {
    canonical: "https://rahul.dev/blog",
  },
};

export default Blog;
