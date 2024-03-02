"use client";
import React from "react";
import Title from "./Title";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiNextdotjs,
  SiMarkdown,
  SiMui,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiMdx,
} from "react-icons/si";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Skills = () => {
  const skills = [
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "Typescript",
      Icon: SiTypescript,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "NextJs",
      Icon: SiNextdotjs,
    },

    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "MUI",
      Icon: SiMui,
    },
    {
      text: "NodeJs",
      Icon: SiNodedotjs,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "MDX",
      Icon: SiMdx,
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col max-w-5xl mx-auto px-8">
      <Title
        text="Skills"
        className={"flex flex-col justify-center items-center  rotate-6"}
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
