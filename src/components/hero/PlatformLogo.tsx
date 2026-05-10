import logo1 from "@/assets/platforms-logos/gogle.webp";
import logo2 from "@/assets/platforms-logos/chat-gpt.webp";
import logo3 from "@/assets/platforms-logos/gemini.webp";
import logo4 from "@/assets/platforms-logos/tiktok.webp";
import logo6 from "@/assets/platforms-logos/youtube.webp";
import logo8 from "@/assets/platforms-logos/giphy.webp";
import logo9 from "@/assets/platforms-logos/reddit.webp";
import logo10 from "@/assets/platforms-logos/amazon.webp";
import Image from "next/image";

export default function PlatformLogo() {
  const logos = [logo1, logo2, logo3, logo4, logo6, logo8, logo9, logo10];
  return (
    <div className="flex gap-14 items-center mt-8">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="h-[30px] w-[67px] flex items-center justify-center relative overflow-hidden"
        >
          <Image
            src={logo}
            alt="logo"
            fill
            sizes="67px"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
