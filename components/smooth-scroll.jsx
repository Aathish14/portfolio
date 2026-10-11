"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { updateScroll } from "@/lib/scroll-bus";

export default function SmoothScroll({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
    });

    lenis.on("scroll", () => {
      updateScroll(lenis);
    });

    // Initial update
    updateScroll(lenis);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
