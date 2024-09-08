import React from "react";
import {
  SiGatsby,
  SiGithub,
  SiTwitter,
  SiVisualstudio,
  SiNetlify,
  SiZedindustries,
  SiLinkedin,
  SiGnometerminal,
} from "react-icons/si";
import { BsFillTerminalFill } from "react-icons/bs";

import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";

interface Section {
  title: string;
  content: JSX.Element;
}

const aboutMeContent: Section = {
  title: "About Me",
  content: (
    <>
      <p className="text-lg text-gray-100">
        Hey, I'm Tania. I've been a software engineer since 2014 (previously I
        was a chef), and I've been making websites since 1998. I also have a DDR
        machine in the basement, two cats, and a wonderful partner. I like
        working out, playing video games, and occasionally updating this
        website.
        <br />
        <br />
        Welcome to my spot on the web for writing, projects, tutorials, art, and
        anything else I want to put out there. You can read some of my personal
        thoughts, as well as all the technical articles I've written over the
        years. Take a look at the projects page to see a highlight of my
        open-source work.
        <br />
        <br />
        My site has no ads, no affiliate links, no tracking or analytics, no
        sponsored posts, and no paywall. My motivation for the site is to have a
        space for self-expression and to share what I've learned with the world.
        I hope I will inspire others to make their own creative corner on the
        web in the uphill battle against the enshittification of the internet.
        <br />
        <br />I don't post too often, so feel free to subscribe to the RSS feed
        for updates when I do.
      </p>
    </>
  ),
};

const contactContent: Section = {
  title: "Contact",
  content: (
    <>
      <div className="flex items-center space-x-4">
        <FaRegEnvelope className="text-2xl text-gray-600" />
        <p className="text-lg text-gray-100">
          Email:rahulmaurya109626@gmail.com
        </p>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <SiGithub className="text-2xl text-gray-600" />
        <a
          href="https://Rahul577503.com/"
          className="text-lg text-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <SiTwitter className="text-2xl text-gray-600" />
        <a
          href="https://twitter.com/RahulMa09588359"
          className="text-lg text-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <SiLinkedin className="text-2xl text-gray-600" />
        <a
          href="https://www.linkedin.com/in/rahul-maurya-6abb491b8"
          className="text-lg text-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </>
  ),
};

const currentActivitiesContent: Section = {
  title: "What I'm Doing Now",
  content: (
    <>
      <p className="text-lg text-gray-100">
        <strong>Updated July 10th, 2024</strong>
      </p>
      <ul className="list-disc pl-5 text-lg text-gray-100">
        <li>Working full time</li>
        <li>Building a replica of our home out of Lego</li>
        <li>Trying for the nth time to get into shape</li>
        <li>Tweaking this website</li>
      </ul>
    </>
  ),
};
const hardWare: Section = {
  title: "HardWare",
  content: (
    <>
      <ul className="list-disc pl-5 text-lg text-gray-100">
        <li>Coding PC:Dell Lattitude 8GB RAM</li>
        <li>OS:Linux(Ubuntu v23.10)</li>
      </ul>
    </>
  ),
};
const toolsContent: Section = {
  title: "Tools",
  content: (
    <>
      <h3 className="text-2xl font-semibold mb-2">Software</h3>
      <p className="text-lg text-gray-100 mb-4">
        This website is hosted on Vercel and uses the Next js framework.
      </p>
      <div className="flex items-center space-x-4">
        <SiZedindustries className="text-2xl text-gray-600" />
        <p className="text-lg text-gray-100">
          Coding: Zed Code Editor with XCode High Contrast Dark
        </p>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <BsFillTerminalFill className="text-2xl text-gray-600" />
        <p className="text-lg text-gray-100">
          Terminal:{" "}
          <a
            href="https://hyper.is/"
            className="text-yellow-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hyper
          </a>{" "}
          with{" "}
          <a
            href="https://ohmyz.sh/"
            className="text-yellow-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oh My Zsh
          </a>
        </p>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <MdOutlineArticle className="text-2xl text-gray-600" />
        <p className="text-lg text-gray-100">
          Notes:{" "}
          <a
            href="https://obsidian.md/"
            className="text-yellow-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Obsidian
          </a>{" "}
        </p>
      </div>
    </>
  ),
};

// Combine all sections into an array
const sections: Section[] = [
  aboutMeContent,
  contactContent,
  currentActivitiesContent,
  toolsContent,
  hardWare,
];

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-5">
      {sections.map((section, index) => (
        <section key={index} className="py-10">
          <h1 className="text-4xl text-yellow-500 font-bold mb-5">
            {section.title}
          </h1>
          {section.content}
        </section>
      ))}
    </div>
  );
};

export default AboutPage;
