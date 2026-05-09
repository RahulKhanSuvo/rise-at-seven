import NewsletterSection from "./NewsletterSection";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import FooterBottomBar from "./FooterBottomBar";

export default function Footer() {
  return (
    <footer className="bg-[#191919] text-white pt-20 px-6 md:px-12 w-full overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-[1440px]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-0">
          <NewsletterSection />
          <FooterLinks />
        </div>
        <FooterLogo />
        <FooterBottomBar />
      </div>
    </footer>
  );
}
