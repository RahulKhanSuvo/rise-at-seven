"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

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
          icon={<FacebookIcon />}
        />
        <SocialLink href="https://x.com/riseatseven" icon={<XIcon />} />
        <SocialLink
          href="https://www.linkedin.com/company/riseatseven/"
          icon={<LinkedinIcon />}
        />
        <SocialLink
          href="https://www.youtube.com/channel/UCAjOP9BgpZPTgae-QT9HGCw"
          icon={<YoutubeIcon />}
        />
        <SocialLink
          href="https://www.instagram.com/riseatseven/"
          icon={<InstagramIcon />}
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

const FacebookIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.482h2.039L6.486 3.24H4.298l13.311 17.395z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
