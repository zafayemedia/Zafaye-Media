import Image from "next/image";
import Link from "next/link";
import { CircleCheck, Rocket, ChartColumn, FileText } from "lucide-react";
import ClientMarquee from "@/components/ClientMarquee";
import FeaturedReviews from "@/components/FeaturedReviews";
import Reveal from "@/components/Reveal";
import { inquireHref } from "@/lib/inquire";

const TRIAL_BENEFITS = [
  {
    icon: Rocket,
    label: "Live in days",
    body: "Campaign built and launched fast",
  },
  {
    icon: ChartColumn,
    label: "Real performance data",
    body: "See exactly what's working, weekly",
  },
  {
    icon: FileText,
    label: "Clear report included",
    body: "Plain-language results, no jargon",
  },
];

const TRIAL_INCLUSIONS = [
  "1 campaign",
  "Up to 4 creatives",
  "Full pixel & account setup",
  "PKR 10,000 + 10% of ad spend",
];

// Without this, Next.js prerenders the homepage once at build time and the
// featured-reviews section never picks up newly approved reviews.
export const revalidate = 30;

const WHAT_WE_DO = [
  { title: "Meta Ads", body: "Structured campaigns, run for results." },
  { title: "Social Growth", body: "Presence that earns trust." },
  { title: "Website & Shopify", body: "Built to convert, not just look good." },
  { title: "Branding", body: "An identity worth showing up as." },
];

const PROCESS = [
  {
    step: "01",
    title: "Research & Discover",
    body: "Your brand, audience, and competitors.",
  },
  {
    step: "02",
    title: "Strategy",
    body: "A plan built on what we found, not guesswork.",
  },
  {
    step: "03",
    title: "Start, Test & Scale",
    body: "Launch, measure, double down on what's working.",
  },
];

export default function Home() {
  return (
    <div>
      {/* 1. Hero */}
      <section className="image-section">
        <div className="image-section-media">
          <Image src="/images/hero-bg.jpeg" alt="" fill priority sizes="100vw" />
        </div>
        <div className="image-section-overlay" />
        <div className="image-section-content mx-auto max-w-6xl px-6 pb-24 pt-32 md:pb-32 md:pt-40">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-steel">
              Meta ads · Social growth · Creative · Web
            </p>
            <h1 className="headline mt-5 max-w-3xl text-5xl text-white sm:text-6xl md:text-7xl">
              Turning Complexity <span className="text-zafaye-orange">to Clarity</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-steel md:text-lg">
              Your digital growth partner for ads, creative, and social growth.
            </p>
            <div className="mt-9">
              <Link
                href="/services"
                className="glass-panel glass-panel-hover font-display inline-block rounded-full px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-white"
              >
                View services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Flagship offer — Trial spotlight */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-ink-navy/50">
              Start here
            </p>
            <h2 className="headline mt-3 text-3xl text-ink-navy md:text-5xl">
              Trial Offer: Prove It Works, Risk-Free
            </h2>
            <p className="mt-4 max-w-xl text-sm text-ink-navy/65 md:text-base">
              One live campaign built for first-time advertisers, or anyone
              who&apos;s been let down by an agency before.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {TRIAL_BENEFITS.map((benefit, i) => (
              <Reveal key={benefit.label} delay={i * 70}>
                <div className="glass-panel-light tilt-card flex h-full flex-col gap-3 rounded-[20px] p-6">
                  <benefit.icon className="h-7 w-7 text-ink-navy" strokeWidth={1.75} />
                  <p className="font-display text-base font-semibold text-ink-navy">
                    {benefit.label}
                  </p>
                  <p className="text-sm text-ink-navy/60">{benefit.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="glass-panel-light inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-xs text-ink-navy/70">
                <CircleCheck className="h-4 w-4 shrink-0 text-ink-navy/50" strokeWidth={2} />
                <span className="flex flex-wrap items-center gap-x-2">
                  {TRIAL_INCLUSIONS.map((item, i) => (
                    <span key={item} className="flex items-center gap-2">
                      {item}
                      {i < TRIAL_INCLUSIONS.length - 1 && (
                        <span aria-hidden="true" className="text-ink-navy/30">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </span>
              </div>

              <Link
                href={inquireHref("Meta Ads — Trial")}
                className="font-display shrink-0 rounded-full bg-zafaye-orange px-7 py-3.5 text-center text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
              >
                Start the trial
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. What we do */}
      <section className="image-section">
        <div className="image-section-media">
          <Image src="/images/home-what-we-do.jpeg" alt="" fill sizes="100vw" />
        </div>
        <div className="image-section-overlay" />
        <div className="image-section-content mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
              What we do
            </p>
            <h2 className="headline mt-3 text-3xl text-white md:text-5xl">
              Everything Under One Roof
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_WE_DO.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="glass-panel tilt-card rounded-[20px] p-6">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280}>
            <div className="mt-10">
              <Link
                href="/services"
                className="font-display inline-block rounded-full bg-zafaye-orange px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
              >
                View all services in detail
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Client highlight */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-ink-navy/50">
              Trusted by
            </p>
            <h2 className="headline mt-3 text-3xl text-ink-navy md:text-5xl">
              Brands That Trust Us
            </h2>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <ClientMarquee />
        </Reveal>

        <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pb-24">
          <Reveal delay={120}>
            <FeaturedReviews />
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 text-center">
              <Link
                href="/reviews"
                className="font-display inline-block rounded-full bg-zafaye-orange px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
              >
                See all reviews
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Our process */}
      <section className="image-section">
        <div className="image-section-media">
          <Image src="/images/home-process.jpeg" alt="" fill sizes="100vw" />
        </div>
        <div className="image-section-overlay" />
        <div className="image-section-content mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
              How we work
            </p>
            <h2 className="headline mt-3 text-3xl text-white md:text-5xl">
              Research. Strategy. Scale.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PROCESS.map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <div className="glass-panel tilt-card rounded-[20px] p-7">
                  <p className="font-display text-sm text-steel">{item.step}</p>
                  <h3 className="font-display mt-2 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Lead magnet */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <Reveal>
            <h2 className="headline text-3xl text-ink-navy md:text-5xl">
              Not Sure Yet?
            </h2>
            <p className="mt-4 text-sm text-ink-navy/65 md:text-base">
              Get a free consultation. No pressure, no payment details.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="font-display inline-block rounded-full bg-zafaye-orange px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
              >
                Get your free consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
