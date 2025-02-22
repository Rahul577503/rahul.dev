import HeroSection from "@/home-components/HeroSection";
import BlogPage, { fetchBlogs, FrontMatter } from "@/home-components/Blog";
import { Suspense } from "react";

export const metadata = {
  title: "Rahul Maurya - Full Stack Developer Portfolio",
  description:
    "Explore Rahul Maurya's portfolio, showcasing expertise in full-stack development, React, Next.js, and innovative web solutions.",
};

export default async function HomePage() {
  let blogs: { meta: FrontMatter; slug: string }[] = [];

  try {
    blogs = await fetchBlogs();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    blogs = []; // Ensure fallback remains an empty array
  }

  return (
    <div className="relative w-full bg-black dark:bg-black bg-grid-white/[0.03] overflow-x-hidden">
      <Suspense
        fallback={<div className="py-20 text-white">Loading hero...</div>}
      >
        <HeroSection />
      </Suspense>
      <section className="mx-auto py-8 text-white max-w-screen-lg px-4">
        <Suspense
          fallback={<div className="py-8 text-white">Loading blogs...</div>}
        >
          <BlogPage blogs={blogs} limit={6} />
        </Suspense>
      </section>
    </div>
  );
}

export const revalidate = 3600;
