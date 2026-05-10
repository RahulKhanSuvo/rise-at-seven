"use client";

import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/assets/banner/lovely.png";
import img2 from "@/assets/banner/gangs.png";
import BriefCursor from "./BriefCursor";

export default function BriefMarquee() {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 15], {
    clamp: false,
  });

  const items = [
    { text: "Chasing Consumers", image: img1 },
    { text: "Not Algorithms", image: img2 },
  ];

  // More items to ensure no gaps at high speeds
  const displayItems = [...items, ...items, ...items, ...items];

  /**
   * Helper for wrapping values to create infinite loop
   */
  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  useAnimationFrame((t, delta) => {
    // Base speed: moves left by default
    let moveBy = -0.02 * (delta / 16); // Normalized base speed (very slow)

    const vel = velocityFactor.get();

    // Add scroll velocity to the base movement
    // vel > 0 (scrolling down) -> more negative (faster left)
    // vel < 0 (scrolling up) -> moves right
    moveBy += moveBy * vel * 0.1;

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * We wrap the value between -50% and -25%
   * since we have 4 copies of the items.
   * This ensures we are always showing a valid part of the loop.
   */
  const x = useTransform(baseX, (v) => `${wrap(-50, -25, v)}%`);

  const dispatchCursor = (active: boolean, text?: string) => {
    window.dispatchEvent(
      new CustomEvent("component-cursor-brief", {
        detail: { active, text },
      }),
    );
  };

  return (
    <section
      className="w-full overflow-hidden md:py-10 lg:py-20 bg-[#efeeec]"
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
          className="flex items-center whitespace-nowrap gap-x-8 lg:gap-x-20 w-max"
          style={{ x }}
        >
          {displayItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-x-8 lg:gap-x-15 shrink-0"
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
