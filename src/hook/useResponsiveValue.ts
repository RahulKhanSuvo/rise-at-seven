"use client";

import { useState, useEffect } from "react";

/** Standard Tailwind breakpoints in px */
export const BREAKPOINTS = {
  "2xl": 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * Returns a value that updates whenever the window is resized.
 *
 * @param breakpointMap  Record of breakpoint → value, evaluated largest-first.
 * @param defaultValue   Value used when no breakpoint matches (i.e. mobile/xs).
 *
 * @example
 * // spaceBetween: 140 on 2xl, 120 on xl, 90 on lg, 70 on md, 40 below md
 * const spaceBetween = useResponsiveValue(
 *   { "2xl": 140, xl: 120, lg: 90, md: 70 },
 *   40
 * );
 *
 * @example
 * // targetWidth: 112 on md+, 44 below md
 * const targetWidth = useResponsiveValue({ md: 112 }, 44);
 */
export function useResponsiveValue<T>(
  breakpointMap: Partial<Record<Breakpoint, T>>,
  defaultValue: T,
): T {
  // Sort breakpoints largest → smallest so first match wins
  const sorted = (Object.keys(breakpointMap) as Breakpoint[]).sort(
    (a, b) => BREAKPOINTS[b] - BREAKPOINTS[a],
  );

  const resolve = (): T => {
    if (typeof window === "undefined") return defaultValue;
    const width = window.innerWidth;
    for (const bp of sorted) {
      if (width >= BREAKPOINTS[bp]) {
        return breakpointMap[bp] as T;
      }
    }
    return defaultValue;
  };

  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const update = () => setValue(resolve());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
}
