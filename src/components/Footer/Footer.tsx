"use client";

import { useEffect, useRef, useState } from "react";

import NewsletterSection from "./NewsletterSection";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import FooterBottomBar from "./FooterBottomBar";

export default function Footer() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const p = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="text-white pt-20 px-4 pb-2 md:px-2 w-full overflow-hidden flex flex-col items-center">
      {/* scroll trigger wrapper */}
      <div ref={wrapperRef} className="w-full">
        {/* animated reveal container */}
        <div
          className="w-full bg-[#111212] rounded-3xl px-6.5 py-8 transition-transform"
          style={{
            transform: `translateY(${(1 - progress) * 80}px)`,
            opacity: progress,
          }}
        >
          {/* content */}
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-0">
              <NewsletterSection />
              <FooterLinks />
            </div>

            <FooterLogo />
            <FooterBottomBar />
          </div>
        </div>
      </div>
    </footer>
  );
}
