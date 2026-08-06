import Link from "next/link";
import type { Metadata } from "next";
import PricingCard from "@/components/PricingCard";
import AuroraBlobs from "@/components/AuroraBlobs";
import { inquireHref } from "@/lib/inquire";
import {
  BRANDING_TIER,
  META_ADS_INCLUDED,
  META_ADS_TIERS,
  SOCIAL_TIERS,
} from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services — Zafaye Media",
  description:
    "Meta ads management, social media growth, branding, and website or Shopify store creation, with real package pricing.",
};

function SectionHeading({
  kicker,
  title,
  body,
  tone = "dark",
}: {
  kicker: string;
  title: string;
  body?: string;
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <div className="max-w-2xl">
      <p
        className={`font-display text-xs uppercase tracking-[0.15em] ${
          isLight ? "text-ink-navy/50" : "text-steel"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`font-display mt-3 text-2xl font-semibold md:text-3xl ${
          isLight ? "text-ink-navy" : "text-white"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-sm md:text-base ${isLight ? "text-ink-navy/65" : "text-steel"}`}>
          {body}
        </p>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div>
      {/* Intro + Meta Ads */}
      <section>
        <div className="mx-auto max-w-6xl px-6 pb-10 pt-10 md:pt-14">
          <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
            Services
          </p>
          <h1 className="font-display mt-3 max-w-2xl text-3xl font-semibold text-white md:text-5xl">
            Meta ads is what we&apos;re known for. Here&apos;s everything we run.
          </h1>
        </div>

        <div id="meta-ads" className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading
            kicker="Flagship service"
            title="Meta Ads Management"
            body="Full campaign setup, creative, and ongoing optimization on Meta. Ad spend is billed separately by Meta, direct from your ad account."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {META_ADS_TIERS.map((tier) => (
              <PricingCard key={tier.name} tier={tier} serviceLabel="Meta Ads" />
            ))}
          </div>

          <div className="glass-panel mt-10 rounded-[20px] p-7">
            <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
              Included from Essential up
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {META_ADS_INCLUDED.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/85">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Social Media Management */}
      <section id="social" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <SectionHeading
            tone="light"
            kicker="Secondary service"
            title="Social Media Management & Growth"
            body="Ongoing management and growth of your social channels, structured across three phases: presence, growth, and authority."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SOCIAL_TIERS.map((tier) => (
              <PricingCard
                key={tier.name}
                tier={tier}
                serviceLabel="Social Media Management"
                tone="light"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Branding */}
      <section id="branding" className="relative overflow-hidden">
        <AuroraBlobs />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 md:py-20">
          <SectionHeading
            kicker="Secondary service"
            title="Branding"
            body="A focused identity package: enough to launch or refresh a brand without a six-week engagement."
          />

          <div className="mt-10 max-w-sm">
            <PricingCard tier={BRANDING_TIER} serviceLabel="Branding" />
          </div>
        </div>
      </section>

      {/* Website / Shopify */}
      <section id="website" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-24">
          <SectionHeading
            tone="light"
            kicker="Secondary service"
            title="Website & Shopify Store Creation"
            body="No fixed packages here. Every build is scoped and priced around what you actually need, from a simple brochure site to a full Shopify store."
          />

          <Link
            href={inquireHref("Website / Shopify Store Creation")}
            className="font-display mt-8 inline-block rounded-full bg-zafaye-orange px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
          >
            Tell us what you need built
          </Link>
        </div>
      </section>
    </div>
  );
}
