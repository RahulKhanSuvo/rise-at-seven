"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

type AnimatedButtonProps = {
  href: string;
  text: string;
  variant?: "solid" | "outline";
};

const MotionLink = motion(Link);

export default function Button({
  href,
  text,
  variant = "solid",
}: AnimatedButtonProps) {
  return (
    <MotionLink
      href={href}
      initial="initial"
      whileHover="hovered"
      className={clsx(
        "group inline-flex items-center justify-center overflow-hidden rounded-3xl px-6 py-3 text-base font-medium transition-all duration-300 hover:rounded-xl",
        variant === "solid" && "bg-white text-black border border-white",
        variant === "outline" && " bg-transparent text-black",
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
          <ArrowUpRight size={16} />
        </motion.div>
      </div>
    </MotionLink>
  );
}
