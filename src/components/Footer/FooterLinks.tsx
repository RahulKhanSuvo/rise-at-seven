import React from "react";

const FOOTER_LINKS = [
  ["Services", "Work", "About", "Culture", "Meet The Risers"],
  ["Testimonials", "Blog & Resources", "Webinars", "Careers"],
  ["Sheffield", "Manchester", "London", "New York", "Contact"],
];

export default function FooterLinks() {
  return (
    <div className="flex gap-16 lg:gap-28 w-full md:w-auto mt-12 md:mt-0 flex-wrap sm:flex-nowrap">
      {FOOTER_LINKS.map((col, idx) => (
        <div key={idx} className="flex flex-col gap-2.5">
          {col.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white hover:text-gray-300 transition-colors text-[15px] font-medium tracking-tight"
            >
              {link}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
