import React from "react";
import HeroSection from "@/home-components/HeroSection";
import BlogPage, { fetchBlogs } from "@/home-components/Blog";

const HomePage = async () => {
  const blogs = await fetchBlogs();

  return (
    <div className="relative w-full bg-black dark:bg-black dark:bg-grid-white/[0.05] bg-grid-white/[0.03]">
      <HeroSection />
      <div className="mx-auto py-2 text-white">
        <BlogPage blogs={blogs} limit={6} />
      </div>
    </div>
  );
};

export default HomePage;
