"use client";

import { useState } from "react";
import { FiTwitter, FiLinkedin, FiCopy, FiCheck } from "react-icons/fi";

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
    } catch {
      /* ignore */
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  return (
    <div className="mt-10 pt-6 border-t border-border flex items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        Found this helpful? Share it.
      </p>
      <div className="flex items-center gap-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        >
          <FiTwitter className="h-4 w-4" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        >
          <FiLinkedin className="h-4 w-4" />
        </a>
        <button
          onClick={handleCopy}
          aria-label="Copy link"
          className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        >
          {copied ? (
            <FiCheck className="h-4 w-4 text-emerald-500" />
          ) : (
            <FiCopy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
