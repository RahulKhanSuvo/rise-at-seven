"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

import logo1 from "@/assets/agency/01J76SW385WN4X1CBJWJV7QSAP.webp";
import logo2 from "@/assets/agency/SN.webp";
import logo3 from "@/assets/agency/Untitled-design.webp";
import logo4 from "@/assets/agency/red-bull-logo-black.webp";
import logo5 from "@/assets/agency/svg-image-6.svg";
import logo6 from "@/assets/agency/svg-image-11.svg";

import "swiper/css";

const LOGOS: StaticImageData[] = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function SwiperMarquee() {
  return (
    <div className="relative w-full  overflow-hidden select-none py-8">
      {/* Left and Right Gradient Blur Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-60 z-10 pointer-events-none backdrop-blur-sm mask-[linear-gradient(to_right,black_20%,transparent)]" />
      <div className="absolute right-0 top-0 bottom-0 w-60 z-10 pointer-events-none backdrop-blur-sm mask-[linear-gradient(to_left,black_20%,transparent)]" />

      {/* White color fade (separate from blur for better control) */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-[#efeeec] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-[#efeeec] to-transparent z-10 pointer-events-none" />
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={true}
        spaceBetween={120}
        slidesPerView="auto"
        centeredSlides={false}
        watchSlidesProgress={true}
      >
        {Array.from({ length: 6 }, (_, round) =>
          LOGOS.map((logo, i) => (
            <SwiperSlide
              key={`${round}-${i}`}
              style={{ width: "auto" }}
              className="relative"
            >
              <div className="flex items-center justify-start w-[160px] h-[30px] relative">
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
