import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
       
      <div
        className="h-screen w-full bg-background dark:bg-background dark:bg-grid-white/[0.03] bg-grid-background/[0.2]
          absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background dark:bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          My Web Portfolio 
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Solving Problems in a Creative Way"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg">
            Hi! I&apos;m Carla Tasinazzo, a Full-stack Developer passionate about learning new technologies and building impactful solutions.
          </p>
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg">
            I hold a Higher Diploma in Computer Science with a specialization in software development from the National College of Ireland, and I have further honed my skills through The Odin Project bootcamp.
          </p>
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg">
            Previously, I worked as a project manager in the civil engineering industry and hold a postgraduate diploma in project management. This experience strengthens my abilities in leadership, teamwork, and effective project delivery.
          </p>
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg">
            I am eager to advance my career in software development and am available to start immediately.
          </p>
          

          <a href="#about">
            <MagicButton
              title="More about me"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
