import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 pb-2 md:px-6 md:pt-6">
      <div className="glass-nav mx-auto flex max-w-4xl items-center justify-between rounded-full px-5 py-3 md:px-7 md:py-3.5">
        <Link href="/" className="font-display text-sm tracking-[0.15em] text-white md:text-base">
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

        <Link
          href="/contact"
          className="font-display rounded-full bg-zafaye-orange px-4 py-2 text-xs uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 md:px-5 md:py-2.5"
        >
          Get in touch
        </Link>
      </div>

      <nav className="glass-nav mx-auto mt-2 flex w-fit items-center justify-center gap-5 rounded-full px-5 py-2 md:hidden">
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
