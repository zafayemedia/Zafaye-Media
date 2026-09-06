import type { Metadata } from "next";
import Link from "next/link";
import { TERMS_INTRO, TERMS_LAST_UPDATED, TERMS_SECTIONS } from "@/lib/terms-data";

export const metadata: Metadata = {
  title: "Terms & Conditions — Zafaye Media",
  description: "Terms and conditions covering work carried out by Zafaye Media.",
};

export default function TermsPage() {
  return (
    <div className="zm-page">
      <section className="zm-phead">
        <div className="zm-glow" aria-hidden="true" />
        <div className="zm-wrap">
          <div className="zm-meta">
            <span>terms &amp; conditions</span>
            <span>general service terms</span>
          </div>
          <h1 className="zm-disp zm-h-xl">
            the rules,
            <br />
            written plainly.
          </h1>
          <p className="zm-body">{TERMS_INTRO}</p>
        </div>
      </section>

      <section className="zm-sec zm-legal">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">01</span>
            <h2>terms of service</h2>
          </div>

          {TERMS_SECTIONS.map((section, i) => (
            <div key={section.heading} className="zm-clause">
              <span className="zm-n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{section.heading.replace(/^\d+\.\s*/, "").toLowerCase()}</h3>
                {section.paragraphs?.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="zm-cta">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">02</span>
            <h2>questions on any of this</h2>
          </div>
          <p className="zm-disp zm-h-xl" style={{ fontSize: "clamp(2.2rem,6vw,4.6rem)" }}>
            ask before
            <br />
            you sign.
          </p>
          <p className="zm-body" style={{ maxWidth: "48ch", margin: "30px auto 0" }}>
            If a clause is unclear, we would rather explain it now than argue about it later.
          </p>
          <Link href="/contact" className="zm-btn">
            get in touch <span>&#8594;</span>
          </Link>
          <p style={{ color: "var(--zm-dim)", fontSize: "0.8rem", marginTop: "48px" }}>
            {TERMS_LAST_UPDATED}
          </p>
        </div>
      </section>
    </div>
  );
}
