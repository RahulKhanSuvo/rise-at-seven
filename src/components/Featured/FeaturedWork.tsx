"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";
import Projects from "./Projects";
import { projectsData } from "@/data/projectData";
import Button from "@/common/Button";

export default function FeaturedWork() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  const y = useTransform(scrollYProgress, [0, 1], ["-0.50%", "-89%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["25%", "-50%"]);

  return (
    <>
      <section ref={containerRef} className="pt-16 h-[1000vh] px-4 md:px-7">
        <div className="px-4 md:px-10 flex h-[90vh] overflow-hidden justify-between items-center flex-wrap sticky top-10 bg-black text-white rounded-3xl">
          <div className="flex flex-col relative">
            <div className="absolute inset-0 z-20 flex justify-between flex-col pointer-events-none">
              <div>
                <p className="text-lg md:text-2xl font-semibold bg-black w-full pt-16 pb-10">
                  Featured Work
                </p>
                <div className="w-full h-32 pointer-events-none bg-linear-to-b from-black to-transparent "></div>
              </div>
              <div>
                <div className="w-full h-50 pointer-events-none bg-linear-to-b from-black/5 to-black "></div>
                <div className="text-lg md:text-2xl font-semibold bg-black w-full h-60 "></div>
              </div>
            </div>
            <motion.div style={{ y: y2 }} className="flex flex-col gap-y-4">
              {projectsData.map((project) => (
                <Link
                  href={`/projects/${project.id}`}
                  key={project.id}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                >
                  <motion.div
                    animate={{
                      x: hoveredProjectId === project.id ? 20 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-start gap-x-2 z-30 relative cursor-pointer"
                  >
                    <h2 className="text-4xl lg:text-6xl xl:text-[4.8rem] font-semibold tracking-tight leading-[0.9]">
                      {project.title}
                    </h2>
                    <span className="text-white text-xs font-medium mt-2">
                      {`[${project.timeline}]`}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
          <div className="w-3/7 h-full items-center">
            <motion.div style={{ y }}>
              <Projects
                hoveredProjectId={hoveredProjectId}
                setHoveredProjectId={setHoveredProjectId}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <div className="text-center pt-10 pb-8">
        <Button text="Explore Our Work" href="#" variant="solid" />
      </div>
    </>
  );
}
