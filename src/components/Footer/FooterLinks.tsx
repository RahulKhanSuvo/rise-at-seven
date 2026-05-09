"use client";

import React from "react";

const LINK_COLUMNS = [
  [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Culture", href: "/culture" },
    {
      label: "Meet The Risers",
      href: "/meet-the-team/",
    },
  ],
  [
    { label: "Testimonials", href: "/testimonials/" },
    { label: "Blog & Resources", href: "/blog/" },
    { label: "Webinars", href: "/webinars/" },
    { label: "Careers", href: "/careers/" },
  ],
  [
    { label: "Sheffield", href: "https://g.co/kgs/4Br7JaS" },
    { label: "Manchester", href: "https://g.co/kgs/9vh5imK" },
    { label: "London", href: "https://g.co/kgs/hsv6LhR" },
    { label: "New York", href: "https://g.co/kgs/NxzhAKU" },
    { label: "Contact", href: "/contact/" },
  ],
];

export default function FooterLinks() {
  return (
    <>
      {LINK_COLUMNS.map((column, idx) => (
        <div
          key={idx}
          className="flex flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 w-1/2 md:w-auto"
        >
          {column.map((link) => (
            <FooterLink key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      ))}
    </>
  );
}

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="group inline-flex text-white font-medium tracking-tight leading-tight text-lg lg:text-xl hover:text-mint transition-colors"
    >
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-300 group-hover:-translate-y-7">
          {label}
        </div>
        <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-7 group-hover:translate-y-0">
          {label}
        </div>
      </div>
    </a>
  );
}
