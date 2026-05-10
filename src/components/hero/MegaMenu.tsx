"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface SubLink {
  label: string;
  href: string;
}

interface NavLink {
  id: number;
  label: string;
  href: string;
  subLinks?: SubLink[];
}

interface MegaMenuProps {
  activeId: number | boolean;
  onClose: () => void;
  links: NavLink[];
}

export default function MegaMenu({ activeId, onClose, links }: MegaMenuProps) {
  const activeLink = links.find((l) => l.id === activeId);
  const [hoveredSubLink, setHoveredSubLink] = useState<number | null>(0);

  if (!activeLink || !activeLink.subLinks) return null;

  return (
    <div
      className="fixed inset-0 z-40 pointer-events-none hidden lg:block"
      onMouseLeave={onClose}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/5 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      />

      {/* Menu Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 pointer-events-auto"
      >
        <div className="bg-white rounded-4xl shadow-2xl overflow-hidden flex min-h-[400px]">
          {/* Links Section */}
          <div className="flex-1 p-12 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col gap-y-6">
                <span className="text-grey-300 text-sm font-medium tracking-tight">
                  {activeLink.label === "Services" ? "Core Services" : ""}
                </span>
                <ul className="flex flex-col gap-y-2">
                  {activeLink.subLinks
                    .slice(0, 4)
                    .map((sub: SubLink, i: number) => (
                      <li key={i}>
                        <SubLinkItem
                          {...sub}
                          onHover={() => setHoveredSubLink(i)}
                        />
                      </li>
                    ))}
                </ul>
              </div>
              <div className="flex flex-col gap-y-6 pt-5">
                <ul className="flex flex-col gap-y-2">
                  {activeLink.subLinks
                    .slice(4)
                    .map((sub: SubLink, i: number) => (
                      <li key={i + 4}>
                        <SubLinkItem
                          {...sub}
                          onHover={() => setHoveredSubLink(i + 4)}
                        />
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href={activeLink.href}
                className="group inline-flex items-center gap-x-2 bg-grey-900 text-white px-6 py-3 rounded-full text-sm font-medium transition-all hover:rounded-xl"
              >
                <span>View all {activeLink.label.toLowerCase()}</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Media Section */}
          <div className="w-80 p-3 shrink-0">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-grey-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredSubLink}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={`https://picsum.photos/seed/${activeLink.id}-${hoveredSubLink}/800/800`}
                    alt="Menu Image"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SubLinkItem({
  label,
  href,
  onHover,
}: SubLink & { onHover: () => void }) {
  return (
    <Link
      href={href}
      onMouseEnter={onHover}
      className="group flex flex-col relative py-1"
    >
      <div className="relative overflow-hidden h-8">
        <div className="transition-transform duration-300 group-hover:-translate-y-8 text-2xl font-medium tracking-tight">
          {label}
        </div>
        <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-8 group-hover:translate-y-0 text-2xl font-medium tracking-tight">
          {label}
        </div>
      </div>
    </Link>
  );
}
