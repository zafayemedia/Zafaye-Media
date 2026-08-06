import type { Metadata } from "next";
import { TERMS_INTRO, TERMS_LAST_UPDATED, TERMS_SECTIONS } from "@/lib/terms-data";

export const metadata: Metadata = {
  title: "Terms & Conditions — Zafaye Media",
  description: "Zafaye Media's Terms & Conditions and Policies for all clients and engagements.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
        General Service Terms — Applies to All Clients and Engagements
      </p>
      <h1 className="font-display mt-3 text-3xl font-extrabold text-white md:text-4xl">
        Terms &amp; Conditions and Policies
      </h1>

      <p className="mt-8 text-sm leading-relaxed text-white/85 md:text-base">
        {TERMS_INTRO}
      </p>

      <div className="mt-12 space-y-10">
        {TERMS_SECTIONS.map((section) => (
          <div key={section.heading}>
            <h2 className="font-display text-lg font-bold text-white">
              {section.heading}
            </h2>

            {section.paragraphs?.map((paragraph, i) => (
              <p
                key={i}
                className="mt-3 text-sm leading-relaxed text-white/80 md:text-base"
              >
                {paragraph}
              </p>
            ))}

            {section.bullets && (
              <ul className="mt-3 space-y-2">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/80 md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <p className="mt-14 border-t border-white/10 pt-6 text-xs text-steel">
        {TERMS_LAST_UPDATED}
      </p>
    </div>
  );
}
