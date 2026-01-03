"use client";

import React, { useState, useCallback, useMemo } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/themes/prism-okaidia.css";
import DOMPurify from "isomorphic-dompurify";
import { FaCopy, FaCheck, FaSearchPlus, FaSearchMinus } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  lineNumbers?: boolean;
  highlightLines?: number[];
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "markup",
  filename,
  lineNumbers = true,
  highlightLines = [],
}) => {
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState(14);

  const highlightedCode = useMemo(() => {
    const languageMap: Record<string, string> = {
      js: "javascript",
      jsx: "jsx",
      ts: "typescript",
      tsx: "typescript",
      html: "markup",
      md: "markdown",
      css: "css",
      bash: "bash",
      json: "json",
      java: "java",
      sql: "sql",
      py: "python",
      python: "python",
      c: "c",
      cpp: "cpp",
    };

    const lang = languageMap[(language || "").toLowerCase()] || "markup";
    if (!Prism.languages[lang]) {
      return DOMPurify.sanitize(code);
    }
    return DOMPurify.sanitize(
      Prism.highlight(code.trim(), Prism.languages[lang], lang),
    );
  }, [code, language]);

  const codeLines = useMemo(() => code.trim().split("\n"), [code]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  const handleZoomIn = useCallback(() => {
    setFontSize((prev) => Math.min(prev + 2, 24));
  }, []);

  const handleZoomOut = useCallback(() => {
    setFontSize((prev) => Math.max(prev - 2, 12));
  }, []);

  return (
    <div className="relative my-6 rounded-xl border border-zinc-700/50 bg-[#1e1e1e] overflow-hidden shadow-2xl group">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-zinc-700/50">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1.5 opacity-70 hover:opacity-100 transition-opacity">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {filename && (
            <span className="text-xs text-zinc-400 font-mono tracking-wide">
              {filename}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
            <div className="flex bg-zinc-800/50 rounded-lg p-0.5 border border-zinc-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={handleZoomOut}
                    className="p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 rounded-md transition-colors"
                    aria-label="Zoom out"
                >
                    <FaSearchMinus className="w-3 h-3" />
                </button>
                <button
                    onClick={handleZoomIn}
                    className="p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 rounded-md transition-colors"
                    aria-label="Zoom in"
                >
                    <FaSearchPlus className="w-3 h-3" />
                </button>
            </div>
            
            <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 rounded-lg border border-zinc-700/50 transition-all text-xs font-medium"
            aria-label="Copy code"
            >
            {copied ? (
                <>
                <FaCheck className="w-3 h-3 text-green-400" />
                <span className="text-green-400">Copied</span>
                </>
            ) : (
                <>
                <FaCopy className="w-3 h-3" />
                <span>Copy</span>
                </>
            )}
            </button>
        </div>
      </div>

      {/* Code Body */}
      <div className="relative overflow-x-auto bg-[#1e1e1e]">
        <pre
          className={cn(
            "p-4 font-ibm-plex-mono text-sm leading-relaxed scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-600",
          )}
          style={{ 
            fontSize: `${fontSize}px`,
            paddingLeft: lineNumbers ? '4rem' : '1rem' 
          }}
        >
          {lineNumbers && (
            <div 
                className="absolute left-0 top-0 bottom-0 w-12 bg-[#1e1e1e] border-r border-zinc-800/50 text-zinc-600 select-none flex flex-col items-end py-4 pr-3 gap-[1px] z-10"
                style={{ fontSize: `${fontSize}px` }}
            >
              {codeLines.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "text-xs leading-relaxed h-[1.5em] flex items-center justify-end w-full",
                    highlightLines.includes(i + 1) && "text-yellow-500 font-bold"
                  )}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          )}
          <code
            className={cn("block font-normal", `language-${language}`)}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
