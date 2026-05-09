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
  const rangeWidth = 2.8 / (totalCards + 1);
  const start = index * (rangeWidth / 2);
  const end = start + rangeWidth;
  const cardExitProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(cardExitProgress, [0, 0.2, 1], ["0%", "0%", "-150%"]);
  const rotate = useTransform(
    cardExitProgress,
    [0, 0.2, 1],
    [card.rotate, card.rotate, card.rotate - 45],
  );

  const zIndex = totalCards - index;

  const initialYOffset = index * 12;

  return (
    <motion.div
      style={{
        zIndex,
        y,
        rotate,
        marginTop: initialYOffset,
      }}
      className={`absolute w-full max-w-lg xl:max-w-[32%]  aspect-square rounded-3xl p-7 lg:items-center lg:p-14 ${card.bg} shadow flex flex-col items-center justify-center text-center`}
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
          <div className="w-full h-full">
            {card.description.map((desc, i) => (
              <p key={i} className={`text-sm leading-normal mb-5 ${card.text}`}>
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
