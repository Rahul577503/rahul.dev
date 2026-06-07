"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiSearch } from "react-icons/fi";

export interface FrontMatter {
  title: string;
  date: string;
  description: string;
  image: string;
  tags?: string[];
}

interface BlogCardProps {
  meta: FrontMatter;
  slug: string;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ meta, slug, index }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ delay: index * 0.04 }}
    className="group border-b border-border pb-6 last:border-b-0"
  >
    <Link href={`/blogs/${slug}`} className="block">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-base sm:text-lg font-medium text-foreground group-hover:opacity-60 transition-opacity">
          {meta.title}
        </h3>
        <time className="shrink-0 text-xs text-muted-foreground">
          {new Date(meta.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </div>
      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted-foreground">
        {meta.description}
      </p>
    </Link>
  </motion.article>
);

interface BlogListProps {
  blogs?: { meta: FrontMatter; slug: string }[];
  limit?: number;
}

export default function BlogList({ blogs = [], limit }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const query = searchQuery.toLowerCase();
    const titleMatch = blog.meta.title?.toLowerCase().includes(query) || false;
    const descMatch =
      blog.meta.description?.toLowerCase().includes(query) || false;
    return titleMatch || descMatch;
  });

  const displayedBlogs = limit ? filteredBlogs.slice(0, limit) : filteredBlogs;

  return (
    <div className="w-full max-w-2xl mx-auto px-5 sm:px-6 pt-2 pb-20 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-tight">
            Writing
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            {blogs.length} {blogs.length === 1 ? "article" : "articles"}
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-56">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-secondary border border-border text-foreground text-sm rounded-md focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 pl-10 pr-4 py-2 outline-none transition-all placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Blog list */}
      <div className="grid gap-5">
        <AnimatePresence mode="popLayout">
          {displayedBlogs.length > 0 ? (
            displayedBlogs.map((blog, index) => (
              <BlogCard
                key={blog.slug}
                meta={blog.meta}
                slug={blog.slug}
                index={index}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 px-4"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary border border-border mb-4">
                <FiSearch className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-sm">
                No articles found matching{" "}
                <span className="text-foreground font-medium">
                  &quot;{searchQuery}&quot;
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* View All Link */}
      {limit && blogs.length > limit && searchQuery === "" && (
        <div className="text-center pt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground/80 hover:opacity-60 text-sm font-medium underline decoration-from-font underline-offset-4 transition-opacity group"
          >
            <span>View all {blogs.length} articles</span>
            <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      )}
    </div>
  );
}
