"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/assets/background/Screenshot-2025-07-01-at-21.36.35.webp";
import img2 from "@/assets/background/unnamed-6.webp";
import BriefCursor from "./BriefCursor";

export default function BriefMarquee() {
  const dispatchCursor = (active: boolean, text?: string) => {
    const event = new CustomEvent("component-cursor-brief", {
      detail: { active, text },
    });
    window.dispatchEvent(event);
  };

  const items = [
    { text: "Chasing Consumers", image: img1 },
    { text: "Not Algorithms", image: img2 },
  ];

  // Double the items for seamless loop
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <section className="w-full overflow-hidden py-10 lg:py-20 bg-[#efeeec] relative">
      <BriefCursor />
      <Link
        href="/contact"
        onMouseEnter={() => dispatchCursor(true, "Send Us Your Brief")}
        onMouseLeave={() => dispatchCursor(false)}
        className="block cursor-none"
      >
        <motion.div
          className="flex whitespace-nowrap items-center gap-x-10 lg:gap-x-20"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {displayItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-x-10 lg:gap-x-20 shrink-0"
            >
              <h2 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-medium tracking-tight text-grey-900 leading-[0.9]">
                {item.text}
              </h2>
              <div className="w-[25vw] md:w-[20vw] lg:w-[15vw] xl:w-[12vw] aspect-square rounded-2xl lg:rounded-3xl overflow-hidden relative shrink-0">
                <Image
                  src={item.image}
                  alt={item.text}
                  fill
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
