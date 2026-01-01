"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20 px-5" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
          <div className="border-4 border-black dark:border-white overflow-hidden mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
          <div className="relative bg-gradient-to-r from-[#00D9FF] via-[#0099CC] to-[#00B8E6] dark:from-cyan-900/40 dark:via-cyan-900/30 dark:to-cyan-900/40 p-8 md:p-12 overflow-hidden diagonal-pattern">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute bottom-0 left-1/3 w-28 h-28 rounded-full bg-white/15 blur-3xl" />
            </div>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black dark:text-white relative z-10">
              Featured{" "}
                  <span className="bg-gradient-to-r from-[#FFB700] via-[#FF8C00] to-[#FF006E] bg-clip-text text-transparent">
                projects
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title="View on GitHub" href={item.link}>
              <div className="border-4 border-black dark:border-white bg-white dark:bg-black-200 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] p-6 min-h-fit">
                <div className="project-ribbon">Featured</div>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-6 group">
                  <div className="relative w-full h-full overflow-hidden rounded-xl bg-gray-100 border-2 border-gray-200 dark:bg-black/10 dark:border-white/10">
                    <img src="/bg.png" alt="bgimg" className="opacity-100" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-black lg:text-2xl md:text-xl text-base line-clamp-1 text-black dark:text-white uppercase">
                  {item.title}
                </h1>

                <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-2 text-gray-600 dark:text-gray-300 mt-3">
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-6 pt-4 border-t-2 border-black/10 dark:border-white/10">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border-2 border-black dark:border-white rounded-full bg-white dark:bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="tech-icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center gap-2 px-3 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg border border-purple-300 dark:border-purple-700">
                    <p className="text-sm md:text-base text-purple font-bold">
                      View
                    </p>
                    <FaLocationArrow className="text-purple text-sm" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
