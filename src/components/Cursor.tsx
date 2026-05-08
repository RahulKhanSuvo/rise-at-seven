"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight, Search, ChartLine, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  ArrowUpRight,
  Search,
  ChartLine,
};

export default function Cursor() {
  const [cursorState, setCursorState] = useState({
    active: false,
    icon: "ArrowUpRight",
  });

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

    const handleComponentCursor = (e: Event) => {
      const customEvent = e as CustomEvent<{ active: boolean; icon: string }>;
      setCursorState(customEvent.detail);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener(
      "component-cursor",
      handleComponentCursor as EventListener,
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener(
        "component-cursor",
        handleComponentCursor as EventListener,
      );
    };
  }, [mouseX, mouseY]);

  const IconComponent = icons[cursorState.icon] || ArrowUpRight;

  return (
    <motion.div
      className="fixed top-0 left-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white pointer-events-none z-9999"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{ scale: 0 }}
      animate={{
        scale: cursorState.active ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <IconComponent className="text-black" size={32} />
    </motion.div>
  );
}
