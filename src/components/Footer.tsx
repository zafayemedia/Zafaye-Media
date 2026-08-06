import Link from "next/link";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-navy/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg tracking-[0.15em] text-white">
              ZAFAYE MEDIA
            </p>
            <p className="mt-3 text-sm text-steel">{SITE.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.1em] text-steel">
                Site
              </p>
              <ul className="mt-3 space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display text-xs uppercase tracking-[0.1em] text-steel">
                Contact
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>
                  <a href={`mailto:${SITE.email}`} className="hover:text-white">
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    {SITE.phoneDisplay} (WhatsApp)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-display text-xs uppercase tracking-[0.1em] text-steel">
                Legal
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/terms" className="text-sm text-white/80 hover:text-white">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-steel">
          <p>
            {SITE.name} is a trade name of {SITE.legalName}, registered in{" "}
            {SITE.legalAddress}.
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
