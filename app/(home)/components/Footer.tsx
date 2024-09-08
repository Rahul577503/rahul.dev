import React from "react";
import { SiGithub, SiX, SiLinkedin } from "react-icons/si";
import Link from "next/link";

interface SocialItem {
  url: string;
  label: string;
  icon: React.ComponentType<any>;
}

const madeWithLinks: SocialItem[] = [
  {
    url: "https://github.com/Rahul577503",
    label: "GitHub",
    icon: SiGithub,
  },
  {
    url: "https://twitter.com/RahulMa09588359",
    label: "",
    icon: SiX,
  },
  {
    url: "https://www.linkedin.com/in/rahul-maurya-6abb491b8",
    label: "LinkedIn",
    icon: SiLinkedin,
  },
];

export const Footer = () => {
  return (
    <footer className="text-gray-200 py-8  top-[6rem]">
      <div className="flex flex-col items-center space-y-4">
        <span>
          <Link href={"/"}>Rahul Maurya. 🧑‍💻</Link>
        </span>
        <nav className="flex space-x-6">
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <link.icon className="text-xl" />
              <span className="text-sm">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
