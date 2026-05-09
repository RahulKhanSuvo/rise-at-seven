import Agencies from "@/components/agencyLogoMrq/Agencies";
import FeaturedWork from "@/components/Featured/FeaturedWork";
import Hero from "@/components/hero/Hero";
import TopBar from "@/components/hero/TopBar";
import OurServices from "@/components/OurServices/OurServices";

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <Agencies />
      <FeaturedWork />
      <OurServices />
    </>
  );
}
