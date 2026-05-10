"use client";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

type AnimatedLogoProps = {
  src: string | StaticImageData;
  alt?: string;
  size?: number;
  delay?: number;
  duration?: number;
  className?: string;
  imageClassName?: string;
};

export default function AnimatedLogo({
  src,
  alt = "logo",
  size = 113,
  delay = 0.6,
  duration = 1,
  className = "",
  imageClassName = "",
}: AnimatedLogoProps) {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: size, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration,
        ease: "easeInOut",
        delay,
      }}
      className={`relative overflow-hidden flex justify-center rounded-xl md:rounded-3xl ${className}`}
      style={{ height: size }}
    >
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          className={`object-cover ${imageClassName}`}
        />
      </div>
    </motion.div>
  );
}
