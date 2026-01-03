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
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ delay: index * 0.05 }}
    className="group relative"
  >
    <Link 
      href={`/blogs/${slug}`} 
      className="block p-4 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/20 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700/50 transition-all duration-300"
    >
      {/* Subtle gradient on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none" />
      
      <div className="relative space-y-2 sm:space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors leading-tight flex-1 line-clamp-2">
            {meta.title}
          </h3>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <time className="text-xs font-mono text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-400 transition-colors hidden sm:block">
              {new Date(meta.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
            <FiArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-amber-500 dark:group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        </div>

        {/* Mobile date */}
        <time className="block sm:hidden text-xs font-mono text-zinc-500 dark:text-zinc-500">
          {new Date(meta.date).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
          })}
        </time>

        {/* Description */}
        <p className="text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 leading-relaxed text-sm line-clamp-2 transition-colors">
          {meta.description}
        </p>

        {/* Tags */}
        {meta.tags && meta.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
            {meta.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-medium text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800/50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-zinc-200 dark:border-zinc-800/50 group-hover:border-zinc-300 dark:group-hover:border-zinc-700/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
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
    const descMatch = blog.meta.description?.toLowerCase().includes(query) || false;
    return titleMatch || descMatch;
  });

  const displayedBlogs = limit ? filteredBlogs.slice(0, limit) : filteredBlogs;

  return (
    <div className="w-full max-w-4xl mx-auto px-6 pt-24 pb-20 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Writings</h2>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-1">
            {blogs.length} {blogs.length === 1 ? 'article' : 'articles'}
          </p>
        </div>
        
        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 text-zinc-900 dark:text-zinc-200 text-sm rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 pl-10 pr-4 py-2.5 outline-none transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
          />
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-4">
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 mb-4">
                <FiSearch className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />
              </div>
              <p className="text-zinc-500 text-sm">
                No articles found matching <span className="text-zinc-700 dark:text-zinc-400 font-medium">"{searchQuery}"</span>
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
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-400 text-sm font-medium transition-colors group"
          >
            <span>View all {blogs.length} articles</span>
            <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      )}
    </div>
  );
}
