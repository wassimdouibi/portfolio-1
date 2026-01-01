import React, { useState } from "react";

import { workExperience } from "@/data";

const Experience = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="py-20 w-full px-5" id="experience">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
          <div className="border-4 border-black dark:border-white overflow-hidden mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
          <div className="relative bg-gradient-to-r from-[#00D9FF] via-[#0099CC] to-[#00B8E6] dark:from-cyan-900/40 dark:via-cyan-900/30 dark:to-cyan-900/40 p-8 md:p-12 overflow-hidden diagonal-pattern">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-6 w-24 h-24 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/10 blur-3xl" />
            </div>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black dark:text-white relative z-10">
              My{" "}
                <span className="bg-gradient-to-r from-[#FFB700] via-[#FF8C00] to-[#FF006E] bg-clip-text text-transparent">
                expertise
              </span>
            </h1>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workExperience.map((card, index) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`
                border-4 border-black dark:border-white 
                bg-white dark:bg-black-100 rounded-2xl 
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] 
                hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] 
                dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] 
                transition-all duration-300 overflow-hidden group cursor-pointer
                flex flex-col h-full
                hover:-translate-y-2
              `}
            >
              {/* Colored Header Bar */}
              <div
                className={`h-24 md:h-32 lg:h-40 bg-gradient-to-br overflow-hidden relative
                ${index % 4 === 0 ? "from-[#FF006E] to-[#FF1493]" : ""}
                ${index % 4 === 1 ? "from-[#00D9FF] to-[#0099CC]" : ""}
                ${index % 4 === 2 ? "from-[#FFB700] to-[#FF8C00]" : ""}
                ${index % 4 === 3 ? "from-[#00FF88] to-[#00DD66]" : ""}
              `}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-2 right-4 w-16 h-16 rounded-full bg-white/30 blur-xl group-hover:scale-110 transition-transform" />
                  <div className="absolute -bottom-2 left-2 w-12 h-12 rounded-full bg-white/20 blur-lg" />
                </div>

                {/* Icon Container */}
                <div className="relative h-full w-full flex items-center justify-center z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black dark:bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={card.thumbnail}
                      alt={card.title}
                      className="w-10 md:w-12"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-6 lg:p-7 flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-black text-black dark:text-white uppercase tracking-tight mb-3 line-clamp-2">
                  {card.title}
                </h3>

                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed flex-grow line-clamp-3 group-hover:line-clamp-none transition-all">
                  {card.desc}
                </p>

                {/* Bottom accent bar */}
                <div className="mt-4 pt-4 border-t-2 border-black/10 dark:border-white/10 flex items-center">
                  <div
                    className={`h-2 flex-grow rounded-full bg-gradient-to-r
                    ${index % 4 === 0 ? "from-[#FF006E] to-[#FF1493]" : ""}
                    ${index % 4 === 1 ? "from-[#00D9FF] to-[#0099CC]" : ""}
                    ${index % 4 === 2 ? "from-[#FFB700] to-[#FF8C00]" : ""}
                    ${index % 4 === 3 ? "from-[#00FF88] to-[#00DD66]" : ""}
                  `}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
