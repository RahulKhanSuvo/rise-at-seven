"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type TextSideAnimationProps = {
  text: string;
  className?: string;
  paddingBottom?: string;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function TextSideAnimation({
  text,
  paddingBottom,
  className,
}: TextSideAnimationProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={cn("inline-flex overflow-hidden", className)}
    >
      {text.split("").map((letter, index) => (
        <div key={index} className="overflow-hidden">
          <motion.span
            variants={item}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={cn(
              "inline-block font-semibold leading-none tracking-tight",
              paddingBottom,
            )}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
}
