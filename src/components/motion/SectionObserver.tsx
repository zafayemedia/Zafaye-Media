"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Mounted once in the root layout. Watches every section-level block
// (hero, page header, numbered section, closing CTA) and adds a single
// `zm-inview` class the first time it scrolls into view — never removed,
// so nothing replays. The section-divider draw-in, the label/body fade,
// and the card-grid stagger are all plain CSS keyed off that one class,
// so no other page needs its own observer or markup changes.
//
// Re-runs on every route change (the layout itself never remounts in the
// App Router, so without the pathname dependency a client-side navigation
// would leave the new page's sections unobserved).
export default function SectionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".zm-hero, .zm-phead, .zm-sec, .zm-cta",
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("zm-inview"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("zm-inview");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2 },
    );

    targets.forEach((el) => observer.observe(el));

    // Safety net: page content must never be stuck permanently invisible if
    // IntersectionObserver is slow, unsupported, or the tab never fires a
    // paint (e.g. backgrounded). Reveal everything outstanding after a
    // generous delay — invisible far past this point on load, but a much
    // better failure mode than "never".
    const fallback = window.setTimeout(() => {
      targets.forEach((el) => el.classList.add("zm-inview"));
    }, 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
