import Image from "next/image";
import Link from "next/link";
import AuroraBlobs from "@/components/AuroraBlobs";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

const FUNNEL = [
  { step: "01", title: "Reach", body: "Targeted from day one." },
  { step: "02", title: "Creative", body: "Built to stop the scroll." },
  { step: "03", title: "Convert", body: "Audited, tested, tightened." },
  { step: "04", title: "Scale", body: "More of what already works." },
];

const TRUST_STATS = [
  { value: "8.4x", label: "Average ROAS — MyLight.pk" },
  { value: "7x", label: "ROAS — Thaheem Farms" },
  { value: "6", label: "Real case studies, public" },
];

export default function Home() {
  return (
    <div>
      <section className="image-section">
        <div className="image-section-media">
          <Image
            src="/images/hero-bg.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
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
              Meta ads run by the numbers, not the hype.
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

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-ink-navy/50">
              How it runs
            </p>
            <h2 className="headline mt-3 text-3xl text-ink-navy md:text-4xl">
              Four stages. No guesswork.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FUNNEL.map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <div className="glass-panel-light tilt-card rounded-[20px] p-6">
                  <p className="font-display text-sm text-ink-navy/40">{item.step}</p>
                  <h3 className="font-display mt-2 text-xl font-semibold text-ink-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-navy/65">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <AuroraBlobs />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
              Trust signals
            </p>
            <h2 className="headline mt-3 text-3xl text-white md:text-4xl">
              Checkable, not promised.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TRUST_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="glass-panel tilt-card rounded-[20px] p-7">
                  <p className="font-display text-4xl font-bold tabular-nums text-white md:text-5xl">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-3 text-sm text-steel">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="glass-panel tilt-card mt-14 flex flex-col items-start justify-between gap-6 rounded-[24px] p-8 md:flex-row md:items-center">
              <div>
                <h3 className="headline text-2xl text-white">See the proof</h3>
                <p className="mt-2 text-sm text-steel">Real clients, real numbers, no cherry-picking.</p>
              </div>
              <Link
                href="/portfolio"
                className="font-display shrink-0 rounded-full bg-zafaye-orange px-6 py-3 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
              >
                View portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
