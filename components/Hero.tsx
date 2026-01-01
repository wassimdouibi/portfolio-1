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
      <div className="h-screen w-full absolute top-0 left-0 flex items-center justify-center pointer-events-none modern-pattern" />

      <div className="flex justify-center relative my-20 z-10 overflow-visible">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center relative">
          {/* Decorative blobs */}
          <div className="shape-blob a large absolute -left-48 -top-32" />
          <div className="shape-blob b medium absolute -right-32 -bottom-32" />
          <div className="shape-blob c small absolute left-1/2 -top-16 transform -translate-x-1/2" />
          <div className="accent-corner absolute -top-12 right-6 hidden md:block" />

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 dark:bg-emerald-900/30 dark:border-emerald-700 dark:text-emerald-300 text-xs font-bold mb-4 animate-fade-in uppercase tracking-wider shadow-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>

          <TextGenerateEffect
            words="Engineering Data into Strategic Business Solutions"
            className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold tracking-tight"
          />

          <p className="text-center md:tracking-wider mb-8 mt-4 text-sm md:text-lg lg:text-xl text-black-100 dark:text-white-100 max-w-2xl">
            I&apos;m{" "}
            <span className="text-purple font-semibold">Wassim Douibi</span>, an
            Information Systems Engineer specializing in{" "}
            <span className="text-blue-600 dark:text-blue-300">
              Business Intelligence
            </span>
            , Mobile, and Backend development.
          </p>

          <a href="#projects">
            <MagicButton
              title="Explore My Projects"
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
