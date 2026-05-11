"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import Projects from "./Projects";
import { projectsData } from "@/data/projectData";
import Button from "@/common/Button";
import { useCustomResize } from "@/hook/useCustomResize";

export default function FeaturedWork() {
  const containerRef = useRef(null);
  const projectsWrapperRef = useRef<HTMLDivElement>(null);
  const [moveAmount, setMoveAmount] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  useCustomResize(
    useCallback(() => {
      if (!projectsWrapperRef.current) return;
      const contentHeight = projectsWrapperRef.current?.scrollHeight || 0;
      const visibleHeight =
        projectsWrapperRef.current?.parentElement?.clientHeight || 0;
      const amount = contentHeight - visibleHeight;
      setMoveAmount(amount);
    }, []),
  );
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
  const y = useTransform(scrollYProgress, [0, 1], ["0px", `-${moveAmount}px`]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["25%", "-40%"]);

  return (
    <>
      <section
        id="featured-work"
        ref={containerRef}
        className="pt-16 lg:h-[1000vh] h-[400vh] px-4 md:px-7"
        style={{ position: "relative" }}
      >
        <div className="px-4 md:px-10 flex h-[90vh] overflow-hidden justify-between sticky top-10 bg-grey-900 text-white rounded-3xl">
          <div className=" hidden lg:flex flex-col flex-1 relative">
            <div className="absolute inset-0 z-20 flex justify-between flex-col pointer-events-none">
              <div className="">
                <p className="text-lg md:text-2xl font-semibold bg-grey-900 w-full pt-20 pb-19">
                  Featured Work
                </p>
                <div className="w-full h-20 pointer-events-none bg-linear-to-b from-grey-900 to-transparent "></div>
              </div>
              <div>
                <div className="w-full h-45 pointer-events-none bg-linear-to-b from-grey-900/5 to-grey-900 "></div>
                <div className="text-lg md:text-2xl font-semibold bg-grey-900 w-full h-20 "></div>
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
          <div className=" w-full lg:w-3/7 h-full overflow-hidden items-center">
            <motion.div
              ref={projectsWrapperRef}
              className="pt-0 lg:py-8"
              style={{ y }}
            >
              <p className="text-lg md:text-2xl py-3.5 lg:hidden font-semibold bg-grey-900 w-full">
                Featured Work
              </p>
              <Projects
                hoveredProjectId={hoveredProjectId}
                setHoveredProjectId={setHoveredProjectId}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <div className="text-center pt-10 pb-8">
        <Button
          className="w-full md:w-fit"
          text="Explore Our Work"
          href="#"
          variant="solid"
        />
      </div>
    </>
  );
}
