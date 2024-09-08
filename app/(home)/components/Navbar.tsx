"use client";
import React, { useState } from "react";
import Link from "next/link";

const navItems = [
  { title: "Blog", route: "/blog" },
  { title: "Projects", route: "/projects" },
  { title: "About", route: "/about" },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="fixed top-0 z-10 bg-black bg-opacity-50 backdrop-blur-lg min-w-full">
      <nav className="flex flex-col lg:flex-row justify-between items-center max-w-screen-lg mx-auto py-5 px-4 lg:px-5">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl md:text-2xl lg:text-2xl font-bold underline underline-offset-8 decoration-amber-400 -rotate-2 text-white">
            <Link href={"/"}>Rk 🧑‍💻</Link>
          </h1>
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center w-full lg:w-auto`}
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full lg:w-auto">
            {navItems.map((item, index) => (
              <Link
                href={item.route}
                key={index}
                className="text-gray-200 hover:text-white py-2 px-4 lg:px-0 lg:py-0"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
