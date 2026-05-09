"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type TextSideAnimationProps = {
  text: string;
  className?: string;
};

export default function TextSideAnimation({
  text,
  className,
}: TextSideAnimationProps) {
  return (
    <div className={cn("inline-flex overflow-hidden", className)}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="font-semibold leading-none tracking-tight"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: index * 0.05,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}
