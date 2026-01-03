"use client";

import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-javascript";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Pre({ children, ...props }: any) {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (preRef.current) {
      Prism.highlightAllUnder(preRef.current);
    }
  }, [children]);

  return (
    <pre ref={preRef} {...props}>
      {children}
    </pre>
  );
}
