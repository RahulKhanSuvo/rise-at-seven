"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/assets/banner/lovely.png";
import img2 from "@/assets/banner/gangs.png";
import BriefCursor from "./BriefCursor";

export default function BriefMarquee() {
  const dispatchCursor = (active: boolean, text?: string) => {
    const event = new CustomEvent("component-cursor-brief", {
      detail: { active, text },
    });

    window.dispatchEvent(event);
  };

  const items = [
    {
      text: "Chasing Consumers",
      image: img1,
    },
    {
      text: "Not Algorithms",
      image: img2,
    },
  ];

  // Duplicate ONLY once for seamless infinite loop
  const displayItems = [...items, ...items];

  return (
    <section className="w-full overflow-hidden py-10 lg:py-20 bg-[#efeeec] relative">
      <BriefCursor />

      <Link
        href="/contact"
        className="block cursor-none"
        onMouseEnter={() => dispatchCursor(true, "Send Us Your Brief")}
        onMouseLeave={() => dispatchCursor(false)}
      >
        <motion.div
          className="flex items-center whitespace-nowrap gap-x-10 lg:gap-x-20 w-max"
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
