import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="px-5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="border-4 border-black dark:border-white overflow-hidden mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
          <div className="relative bg-gradient-to-r from-[#00D9FF] via-[#0099CC] to-[#00B8E6] dark:from-cyan-900/40 dark:via-cyan-900/30 dark:to-cyan-900/40 p-8 md:p-12 overflow-hidden diagonal-pattern">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-6 left-1/4 w-28 h-28 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black dark:text-white relative z-10">
              About{" "}
              <span className="bg-gradient-to-r from-[#FFB700] via-[#FF8C00] to-[#FF006E] bg-clip-text text-transparent">
                Me
              </span>
            </h1>
          </div>
        </div>
      </div>
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
