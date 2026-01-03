"use client";

import { useState } from "react";
import {
  FiShare2,
  FiCheck,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiCopy,
} from "react-icons/fi";

interface ShareProps {
  title: string;
  slug: string;
}

export default function Share({ title, slug }: ShareProps) {
  const [copied, setCopied] = useState(false);
  const url = `https://rahulmaurya.vercel.app/blogs/${slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: title,
          url,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      handleCopy();
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  return (
    <div className="py-8 border-t border-zinc-200 dark:border-zinc-800 mt-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
            Share this article
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            If you found this helpful, share it with others.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
            aria-label="Share on Twitter"
          >
            <FiTwitter className="w-5 h-5" />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
            aria-label="Share on LinkedIn"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors relative"
            aria-label="Copy link"
          >
            {copied ? (
              <FiCheck className="w-5 h-5 text-green-500" />
            ) : (
              <FiCopy className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={handleShare}
            className="sm:hidden p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-500 transition-colors"
            aria-label="Share"
          >
            <FiShare2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
