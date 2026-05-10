"use client";
import Image, { StaticImageData } from "next/image";
import TextSideAnimation from "../../common/TextSideAnimation";
import { motion } from "motion/react";
import { useState, useCallback } from "react";
import { useCustomResize } from "@/hook/useCustomResize";

export default function HeroBigText({
  heroLogo,
}: {
  heroLogo: StaticImageData;
}) {
  const [targetWidth, setTargetWidth] = useState(50);

  useCustomResize(
    useCallback(() => {
      setTargetWidth(window.innerWidth >= 768 ? 112 : 50);
    }, []),
  );

  return (
    <div className="flex w-screen justify-center flex-col items-center">
      <div className="flex gap-0 md:gap-2.5 flex-wrap justify-center overflow-hidden h-fit">
        <TextSideAnimation text={"We"} />
        <TextSideAnimation text={"Create"} />
      </div>
      <div className="flex flex-wrap justify-center gap-1 md:gap-4 overflow-hidden h-fit pb-1 md:pb-6">
        <TextSideAnimation paddingBottom="pb-1 md:pb-2" text={"Category"} />
        <motion.div
          whileInView={{ width: targetWidth, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          initial={{ width: 0, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
          className="h-14 md:h-28 relative overflow-hidden flex justify-center rounded-xl md:rounded-3xl"
        >
          <div className="size-14 md:size-28 relative shrink-0">
            <Image
              src={heroLogo}
              alt="background"
              fill
              sizes="(max-width: 768px) 44px, 112px"
              className="object-cover"
            />
          </div>
        </motion.div>
        <TextSideAnimation text="Leaders" />
      </div>
    </div>
  );
}
