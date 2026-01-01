import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="border-4 border-black dark:border-white overflow-hidden mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
          <div className="relative bg-gradient-to-r from-[#FFB700] via-[#FF8C00] to-[#FF006E] dark:from-yellow-900/40 dark:via-orange-900/30 dark:to-pink-900/40 p-8 md:p-12 overflow-hidden diagonal-pattern">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-6 right-1/4 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute -bottom-10 left-0 w-36 h-36 rounded-full bg-white/10 blur-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black dark:text-white relative z-10">
              My{" "}
              <span className="bg-gradient-to-r from-[#FFB700] via-[#FF8C00] to-[#FF006E] bg-clip-text text-transparent">
                approach
              </span>
            </h1>
          </div>
        </div>
        {/* remove bg-white dark:bg-black */}
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
          {/* add des prop */}
          <Card
            title="Requirements Gathering"
            icon={<AceternityIcon order="Phase 1" />}
            des="Understanding your business challenges and data landscape. I analyze your
          functional requirements, identify key metrics, and define the analytical models
          needed to deliver actionable insights."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
            />
          </Card>
          <Card
            title="Data Architecture & Modeling"
            icon={<AceternityIcon order="Phase 2" />}
            des="Designing robust data solutions including Data Warehouse architecture,
          ETL processes, and database schemas. I ensure data quality, implement
          integration layers, and structure your data for optimal analysis."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black rounded-3xl overflow-hidden"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
            />
          </Card>
          <Card
            title="Implementation & Analytics"
            icon={<AceternityIcon order="Phase 3" />}
            des="Building statistical models, developing reporting solutions, and creating
          dashboards for data visualization. I transform complex data into clear insights
          that drive strategic business decisions."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border-4 border-black dark:border-white group/canvas-card flex items-center justify-center
       bg-white dark:bg-black-100 max-w-sm w-full mx-auto p-6 relative lg:h-[35rem] rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all duration-300"
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute h-8 w-8 -top-4 -left-4 text-black dark:text-white opacity-40" />
      <Icon className="absolute h-8 w-8 -bottom-4 -left-4 text-black dark:text-white opacity-40" />
      <Icon className="absolute h-8 w-8 -top-4 -right-4 text-black dark:text-white opacity-40" />
      <Icon className="absolute h-8 w-8 -bottom-4 -right-4 text-black dark:text-white opacity-40" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black dark:text-white mt-4  font-bold group-hover/canvas-card:text-white
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 text-[#e4ecff] group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {des}
        </p>
      </div>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-white dark:bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
