import React from "react";

const Stats = () => {
  const stats = [
    {
      number: "4+",
      label: "Years Experience",
      color: "from-purple-400 to-pink-400",
    },
    {
      number: "50+",
      label: "Projects Delivered",
      color: "from-yellow-300 to-orange-400",
      highlight: true,
    },
    {
      number: "75+",
      label: "Collaborative Projects",
      color: "from-cyan-400 to-blue-400",
    },
    {
      number: "9500+",
      label: "Working Hours",
      color: "from-green-400 to-emerald-400",
    },
  ];

  return (
    <section className="w-full py-20 px-5 bg-black dark:bg-black-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 mx-auto rounded-full border-4 border-purple-500 bg-purple-500/10 flex items-center justify-center text-3xl">
              ✨
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Stats Proves a Lot!
          </h2>
          <p className="text-gray-300 text-lg">
            Behind every stat lies deep expertise, team collaboration, and
            efficient project management.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`border-4 border-white relative overflow-hidden group ${
                stat.highlight ? "lg:col-span-1" : ""
              }`}
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Content */}
              <div
                className={`relative p-8 text-center transition-colors duration-300 ${
                  stat.highlight
                    ? `bg-gradient-to-r ${stat.color}`
                    : "bg-black group-hover:bg-black"
                }`}
              >
                <div
                  className={`text-5xl md:text-6xl font-black mb-3 ${
                    stat.highlight ? "text-black" : "text-white"
                  }`}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-lg font-bold uppercase tracking-wider ${
                    stat.highlight ? "text-black" : "text-white"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
