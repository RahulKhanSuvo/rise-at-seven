"use client";
import AnimatedLogo from "@/common/AnimatedLogo";
import Button from "@/common/Button";
import TextSideAnimation from "@/common/TextSideAnimation";
import heroLogo from "@/assets/whatnew/FOS25-3380.webp";
import WhatsNewContent from "./whatsNewContent";
import { useCallback, useState } from "react";
import { useCustomResize } from "@/hook/useCustomResize";

export default function WhatsNew() {
  const [targetWidth, setTargetWidth] = useState<number>(55);
  useCustomResize(
    useCallback(() => {
      setTargetWidth(window.innerWidth >= 768 ? 90 : 55);
    }, []),
  );
  return (
    <section className="px-4 md:px-7 py-12 xl:py-24">
      {/* tile */}
      <div className="flex flex-col md:flex-row justify-between md:items-center md:border-b border-gray-300 pb-3 md:pb-5 gap-y-4">
        <div className="flex flex-wrap items-center gap-1 md:gap-2.5">
          <TextSideAnimation
            className="text-5xl md:text-7xl lg:text-8xl"
            text="What's"
          />
          <AnimatedLogo size={targetWidth} src={heroLogo} delay={0.8} />
          <TextSideAnimation
            className="text-5xl md:text-7xl lg:text-8xl"
            text="New"
          />
        </div>
        <div className="hidden md:flex justify-end">
          <Button href="#" text="Explore More Thoughts" />
        </div>
      </div>

      {/* content */}
      <div className="w-full">
        <WhatsNewContent />
      </div>

      <div className="mt-4   flex justify-center md:hidden w-full">
        <Button
          className="w-full lg:w-auto"
          href="#"
          text="Explore More Thoughts"
        />
      </div>
    </section>
  );
}
