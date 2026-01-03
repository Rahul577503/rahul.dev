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

export default Blog;
