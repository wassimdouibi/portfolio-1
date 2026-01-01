import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      name: "AttendEase",
      description: "Mobile attendance management system",
      type: "Mobile App",
      gradient: "from-purple-500 to-pink-500",
      technologies: ["Kotlin", "Android", "MVVM"],
      githubUrl: "https://github.com/wassimdouibi/AttendEase",
    },
    {
      name: "Food Delivery App",
      description: "Full-stack food ordering and delivery platform",
      type: "Mobile App",
      gradient: "from-orange-500 to-red-500",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Android"],
      githubUrl: "https://github.com/wassimdouibi/Food_Delivery_App",
    },
    {
      name: "Notes Backend",
      description: "RESTful API for notes management",
      type: "Backend API",
      gradient: "from-green-500 to-teal-500",
      technologies: ["Spring Boot", "Java", "REST API", "MySQL"],
      githubUrl:
        "https://github.com/wassimdouibi/notes_backend_with_springboot",
    },
    {
      name: "WealthFlow",
      description: "Personal finance management application",
      type: "Full Stack",
      gradient: "from-blue-500 to-indigo-500",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/wassimdouibi/WealthFlow",
    },
    {
      name: "Cinema Tickets API",
      description: "Cinema ticket reservation system",
      type: "Backend API",
      gradient: "from-yellow-500 to-orange-500",
      technologies: ["Python", "Django", "REST Framework", "SQLite"],
      githubUrl: "https://github.com/wassimdouibi/CinemaTicketsReservation_API",
    },
    {
      name: "Reports Analyzer",
      description: "Tool for analyzing and generating reports from data",
      type: "Full Stack",
      gradient: "from-pink-500 to-purple-500",
      technologies: ["Next JS", "Python", "Pandas", "Matplotlib", "Jupyter"],
      githubUrl: "https://github.com/wassimdouibi/Reports-Analyzer",
    },
  ];

  return (
    <div className="w-full py-12 px-4 bg-gray-50 relative overflow-hidden">
      {/* Static Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Circles */}
        <div className="absolute top-10 left-8 w-20 h-20 rounded-full border-4 border-purple-300/40" />
        <div className="absolute top-32 right-12 w-16 h-16 rounded-full bg-blue-300/20" />
        <div className="absolute bottom-40 left-16 w-24 h-24 rounded-full border-4 border-pink-300/30" />
        <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-orange-300/15" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full border-2 border-green-300/40" />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-cyan-300/10" />

        {/* Squares */}
        <div className="absolute top-24 left-1/3 w-16 h-16 border-4 border-yellow-400/30 rotate-12" />
        <div className="absolute bottom-32 right-1/4 w-20 h-20 bg-red-300/20 rotate-45" />
        <div className="absolute top-1/4 right-16 w-14 h-14 border-3 border-indigo-400/35 -rotate-12" />
        <div className="absolute bottom-1/3 left-1/3 w-18 h-18 bg-teal-300/25 rotate-30" />

        {/* Triangles */}
        <div className="absolute top-16 right-1/4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-purple-400/30" />
        <div className="absolute bottom-24 left-1/4 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[40px] border-b-orange-400/25 rotate-180" />
        <div className="absolute top-1/2 right-1/4 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[28px] border-b-blue-400/30 rotate-45" />

        {/* Rectangles */}
        <div className="absolute top-40 left-20 w-24 h-12 border-3 border-green-400/30 rotate-6" />
        <div className="absolute bottom-1/4 right-32 w-28 h-14 bg-pink-300/20 -rotate-6" />
        <div className="absolute top-2/3 left-1/2 w-20 h-10 border-2 border-cyan-400/35 rotate-12" />

        {/* Hexagons using clip-path */}
        <div
          className="absolute top-20 left-1/2 w-16 h-16 bg-indigo-300/25"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />
        <div
          className="absolute bottom-40 right-1/3 w-20 h-20 border-4 border-purple-400/30"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />

        {/* Stars */}
        <div className="absolute top-1/3 left-12 text-3xl text-yellow-400/30">
          ★
        </div>
        <div className="absolute bottom-1/3 right-12 text-4xl text-pink-400/25">
          ★
        </div>
        <div className="absolute top-1/4 right-1/2 text-2xl text-blue-400/30">
          ★
        </div>

        {/* Code symbols */}
        <div className="absolute top-48 right-24 text-5xl font-bold text-purple-400/15">
          {"<>"}
        </div>
        <div className="absolute bottom-48 left-32 text-5xl font-bold text-orange-400/15">
          {"{ }"}
        </div>
        <div className="absolute top-1/2 left-12 text-4xl font-bold text-blue-400/15">
          {"</>"}
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-5xl font-bold text-green-400/15">
          [ ]
        </div>

        {/* Dots */}
        <div className="absolute top-12 right-1/3 w-3 h-3 bg-red-400/40 rounded-full" />
        <div className="absolute top-16 right-1/3 w-3 h-3 bg-red-400/40 rounded-full" />
        <div className="absolute top-20 right-1/3 w-3 h-3 bg-red-400/40 rounded-full" />

        <div className="absolute bottom-32 left-1/2 w-4 h-4 bg-cyan-400/40 rounded-full" />
        <div className="absolute bottom-28 left-1/2 w-4 h-4 bg-cyan-400/40 rounded-full" />
        <div className="absolute bottom-24 left-1/2 w-4 h-4 bg-cyan-400/40 rounded-full" />

        {/* Plus signs */}
        <div className="absolute top-1/4 left-1/4 text-4xl font-bold text-teal-400/25">
          +
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-3xl font-bold text-orange-400/25">
          +
        </div>
        <div className="absolute top-2/3 right-1/4 text-5xl font-bold text-purple-400/20">
          +
        </div>

        {/* X marks */}
        <div className="absolute top-1/3 right-20 text-4xl font-bold text-red-400/25">
          ×
        </div>
        <div className="absolute bottom-1/3 left-24 text-3xl font-bold text-blue-400/25">
          ×
        </div>

        {/* Dashes/Lines */}
        <div className="absolute top-52 left-1/3 w-16 h-1 bg-pink-400/30 rotate-45" />
        <div className="absolute bottom-52 right-1/3 w-20 h-1 bg-green-400/30 -rotate-45" />
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="border-4 border-black dark:border-white overflow-hidden mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative">
          {/* Static shapes in header */}
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
              Previous{" "}
              <span className="bg-gradient-to-r from-[#FFB700] via-[#FF8C00] to-[#FF006E] bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="w-full">
              <div className="group relative overflow-hidden rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 bg-white h-full">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content Container */}
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col group-hover:text-white transition-colors duration-300">
                  {/* Type Badge */}
                  <div className="inline-flex items-center gap-2 mb-4 w-fit">
                    <span
                      className={`text-xs font-bold uppercase px-3 py-1.5 rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                    >
                      {project.type}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-2xl md:text-3xl font-black text-black group-hover:text-white transition-colors duration-300 mb-2">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-base font-semibold text-gray-700 group-hover:text-white/90 transition-colors duration-300 mb-4">
                    {project.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full border-b-2 border-gray-200 group-hover:border-white/20 mb-4" />

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full font-semibold group-hover:bg-white/20 group-hover:text-white transition-all duration-300 border border-gray-200 group-hover:border-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <div className="mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 group-hover:bg-white group-hover:text-black transition-all duration-300 border-2 border-black group-hover:border-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
