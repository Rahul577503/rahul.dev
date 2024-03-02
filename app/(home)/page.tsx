import React from "react";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

const Page = () => {
  return (
    <div className="py-5">
      <div className="dark:bg-black bg-black dark:bg-grid-white/[0.05] bg-grid-white/[0.03] relative">
        <HeroSection />
        <div className="h-20 xl:h-32 bg-gradient-to-t from-black absolute  min-w-full"></div>
        <div className="mx-auto p-5 text-white mt-20">
          <Skills />
          <Project />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Page;
