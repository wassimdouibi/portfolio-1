import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">expertise</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
              <div className="lg:w-32 md:w-20 w-16 h-16 lg:h-32 flex items-center justify-center rounded-2xl bg-[#161a31] backdrop-blur-sm border border-white/10">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-20 md:w-14 w-12"
                />
              </div>
              <div className="lg:ms-5 flex-1">
                <h1 className="text-start text-xl md:text-2xl font-bold text-white dark:text-white">
                  {card.title}
                </h1>
                <p className="text-start text-[#e4ecff] dark:text-white-100 mt-3 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
