import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 py-10 border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:text-foreground transition-colors">
            Rahul Maurya
          </Link>
          . Built with Next.js.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
