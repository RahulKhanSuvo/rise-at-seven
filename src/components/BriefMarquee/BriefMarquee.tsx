"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/assets/banner/lovely.png";
import img2 from "@/assets/banner/gangs.png";
import BriefCursor from "./BriefCursor";

export default function BriefMarquee() {
  const x = useMotionValue(0);

  const speedRef = useRef(1);
  const velocityRef = useRef(0);

  const items = [
    { text: "Chasing Consumers", image: img1 },
    { text: "Not Algorithms", image: img2 },
  ];

  const displayItems = [...items, ...items];

  // 🚀 STRONGER + SMOOTHER SCROLL ACCELERATION
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY;

      // clamp raw input (trackpad + mouse consistency)
      const clampedDelta = Math.max(-120, Math.min(120, delta));

      // 🔥 stronger acceleration
      velocityRef.current += clampedDelta * 0.12;

      // safety clamp (prevents chaos)
      velocityRef.current = Math.max(-3, Math.min(3, velocityRef.current));
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // 🎮 physics loop (smooth decay + motion)
  useAnimationFrame(() => {
    // smooth return-to-zero (instead of harsh multiply)
    velocityRef.current += (0 - velocityRef.current) * 0.12;

    const currentX = x.get();

    // combined motion
    const move = speedRef.current + velocityRef.current * 1.3;

    x.set(currentX - move * 0.98);

    // simple infinite reset
    if (currentX <= -2000) {
      x.set(0);
    }
  });

  const dispatchCursor = (active: boolean, text?: string) => {
    window.dispatchEvent(
      new CustomEvent("component-cursor-brief", {
        detail: { active, text },
      }),
    );
  };

  return (
    <section
      className="w-full overflow-hidden py-10 lg:py-20 bg-[#efeeec]"
      style={{ position: "relative" }}
    >
      <BriefCursor />

      <Link
        href="/contact"
        className="block cursor-none"
        onMouseEnter={() => dispatchCursor(true, "Send Us Your Brief")}
        onMouseLeave={() => dispatchCursor(false)}
      >
        <motion.div
          className="flex items-center whitespace-nowrap gap-x-10 lg:gap-x-20 w-max"
          style={{ x }}
        >
          {displayItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-x-10 lg:gap-x-15 shrink-0"
            >
              <h2 className="text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-semibold tracking-tight text-grey-900 leading-[0.9] shrink-0">
                {item.text}
              </h2>

              <div className="relative shrink-0 w-[25vw] md:w-[20vw] lg:w-[15vw] xl:w-[10vw] aspect-square overflow-hidden rounded-2xl lg:rounded-3xl">
                <Image
                  src={item.image}
                  alt={item.text}
                  fill
                  sizes="(max-width: 768px) 25vw, (max-width: 1024px) 20vw, (max-width: 1280px) 15vw, 10vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </Link>
    </section>
  );
}
