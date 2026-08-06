import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/portfolio-data";
import { inquireHref } from "@/lib/inquire";
import AuroraBlobs from "@/components/AuroraBlobs";
import CountUp from "@/components/CountUp";

export const metadata: Metadata = {
  title: "Portfolio — Zafaye Media",
  description:
    "Real client results from Zafaye Media's Meta ads and lead generation campaigns.",
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <AuroraBlobs />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-10 pt-10 md:pt-16">
          <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
            Portfolio
          </p>
          <h1 className="font-display mt-3 max-w-2xl text-3xl font-extrabold text-white md:text-5xl">
            Real clients. Real numbers.
          </h1>
          <p className="mt-5 max-w-xl text-sm text-steel md:text-base">
            These are representative accounts we run or have run campaigns for.
            No financial figures are shown beyond what the client has agreed to
            share here.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.client}
                className="glass-panel-light glass-panel-light-hover flex flex-col rounded-[20px] p-7"
              >
                <p className="font-display text-xs uppercase tracking-[0.15em] text-ink-navy/50">
                  {study.category}
                </p>
                <h2 className="font-display mt-2 text-xl font-bold text-ink-navy">
                  {study.client}
                </h2>

                <div className="mt-6">
                  <p className="font-display text-3xl font-black tabular-nums text-ink-navy">
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
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <AuroraBlobs />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="glass-panel glass-panel-hover flex flex-col items-start justify-between gap-6 rounded-[24px] p-8 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Want to see if we're a fit for your business?
              </h3>
              <p className="mt-2 max-w-lg text-sm text-steel">
                Tell us what you sell and what you're currently spending, and
                we'll tell you honestly whether it makes sense to work together.
              </p>
            </div>
            <Link
              href={inquireHref("General inquiry from Portfolio")}
              className="font-display shrink-0 rounded-full bg-zafaye-orange px-6 py-3 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
