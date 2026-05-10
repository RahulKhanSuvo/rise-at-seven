"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Handle stop/start events
    const handleStop = () => lenis.stop();
    const handleStart = () => lenis.start();

    window.addEventListener("lenis-stop", handleStop);
    window.addEventListener("lenis-start", handleStart);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("lenis-stop", handleStop);
      window.removeEventListener("lenis-start", handleStart);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
