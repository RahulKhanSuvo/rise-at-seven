"use client";

import { useRef } from "react";
import { useScroll } from "motion/react";
import MobileSection from "./MobileSection";
import DesktopSection from "./DesktopSection";

export default function LegacySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="legacy-section" className="w-full py-0">
      <div className="w-full px-0">
        <MobileSection />
        <div
          ref={containerRef}
          className="w-full relative hidden lg:flex"
          style={{ height: "250vh" }}
        >
          <DesktopSection scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}
