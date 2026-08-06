import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-lg tracking-[0.15em] text-white">
          ZAFAYE MEDIA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm uppercase tracking-[0.1em] text-steel transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="font-display rounded-full bg-zafaye-orange px-5 py-2.5 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </div>

      <nav className="flex items-center justify-center gap-6 border-t border-white/10 py-3 md:hidden">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-display text-xs uppercase tracking-[0.1em] text-steel hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
