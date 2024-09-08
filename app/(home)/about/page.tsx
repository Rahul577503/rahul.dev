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
        Hey there! I’m Rahul, a passionate full-stack developer dedicated to
        crafting exceptional digital experiences. With a knack for both frontend
        and backend development, I specialize in designing sleek, intuitive
        interfaces and building robust, scalable systems.
        <br />
        <br />
        Since I first dipped my toes into coding, I’ve been driven by a desire
        to push the boundaries of what’s possible and solve complex problems
        with innovative solutions. Whether {"it's"} creating engaging user
        experiences or optimizing server-side performance, I’m always up for a
        new challenge.
        <br />
        <br />
        This space is where I share my journey, including my latest projects,
        tutorials, and insights into the tech world. Here, {"you'll"} find
        everything from personal reflections to detailed technical articles and
        showcases of my open-source contributions.
        <br />
        <br />
        My site is a no-frills zone—no ads, affiliate links, tracking, or
        paywalls. It’s a platform for self-expression and knowledge-sharing,
        with the hope of inspiring others to create their own corner of the web.
        Join me as I navigate the ever-evolving landscape of technology and
        creativity.
        <br />
        <br />
        For updates on new content and to connect with me directly, feel free to
        reach out at{" "}
        <a
          href="mailto:rahulmaurya109626@gmail.com"
          className="text-yellow-400 hover:underline"
        >
          Mail
        </a>
        . I’m always excited to collaborate, answer questions, or discuss new
        ideas. Let’s bring your innovative visions to life together!
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
        <strong>Updated September 8th, 2024</strong>
      </p>
      <p className="text-lg text-gray-100">
        Currently working as a Software Developer Intern at
        <a
          href="https://storemygoods.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:underline"
        >
          Store My Goods
        </a>
        , where I’m helping build efficient solutions for logistics and storage
        management.
      </p>
      <ul className="list-disc pl-5 text-lg text-gray-100 mt-3">
        <li>
          Experimenting with cutting-edge technologies to streamline operations.
        </li>
        <li>
          Trying to build a better fitness routine (and succeeding...
          sometimes!).
        </li>
        <li>
          Constantly tweaking and optimizing this website for performance and
          style.
        </li>
        <li>
          Finding creative ways to build my dream projects in my spare time.
        </li>
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
