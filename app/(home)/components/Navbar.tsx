import React from "react";
import Link from "next/link";

const navItems = [
  { title: "Blog", route: "/blog" },
  { title: "Projects", route: "/projects" },
  { title: "About Me", route: "/about" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 z-10 bg-black bg-opacity-50 backdrop-blur-lg animate-move-down min-w-full">
      <nav className="flex justify-between items-center max-w-screen-lg mx-auto py-5 mx-2 lg:px-10">
        <h1 className="text-xl md:text-2xl lg:text-2xl font-bold underline underline-offset-8 decoration-amber-400 -rotate-2 text-white">
          <Link href={"/"}>Rk 🧑‍💻</Link>
        </h1>
        <div className="flex items-center gap-3 lg:gap-6">
          {navItems.map((item, index) => (
            <Link
              href={item.route}
              key={index}
              className="text-gray-200 hover:text-white"
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
