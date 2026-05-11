import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  label: string;
  href: string;
  hasPlus?: boolean;
  hasBadge?: number;
  isDark: boolean;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export function NavLink({
  label,
  href,
  hasPlus,
  hasBadge,
  isDark,
  isActive,
  onHover,
  onLeave,
}: NavLinkProps) {
  return (
    <div className="z-10 relative">
      <Link
        href={href}
        onMouseOver={onHover}
        onMouseLeave={onLeave}
        className={cn(
          "group inline-flex items-center tracking-tight leading-tight font-semibold relative duration-300 text-lg px-3.5 transition-colors",
          !isDark && !isActive ? "text-white" : "text-black",
        )}
      >
        {label}
        {hasPlus && (
          <span className="hidden ml-1 pointer-events-none pointer-fine:inline">
            +
          </span>
        )}
        {hasBadge && (
          <div className="inline-flex pointer-events-none absolute top-0 right-0 -translate-y-2 rounded-full px-1.5 py-0.5 text-[10px] font-thin transition group-hover:-translate-y-3 bg-mint text-grey-900">
            {hasBadge}
          </div>
        )}
      </Link>
    </div>
  );
}

export function GetInTouchButton({
  isDark,
  className,
}: {
  isDark: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/connect-with-us/"
      className={cn(
        "group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tight capitalize font-medium overflow-hidden border border-transparent cursor-pointer text-base px-6 py-3 rounded-3xl transition-all duration-300 hover:rounded-xl",
        !isDark ? "bg-white text-grey-900" : "bg-grey-900 text-white",
        className,
      )}
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
  );
}

export function MobileMenuButton({
  isOpen,
  isDark,
  onClick,
}: {
  isOpen: boolean;
  isDark: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="lg:hidden inline-flex items-center justify-center w-12 h-8"
      onClick={onClick}
    >
      <div className="flex w-5 h-2.5 flex-col items-start justify-between">
        <div
          className={cn(
            "w-full h-0.5 transition-all duration-500 transform",
            !isDark ? "bg-white" : "bg-grey-900",
            isOpen ? "rotate-45 translate-y-1" : "rotate-0",
          )}
        />
        <div
          className={cn(
            "w-full h-0.5 transition-all duration-500 transform",
            !isDark ? "bg-white" : "bg-grey-900",
            isOpen ? "-rotate-45 -translate-y-1" : "rotate-0",
          )}
        />
      </div>
    </button>
  );
}
