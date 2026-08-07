import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/portfolio-data";
import { inquireHref } from "@/lib/inquire";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Portfolio — Zafaye Media",
  description:
    "Real client results from Zafaye Media's Meta ads and lead generation campaigns.",
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="image-section">
        <div className="image-section-media">
          <Image src="/images/portfolio-banner.jpeg" alt="" fill priority sizes="100vw" />
        </div>
        <div className="image-section-overlay" />
        <div className="image-section-content mx-auto max-w-6xl px-6 pb-16 pt-32 md:pb-20 md:pt-40">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">Portfolio</p>
            <h1 className="headline mt-3 text-4xl text-white md:text-6xl">Real clients. Real numbers.</h1>
            <p className="mt-4 max-w-md text-sm text-steel md:text-base">
              No cherry-picked results. What&apos;s here is what happened.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study, i) => (
              <Reveal key={study.client} delay={i * 60}>
                <div className="glass-panel-light tilt-card flex h-full flex-col rounded-[20px] p-7">
                  <p className="font-display text-xs uppercase tracking-[0.15em] text-ink-navy/50">
                    {study.category}
                  </p>
                  <h2 className="font-display mt-2 text-xl font-semibold text-ink-navy">
                    {study.client}
                  </h2>

                  <div className="mt-6">
                    <p className="font-display text-3xl font-bold tabular-nums text-ink-navy">
                      <CountUp value={study.stat} />
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.1em] text-ink-navy/50">
                      {study.statLabel}
                    </p>
                  </div>

                  <p className="mt-5 flex-1 text-sm text-ink-navy/75">
                    {study.summary}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-navy">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Reveal>
            <div className="glass-panel tilt-card flex flex-col items-start justify-between gap-6 rounded-[24px] p-8 md:flex-row md:items-center">
              <div>
                <h3 className="headline text-2xl text-white">Are we a fit?</h3>
                <p className="mt-2 text-sm text-steel">Tell us what you sell. We'll tell you honestly.</p>
              </div>
              <Link
                href={inquireHref("General inquiry from Portfolio")}
                className="font-display shrink-0 rounded-full bg-zafaye-orange px-6 py-3 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
