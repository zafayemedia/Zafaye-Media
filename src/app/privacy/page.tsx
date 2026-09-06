import type { Metadata } from "next";
import { PRIVACY_INTRO, PRIVACY_LAST_UPDATED, PRIVACY_SECTIONS } from "@/lib/privacy-data";

export const metadata: Metadata = {
  title: "Privacy Policy — Zafaye Media",
  description: "How Zafaye Media collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <p className="font-display text-xs uppercase tracking-[0.15em] text-ink-navy/50">
          Applies to Clients and Clipper Applicants
        </p>
        <h1 className="headline mt-3 text-3xl text-ink-navy md:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-8 text-sm leading-relaxed text-ink-navy/80 md:text-base">
          {PRIVACY_INTRO}
        </p>

        <div className="mt-12 space-y-10">
          {PRIVACY_SECTIONS.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-lg font-semibold text-ink-navy">
                {section.heading}
              </h2>

              {section.paragraphs?.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-3 text-sm leading-relaxed text-ink-navy/75 md:text-base"
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-sm text-ink-navy/75 md:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-navy/30" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <p className="mt-14 border-t border-ink-navy/10 pt-6 text-xs text-ink-navy/50">
          {PRIVACY_LAST_UPDATED}
        </p>
      </div>
    </div>
  );
}
