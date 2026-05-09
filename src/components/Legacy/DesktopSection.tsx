"use client";

import React from "react";
import { MotionValue } from "motion/react";
import { legacyCards } from "@/data/legacyData";
import LegacyCard from "./LegacyCard";

interface DesktopSectionProps {
  scrollYProgress: MotionValue<number>;
}

/**
 * Desktop view for the Legacy section with scroll animation
 */
const DesktopSection = ({ scrollYProgress }: DesktopSectionProps) => (
  <div className="w-full h-screen sticky top-0 left-0 overflow-hidden flex flex-col items-center">
    <div className="mt-10 3xl:mt-16">
      <h2 className="text-black text-lg md:text-xl font-semibold tracking-tight">
        Legacy In The Making
      </h2>
    </div>

    <div className="w-full flex-1 relative flex items-center justify-center">
      {legacyCards.map((card, index) => (
        <LegacyCard
          key={card.id}
          card={card}
          index={index}
          totalCards={legacyCards.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  </div>
);

export default DesktopSection;
