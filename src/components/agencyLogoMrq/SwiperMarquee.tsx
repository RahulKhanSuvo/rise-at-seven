/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperClass from "swiper";
import Image, { StaticImageData } from "next/image";
import {
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
} from "motion/react";

import logo1 from "@/assets/agency/01J76SW385WN4X1CBJWJV7QSAP.webp";
import logo2 from "@/assets/agency/SN.webp";
import logo3 from "@/assets/agency/Untitled-design.webp";
import logo4 from "@/assets/agency/red-bull-logo-black.webp";
import logo5 from "@/assets/agency/svg-image-6.svg";
import logo6 from "@/assets/agency/svg-image-11.svg";

import "swiper/css";
import { useState, useCallback } from "react";
import { useCustomResize } from "@/hook/useCustomResize";

const LOGOS: StaticImageData[] = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function SwiperMarquee() {
  const [spaceBetween, setSpaceBetween] = useState(40);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null,
  );

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  // --- ACCELERATION CONFIG ---
  // Change the second array [0, 22] to increase/decrease the maximum acceleration factor
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 22], {
    clamp: false,
  });

  useAnimationFrame((t, delta) => {
    if (!swiperInstance) return;

    // --- NORMAL SPEED CONFIG ---
    // Change -0.4 to make the idle speed faster or slower (pixels per frame)
    let moveBy = -0.4 * (delta / 16);

    const vel = velocityFactor.get();

    // Add scroll velocity to the base movement
    // --- ACCELERATION SENSITIVITY ---
    // Change 0.4 to make it more or less reactive to the scroll
    moveBy += moveBy * vel * 0.4;

    // Manually update swiper translate for smooth physics control
    const currentTranslate = swiperInstance.translate;
    swiperInstance.setTranslate(currentTranslate + moveBy);

    // We cast to any because loopFix is missing from some Swiper 12 type definitions
    // but is required to reset the loop position during manual translation.
    (swiperInstance as any).loopFix();
  });

  useCustomResize(
    useCallback(() => {
      const width = window.innerWidth;
      if (width >= 1536) setSpaceBetween(140);
      else if (width >= 1280) setSpaceBetween(120);
      else if (width >= 1024) setSpaceBetween(90);
      else if (width >= 768) setSpaceBetween(70);
      else setSpaceBetween(40);
    }, []),
  );

  return (
    <div className="relative w-full  overflow-hidden select-none py-8">
      {/* Left and Right Gradient Blur Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-60 z-10 pointer-events-none backdrop-blur-sm mask-[linear-gradient(to_right,black_20%,transparent)]" />
      <div className="absolute right-0 top-0 bottom-0 w-60 z-10 pointer-events-none backdrop-blur-sm mask-[linear-gradient(to_left,black_20%,transparent)]" />

      {/* White color fade (separate from blur for better control) */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-[#efeeec] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-[#efeeec] to-transparent z-10 pointer-events-none" />
      <Swiper
        onSwiper={setSwiperInstance}
        loop={true}
        allowTouchMove={true}
        spaceBetween={spaceBetween}
        slidesPerView="auto"
        centeredSlides={false}
        watchSlidesProgress={true}
        className="cursor-grab active:cursor-grabbing"
      >
        {Array.from({ length: 6 }, (_, round) =>
          LOGOS.map((logo, i) => (
            <SwiperSlide
              key={`${round}-${i}`}
              style={{ width: "auto" }}
              className="relative"
            >
              <div className="flex items-center justify-start w-[100px] h-[30px] relative">
                <Image
                  src={logo}
                  alt="agency logo"
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          )),
        )}
      </Swiper>
    </div>
  );
}
