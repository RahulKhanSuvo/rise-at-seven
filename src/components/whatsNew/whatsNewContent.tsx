"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import WhatNewCard from "./WhatNewCard";
import { whatNewData } from "@/data/whatNewData";

export default function WhatsNewContent() {
  return (
    <div className="w-full mt-8">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView="auto"
        pagination={{
          clickable: true,
          el: ".whats-new-pagination",
          type: "progressbar",
        }}
        className="w-full pb-12!"
      >
        {whatNewData.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="w-[85%]! sm:w-[calc(100%/2-10px)]! lg:w-[calc(100%/3-14px)]!"
          >
            <WhatNewCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full relative py-3 mt-1  md:px-7">
        <div className="w-full relative">
          <div
            className="whats-new-pagination w-full relative h-1 bg-gray-200 rounded-full overflow-hidden [&_.swiper-pagination-progressbar-fill]:absolute [&_.swiper-pagination-progressbar-fill]:left-0 [&_.swiper-pagination-progressbar-fill]:top-0 [&_.swiper-pagination-progressbar-fill]:w-full [&_.swiper-pagination-progressbar-fill]:h-full [&_.swiper-pagination-progressbar-fill]:origin-left [&_.swiper-pagination-progressbar-fill]:transition-transform [&_.swiper-pagination-progressbar-fill]:duration-300"
            style={
              { "--swiper-pagination-color": "#111212" } as React.CSSProperties
            }
          >
            {/* Swiper will inject progress bar here */}
          </div>
        </div>
      </div>
    </div>
  );
}
