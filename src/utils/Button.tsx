"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type AnimatedButtonProps = {
  href: string;
  text: string;
};

export default function Button({ href, text }: AnimatedButtonProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center overflow-hidden rounded-3xl bg-white px-6 py-3 text-base font-medium text-black transition-all duration-300 hover:rounded-xl"
    >
      <div className="relative h-6 overflow-hidden">
        {/* First Text */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: -24 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <span>{text}</span>
          <ArrowUpRight size={16} />
        </motion.div>

        {/* Second Text */}
        <motion.div
          initial={{ y: 24 }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0 flex items-center gap-2"
        >
          <span>{text}</span>
          <ArrowUpRight size={16} />
        </motion.div>
      </div>
    </Link>
  );
}
