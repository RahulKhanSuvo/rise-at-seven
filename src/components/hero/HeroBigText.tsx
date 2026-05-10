"use client";
import Image, { StaticImageData } from "next/image";
import TextSideAnimation from "../../common/TextSideAnimation";
import { motion } from "motion/react";
import { useState, useCallback } from "react";
import { useCustomResize } from "@/common/useCustomResize";

export default function HeroBigText({
  heroLogo,
}: {
  heroLogo: StaticImageData;
}) {
  const [targetWidth, setTargetWidth] = useState(44);

  useCustomResize(
    useCallback(() => {
      setTargetWidth(window.innerWidth >= 768 ? 112 : 44);
    }, []),
  );

  return (
    <div className="flex w-screen justify-center flex-col items-center">
      <div className="flex gap-2.5 flex-wrap justify-center overflow-hidden h-fit">
        <TextSideAnimation
          className="text-5xl md:text-7xl lg:text-8xl xl:text-[7.4rem]"
          text={"We"}
        />
        <TextSideAnimation
          className="text-5xl md:text-7xl lg:text-8xl xl:text-[7.4rem]"
          text={"Create"}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-1 md:gap-4 overflow-hidden h-fit pb-4 md:pb-6">
        <TextSideAnimation
          paddingBottom="pb-1 md:pb-2"
          className="text-5xl md:text-7xl lg:text-8xl xl:text-[7.4rem]"
          text={"Category"}
        />
        <motion.div
          whileInView={{ width: targetWidth, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          initial={{ width: 0, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
          className="h-11 md:h-28 relative overflow-hidden flex justify-center rounded-xl md:rounded-3xl"
        >
          <div className="size-11 md:size-28 relative shrink-0">
            <Image
              src={heroLogo}
              alt="background"
              fill
              sizes="(max-width: 768px) 44px, 112px"
              className="object-cover"
            />
          </div>
        </motion.div>
        <TextSideAnimation
          className="text-5xl md:text-7xl lg:text-8xl xl:text-[7.4rem]"
          text="Leaders"
        />
      </div>
    </div>
  );
}
