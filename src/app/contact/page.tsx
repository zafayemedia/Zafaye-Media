import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import { SITE, whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Zafaye Media",
  description: "Get in touch with Zafaye Media directly or send a general inquiry.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
        Contact
      </p>
      <h1 className="font-display mt-3 max-w-2xl text-3xl font-extrabold text-white md:text-5xl">
        Talk to us directly, or send the details below.
      </h1>

      <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
            <p className="font-display text-xs uppercase tracking-[0.1em] text-steel">
              Email
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 block text-lg text-white hover:text-zafaye-orange"
            >
              {SITE.email}
            </a>

            <p className="font-display mt-8 text-xs uppercase tracking-[0.1em] text-steel">
              WhatsApp
            </p>
            <a
              href={whatsappLink("Hi, I'd like to get in touch with Zafaye Media.")}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-lg text-white hover:text-zafaye-orange"
            >
              {SITE.phoneDisplay}
            </a>

            <p className="font-display mt-8 text-xs uppercase tracking-[0.1em] text-steel">
              Registered as
            </p>
            <p className="mt-2 text-sm text-white/80">
              {SITE.legalName}, {SITE.legalAddress}
            </p>
          </div>
        </div>

        <div>
          <InquiryForm service="General inquiry from Contact" />
        </div>
      </div>
    </div>
  );
}
