import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function NewsletterSection() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <h3 className="text-[1.35rem] font-medium text-white tracking-tight">
        Stay updated with Rise news
      </h3>
      <div className="relative flex items-center">
        <input
          type="email"
          placeholder="Your Email Address"
          className="w-full bg-[#2a2a2a] text-[#8e8e8e] placeholder-[#8e8e8e] rounded-full py-3.5 px-6 pr-14 focus:outline-none focus:ring-1 focus:ring-[#98f6d4] text-sm"
          suppressHydrationWarning
        />
        <button
          className="absolute right-1.5 p-2 bg-[#98f6d4] rounded-full text-black hover:bg-white transition-colors"
          aria-label="Subscribe"
        >
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </button>
      </div>

      <div className="flex items-center gap-2 mt-1">
        <SocialLink href="#" label="f" />
        <SocialLink href="#" label="x" />
        <SocialLink href="#" label="in" />
        <SocialLink href="#" label="y" />
        <SocialLink href="#" label="t" />
        <SocialLink href="#" label="ig" />
      </div>
    </div>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="flex items-center justify-between bg-white text-black rounded-full px-2 py-1 gap-1 hover:bg-[#98f6d4] transition-colors"
    >
      <span className="text-[10px] font-bold leading-none">{label}</span>
      <ArrowUpRight size={10} strokeWidth={3} />
    </a>
  );
}
