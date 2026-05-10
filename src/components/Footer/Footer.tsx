"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import NewsletterSection from "./NewsletterSection";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import FooterBottomBar from "./FooterBottomBar";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  // Background grows from 0% → 100% as footer enters viewport (top hits 100% → bottom hits bottom)
  const { scrollYProgress: bgProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const backgroundHeight = useTransform(bgProgress, [0, 1], ["0%", "100%"]);

  // Content fades in as footer scrolls from top-80% to bottom-110%
  const { scrollYProgress: contentProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 110%"],
  });
  const contentOpacity = useTransform(contentProgress, [0, 1], [0, 1]);

  return (
    // Outer wrapper: p-2 grid so children can use col/row placement
    <footer ref={containerRef} className="p-2 grid relative mt-8 lg:mt-0">
      {/* ── Layer 1: Animated background (absolute, grows in height) ── */}
      <div
        className="absolute top-0 left-0 w-full p-2 flex pointer-events-none overflow-hidden rounded-3xl"
        style={{ bottom: 0 }}
      >
        <motion.div
          style={{ height: backgroundHeight }}
          className="w-full bg-grey-900 rounded-3xl self-start"
        />
      </div>

      {/* ── Layer 2: Content (sits on top, fades in) ── */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 grid grid-cols-12 pt-14 pb-6 lg:py-10 px-4 md:px-7 gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-7"
      >
        {/* Newsletter and Socials */}
        <div className="flex flex-col items-start justify-start col-span-12 mb-10 lg:mb-0 lg:col-span-4 gap-y-3 md:gap-y-5">
          <NewsletterSection />
        </div>

        {/* Links Columns */}
        <div className="flex justify-between col-span-12 flex-wrap md:flex-row md:col-span-11 lg:col-span-6 lg:col-start-6 gap-y-10">
          <FooterLinks />
        </div>

        {/* Big Logo */}
        <div className="col-span-12 mt-10 lg:mt-32">
          <FooterLogo />
        </div>

        {/* Bottom Bar */}
        <div className="col-span-12 flex justify-between flex-col mt-10 items-end md:flex-row lg:items-center lg:mt-0">
          <FooterBottomBar />
        </div>
      </motion.div>
    </footer>
  );
}
