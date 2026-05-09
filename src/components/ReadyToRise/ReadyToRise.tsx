"use client";
import { motion } from "motion/react";

export default function ReadyToRise() {
  const text = "Ready To Rise At Seven?";
  return (
    <section className="w-full h-[80vh] flex items-center justify-center">
      {text.split(" ").map((word, index) => (
        <motion.p
          className="text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-semibold tracking-tight text-grey-900 leading-[0.9] shrink-0 "
          key={index}
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {word}
        </motion.p>
      ))}
    </section>
  );
}
