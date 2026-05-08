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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-88.60%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["25%", "-40%"]);

  return (
    <section ref={containerRef} className="py-16 h-[1000vh] px-4 md:px-7">
      <div className="px-4 md:px-6 flex h-[90vh] overflow-hidden justify-between items-center flex-wrap sticky top-10 bg-black text-white rounded-3xl">
        <div className="flex flex-col gap-y-4">
          <p className="text-sm uppercase tracking-widest opacity-60">
            Featured Work
          </p>
          <motion.div style={{ y: y2 }} className="flex flex-col gap-y-4">
            {projectsData.map((project) => (
              <div key={project.id}>
                <h2 className="text-4xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[0.9] uppercase">
                  {project.title}
                </h2>
                <span>{project.timeline}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="w-3/7 h-full items-center overflow-hidden">
          <motion.div style={{ y }}>
            <Projects />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
