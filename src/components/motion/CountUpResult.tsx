"use client";

import { useEffect, useState } from "react";

// Only a plain number, optionally with a decimal and a short letter/percent
// suffix, is safe to animate ("8.4x" -> 8.4 with an "x" suffix, "7x" -> 7).
// Ranges ("PKR 80-100"), arrows ("0 → 4-5/day") and worded results
// ("Full-service") never match and render exactly as given, unanimated.
function parseValue(value: string) {
  const match = /^(\d+(?:\.\d+)?)([a-zA-Z%]{0,3})$/.exec(value.trim());
  if (!match) return null;
  const [, numeric, suffix] = match;
  const decimals = (numeric.split(".")[1] || "").length;
  return { target: parseFloat(numeric), decimals, suffix };
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function CountUpResult({ value }: { value: string }) {
  const parsed = parseValue(value);
  const [node, setNode] = useState<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<number | null>(() => {
    if (!parsed) return null;
    return prefersReducedMotion() ? parsed.target : 0;
  });

  useEffect(() => {
    if (!parsed || !node) return;
    if (display === parsed.target) return; // already at rest (reduced motion, or finished)

    let started = false;

    function run() {
      if (started) return;
      started = true;

      const duration = 900;
      const start = performance.now();

      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(parsed!.target * eased);
        if (progress < 1) requestAnimationFrame(tick);
        else setDisplay(parsed!.target);
      }

      requestAnimationFrame(tick);
      observer.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) run();
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    // Safety net — see SectionObserver for why. A result stuck at zero
    // forever is worse than one that counts up late.
    const fallback = window.setTimeout(run, 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node, value]);

  if (!parsed || display === null) return <>{value}</>;

  return (
    <span ref={setNode}>
      {display.toFixed(parsed.decimals)}
      {parsed.suffix}
    </span>
  );
}
