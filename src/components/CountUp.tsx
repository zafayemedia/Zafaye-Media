"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(value: string) {
  const match = value.match(/-?\d+(\.\d+)?/);
  if (!match) return null;
  const target = parseFloat(match[0]);
  const decimals = match[1] ? match[1].length - 1 : 0;
  return {
    target,
    decimals,
    before: value.slice(0, match.index),
    after: value.slice((match.index ?? 0) + match[0].length),
  };
}

export default function CountUp({ value }: { value: string }) {
  const parsed = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(parsed ? parsed.target : null);

  useEffect(() => {
    if (!parsed || !ref.current) return;

    const el = ref.current;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started) return;
        started = true;
        setDisplay(0);

        const duration = 1100;
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
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!parsed || display === null) return <>{value}</>;

  return (
    <span ref={ref}>
      {parsed.before}
      {display.toFixed(parsed.decimals)}
      {parsed.after}
    </span>
  );
}
