import React from "react";
import HeroSection from "./components/HeroSection";
import BlogPage, { fetchBlogs } from "./components/Blog";
const HomePage = async () => {
  const blogs = await fetchBlogs();

  return (
    <div className="dark:bg-black bg-black dark:bg-grid-white/[0.05] bg-grid-white/[0.03]">
      <HeroSection />
      <div className="mx-auto py-2 text-white">
        <BlogPage blogs={blogs} limit={4} />
      </div>
    </div>
  );
};

export default HomePage;
