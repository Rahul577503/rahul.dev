"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8  overflow-x-hidden"
    >
      <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6">
        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span>Hey!</span>{" "}
          <span className="underline underline-offset-8 decoration-amber-400">
            I&apos;m Rahul
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-300 max-w-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I&apos;m a dynamic full-stack developer passionate about crafting
          captivating digital experiences with expertise in both frontend and
          backend development.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button aria-label="View projects or contact" />
          <MovingBorderButton
            borderRadius="0.5rem"
            className="p-3 font-semibold hover:bg-gray-900 transition-colors"
            aria-label="Download resume"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Download Resume
            </a>
          </MovingBorderButton>
        </motion.div>
      </div>

      <div className="lg:w-1/2 flex justify-center relative">
        <div className="relative w-64 h-80 md:w-72 md:h-96">
          <motion.div
            className="glow-indigo absolute inset-0 z-0 glow"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <Image
            src="/img/me.jpg"
            alt="Rahul Maurya - Full Stack Developer"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="rounded-2xl object-cover relative hover:opacity-80 transition-opacity"
            onError={(e) => console.error("Image load error:", e)}
          />
        </div>
      </div>
    </motion.div>
  );
}
