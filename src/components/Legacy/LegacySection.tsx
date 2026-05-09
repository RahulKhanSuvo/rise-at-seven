"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { legacyCards, LegacyCardData } from "@/data/legacyData";

/**
 * LegacyCard component for desktop scroll animation
 */
const LegacyCard = ({
  card,
  index,
  totalCards,
  scrollYProgress,
}: {
  card: LegacyCardData;
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
}) => {
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

/**
 * Mobile view for the Legacy section
 */
const MobileSection = () => (
  <div className="w-full py-10 px-4 md:px-7 gap-y-3 md:gap-y-5 lg:hidden">
    <div className="flex justify-center mb-6">
      <h2 className="text-gray-900 text-sm font-medium tracking-tight uppercase">
        Legacy In The Making
      </h2>
    </div>

    <div className="w-full">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          type: "progressbar",
          el: ".custom-pagination",
        }}
        className="pb-10!"
      >
        {legacyCards.map((card) => (
          <SwiperSlide key={card.id} className="h-auto! flex">
            <div
              className={`w-full flex flex-col text-center rounded-2xl p-7 lg:rounded-3xl ${card.bg}`}
            >
              <div className="flex flex-col items-center gap-y-3 md:gap-y-5">
                <div className="rounded-xl overflow-hidden w-full aspect-4/3 relative lg:aspect-square lg:w-48 4xl:w-56">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>

                <div className="flex flex-col items-center gap-y-4">
                  <h3
                    className={`text-3xl font-medium tracking-tight ${card.text} lg:text-5xl`}
                  >
                    {card.title}
                  </h3>
                  <div className="w-full">
                    {card.description.map((desc, index) => (
                      <p
                        key={index}
                        className={`text-sm leading-normal mb-5 ${card.text} lg:text-base`}
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-pagination mt-8 h-1 bg-gray-200 rounded-full overflow-hidden relative"></div>
      </Swiper>
    </div>
  </div>
);

/**
 * Desktop view for the Legacy section with scroll animation
 */
const DesktopSection = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => (
  <div className="w-full h-screen sticky top-0 left-0 overflow-hidden flex flex-col items-center">
    <div className="mt-10 3xl:mt-16">
      <h2 className="text-gray-900 text-lg font-medium tracking-tight uppercase">
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

/**
 * Main LegacySection component
 */
export default function LegacySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="w-full py-0">
      <div className="w-full px-0">
        <MobileSection />
        <div
          ref={containerRef}
          className="w-full relative hidden lg:flex"
          style={{ height: "280vh" }}
        >
          <DesktopSection scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}
