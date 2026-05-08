import logo1 from "@/assets/platforms-logos/gogle.webp";
import logo2 from "@/assets/platforms-logos/chat-gpt.webp";
import logo3 from "@/assets/platforms-logos/gemini.webp";
import logo4 from "@/assets/platforms-logos/tiktok.webp";
import logo5 from "@/assets/platforms-logos/tiktok.webp";
import logo6 from "@/assets/platforms-logos/youtube.webp";
import logo7 from "@/assets/platforms-logos/facebook.webp";
import logo8 from "@/assets/platforms-logos/giphy.webp";
import logo9 from "@/assets/platforms-logos/reddit.webp";
import logo10 from "@/assets/platforms-logos/amazon.webp";
import Image from "next/image";

export default function PlatformLogo() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];
  return (
    <div>
      {logos.map((logo, index) => (
        <Image key={index} src={logo} alt="logo" />
      ))}
    </div>
  );
}
