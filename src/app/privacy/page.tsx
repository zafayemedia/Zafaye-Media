import type { Metadata } from "next";
import Link from "next/link";
import Lines from "@/components/motion/Lines";
import { PRIVACY_INTRO, PRIVACY_LAST_UPDATED, PRIVACY_SECTIONS } from "@/lib/privacy-data";

export const metadata: Metadata = {
  title: "Privacy Policy — Zafaye Media",
  description: "How Zafaye Media collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="zm-page">
      <section className="zm-phead">
        <div className="zm-glow" aria-hidden="true" />
        <div className="zm-wrap">
          <div className="zm-meta">
            <span>privacy policy</span>
            <span>clients and clipper applicants</span>
          </div>
          <Lines as="h1" className="zm-disp zm-h-xl" lines={["your data,", "handled plainly."]} />
          <p className="zm-body">{PRIVACY_INTRO}</p>
        </div>
      </section>

      <section className="zm-sec zm-legal">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">01</span>
            <h2>the policy</h2>
          </div>

          {PRIVACY_SECTIONS.map((section, i) => (
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
            <h2>questions on your data</h2>
          </div>
          <Lines
            className="zm-disp zm-h-xl"
            style={{ fontSize: "clamp(2.2rem,6vw,4.6rem)" }}
            lines={["ask, correct", "or delete it."]}
          />
          <p className="zm-body" style={{ maxWidth: "48ch", margin: "30px auto 0" }}>
            Email us any time and we will act on it.
          </p>
          <Link href="/contact" className="zm-btn">
            get in touch <span>&#8594;</span>
          </Link>
          <p style={{ color: "var(--zm-dim)", fontSize: "0.8rem", marginTop: "48px" }}>
            {PRIVACY_LAST_UPDATED}
          </p>
        </div>
      </section>
    </div>
  );
}
