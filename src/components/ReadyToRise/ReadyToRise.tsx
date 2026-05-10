"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const TEXT = "Ready To Rise At Seven?";
const CHARS = TEXT.split("").map((ch, i) => ({ ch, i }));
const TOTAL = CHARS.length;

interface CharProps {
  char: string;
  charIndex: number;
  scrollYProgress: MotionValue<number>;
}

function Char({ char, charIndex, scrollYProgress }: CharProps) {
  // 🔥 tighter + more natural stagger
  const start = 0.05 + (charIndex / (TOTAL - 1)) * 0.5;
  const end = Math.min(start + 0.2, 0.98);

  const ease = (t: number) => {
    const s = 4 * 1.4;
    if ((t *= 2) < 1) return 0.5 * (t * t * ((s + 1) * t - s));
    return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
  };

  const y = useTransform(scrollYProgress, (p) => {
    let t = (p - start) / (end - start);
    t = Math.max(0, Math.min(1, t));
    const e = ease(t);

    return `${-22 + e * 22}%`;
  });

  const rotate = useTransform(scrollYProgress, (p) => {
    let t = (p - start) / (end - start);
    t = Math.max(0, Math.min(1, t));
    const e = ease(t);

    // 🔥 STRONG, CLEAR rotation (this is the key fix)
    return (1 - e) * 8;
  });

  if (char === " ") {
    return <span className="inline-block w-[0.28em]" />;
  }

  return (
    <motion.span
      className="inline-block will-change-transform"
      style={{
        y,
        rotate,
      }}
      aria-hidden="true"
    >
      {char}
    </motion.span>
  );
}

export default function ReadyToRise() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const [dims, setDims] = useState({ hw: 0, ww: 1440, wh: 900 });

  useEffect(() => {
    const measure = () => {
      if (headingRef.current) {
        setDims({
          hw: headingRef.current.offsetWidth,
          ww: window.innerWidth,
          wh: window.innerHeight,
        });
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { hw, ww } = dims;

  const xStart = hw > 0 ? hw - ww + ww * 0.5 : ww * 0.75;
  const xEnd = hw > 0 ? -(hw - ww + 1000) : -ww * 0.5;

  const x = useTransform(scrollYProgress, [0, 0.88], [xStart, xEnd]);
  const y = useTransform(scrollYProgress, [0, 0.88], [150, 400]);

  return (
    <section
      ref={sectionRef}
      className="w-full  hidden lg:block h-screen overflow-hidden bg-[#efeeec] relative"
    >
      <motion.div
        ref={headingRef}
        style={{ x, y }}
        className="absolute whitespace-nowrap will-change-transform"
      >
        <span className="text-[16vw] font-medium tracking-tight leading-tight text-black select-none">
          {CHARS.map(({ ch, i }) => (
            <Char
              key={i}
              char={ch}
              charIndex={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </span>
      </motion.div>
    </section>
  );
}
