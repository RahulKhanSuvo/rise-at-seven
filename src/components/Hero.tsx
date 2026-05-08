"use client";
import Image from "next/image";
import heroImage1 from "@/assets/background/RedBull.webp";
import heroImage2 from "@/assets/background/Pooky-Rechargable.webp";
import heroImage3 from "@/assets/background/unnamed-6.webp";
import heroImage4 from "@/assets/background/Emirates-airpline-in-flight.webp";
import { useState, useEffect } from "react";
const images = [heroImage1, heroImage2, heroImage3, heroImage4];
export default function Hero() {
  const [bg, setBg] = useState(images[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const nextBg = images[randomIndex];
    const timeoutId = setTimeout(() => {
      setBg(nextBg);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <section className="w-full h-screen-fix h-svh relative p-2">
      <div className="w-full h-full bg-red-100 relative rounded-3xl overflow-hidden">
        <Image
          src={bg}
          alt="Hero background"
          fill
          priority
          className="object-cover rounded-3xl"
        />

        <div className="absolute inset-0 backdrop-blur-md" />

        <div className="relative z-10 flex h-full items-center justify-center text-white">
          <p className="uppercase text-xs font-medium leading-tight tracking-tightish max-w-52 text-balance text-center mb-2 text-white">
            #1 Most recommended content marketing agency
          </p>
          <div></div>
        </div>
      </div>
    </section>
  );
}
