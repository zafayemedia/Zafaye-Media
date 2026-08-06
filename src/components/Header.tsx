import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="relative z-40 px-6 py-6 md:py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center md:grid-cols-3">
        <Link href="/" className="font-display justify-self-start text-sm tracking-[0.15em] text-white md:text-base">
          ZAFAYE MEDIA
        </Link>

        <nav className="hidden items-center justify-self-center gap-8 md:flex">
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

        <Link
          href="/contact"
          className="font-display justify-self-end rounded-full bg-zafaye-orange px-5 py-2.5 text-xs uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </div>

      <nav className="mt-4 flex items-center justify-center gap-6 md:hidden">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-display text-[10px] uppercase tracking-[0.1em] text-steel hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
