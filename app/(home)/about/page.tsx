"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiLinux,
  SiObsidian,
  SiGnubash,
  SiZedindustries,
  SiGithub,
  SiX,
  SiLinkedin,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaServer,
  FaDatabase,
  FaCode,
  FaLaptopCode,
  FaRegEnvelope,
} from "react-icons/fa";

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-zinc-600 dark:text-zinc-200 selection:bg-amber-500/30 transition-colors">
      <div className="max-w-5xl mx-auto px-6 py-20 lg:py-28 space-y-24">
        {/* Header & Intro */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500 w-fit">
            About Me
          </h1>
          <div className="prose prose-invert prose-lg max-w-none text-zinc-400">
            <p>
              Hey there! I’m{" "}
              <span className="text-white font-medium">Rahul</span>, a
              passionate Software Engineer dedicated to crafting exceptional
              digital solutions. My journey is fueled by a curiosity to push
              boundaries—whether it’s designing intuitive interfaces,
              architecting robust backend systems, or optimizing workflows for
              scale. Currently, I&apos;m driving technical innovation at{" "}
              <a
                href="https://storemygoods.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors no-underline border-b border-amber-400/30 hover:border-amber-400"
              >
                Store My Goods
              </a>
              .
            </p>
          </div>
        </motion.section>

        {/* Experience / Timeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FaLaptopCode className="text-amber-400" /> Experience
          </h2>
          <div className="border-l-2 border-zinc-800 pl-8 space-y-12 ml-3">
            <div className="relative group">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-black bg-amber-400 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
              <div className="space-y-3 pl-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <h3 className="text-2xl font-bold text-white leading-none group-hover:text-amber-400 transition-colors">
                    SDE - 1
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-black bg-amber-400 rounded-full w-fit">
                    Current
                  </span>
                </div>
                <div className="text-sm text-zinc-400 font-mono flex items-center gap-2">
                  <span className="text-white font-semibold">
                    Store My Goods
                  </span>
                  <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                  <span>Sep 2024 - Present</span>
                </div>
                <p className="text-zinc-300 max-w-3xl leading-relaxed">
                  Leading the full-stack engineering efforts for{" "}
                  <a
                    href="https://storemygoods.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline"
                  >
                    storemygoods.com
                  </a>
                  . Spearheaded the <strong>complete revamp</strong> of the
                  platform, architecting a scalable backend, designing
                  high-performance databases, and crafting responsive frontend
                  interfaces. Responsible for the entire system design and
                  business flow implementation, transforming complex logistics
                  requirements into seamless digital experiences.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "System Design",
                    "Full Stack Architecture",
                    "Database Optimization",
                    "Business Logic",
                    "Team Leadership",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-zinc-800/50 border border-zinc-700 rounded-full text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Associate Role */}
            <div className="relative group">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-black bg-zinc-600 group-hover:bg-amber-400 group-hover:scale-125 transition-all duration-300" />
              <div className="space-y-3 pl-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <h3 className="text-xl font-bold text-white leading-none group-hover:text-amber-400 transition-colors">
                    Associate Software Engineer
                  </h3>
                </div>
                <div className="text-sm text-zinc-400 font-mono flex items-center gap-2">
                  <span className="text-white font-semibold">
                    Store My Goods
                  </span>
                  <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                  <span>Sep 2024 - Dec 2024</span>
                </div>
                <p className="text-zinc-400 max-w-3xl leading-relaxed">
                  Managed and optimized critical database structures and backend
                  services. Collaborated with cross-functional teams to
                  streamline logistics operations and improve system
                  reliability.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FaCode className="text-amber-400" /> Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <TechCard icon={SiReact} name="React" />
            <TechCard icon={SiNextdotjs} name="Next.js" />
            <TechCard icon={SiTypescript} name="TypeScript" />
            <TechCard icon={SiTailwindcss} name="Tailwind" />
            <TechCard icon={SiNodedotjs} name="Node.js" />
            <TechCard icon={SiPostgresql} name="PostgreSQL" />
            <TechCard icon={SiMongodb} name="MongoDB" />
            <TechCard icon={SiDocker} name="Docker" />
            <TechCard icon={SiGit} name="Git" />
            <TechCard icon={SiLinux} name="Linux" />
            <TechCard icon={SiGraphql} name="GraphQL" />
            <TechCard icon={FaServer} name="System Design" />
          </div>
        </motion.section>

        {/* Interests & Hardware Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaDatabase className="text-amber-400" /> Essential Tools
            </h2>
            <ul className="space-y-4">
              <ToolItem icon={VscVscode} label="Editor" value="VS Code / Zed" />
              <ToolItem
                icon={SiGnubash}
                label="Terminal"
                value="Hyper + Oh My Zsh"
              />
              <ToolItem icon={SiObsidian} label="Notetaking" value="Obsidian" />
              <ToolItem
                icon={FaLaptopCode}
                label="Workstation"
                value="Dell Latitude (Ubuntu)"
              />
            </ul>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaRegEnvelope className="text-amber-400" /> Connect
            </h2>
            <div className="flex flex-wrap gap-4">
              <SocialLink
                href="mailto:rahulmaurya109626@gmail.com"
                icon={FaRegEnvelope}
                label="Email"
              />
              <SocialLink
                href="https://github.com/Rahul577503"
                icon={SiGithub}
                label="GitHub"
              />
              <SocialLink
                href="https://twitter.com/RahulMa09588359"
                icon={SiX}
                label="Twitter"
              />
              <SocialLink
                href="https://www.linkedin.com/in/rahul-maurya-6abb491b8"
                icon={SiLinkedin}
                label="LinkedIn"
              />
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

// Sub-components for cleaner code
function TechCard({
  icon: Icon,
  name,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  name: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col items-center justify-center p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-amber-400/50 hover:bg-zinc-800/80 transition-all group"
    >
      <Icon className="text-3xl text-zinc-400 group-hover:text-amber-400 mb-2 transition-colors" />
      <span className="text-sm font-medium text-zinc-300">{name}</span>
    </motion.div>
  );
}

function ToolItem({
  icon: Icon,
  label,
  value,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-center justify-between p-3 bg-zinc-900/30 rounded border border-zinc-800/50">
      <div className="flex items-center gap-3">
        <Icon className="text-zinc-500" />
        <span className="text-zinc-400">{label}</span>
      </div>
      <span className="text-zinc-200 font-medium text-sm">{value}</span>
    </li>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full hover:border-amber-400 hover:text-amber-400 transition-all"
    >
      <Icon />
      <span>{label}</span>
    </a>
  );
}
