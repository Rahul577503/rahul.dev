/* eslint-disable react/jsx-key */
import React from "react";
import { SiCss3, SiCssmodules, SiHtml5, SiIcon, SiJavascript, SiMdx, SiMui, SiNextdotjs, SiReact, SiTailwindcss} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  tech: JSX.Element[];
  link: string;
  cover: string;
  background: string;
}

const Project: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Flight Reservation Desk",
      tech: [<SiReact />, <SiNextdotjs />, <SiTailwindcss />, <SiIcon />],
      link: "flightsreservationdesk.com/",
      cover: "/flight.svg",
      background: "bg-indigo-400",
    },
    {
      title: "Personal Portfolio",
      tech: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
      link: "",
      cover: "/portfolio.svg",
      background: "bg-amber-400",
    },
    {
      title: "Zoko World",
      tech: [<SiReact />, <SiNextdotjs />, <SiCssmodules/>, <SiIcon />,<SiMui/>],
      link: "zokoworld.vercel.appp",
      cover: "/zworld.svg",
      background: "bg-amber-400",
    },
    {
      title: "NitinEducHub",
      tech: [<SiReact />, <SiNextdotjs />, <SiTailwindcss />, <SiIcon />,<SiMdx/>],
      link: "nitinmaurya.vercel.app",
      cover: "/nitinmaurya.com.svg",
      background: "bg-indigo-400",
    },
  ];

  return (
    <div className="py-10 p-5  sm:p-0 flex  flex-col justify-center items-center">
      <Title
        text="Projects"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-5">
        {projects.map((project, index) => (
          <Link href={project.link} key={project.title}>
            <div className={cn("p-2 rounded-md ", project.background)}>
              <DirectionAwareHover
                imageUrl={project.cover}
                className="w-full space-y-5"
              >
                <div className="space-y-5">
                  <h1 className="text-xl md:text-2xl  font-bold">{project.title}</h1>
                  <div className="flex items-center space-x-2">
                    {project.tech.map((icon, index) => (
                      <span key={index} className="text-2xl">
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
