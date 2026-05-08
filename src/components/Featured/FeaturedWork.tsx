"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Projects from "./Projects";
import { projectsData } from "@/data/projectData";
export default function FeaturedWork() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-0.50%", "-89%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["25%", "-50%"]);

  return (
    <section ref={containerRef} className="py-16 h-[1000vh] px-4 md:px-7">
      <div className="px-4 md:px-10 flex h-[90vh] overflow-hidden justify-between items-center flex-wrap sticky top-20 bg-black text-white rounded-3xl">
        <div className="flex flex-col relative">
          <div className="absolute inset-0 z-20 flex justify-between flex-col">
            <div>
              <p className="text-lg md:text-2xl font-semibold bg-black w-full pt-16 pb-10">
                Featured Work
              </p>
              <div className="w-full h-32 pointer-events-none bg-linear-to-b from-black to-transparent "></div>
            </div>
            <div>
              <div className="w-full h-40 pointer-events-none bg-linear-to-b from-transparent to-black "></div>
              <div className="text-lg md:text-2xl font-semibold bg-black w-full h-55 "></div>
            </div>
          </div>
          <motion.div style={{ y: y2 }} className="flex flex-col gap-y-4">
            {projectsData.map((project) => (
              <div className="flex items-start gap-x-2" key={project.id}>
                <h2 className="text-4xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[0.9]">
                  {project.title}
                </h2>
                <span className="text-white text-xs font-medium mt-2">
                  {`[${project.timeline}]`}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="w-3/7 h-full items-center">
          <motion.div style={{ y }}>
            <Projects />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
