"use client";

import { useEffect, useRef } from "react";

export default function AuroraBlobs() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = layerRef.current;
        if (el) {
          const offset = window.scrollY * 0.06;
          el.style.transform = `translate3d(0, ${offset}px, 0)`;
        }
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="aurora-field" aria-hidden="true">
      <div ref={layerRef} className="aurora-parallax-layer">
        <div className="aurora-blob aurora-blob-blue h-[36rem] w-[36rem] -left-40 -top-32" />
        <div className="aurora-blob aurora-blob-royal h-[30rem] w-[30rem] -right-32 top-1/3" />
        <div className="aurora-grid" />
        <svg
          className="aurora-wave"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="aurora-wave-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-signal-blue)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--color-signal-blue)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--color-deep-royal)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M -100 160 C 150 60, 350 260, 600 150 S 1050 40, 1300 150"
            fill="none"
            stroke="url(#aurora-wave-gradient)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}
