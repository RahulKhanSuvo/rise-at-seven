"use client";
import Image from "next/image";
import { ProjectData } from "@/types/project";
import { ChartLine, Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, useSpring, useTransform } from "motion/react";

interface ProjectProps {
  project: ProjectData;
}

export default function Project({ project }: ProjectProps) {
  const { title, image, type, description, color } = project;
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const radius = useSpring(0, { damping: 20, stiffness: 100 });

  useEffect(() => {
    radius.set(isHovered ? 150 : 0);
  }, [isHovered, radius]);

  const clipPath = useTransform(radius, (r) => `circle(${r}% at 50% 100%)`);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => {
        setIsHovered(true);
        window.dispatchEvent(
          new CustomEvent("component-cursor", {
            detail: { active: true, icon: "ArrowUpRight" },
          }),
        );
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        window.dispatchEvent(
          new CustomEvent("component-cursor", {
            detail: { active: false, icon: "" },
          }),
        );
      }}
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
          <div></div>
          {/* Duplicate Badge in reveal layer to match the color theme */}
          <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-current bg-black/10 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 lg:text-base">
            <Search className="size-4 opacity-70" />
            <span className="uppercase">{type}</span>
            <ChartLine className="size-4 opacity-70" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
