"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Projects from "./Projects";

export default function FeaturedWork() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-88.60%"]);

  return (
    <section ref={containerRef} className="py-16 h-[1000vh] px-4 md:px-7">
      <div className="px-4 md:px-6 flex h-[90vh] overflow-hidden justify-between items-center flex-wrap sticky top-10 bg-black text-white rounded-3xl">
        <div className="flex">
          <p>Featured Work</p>
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
