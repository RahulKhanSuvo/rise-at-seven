import AnimatedLogo from "@/common/AnimatedLogo";
import TextSideAnimation from "@/common/TextSideAnimation";
import heroLogo from "@/assets/banner/IMG_5079.webp";
import Button from "@/common/Button";
import ServicesContent from "./ServicesContent";

export default function OurServices() {
  return (
    <section className="py-10 px-4 md:px-7">
      {/* tile */}
      <div className="flex justify-between items-center border-b border-gray-300 pb-3">
        <div className="flex flex-wrap gap-2.5">
          <TextSideAnimation
            className="text-5xl md:text-7xl lg:text-8xl "
            text="Our"
          />
          <AnimatedLogo size={90} src={heroLogo} delay={0.8} />
          <TextSideAnimation
            className="text-5xl md:text-7xl lg:text-8xl "
            text="Services"
          />
        </div>
        <Button href="#" text="Visit All Services" />
      </div>
      {/* content */}
      <div className="mt-10">
        <ServicesContent />
      </div>
    </section>
  );
}
