import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/portfolio-data";
import { inquireHref } from "@/lib/inquire";

export const metadata: Metadata = {
  title: "Portfolio — Zafaye Media",
  description:
    "Real client results from Zafaye Media's Meta ads and lead generation campaigns.",
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:pt-20">
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
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.client}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7"
            >
              <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
                {study.category}
              </p>
              <h2 className="font-display mt-2 text-xl font-bold text-white">
                {study.client}
              </h2>

              <div className="mt-6">
                <p className="font-display text-3xl font-black tabular-nums text-white">
                  {study.stat}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-steel">
                  {study.statLabel}
                </p>
              </div>

              <p className="mt-5 flex-1 text-sm text-white/85">
                {study.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:flex-row md:items-center">
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
      </section>
    </div>
  );
}
