import React from "react";
import Image from "next/legacy/image";
import Profile from "@/public/me.svg";
import { MovingBorderButton } from "@/components/ui/moving-border";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] py-20 px-5 flex flex-col-reverse lg:flex-row items-center justify-between min-w-full gap-14 lg:gap-0 relative animate-move-up">
      <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
        <h1 className="text-3xl lg:text-7xl md:text-2xl font-bold text-white">
          <span className="inline-block ">Hii There !</span>{" "}
          <span className="inline-block wave  lg:text-6xl text-2xl ">👋</span>
          <br />
          <span className="underline text-3xl lg:text-5xl underline-offset-8 decoration-amber-400">
            {"I'm Rahul"}
          </span>
        </h1>

        <p className="text-lg text-gray-300">
          {"I'm"} Rahul, a versatile full-stack developer, weaving digital
          wonders from both frontend and backend realms. Embracing innovation, I
          craft captivating online experiences with precision and passion.
        </p>
        <div className="flex  lg:flex-row items-center justify-center lg:justify-start gap-5 ">
          <Button />
          <MovingBorderButton
            borderRadius="0.5rem"
            className="p-[11px] md:p-2 lg:p-3 font-semibold"
          >
            Download Resume
          </MovingBorderButton>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 relative">
        <div className="w-48 h-48 lg:w-72 lg:h-72 space-y-3 relative">
          <div className="glow-indigo absolute top-1/2 left-1/2 transform z-0 glow"></div>

          <Image
            src={Profile}
            alt="my-image"
            height={500}
            width={500}
            priority
            className="rounded-2xl relative backdrop-blur-3xl transition-opacity duration-300 hover:opacity-80"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
