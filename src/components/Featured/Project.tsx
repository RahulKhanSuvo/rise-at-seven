"use client";
import Image from "next/image";
import { ProjectData } from "@/types/project";
import { ChartLine, Search, ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "motion/react";

interface ProjectProps {
  project: ProjectData;
}

export default function Project({ project }: ProjectProps) {
  const { title, image, type, description, color } = project;
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position relative to the container for the mask
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse coordinates
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  // Radius of the circle mask
  const radius = useSpring(0, { damping: 20, stiffness: 100 });

  useEffect(() => {
    radius.set(isHovered ? 150 : 0);
  }, [isHovered, radius]);

  // Create the clipPath string reactively
  const clipPath = useTransform(
    [smoothX, smoothY, radius],
    ([x, y, r]) => `circle(${r}% at ${x}px ${y}px)`,
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative grid group w-full aspect-4/3 overflow-hidden mb-8 rounded-2xl cursor-none"
    >
      {/* Base Image Layer */}
      <div className="col-start-1 row-start-1 transition-transform duration-700 group-hover:scale-105">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Badge Layer (Always visible on base layer) */}
      <div className="col-start-1 row-start-1 p-4 z-30 flex justify-end items-start lg:items-end lg:p-6">
        <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-white bg-white/20 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 lg:text-base">
          <Search className="size-4 opacity-70" />
          <span className="uppercase">{type}</span>
          <ChartLine className="size-4 opacity-70" />
        </div>
      </div>

      {/* Reveal Layer (Circle Mask) */}
      <motion.div
        className="col-start-1 row-start-1 flex flex-col items-start justify-between z-40 p-4 lg:p-6 pointer-events-none"
        style={{
          backgroundColor: color,
          color: "#111212",
          clipPath,
        }}
      >
        <div className="text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight leading-[1.1] text-balance">
          {description}
        </div>

        <div className="w-full flex items-end justify-between">
          <div className="w-10 lg:w-16 h-10 lg:h-16 flex items-center justify-center rounded-full border border-black/20">
            <ArrowUpRight className="size-6 lg:size-8" />
          </div>
          {/* Duplicate Badge in reveal layer to match the color theme */}
          <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-current bg-black/10 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 lg:text-base">
            <Search className="size-4 opacity-70" />
            <span className="uppercase">{type}</span>
            <ChartLine className="size-4 opacity-70" />
          </div>
        </div>
      </motion.div>

      {/* Custom Cursor Circle (Follows mouse relative to container) */}
      <motion.div
        className="absolute top-0 left-0 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full pointer-events-none z-100 flex items-center justify-center mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
      >
        <ArrowUpRight className="text-white size-8" />
      </motion.div>
    </div>
  );
}
