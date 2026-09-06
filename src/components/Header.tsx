"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleLogoClick(event: MouseEvent) {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className={`zm-header${stuck ? " zm-stuck" : ""}`}>
      <nav className="zm-nav">
        <Link href="/" onClick={handleLogoClick} className="zm-brand">
          zafaye media<i>.</i>
        </Link>

        <ul className={`zm-nav-links${open ? " zm-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="zm-nav-cta">
          book a call
        </Link>

        <button
          type="button"
          className="zm-burger"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
