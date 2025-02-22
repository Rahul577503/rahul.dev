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
      <p className="text-lg text-gray-100 leading-relaxed">
        Hey there! I’m Rahul, a passionate Software Engineer dedicated to
        crafting exceptional digital solutions. With expertise spanning frontend
        and backend development, databases, and business logic, I specialize in
        designing intuitive interfaces, building robust systems, and optimizing
        business workflows for scalability and performance.
        <br />
        <br />
        Since starting my journey in coding, I’ve been driven by a curiosity to
        push boundaries and solve complex problems with innovative solutions.
        Whether it’s creating engaging user experiences, managing databases, or
        streamlining business processes, I thrive on challenges that drive
        impactful results.
        <br />
        <br />
        This space is where I share my journey, including my latest projects,
        tutorials, and insights into the tech world. Here, you’ll find
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
          className="text-yellow-400 hover:underline transition-colors duration-200"
        >
          rahulmaurya109626@gmail.com
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-200">
          <div className="flex items-center space-x-4">
            <FaRegEnvelope className="text-2xl text-yellow-400" />
            <a
              href="mailto:rahulmaurya109626@gmail.com"
              className="text-lg text-gray-100 hover:text-yellow-300 transition-colors duration-200"
            >
              rahulmaurya109626@gmail.com
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-200">
          <div className="flex items-center space-x-4">
            <SiGithub className="text-2xl text-yellow-400" />
            <a
              href="https://github.com/Rahul577503"
              className="text-lg text-gray-100 hover:text-yellow-300 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Twitter */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-200">
          <div className="flex items-center space-x-4">
            <SiTwitter className="text-2xl text-yellow-400" />
            <a
              href="https://twitter.com/RahulMa09588359"
              className="text-lg text-gray-100 hover:text-yellow-300 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-200">
          <div className="flex items-center space-x-4">
            <SiLinkedin className="text-2xl text-yellow-400" />
            <a
              href="https://www.linkedin.com/in/rahul-maurya-6abb491b8"
              className="text-lg text-gray-100 hover:text-yellow-300 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  ),
};

const currentActivitiesContent: Section = {
  title: "What I'm Doing Now",
  content: (
    <>
      <p className="text-lg text-gray-100 font-semibold mb-2">
        Updated September 8th, 2024
      </p>
      <p className="text-lg text-gray-100 mb-4">
        Currently thriving as an Associate Software Engineer at{" "}
        <a
          href="https://storemygoods.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:underline transition-colors duration-200"
        >
          Store My Goods
        </a>
        , where I’m driving impactful solutions in logistics and storage
        management. Since my promotion on September 1, 2024, I’ve been managing
        frontend and backend development, optimizing databases, and designing
        business flows and logic to enhance operational efficiency.
      </p>
      <ul className="list-disc pl-5 text-lg text-gray-100 space-y-2">
        <li>
          Leveraging cutting-edge technologies to streamline operations and
          improve system performance.
        </li>
        <li>
          Balancing professional growth with personal fitness goals—progressing
          steadily (most of the time!).
        </li>
        <li>
          Continuously refining this website for better performance, usability,
          and aesthetics.
        </li>
        <li>
          Exploring innovative side projects to fuel my creativity and technical
          skills in my spare time.
        </li>
      </ul>
    </>
  ),
};

const hardWare: Section = {
  title: "Hardware",
  content: (
    <>
      <ul className="list-disc pl-5 text-lg text-gray-100 space-y-2">
        <li>Coding PC: Dell Latitude 8GB RAM</li>
        <li>OS: Linux (Ubuntu v23.10)</li>
      </ul>
    </>
  ),
};

const toolsContent: Section = {
  title: "Tools",
  content: (
    <>
      <h3 className="text-2xl font-semibold text-gray-100 mb-4">Software</h3>
      <p className="text-lg text-gray-100 mb-4">
        This website is hosted on Vercel and built using the Next.js framework.
      </p>
      <div className="flex items-center space-x-4 mb-3">
        <SiZedindustries className="text-2xl text-gray-600" />
        <p className="text-lg text-gray-100">
          Coding: Zed Code Editor with XCode High Contrast Dark
        </p>
      </div>
      <div className="flex items-center space-x-4 mb-3">
        <BsFillTerminalFill className="text-2xl text-gray-600" />
        <p className="text-lg text-gray-100">
          Terminal:{" "}
          <a
            href="https://hyper.is/"
            className="text-yellow-400 hover:underline transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hyper
          </a>{" "}
          with{" "}
          <a
            href="https://ohmyz.sh/"
            className="text-yellow-400 hover:underline transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oh My Zsh
          </a>
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <MdOutlineArticle className="text-2xl text-gray-600" />
        <p className="text-lg text-gray-100">
          Notes:{" "}
          <a
            href="https://obsidian.md/"
            className="text-yellow-400 hover:underline transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Obsidian
          </a>
        </p>
      </div>
    </>
  ),
};

const sections: Section[] = [
  aboutMeContent,
  currentActivitiesContent,
  toolsContent,
  hardWare,
  contactContent,
];

const AboutPage: React.FC = () => {
  return (
    <div className="">
      {sections.map((section, index) => (
        <section
          key={index}
          className="py-8 border-b border-gray-800 last:border-b-0"
        >
          <h1 className="text-3xl text-yellow-500 font-bold mb-6 tracking-wide">
            {section.title}
          </h1>
          {section.content}
        </section>
      ))}
    </div>
  );
};

export default AboutPage;
