import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PricingCard from "@/components/PricingCard";
import Reveal from "@/components/Reveal";
import AuroraBlobs from "@/components/AuroraBlobs";
import { inquireHref } from "@/lib/inquire";
import {
  BRANDING_TIER,
  LEADBRIDGE,
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
      <h2 className={`headline mt-3 text-3xl md:text-4xl ${isLight ? "text-ink-navy" : "text-white"}`}>
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
      {/* Banner */}
      <section className="image-section">
        <div className="image-section-media">
          <Image src="/images/services-banner.jpeg" alt="" fill priority sizes="100vw" />
        </div>
        <div className="image-section-overlay" />
        <div className="image-section-content mx-auto max-w-6xl px-6 pb-16 pt-32 md:pb-20 md:pt-40">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">Services</p>
            <h1 className="headline mt-3 text-4xl text-white md:text-6xl">What we run</h1>
            <p className="mt-4 max-w-md text-sm text-steel md:text-base">
              Everything a digital growth partner runs — ads, creative, social, and more.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Meta Ads */}
      <section id="meta-ads" className="image-section">
        <div className="image-section-media">
          <Image src="/images/meta-ads-bg.jpeg" alt="" fill sizes="100vw" />
        </div>
        <div className="image-section-overlay" />
        <div className="image-section-content mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <SectionHeading
              kicker="Flagship service"
              title="Meta Ads Management"
              body="Full campaign setup, creative, and ongoing optimization on Meta. Ad spend is billed separately by Meta, direct from your ad account."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {META_ADS_TIERS.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 60}>
                <PricingCard tier={tier} serviceLabel="Meta Ads" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
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
          </Reveal>
        </div>
      </section>

      {/* LeadBridge — Meta Ads add-on */}
      <section id="leadbridge" className="relative overflow-hidden">
        <AuroraBlobs />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
              {LEADBRIDGE.kicker}
            </p>
            <h2 className="headline mt-3 text-3xl text-white md:text-4xl">{LEADBRIDGE.name}</h2>
            <p className="mt-4 max-w-xl text-sm text-steel md:text-base">{LEADBRIDGE.tagline}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <p className="font-display text-2xl font-bold text-white">{LEADBRIDGE.price}</p>
              <p className="text-xs uppercase tracking-[0.1em] text-steel">{LEADBRIDGE.priceNote}</p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {LEADBRIDGE.stages.map((stage, i) => (
              <Reveal key={stage.label} delay={i * 70}>
                <div className="glass-panel tilt-card rounded-[20px] p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{stage.label}</h3>
                  <p className="mt-2 text-sm text-steel">{stage.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <p className="mt-8 max-w-2xl text-sm text-steel">{LEADBRIDGE.closingNote}</p>
            <Link
              href={inquireHref("Meta Ads — LeadBridge Add-on")}
              className="font-display mt-8 inline-block rounded-full bg-zafaye-orange px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
            >
              Add LeadBridge
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Social Media Management */}
      <section id="social" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <SectionHeading
              tone="light"
              kicker="Secondary service"
              title="Social Growth"
              body="Ongoing management and growth of your social channels, structured across three phases: presence, growth, and authority."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SOCIAL_TIERS.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 60}>
                <PricingCard tier={tier} serviceLabel="Social Media Management" tone="light" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Branding */}
      <section id="branding" className="image-section">
        <div className="image-section-media">
          <Image src="/images/branding-bg.jpeg" alt="" fill sizes="100vw" />
        </div>
        <div className="image-section-overlay" />
        <div className="image-section-content mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <SectionHeading
              kicker="Secondary service"
              title="Branding"
              body="A focused identity package: enough to launch or refresh a brand without a six-week engagement."
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 max-w-sm">
              <PricingCard tier={BRANDING_TIER} serviceLabel="Branding" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Website / Shopify */}
      <section id="website" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <SectionHeading
              tone="light"
              kicker="Secondary service"
              title="Website & Shopify"
              body="No fixed packages here. Every build is scoped and priced around what you actually need, from a simple brochure site to a full Shopify store."
            />

            <Link
              href={inquireHref("Website / Shopify Store Creation")}
              className="font-display mt-8 inline-block rounded-full bg-zafaye-orange px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
            >
              Tell us what you need built
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
