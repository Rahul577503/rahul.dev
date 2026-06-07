"use client";

import React from "react";
import Link from "next/link";

const navItems = [
  { title: "Blog", route: "/blog" },
  { title: "About", route: "/about" },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="max-w-2xl mx-auto px-5 sm:px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-medium text-foreground hover:opacity-60 transition-opacity"
          aria-label="Home"
        >
          Rahul Maurya
        </Link>

        <div className="flex items-center gap-5 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
