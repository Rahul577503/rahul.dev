"use client";

import React, { useMemo, useState } from "react";
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

const languageMap: Record<string, string> = {
  js: "javascript",
  javascript: "javascript",
  jsx: "jsx",
  ts: "typescript",
  typescript: "typescript",
  tsx: "tsx",
  html: "markup",
  md: "markdown",
  css: "css",
  bash: "bash",
  sh: "bash",
  shell: "bash",
  json: "json",
  sql: "sql",
  py: "python",
  python: "python",
};

interface CodeProps {
  language?: string;
  code?: string;
  children?: string;
}

const Code: React.FC<CodeProps> = ({ language = "code", code, children }) => {
  const raw = (code ?? children ?? "").toString().trim();
  const [copied, setCopied] = useState(false);

  const lang = languageMap[language.toLowerCase()] || "markup";

  const highlighted = useMemo(() => {
    if (!Prism.languages[lang]) return raw;
    return Prism.highlight(raw, Prism.languages[lang], lang);
  }, [raw, lang]);

  const handleCopy = () => {
    navigator.clipboard.writeText(raw).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="code-card not-prose group my-6 overflow-hidden rounded-xl border border-zinc-800 bg-[#18181b] shadow-sm">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-[#1c1c20] px-4 py-2">
        <span className="font-mono text-xs lowercase tracking-wide text-zinc-500">
          {language}
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
      <pre className="overflow-x-auto !bg-transparent p-4 !text-sm leading-relaxed">
        <code
          className={`language-${lang}`}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
    </div>
  );
};

export default Code;
