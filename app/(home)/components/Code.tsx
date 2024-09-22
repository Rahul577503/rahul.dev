"use client";

import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-okaidia.css";
import DOMPurify from "isomorphic-dompurify";
import { FaCopy } from "react-icons/fa"; // Import the copy icon

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

const highlight = (code: string, language = "markup") => {
  const languageMap: Record<string, string> = {
    jsx: "jsx",
    md: "markup",
    html: "markup",
    markup: "markup",
    css: "css",
    ts: "typescript",
    typescript: "typescript",
  };

  const lang = languageMap[language] || languageMap["markup"];
  return Prism.highlight(code, Prism.languages[lang], lang);
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, filename }) => {
  const [copied, setCopied] = useState(false);
  const highlightedCode = highlight(code, language);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="relative rounded-[22px] border-2 border-[#333] shadow-sm w-full bg-black">
      {filename && (
        <div className="p-2 px-2 text-gray-400 border-b-2 border-[#333]">
          {filename}
        </div>
      )}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 text-white bg-yellow-500 rounded hover:bg-gray-800 transition"
        aria-label="Copy code"
      >
        <FaCopy />
      </button>
      <pre className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-red-300">
        <code
          className="inline-block"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(highlightedCode),
          }}
        ></code>
      </pre>
      {copied && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 p-1 text-yellow-500">
          Copied!
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
