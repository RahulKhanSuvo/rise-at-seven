"use client";

import React from "react";
import { motion, useTransform, MotionValue } from "motion/react";
import Image from "next/image";
import { LegacyCardData } from "@/data/legacyData";

interface LegacyCardProps {
  card: LegacyCardData;
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
}

/**
 * LegacyCard component for desktop scroll animation
 */
const LegacyCard = ({
  card,
  index,
  totalCards,
  scrollYProgress,
}: LegacyCardProps) => {
  const start = index / totalCards;
  const end = (index + 1) / totalCards;

  // All cards slide up as we scroll past their range
  const y = useTransform(scrollYProgress, [start, end], ["0%", "-120%"]);

  // All cards rotate as they slide out
  const rotate = useTransform(
    scrollYProgress,
    [start, end],
    [card.rotate, card.rotate - 10],
  );

  const zIndex = totalCards - index;

  return (
    <motion.div
      style={{
        zIndex,
        y,
        rotate,
      }}
      className={`absolute w-full max-w-lg xl:max-w-xl 4xl:max-w-2xl aspect-square rounded-3xl p-7 lg:items-center lg:p-14 ${card.bg} shadow-2xl flex flex-col items-center justify-center text-center`}
    >
      <div className="flex flex-col items-center gap-y-3 md:gap-y-5">
        <div className="rounded-2xl overflow-hidden w-48 aspect-square relative 4xl:w-56 mb-4">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
            sizes="250px"
          />
        </div>

        <div className="flex flex-col items-center gap-y-4">
          <h3
            className={`text-5xl font-medium tracking-tight ${card.text} xl:text-6xl 3xl:text-7xl`}
          >
            {card.title}
          </h3>
          <div className="w-full max-w-md">
            {card.description.map((desc, i) => (
              <p
                key={i}
                className={`text-base leading-normal mb-5 ${card.text} xl:text-lg`}
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LegacyCard;
