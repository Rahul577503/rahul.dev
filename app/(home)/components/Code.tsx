"use client";

import React, { useState, useCallback, useMemo } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/themes/prism-okaidia.css";
import DOMPurify from "isomorphic-dompurify";
import { FaCopy, FaSearchPlus, FaSearchMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string; // Made optional
  filename?: string;
  lineNumbers?: boolean;
  highlightLines?: number[];
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "markup", // Default value if language is undefined
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
    };

    // Use the language if provided, otherwise fallback to "markup"
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
    setFontSize((prev) => Math.max(prev - 2, 10));
  }, []);

  return (
    <div className="relative my-4 rounded-lg border border-gray-700 bg-[#1e1e1e] overflow-hidden shadow-md">
      {filename && (
        <div className="flex items-center px-4 py-2 bg-[#252526] border-b border-gray-600">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-4 text-sm text-gray-300 truncate font-ibm-plex-mono">
            {filename}
          </span>
        </div>
      )}

      <div className="absolute top-2 right-2 flex gap-2 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleZoomIn}
          className="p-2 bg-gray-800/80 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
          aria-label="Zoom in"
        >
          <FaSearchPlus className="w-4 h-4" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleZoomOut}
          className="p-2 bg-gray-800/80 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
          aria-label="Zoom out"
        >
          <FaSearchMinus className="w-4 h-4" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopy}
          className="p-2 bg-gray-800/80 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
          aria-label="Copy code to clipboard"
        >
          <FaCopy className="w-4 h-4" />
        </motion.button>
      </div>

      <div className="relative overflow-x-auto">
        <pre
          className={cn(
            "p-4 font-ibm-plex-mono",
            lineNumbers && "pl-12",
            "scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700",
          )}
          style={{ fontSize: `${fontSize}px`, lineHeight: "1.5" }}
        >
          {lineNumbers && (
            <div className="absolute left-0 top-0 h-full w-10 bg-[#1e1e1e]/50 text-gray-400 text-right pr-2 py-4 select-none border-r border-gray-600 font-ibm-plex-mono">
              {codeLines.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "leading-[1.5]",
                    highlightLines.includes(i + 1) && "text-yellow-300",
                  )}
                  style={{ height: `${fontSize * 1.5}px` }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          )}
          <code
            className={cn("block language-" + language, lineNumbers && "ml-6")}
            style={{ lineHeight: "1.5" }}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-14 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-yellow-300 text-sm rounded font-ibm-plex-mono"
          >
            Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CodeBlock;
