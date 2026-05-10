"use client";
import Image from "next/image";
import heroImage1 from "@/assets/background/RedBull.webp";
import heroImage2 from "@/assets/background/Pooky-Rechargable.webp";
import heroImage3 from "@/assets/background/unnamed-6.webp";
import heroImage4 from "@/assets/background/Emirates-airpline-in-flight.webp";
import heroImage5 from "@/assets/background/Screenshot-2025-07-01-at-21.36.35.webp";
import heroImage6 from "@/assets/background/spaseekers.webp";
import { useState, useEffect } from "react";
import AchievementBadges from "./AchievementBadges";
import HeroBigText from "./HeroBigText";
import PlatformLogo from "./PlatformLogo";
import Navbar from "./Navbar";

const images = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
];

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
          sizes="100vw"
          priority
          className="object-cover rounded-4xl scale-105"
        />
        <div className="absolute inset-0 backdrop-blur-md" />
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gray-900/30" />

        {/* NAVBAR */}
        <Navbar />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-2 h-full items-center justify-center text-white">
          <p className="uppercase text-sm font-semibold leading-tight tracking-[0.1px] max-w-52 text-balance text-center mb-2 text-white">
            #1 Most recommended content marketing agency
          </p>
          <AchievementBadges />
          <HeroBigText heroLogo={bg} />
          <p className="text-white font-medium tracking-tight text-lg md:text-xl lg:text-3xl">
            on every searchable platform
          </p>
          <PlatformLogo />
        </div>
      </div>
      <div className="absolute z-40 bottom-6 left-6 right-6 ">
        <div className="flex gap-5 justify-between text-white">
          <p className="text-wrap text-sm text-start">
            Organic media planners creating, distributing &amp; <br />{" "}
            optimizing search-first content for SEO, Social, PR, Ai and LLM
            search
          </p>
          <p className="text-wrap text-sm text-end">
            4 Global Offices serving <br />
            UK, USA (New York) & EU
          </p>
        </div>
      </div>
    </section>
  );
}
