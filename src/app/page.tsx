import Link from "next/link";
import { whatsappLink } from "@/lib/constants";

const FUNNEL = [
  {
    step: "01",
    title: "Reach",
    body: "Meta ad campaigns built around your actual customer, not a broad guess. Pixel and audience setup done properly before a single rupee of spend goes out.",
  },
  {
    step: "02",
    title: "Creative",
    body: "Ad creatives, product imagery, and copy built to stop the scroll and make the offer clear in the first three seconds.",
  },
  {
    step: "03",
    title: "Convert",
    body: "Landing page and destination audits, retargeting, and A/B testing so traffic you're already paying for actually turns into leads and sales.",
  },
  {
    step: "04",
    title: "Scale",
    body: "Once a campaign works, we scale it deliberately: more budget, more creative variants, tighter reporting, without breaking what's already working.",
  },
];

const TRUST_STATS = [
  { value: "8.4x", label: "Average ROAS scaling MyLight.pk from 1-2 to 15-20 orders a day" },
  { value: "7x", label: "ROAS for Thaheem Farms mango exports, 14 orders a day" },
  { value: "6", label: "Client case studies with real, checkable numbers on our Portfolio page" },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-steel">
          Meta ads · Social growth · Creative · Web
        </p>
        <h1 className="font-display mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
          Turning Complexity{" "}
          <span className="text-zafaye-orange">to Clarity</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-steel md:text-lg">
          Zafaye Media runs Meta ad campaigns, creative production, and social
          growth for business owners who have likely been burned by an agency
          before. Not the cheapest. Not the loudest. The only agency you can
          actually check on.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="font-display rounded-full bg-zafaye-orange px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
          >
            View services
          </Link>
          <a
            href={whatsappLink("Hi, I'd like to talk about Meta ads for my business.")}
            target="_blank"
            rel="noreferrer"
            className="font-display rounded-full border border-white/20 px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-white transition-colors hover:border-white/50"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
            How an engagement runs
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-2xl font-extrabold text-white md:text-3xl">
            One funnel, four stages, no guesswork.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FUNNEL.map((item) => (
              <div key={item.step}>
                <p className="font-display text-sm text-steel">{item.step}</p>
                <h3 className="font-display mt-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-steel">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
          Trust signals
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-2xl font-extrabold text-white md:text-3xl">
          Every number here is something you could check yourself.
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="border-t border-white/10 pt-6">
              <p className="font-display text-4xl font-black tabular-nums text-white md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-steel">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              See the full portfolio and terms before you talk to us.
            </h3>
            <p className="mt-2 max-w-lg text-sm text-steel">
              Real client names, real results, and our full Terms &amp;
              Conditions are public. Nothing on this site is a promise we
              can&apos;t back up.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="font-display shrink-0 rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.1em] text-white transition-colors hover:border-white/50"
          >
            View portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
