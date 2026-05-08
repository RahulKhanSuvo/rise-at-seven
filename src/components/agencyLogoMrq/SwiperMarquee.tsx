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
    <div className="relative w-full py-2 bg-white overflow-hidden select-none">
      {/* Left and Right Gradient Blur Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-60 z-10 pointer-events-none backdrop-blur-sm mask-[linear-gradient(to_right,black_20%,transparent)]" />
      <div className="absolute right-0 top-0 bottom-0 w-60 z-10 pointer-events-none backdrop-blur-sm mask-[linear-gradient(to_left,black_20%,transparent)]" />

      {/* White color fade (separate from blur for better control) */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={2800}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={true}
        spaceBetween={100}
        slidesPerView="auto"
        centeredSlides={false}
        watchSlidesProgress={true}
      >
        {Array.from({ length: 3 }, (_, round) =>
          LOGOS.map((logo, i) => (
            <SwiperSlide key={`${round}-${i}`} style={{ width: "auto" }}>
              <div className="flex items-center justify-start w-[140px] h-[60px]">
                <Image
                  src={logo}
                  alt="agency logo"
                  width={90}
                  height={40}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 max-h-[40px] w-auto mix-blend-multiply"
                />
              </div>
            </SwiperSlide>
          )),
        )}
      </Swiper>
    </div>
  );
}
