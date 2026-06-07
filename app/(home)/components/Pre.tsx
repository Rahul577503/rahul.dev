"use client";

import React, { useEffect, useRef, useState, Children, isValidElement } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-css";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import { FiCopy, FiCheck } from "react-icons/fi";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractCode(node: any): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractCode).join("");
  if (isValidElement(node)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return extractCode((node.props as any).children);
  }
  return "";
}

export default function Pre({ children }: { children?: React.ReactNode }) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  // The single child is a <code className="language-xxx"> element.
  const codeChild = Children.toArray(children)[0];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const codeClass: string = isValidElement(codeChild)
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (codeChild.props as any).className || ""
    : "";
  const lang = codeClass.replace(/language-/, "").trim() || "code";
  const codeText = extractCode(children);

  useEffect(() => {
    if (preRef.current) {
      Prism.highlightAllUnder(preRef.current);
    }
  }, [children]);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="code-card not-prose group overflow-hidden rounded-xl border border-zinc-800 bg-[#18181b] shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-[#1c1c20] px-4 py-2">
        <span className="font-mono text-xs lowercase tracking-wide text-zinc-500">
          {lang}
        </span>
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200"
        >
          {copied ? (
            <>
              <FiCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <FiCopy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <pre
        ref={preRef}
        className="overflow-x-auto bg-transparent p-4 text-sm leading-relaxed"
        suppressHydrationWarning
      >
        {children}
      </pre>
    </div>
  );
}
