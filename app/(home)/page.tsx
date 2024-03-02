import React from "react";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
const page = () => {
  return (
    <div className="py-10 ">
      <div className="dark:bg-black bg-black  dark:bg-grid-white/[0.05] bg-grid-white/[0.03] relative">
        <div className="max-w-[1280px] mx-auto p-5">
          <HeroSection />
        </div>
        <div className="h-20 xl-h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl-bottom-0 w-full"></div>
        <div className="max-w-[1280px] mx-auto p-5 text-white mt-20">
          <Skills />
          <Project />
          <Contact />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
