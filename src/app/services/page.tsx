import Link from "next/link";
import type { Metadata } from "next";
import PricingCard from "@/components/PricingCard";
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
}: {
  kicker: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
        {kicker}
      </p>
      <h2 className="font-display mt-3 text-2xl font-extrabold text-white md:text-3xl">
        {title}
      </h2>
      {body && <p className="mt-4 text-sm text-steel md:text-base">{body}</p>}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:pt-20">
        <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
          Services
        </p>
        <h1 className="font-display mt-3 max-w-2xl text-3xl font-extrabold text-white md:text-5xl">
          Meta ads is what we&apos;re known for. Here&apos;s everything we run.
        </h1>
      </section>

      {/* Meta Ads */}
      <section id="meta-ads" className="mx-auto max-w-6xl px-6 py-14">
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

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-7">
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
      </section>

      {/* Social Media Management */}
      <section id="social" className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Branding */}
      <section id="branding" className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading
          kicker="Secondary service"
          title="Branding"
          body="A focused identity package: enough to launch or refresh a brand without a six-week engagement."
        />

        <div className="mt-10 max-w-sm">
          <PricingCard tier={BRANDING_TIER} serviceLabel="Branding" />
        </div>
      </section>

      {/* Website / Shopify */}
      <section
        id="website"
        className="border-t border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading
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
