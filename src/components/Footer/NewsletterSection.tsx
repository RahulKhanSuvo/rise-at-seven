"use client";

import React from "react";
import {
  ArrowUpRight,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

export default function NewsletterSection() {
  return (
    <>
      <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-2xl/none xl:text-3xl/none 4xl:text-4xl/none font-medium tracking-tight js-heading">
        Stay updated with Rise news
      </h2>

      <form className="w-full relative">
        <input
          type="email"
          required
          name="email"
          className="appearance-none transition bg-grey-400 rounded-full w-full text-white font-medium tracking-tight leading-none text-lg px-5 py-4 lg:text-xl lg:px-6 lg:py-5 placeholder:text-white/50 focus:outline-none focus:ring-3 focus:ring-white/15"
          placeholder="Your Email Address"
        />

        <div className="absolute top-0 right-0 p-2">
          <button
            type="submit"
            className="size-9 bg-mint text-grey-900 text-md rounded-full flex items-center justify-center cursor-pointer transition lg:size-13 lg:text-lg hover:bg-white hover:rotate-90"
          >
            <ArrowUpRight size={20} />
          </button>
        </div>
      </form>

      <div className="flex gap-1">
        <SocialLink
          href="https://www.facebook.com/riseatseven"
          icon={<Facebook size={12} />}
        />
        <SocialLink
          href="https://x.com/riseatseven"
          icon={<Twitter size={12} />}
        />
        <SocialLink
          href="https://www.linkedin.com/company/riseatseven/"
          icon={<Linkedin size={12} />}
        />
        <SocialLink
          href="https://www.youtube.com/channel/UCAjOP9BgpZPTgae-QT9HGCw"
          icon={<Youtube size={12} />}
        />
        <SocialLink
          href="https://www.instagram.com/riseatseven/"
          icon={<Instagram size={12} />}
        />
      </div>
    </>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-x-2.5 rounded-xl text-xs px-2 py-1 transition-all hover:rounded-sm bg-white text-grey-900 group"
    >
      <div className="inline-flex items-center">{icon}</div>
      <ArrowUpRight
        size={12}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
