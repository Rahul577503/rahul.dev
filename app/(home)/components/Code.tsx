"use client";

import React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-okaidia.css";
import DOMPurify from "isomorphic-dompurify";

interface CodeBlockProps {
  code: string;
  language: string;
}

const highlight = (code: string, language = "markup") => {
  switch (language) {
    case "jsx":
      return Prism.highlight(code, Prism.languages.jsx, language);
    case "md":
    case "html":
    case "markup":
      return Prism.highlight(code, Prism.languages.markup, language);
    case "css":
      return Prism.highlight(code, Prism.languages.css, language);
    case "ts":
    case "typescript":
      return Prism.highlight(code, Prism.languages.typescript, language);
    default:
      return Prism.highlight(
        code,
        Prism.languages[language] || Prism.languages.markup,
        language,
      );
  }
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const highlightedCode = highlight(code, language);

  return (
    <div className="rounded-[22px] border border-gray-100 w-full bg-black ">
      <pre className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-red-300">
        <code
          className="inline-block"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(highlightedCode),
          }}
        ></code>
      </pre>
    </div>
  );
};

export default CodeBlock;
