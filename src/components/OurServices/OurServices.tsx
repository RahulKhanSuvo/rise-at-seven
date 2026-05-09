import AnimatedLogo from "@/common/AnimatedLogo";
import TextSideAnimation from "@/common/TextSideAnimation";
import heroLogo from "@/assets/banner/IMG_5079.webp";

export default function OurServices() {
  return (
    <section>
      {/* tile */}
      <div className="flex flex-wrap gap-2.5">
        <TextSideAnimation
          className="text-5xl md:text-7xl lg:text-8xl xl:text-[7.4rem]"
          text="Our"
        />
        <AnimatedLogo src={heroLogo} delay={0.8} />
        <TextSideAnimation
          className="text-5xl md:text-7xl lg:text-8xl xl:text-[7.4rem]"
          text="Services"
        />
      </div>
    </section>
  );
}
