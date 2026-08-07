"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function handleLogoClick(event: MouseEvent) {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:top-6">
      <div className="glass-nav mx-auto flex max-w-4xl items-center justify-between rounded-full px-5 py-3 md:px-7 md:py-3.5">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="font-display text-sm tracking-[0.15em] text-white md:text-base"
        >
          ZAFAYE MEDIA
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-xs uppercase tracking-[0.1em] text-steel transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="font-display rounded-full bg-zafaye-orange px-4 py-2 text-xs uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 md:px-5 md:py-2.5"
          >
            Get in touch
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="glass-nav mx-auto mt-2 flex max-w-4xl flex-col gap-1 rounded-3xl p-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.1em] text-steel transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
