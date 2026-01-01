"use client";

import { professionalJourney } from "@/data";

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
              Professional{" "}
              <span className="bg-gradient-to-r from-[#FFB700] via-[#FF8C00] to-[#FF006E] bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
          </div>
        </div>

        {/* Timeline Journey Map */}
        <div className="relative mt-16">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-pink-400 to-orange-400 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-20">
            {professionalJourney.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`flex items-center gap-6 md:gap-12 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-black bg-gradient-to-br ${item.gradient} relative z-10 shadow-[0_0_0_4px_white,0_0_0_8px_black]`}
                    />
                  </div>

                  {/* Card Content - 50% width on md and up */}
                  <div className={`w-full md:w-5/12 md:px-6`}>
                    <div className="group relative overflow-hidden rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 bg-white h-full">
                      {/* Gradient Background - Hidden by default, visible on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      {/* Content Container (smaller padding for compact cards) */}
                      <div className="relative z-10 p-4 md:p-6 h-full flex flex-col group-hover:text-white transition-colors duration-300">
                        {/* Type Badge */}
                        <div className="inline-flex items-center gap-2 mb-3 w-fit">
                          <span
                            className={`text-xs font-bold uppercase px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white`}
                          >
                            {item.type}
                          </span>
                        </div>

                        {/* Organization & Role */}
                        <h3 className="text-xl md:text-2xl font-black text-black group-hover:text-white transition-colors duration-300 mb-1">
                          {item.organization}
                        </h3>
                        <p className="text-sm font-bold text-gray-700 group-hover:text-white/90 transition-colors duration-300 mb-3">
                          {item.role}
                        </p>

                        {/* Date & Location - use full width spacing */}
                        <div className="flex justify-between items-center w-full text-xs font-semibold text-gray-600 group-hover:text-white/80 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-white/20">
                          <span className="flex-1 text-left">{item.date}</span>
                          <span className="mx-2 opacity-60"> </span>
                          <span className="flex-1 text-right">
                            {item.location}
                          </span>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2.5 py-1 bg-gray-100 text-gray-800 rounded-full font-semibold group-hover:bg-white/20 group-hover:text-white transition-all duration-300 border border-gray-200 group-hover:border-white/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
