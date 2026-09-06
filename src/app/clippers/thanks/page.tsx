import type { Metadata } from "next";
import Link from "next/link";
import Lines from "@/components/motion/Lines";
import { CLIPPER_WHAT_HAPPENS_NEXT, CLIPPER_WHAT_HAPPENS_NEXT_NOTE } from "@/lib/clipper-data";

export const metadata: Metadata = {
  title: "Application Received — Zafaye Media",
  description: "Your clipper application has been received.",
};

export default function ClipperThanksPage() {
  return (
    <div className="zm-page">
      <section className="zm-phead">
        <div className="zm-glow" aria-hidden="true" />
        <div className="zm-wrap">
          <div className="zm-meta">
            <span>application received</span>
            <span>reviewed within 24 to 48 hours</span>
          </div>
          <Lines as="h1" className="zm-disp zm-h-xl" lines={["you're in", "the queue."]} />
          <p className="zm-body">
            Our team reviews every application and responds within 24 to 48 hours, on the email or
            WhatsApp number you gave us.
          </p>
        </div>
      </section>

      <section className="zm-sec">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">01</span>
            <h2>what happens next</h2>
          </div>
          <div className="zm-steps" style={{ gridTemplateColumns: "1fr", maxWidth: "60ch", gap: "0" }}>
            {CLIPPER_WHAT_HAPPENS_NEXT.map((item) => (
              <div key={item.step} className="zm-step" style={{ paddingTop: "20px" }}>
                <span className="zm-n">{item.step}</span>
                <p style={{ color: "var(--zm-muted)", fontSize: "0.95rem", marginTop: "10px" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p style={{ color: "var(--zm-dim)", fontSize: "0.85rem", marginTop: "34px", maxWidth: "60ch" }}>
            {CLIPPER_WHAT_HAPPENS_NEXT_NOTE}
          </p>
          <Link href="/" className="zm-btn zm-btn-line" style={{ marginTop: "40px", width: "fit-content" }}>
            back to homepage
          </Link>
        </div>
      </section>
    </div>
  );
}
