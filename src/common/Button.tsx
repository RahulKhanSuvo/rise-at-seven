"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
  href: string;
  text: string;
  icon?: boolean;
  variant?: "solid" | "outline";
  className?: string;
};

const MotionLink = motion.create(Link);

export default function Button({
  href,
  text,
  icon = true,
  variant = "solid",
  className,
}: AnimatedButtonProps) {
  return (
    <MotionLink
      href={href}
      initial="initial"
      whileHover="hovered"
      className={cn(
        "group inline-flex items-center justify-center overflow-hidden rounded-3xl px-6 py-3 text-base font-semibold transition-all duration-300 hover:rounded-xl",
        variant === "solid" && "border border-white bg-white text-black",
        variant === "outline" && "bg-transparent text-black",
        className,
      )}
    >
      <div className="relative h-6 overflow-hidden">
        {/* First Text */}
        <motion.div
          variants={{
            initial: { y: 0 },
            hovered: { y: -24 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center gap-2"
        >
          <span className="whitespace-nowrap">{text}</span>
          <ArrowUpRight size={16} />
        </motion.div>

        {/* Second Text */}
        <motion.div
          variants={{
            initial: { y: 24 },
            hovered: { y: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute left-0 top-0 flex items-center gap-2"
        >
          <span className="whitespace-nowrap">{text}</span>
          {icon ? <ArrowUpRight size={16} /> : null}
        </motion.div>
      </div>
    </MotionLink>
  );
}
