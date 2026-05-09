import Agencies from "@/components/agencyLogoMrq/Agencies";
import FeaturedWork from "@/components/Featured/FeaturedWork";
import Hero from "@/components/hero/Hero";
import TopBar from "@/components/hero/TopBar";
import OurServices from "@/components/OurServices/OurServices";
import BriefMarquee from "@/components/BriefMarquee/BriefMarquee";
import LegacySection from "@/components/Legacy/LegacySection";
import ReadyToRise from "@/components/ReadyToRise/ReadyToRise";
import WhatsNew from "@/components/whatsNew/WhatsNew";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <Agencies />
      <div id="featured-work">
        <FeaturedWork />
      </div>
      <OurServices />
      <BriefMarquee />
      <div id="legacy-section">
        <LegacySection />
      </div>
      <WhatsNew />
      <ReadyToRise />
      <Footer />
    </>
  );
}
