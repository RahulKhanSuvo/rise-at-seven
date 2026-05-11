"use client";
import { StaticImageData } from "next/image";
import TextSideAnimation from "../../common/TextSideAnimation";
import { useState, useCallback } from "react";
import { useCustomResize } from "@/hook/useCustomResize";
import AnimatedLogo from "@/common/AnimatedLogo";

export default function HeroBigText({
  heroLogo,
}: {
  heroLogo: StaticImageData;
}) {
  const [targetWidth, setTargetWidth] = useState(50);

  useCustomResize(
    useCallback(() => {
      if (window.innerWidth >= 1024) {
        // desktop
        setTargetWidth(112);
      } else if (window.innerWidth >= 768) {
        // tablet
        setTargetWidth(80);
      } else {
        // mobile
        setTargetWidth(55);
      }
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
        <AnimatedLogo src={heroLogo} size={targetWidth} />
        <TextSideAnimation text="Leaders" />
      </div>
    </div>
  );
}
