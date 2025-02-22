"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // For animations
import { FaBars, FaTimes } from "react-icons/fa"; // Updated icons for better visuals

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

  // Animation variants for the mobile menu
  const menuVariants = {
    closed: {
      x: "-100%", // Slide in from the left
      rotateY: -90, // Unique flip/rotate effect on close
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0, // Slide to original position
      rotateY: 0, // Return to normal
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Animation for nav items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Staggered animation for each item
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <header className="fixed top-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg min-w-full shadow-md">
      <nav className="flex flex-col lg:flex-row justify-between items-center max-w-screen-lg mx-auto py-4 px-4 lg:px-6 transition-all duration-300">
        <div className="flex justify-between items-center w-full">
          <motion.h1
            className="text-xl md:text-2xl lg:text-2xl font-bold underline underline-offset-8 decoration-amber-400 -rotate-2 text-white hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05, rotate: -5 }}
          >
            <Link href="/" aria-label="Home">
              Rahul 🧑‍💻
            </Link>
          </motion.h1>
          <button
            className="lg:hidden p-2 text-white focus:outline-none hover:text-amber-400 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-black bg-opacity-95 lg:hidden flex flex-col items-center justify-center w-full h-screen"
            >
              <div className="flex flex-col items-center gap-6 w-full max-w-xs">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.route}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.route}
                      className="text-gray-200 text-xl font-medium hover:text-white py-3 px-4 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition-all duration-300"
                      onClick={() => setMenuOpen(false)}
                      aria-label={item.title}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <button
                className="absolute top-4 right-4 p-2 text-white hover:text-amber-400 transition-colors"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Desktop menu */}
        <div className="hidden lg:flex lg:items-center gap-6 w-auto">
          {navItems.map((item, index) => (
            <motion.div
              key={item.route}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.route}
                className="text-gray-200 hover:text-white px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                aria-label={item.title}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
