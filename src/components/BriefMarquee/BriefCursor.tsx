"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function BriefCursor() {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 350 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleCursor = (e: Event) => {
      const customEvent = e as CustomEvent<{ active: boolean; text?: string }>;
      setActive(customEvent.detail.active);
      setText(customEvent.detail.text || "");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener(
      "component-cursor-brief",
      handleCursor as EventListener,
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener(
        "component-cursor-brief",
        handleCursor as EventListener,
      );
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 bg-primary rounded-full flex items-center justify-center text-white pointer-events-none z-9999 px-6 py-2.5 text-base font-medium"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        borderRadius: "100px",
      }}
      initial={{ scale: 0 }}
      animate={{
        scale: active ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <span className="text-black font-semibold text-lg whitespace-nowrap tracking-tighter flex items-center gap-x-2">
        {text}
        <ArrowUpRight size={18} />
      </span>
    </motion.div>
  );
}
