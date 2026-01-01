import React from "react";

const skillGroups = [
  {
    title: "Mobile & Backend",
    items: ["Kotlin", "Jetpack Compose", "Hilt", "Postman", "SpringBoot"],
    gradient: "from-purple-400 to-pink-400",
  },
  {
    title: "Backend & Systems",
    items: [
      "Django",
      "DRF",
      "Djoser",
      "Open Api",
      "Python",
      "Odoo",
      "C",
      "Java",
      "JavaScript",
    ],
    gradient: "from-orange-400 to-yellow-400",
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    gradient: "from-emerald-400 to-teal-400",
  },
  {
    title: "Design & Collaboration",
    items: ["Figma", "GitHub", "GitLab", "Docker"],
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    title: "Frontend & Web",
    items: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    gradient: "from-indigo-400 to-violet-400",
  },
];

const Experience = () => {
  return (
    <div className="py-20 w-full px-5" id="experience">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="border-4 border-black dark:border-white overflow-hidden mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative">
          {/* Static shapes in header */}
          {/* Static Decorative Shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Circles */}
            <div className="absolute top-10 left-8 w-20 h-20 rounded-full border-4 border-purple-300/40" />
            <div className="absolute bottom-40 left-16 w-24 h-24 rounded-full border-4 border-pink-300/30" />
            <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-orange-300/15" />
            <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full border-2 border-green-300/40" />
            <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-cyan-300/10" />

            {/* Squares */}
            <div className="absolute top-24 left-1/3 w-16 h-16 border-4 border-yellow-400/30 rotate-12" />
            <div className="absolute bottom-32 right-1/4 w-20 h-20 bg-red-300/20 rotate-45" />

            {/* Triangles */}
            <div className="absolute top-1/2 right-1/4 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[28px] border-b-blue-400/30 rotate-45" />

            {/* Rectangles */}

            {/* Stars */}
            <div className="absolute top-1/3 left-12 text-3xl text-yellow-400/30">
              ★
            </div>

            {/* Code symbols */}
            <div className="absolute bottom-48 left-32 text-5xl font-bold text-orange-400/15">
              {"{ }"}
            </div>

            {/* Dots */}
            <div className="absolute top-12 right-1/3 w-3 h-3 bg-red-400/40 rounded-full" />

            {/* Plus signs */}
            <div className="absolute top-2/3 right-1/4 text-5xl font-bold text-purple-400/20">
              +
            </div>
            <div className="absolute bottom-1/3 left-24 text-3xl font-bold text-blue-400/25">
              ×
            </div>

            {/* Dashes/Lines */}
            <div className="absolute top-52 left-1/3 w-16 h-1 bg-pink-400/30 rotate-45" />
            <div className="absolute top-1/2 right-12 w-12 h-1 bg-yellow-400/35 rotate-90" />

            {/* Semicircles */}
            <div className="absolute top-36 right-1/2 w-16 h-8 border-4 border-indigo-400/30 rounded-t-full" />
            <div className="absolute bottom-36 left-1/2 w-20 h-10 border-3 border-pink-400/30 rounded-b-full" />

            {/* Diamonds */}
            <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-cyan-400/20 rotate-45" />
            <div className="absolute bottom-1/2 right-1/2 w-16 h-16 border-3 border-orange-400/30 rotate-45" />

            {/* Wavy lines using borders */}
            <div className="absolute top-44 left-1/4 w-24 h-1 bg-gradient-to-r from-purple-400/0 via-purple-400/40 to-purple-400/0" />
            <div className="absolute bottom-44 right-1/4 w-28 h-1 bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-blue-400/0" />
          </div>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rotate-45" />
            <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border-2 border-white/20" />
            <div className="absolute top-1/2 right-8 text-2xl text-white/20">
              ★
            </div>
            <div className="absolute bottom-6 left-1/3 w-6 h-6 bg-white/15 rounded-full" />
          </div>

          <div className="relative bg-gradient-to-r from-[#00D9FF] via-[#0099CC] to-[#00B8E6] dark:from-cyan-900/40 dark:via-cyan-900/30 dark:to-cyan-900/40 p-8 md:p-12 overflow-hidden diagonal-pattern">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute bottom-0 left-1/3 w-28 h-28 rounded-full bg-white/15 blur-3xl" />
            </div>

            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black dark:text-white relative z-10">
              My{" "}
              <span className="bg-gradient-to-r from-[#FFB700] via-[#FF8C00] to-[#FF006E] bg-clip-text text-transparent">
                expertise
              </span>
            </h1>
          </div>
        </div>

        {/* Skills Map */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Short intro + center map visual */}
            <div className="flex flex-col items-start justify-center p-6 bg-white rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-lg font-black uppercase mb-2">
                Soft Skills & Core Competencies
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Beyond technical prowess, I bring a suite of soft skills that
                enhance collaboration, problem-solving, and project success.
              </p>

              <div className="w-full flex flex-wrap gap-3 mt-2">
                <span className="px-3 py-1.5 bg-gray-100 text-sm font-semibold rounded-full shadow-sm border border-gray-100">
                  Analytical Thinking
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-sm font-semibold rounded-full shadow-sm border border-gray-100">
                  Data Storytelling
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-sm font-semibold rounded-full shadow-sm border border-gray-100">
                  Problem Solving
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-sm font-semibold rounded-full shadow-sm border border-gray-100">
                  Attention to Detail
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-sm font-semibold rounded-full shadow-sm border border-gray-100">
                  Cross-functional Collaboration
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-sm font-semibold rounded-full shadow-sm border border-gray-100">
                  Time Management
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-sm font-semibold rounded-full shadow-sm border border-gray-100">
                  Adaptability
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-sm font-semibold rounded-full shadow-sm border border-gray-100">
                  User Empathy
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-sm font-semibold rounded-full shadow-sm border border-gray-100">
                  System Thinking
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-sm font-semibold rounded-full shadow-sm border border-gray-100">
                  Mentoring
                </span>
              </div>
            </div>

            {/* Right: Skill groups */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillGroups.map((g, idx) => (
                <div
                  key={g.title}
                  className="group relative overflow-hidden rounded-2xl border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                >
                  <div
                    className={`h-3 w-full rounded-t-md mb-4 bg-gradient-to-r ${g.gradient}`}
                  />
                  <h3 className="text-sm font-black mb-2">{g.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 bg-gray-100 rounded-full font-semibold border border-gray-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
