"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen z-9999 bg-mint pointer-events-none">
        <svg
          className="absolute top-full left-0 w-full h-[18vh]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L100,0 L100,100 Q50,-120 0,100 Z" fill="#aaf6e4" />
        </svg>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: "0%" }}
      animate={{ y: "-120%" }}
      transition={{
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2,
      }}
      className="fixed top-0 left-0 w-full h-screen z-9999 bg-mint pointer-events-none flex items-center justify-center"
    >
      <svg
        className="absolute top-full left-0 w-full h-[18vh]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L100,0 L100,100 Q50,-120 0,100 Z" fill="#aaf6e4" />
      </svg>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      ></motion.div>
    </motion.div>
  );
}
