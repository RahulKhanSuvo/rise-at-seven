"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useScroll, useMotionValueEvent, motion } from "motion/react";

// Modular Imports
import { navLinks } from "@/constants/navigation";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import {
  NavLink,
  GetInTouchButton,
  MobileMenuButton,
} from "./NavbarComponents";

export default function Navbar() {
  const [hideHeaderBackground, setHideHeaderBackground] = useState(true);
  const [megaMenu, setMegaMenu] = useState<number | boolean>(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isOverridden, setIsOverridden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    if (latest > 50) {
      setHideHeaderBackground(false);
      setIsAtTop(false);
    } else {
      setHideHeaderBackground(true);
      setIsAtTop(true);
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const shouldHide = entries.some((entry) => entry.isIntersecting);
        setIsOverridden(shouldHide);
      },
      {
        threshold: 0.05,
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    const targetIds = ["featured-work", "legacy-section"];
    targetIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenu]);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full z-50 lg:p-4 transition-all duration-500",
        isVisible && !isOverridden ? "translate-y-0" : "-translate-y-full",
        isAtTop ? "absolute" : "fixed",
      )}
    >
      <nav
        className={cn(
          "w-full flex items-center justify-between relative z-20 p-4 transition-all duration-500 lg:px-3 lg:rounded-full",
          !hideHeaderBackground
            ? "bg-white/60 backdrop-blur-lg shadow-sm"
            : "bg-transparent",
          !isAtTop ? "py-2 md:py-4" : "",
        )}
      >
        {/* Logo */}
        <Logo isDark={!hideHeaderBackground} />

        {/* Desktop Links */}
        <div className="relative ml-10 group/links hidden lg:inline-flex items-center">
          <div
            className={cn(
              "bg-white/50 backdrop-blur-md z-0 h-full rounded-full absolute pointer-events-none transition-all duration-300",
              megaMenu !== false ? "opacity-100" : "opacity-0",
            )}
          />

          {navLinks.map((link) => (
            <div className="relative" key={link.id}>
              <NavLink
                {...link}
                isDark={!hideHeaderBackground}
                isActive={megaMenu === link.id}
                onHover={() => setMegaMenu(link.id)}
                onLeave={() => setMegaMenu(false)}
              />
              {megaMenu === link.id && (
                <motion.div
                  layoutId="nav-link"
                  className="absolute inset-0 w-full h-full bg-white rounded-full pointer-events-none"
                />
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:inline-flex">
            <GetInTouchButton isDark={!hideHeaderBackground} />
          </div>

          <MobileMenuButton
            isOpen={mobileMenu}
            isDark={!hideHeaderBackground}
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      <MobileMenu
        isOpen={mobileMenu}
        onClose={() => setMobileMenu(false)}
        links={navLinks}
      />
    </div>
  );
}
