"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { legacyCards } from "@/data/legacyData";

import "swiper/css";
import "swiper/css/pagination";

/**
 * Mobile view for the Legacy section
 */
const MobileSection = () => (
  <div className="w-full py-10 px-4 md:px-7 relative gap-y-3 md:gap-y-5 lg:hidden">
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
          clickable: true,
          el: ".custom-pagination",
        }}
        className="pb-10!"
      >
        {legacyCards.map((card) => (
          <SwiperSlide key={card.id} className="h-auto! flex">
            <div
              className={`w-full flex flex-col h-full text-center rounded-2xl p-7 lg:rounded-3xl ${card.bg}`}
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
      </Swiper>
      <div className="w-full relative mt-1 px-4 md:px-7">
        <div className="w-full relative">
          <div
            className="custom-pagination w-full relative h-1 bg-gray-200 rounded-full overflow-hidden [&_.swiper-pagination-progressbar-fill]:absolute [&_.swiper-pagination-progressbar-fill]:left-0 [&_.swiper-pagination-progressbar-fill]:top-0 [&_.swiper-pagination-progressbar-fill]:w-full [&_.swiper-pagination-progressbar-fill]:h-full [&_.swiper-pagination-progressbar-fill]:origin-left [&_.swiper-pagination-progressbar-fill]:transition-transform [&_.swiper-pagination-progressbar-fill]:duration-300"
            style={
              { "--swiper-pagination-color": "#111212" } as React.CSSProperties
            }
          ></div>
        </div>
      </div>
    </div>
  </div>
);

export default MobileSection;
