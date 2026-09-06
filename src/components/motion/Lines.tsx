"use client";

import { useEffect, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

// Headline line reveal: each line starts translated fully below its own
// clipped box and rises into place, staggered per line. Runs once, on
// scroll into view (or immediately on mount if already in view, which
// covers hero headlines on load). Renders the final state immediately
// under prefers-reduced-motion.
export default function Lines({
  lines,
  className = "",
  as = "p",
  style,
}: {
  lines: ReactNode[];
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
}) {
  const Tag = as;
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [shown, setShown] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (shown || !node) return;

    // Elements already in view at mount (hero headlines) still get their
    // guaranteed initial callback from IntersectionObserver, so this
    // covers both "on load" and "on scroll" with the same code path.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);

    // Safety net — see SectionObserver for why. A headline stuck invisible
    // forever is worse than one that reveals late.
    const fallback = window.setTimeout(() => setShown(true), 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [node, shown]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={setNode as any} className={className} style={style}>
      {lines.map((line, i) => (
        <span className="zm-line" key={i}>
          <span
            className={`zm-line-inner${shown ? " zm-shown" : ""}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
