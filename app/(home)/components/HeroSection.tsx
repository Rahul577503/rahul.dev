import React from "react";
import Image from "next/legacy/image";
import Profile from "@/public/me.svg";
import { MovingBorderButton } from "@/components/ui/moving-border";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="min-h-screen max-w-screen-lg mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-8">
      <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4">
        <h1 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-white">
          <span className="inline-block">Hey!</span>{" "}
          <span className="underline text-xl md:text-xl lg:text-2xl xl:text-3xl underline-offset-8 decoration-amber-400">
            {"I'm Rahul"}
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl xl:text-xl text-gray-300">
          I'm a dynamic full-stack developer passionate about crafting
          captivating digital experiences. With expertise in frontend and
          backend development, I specialize in creating sleek interfaces and
          scalable systems. Fueled by innovation and a love for problem-solving,
          I thrive on pushing the boundaries of what's possible. Let's
          collaborate and bring your vision to life!
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 mt-5">
          <Button />
          <MovingBorderButton
            borderRadius="0.5rem"
            className="p-3 md:p-3 lg:p-4 font-semibold"
          >
            Download Resume
          </MovingBorderButton>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 relative">
        <div className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72 relative">
          <div className="glow-indigo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 glow"></div>
          <Image
            src={Profile}
            alt="my-image"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-2xl relative backdrop-blur-3xl transition-opacity duration-300 hover:opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
