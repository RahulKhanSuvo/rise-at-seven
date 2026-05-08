"use client";
import Image from "next/image";
import heroImage1 from "@/assets/background/RedBull.webp";
import heroImage2 from "@/assets/background/Pooky-Rechargable.webp";
import { useState, useEffect } from "react";
const images = [heroImage1, heroImage2];
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
      <Image
        src={bg}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-center justify-center text-white">
        <h1 className="text-5xl font-bold">Hero Section</h1>
      </div>
    </section>
  );
}
