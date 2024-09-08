import React from "react";
import BlogPage, { fetchBlogs } from "../components/Blog";
const Blog = async () => {
  const blogs = await fetchBlogs();

  return (
    <div className="dark:bg-black bg-black dark:bg-grid-white/[0.05] bg-grid-white/[0.03]">
      <BlogPage blogs={blogs} />
    </div>
  );
};

export default Blog;
