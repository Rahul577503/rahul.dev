import HeroSection from "@/home-components/HeroSection";
import BlogPage, { fetchBlogs } from "@/home-components/Blog";
import { Suspense } from "react"; // For loading states

export const metadata = {
  title: "Rahul Maurya - Full Stack Developer Portfolio",
  description:
    "Explore Rahul Maurya's portfolio, showcasing expertise in full-stack development, React, Next.js, and innovative web solutions.",
};

export default async function HomePage() {
  // Fetch blogs with error handling
  let blogs;
  try {
    blogs = await fetchBlogs();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    blogs = []; // Fallback to empty array if fetch fails
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

export const revalidate = 3600; // Revalidate every hour
