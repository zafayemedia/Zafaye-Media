import type { Metadata } from "next";
import Link from "next/link";
import InquiryForm from "@/components/InquiryForm";
import Lines from "@/components/motion/Lines";
import { SITE, whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Zafaye Media",
  description: "Send a brief to Zafaye Media. WhatsApp, email, or the inquiry form. Replies within one working day.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ package?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="zm-page">
      <section className="zm-phead">
        <div className="zm-glow" aria-hidden="true" />
        <div className="zm-wrap">
          <div className="zm-meta">
            <span>contact</span>
            <span>replies within 1 working day</span>
          </div>
          <Lines as="h1" className="zm-disp zm-h-xl" lines={["got a brief?", "let's talk."]} />
          <p className="zm-body">
            Send what you sell and what you are spending now. You get a written plan and a
            recommended package back, whether or not you end up working with us.
          </p>
        </div>
      </section>

      <section className="zm-sec">
        <div className="zm-wrap">
          <div className="zm-contact-grid">
            <div>
              <div className="zm-sec-label">
                <span className="zm-mark-num">01</span>
                <h2>direct</h2>
              </div>
              <div className="zm-direct">
                <a href={whatsappLink("Hi, I'd like to get in touch with Zafaye Media.")} target="_blank" rel="noreferrer">
                  <small>whatsapp — fastest</small>
                  <b>{SITE.phoneDisplay}</b>
                </a>
                <a href={`mailto:${SITE.email}`}>
                  <small>email</small>
                  <b>{SITE.email}</b>
                </a>
                <a href="https://instagram.com/zafaye.media" target="_blank" rel="noreferrer">
                  <small>instagram</small>
                  <b>@zafaye.media</b>
                </a>
                <a href="https://www.facebook.com/zafaye.media" target="_blank" rel="noreferrer">
                  <small>facebook</small>
                  <b>@zafaye.media</b>
                </a>
                <div>
                  <small>registered</small>
                  <b>
                    {SITE.legalName}, {SITE.legalAddress}
                  </b>
                </div>
                <div>
                  <small>working hours</small>
                  <b>Mon to Sat, 10:00 to 19:00 PKT</b>
                </div>
              </div>
              <div className="zm-note-box">
                <p>
                  Own a page and want to clip for campaigns instead?{" "}
                  <Link href="/clippers" style={{ color: "var(--zm-orange)" }}>
                    Apply as a clipper here.
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <div className="zm-sec-label">
                <span className="zm-mark-num">02</span>
                <h2>send a brief</h2>
              </div>
              <InquiryForm defaultPackage={params.package || ""} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
