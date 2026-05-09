import NewsletterSection from "./NewsletterSection";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import FooterBottomBar from "./FooterBottomBar";

export default function Footer() {
  return (
    <footer className=" text-white pt-20 px-4 pb-2 md:px-2 w-full overflow-hidden flex flex-col items-center">
      <div className="w-full bg-[#111212] rounded-3xl px-6.5 py-8">
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
