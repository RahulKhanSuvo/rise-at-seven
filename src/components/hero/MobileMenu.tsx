import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";
import { MobileMenuButton } from "./NavbarComponents";
import { navLinks } from "@/constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: typeof navLinks;
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
}: MobileMenuProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div
      className={cn(
        "w-full h-svh fixed top-0 left-0 z-50 transition p-2 backdrop-blur-sm duration-1000 lg:hidden",
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      <div className="w-full h-full bg-grey-900/80 rounded-3xl px-4 py-2.5 flex flex-col items-start justify-between overflow-y-auto">
        <div className="w-full grid gap-y-10">
          <div className="w-full flex flex-wrap items-center justify-between">
            {/* Logo in Mobile Menu */}
            <Logo
              isDark={false}
              onClick={onClose}
              className="w-32 inline-flex md:w-40"
            />

            <div className="-mr-2">
              <MobileMenuButton
                isOpen={isOpen}
                isDark={false}
                onClick={onClose}
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-y-1">
            {links.map((link) => (
              <div key={link.id} className="w-full">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-white text-4xl tracking-tight font-medium leading-none md:text-5xl"
                  >
                    {link.label}
                  </Link>

                  {link.subLinks && (
                    <button
                      className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs border border-white border-solid transition",
                        activeAccordion === link.id ? "rotate-180" : "rotate-0",
                      )}
                      onClick={() => toggleAccordion(link.id)}
                    >
                      <ChevronDown size={14} />
                    </button>
                  )}
                </div>

                {link.subLinks && (
                  <AnimatePresence>
                    {activeAccordion === link.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-full overflow-hidden"
                      >
                        <div className="grid gap-y-1 py-4">
                          {link.subLinks.map((subLink, idx) => (
                            <Link
                              key={idx}
                              href={subLink.href}
                              onClick={onClose}
                              className="group inline-flex tracking-tight leading-tight font-medium relative text-white text-xl"
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
        </div>

        <Link
          href="https://riseatseven.com/connect-with-us/"
          onClick={onClose}
          className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tighter capitalize font-medium overflow-hidden border border-transparent cursor-pointer text-base px-6 py-3 rounded-3xl transition-all duration-300 pointer-fine:hover:rounded-xl bg-white text-grey-900 flex-row-reverse"
        >
          <div className="relative overflow-hidden h-5">
            <div className="transition-transform duration-300 group-hover:-translate-y-6 flex items-center gap-x-2">
              <span>Get in touch</span>
              <ArrowUpRight size={14} />
            </div>
            <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-6 group-hover:translate-y-0 flex items-center gap-x-2">
              <span>Get in touch</span>
              <ArrowUpRight size={14} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
