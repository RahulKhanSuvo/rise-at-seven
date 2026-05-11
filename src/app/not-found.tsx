import Link from "next/link";
import Button from "@/common/Button";

export const metadata = {
  title: "404 — Page Not Found | Rise at Seven",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Large ghost "404" background text */}
      <span
        aria-hidden="true"
        className="absolute select-none pointer-events-none font-black text-[clamp(8rem,30vw,22rem)] leading-none text-grey-900/5"
      >
        404
      </span>

      {/* Accent dot */}
      <div className="w-2 h-2 rounded-full bg-primary mb-8" />

      {/* Eyebrow */}
      <p className="uppercase tracking-widest text-xs font-semibold text-grey-400 mb-4">
        Error 404
      </p>

      {/* Headline */}
      <h1 className="font-black text-grey-900 text-[clamp(2.5rem,8vw,6rem)] leading-none tracking-tighter mb-6">
        Page not <br />
        <span className="italic font-light">found.</span>
      </h1>

      {/* Sub-copy */}
      <p className="text-grey-400 max-w-sm text-base leading-relaxed mb-10">
        The page you&apos;re looking for has moved, been removed, or never
        existed. Let&apos;s get you back on track.
      </p>

      {/* CTA */}
      <Button href="/" text="Back to Home" variant="solid" />

      {/* Subtle bottom link */}
      <Link
        href="/connect-with-us/"
        className="mt-6 text-sm text-grey-400 underline underline-offset-4 hover:text-grey-900 transition-colors duration-200"
      >
        Get in touch instead →
      </Link>
    </main>
  );
}
