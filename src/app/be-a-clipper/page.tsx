import type { Metadata } from "next";
import {
  Banknote,
  ClipboardCheck,
  CircleCheck,
  Eye,
  Megaphone,
  ShieldCheck,
  TrendingUp,
  Unlock,
  Wallet,
} from "lucide-react";
import AuroraBlobs from "@/components/AuroraBlobs";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import ClipperApplicationForm from "@/components/ClipperApplicationForm";
import { SITE } from "@/lib/constants";
import {
  CLIPPER_FAQ,
  CLIPPER_PAYMENT_FACTS,
  CLIPPER_REQUIREMENTS,
  CLIPPER_STEPS,
  CLIPPER_TRUST_STRIP,
  CLIPPER_WHAT_HAPPENS_NEXT,
  CLIPPER_WHAT_HAPPENS_NEXT_NOTE,
  CLIPPER_WHAT_WE_DO,
} from "@/lib/clipper-data";

export const metadata: Metadata = {
  title: "Be a Clipper | Zafaye Media",
  description:
    "Already run an Instagram, TikTok, or YouTube page? Earn from it through funded brand clipping campaigns. Apply to join Zafaye Media's creator network.",
};

const WHAT_WE_DO_ICONS = [Megaphone, Unlock, ClipboardCheck, ShieldCheck];
const PAYMENT_ICONS = [Eye, Wallet, Banknote, TrendingUp, CircleCheck];

export default function BeAClipperPage() {
  return (
    <div>
      {/* 1. Hero */}
      <section className="relative overflow-hidden">
        <AuroraBlobs />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-32 md:pb-32 md:pt-40">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-steel">
              For page owners &amp; editors
            </p>
            <h1 className="headline mt-5 max-w-3xl text-4xl text-white sm:text-5xl md:text-7xl">
              Already Run A Page? <span className="text-zafaye-orange">Get Paid For It.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-steel md:text-lg">
              We place page owners and editors into funded brand campaigns.
              You get paid per verified 1,000 views.
            </p>
            <div className="mt-9">
              <a
                href="#apply"
                className="font-display inline-block rounded-full bg-zafaye-orange px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
              >
                Apply Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-ink-navy">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              {CLIPPER_TRUST_STRIP.map((item) => (
                <div
                  key={item}
                  className="glass-panel rounded-full px-5 py-3 text-center text-xs text-white/80 sm:text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. What we do */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-ink-navy/50">
              What we do
            </p>
            <h2 className="headline mt-3 text-3xl text-ink-navy md:text-5xl">
              We Do The Heavy Lifting
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CLIPPER_WHAT_WE_DO.map((item, i) => {
              const Icon = WHAT_WE_DO_ICONS[i];
              return (
                <Reveal key={item.title} delay={i * 70}>
                  <div className="glass-panel-light tilt-card flex h-full flex-col gap-3 rounded-[20px] p-6">
                    <Icon className="h-7 w-7 text-ink-navy" strokeWidth={1.75} />
                    <p className="font-display text-base font-semibold text-ink-navy">
                      {item.title}
                    </p>
                    <p className="text-sm text-ink-navy/60">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. What you do */}
      <section className="relative overflow-hidden">
        <AuroraBlobs />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
              What you do
            </p>
            <h2 className="headline mt-3 text-3xl text-white md:text-5xl">Five Simple Steps</h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {CLIPPER_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 70}>
                <div className="glass-panel tilt-card h-full rounded-[20px] p-6">
                  <p className="font-display text-sm text-steel">{item.step}</p>
                  <h3 className="font-display mt-2 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="glass-panel mt-8 rounded-[20px] border-l-4 border-zafaye-orange p-6">
              <p className="text-sm text-white/85">
                <span className="font-display font-semibold text-zafaye-orange">
                  Views only count once we submit the clip.
                </span>{" "}
                Not from the moment you post.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Who we're looking for */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-ink-navy/50">
              Who we&apos;re looking for
            </p>
            <h2 className="headline mt-3 text-3xl text-ink-navy md:text-5xl">
              Does This Sound Like You?
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {CLIPPER_REQUIREMENTS.map((requirement, i) => (
              <Reveal key={requirement} delay={i * 60}>
                <div className="glass-panel-light flex items-center gap-3 rounded-full px-5 py-4">
                  <CircleCheck className="h-5 w-5 shrink-0 text-ink-navy/50" strokeWidth={2} />
                  <p className="text-sm text-ink-navy/80">{requirement}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={340}>
            <p className="mt-8 max-w-2xl text-sm text-ink-navy/60">
              Audience location matters, and page reach matters more than
              follower count.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5. How payment works */}
      <section className="relative overflow-hidden">
        <AuroraBlobs />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
              How payment works
            </p>
            <h2 className="headline mt-3 text-3xl text-white md:text-5xl">
              Straightforward, Not Hidden
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {CLIPPER_PAYMENT_FACTS.map((fact, i) => {
              const Icon = PAYMENT_ICONS[i];
              return (
                <Reveal key={fact.title} delay={i * 70}>
                  <div className="glass-panel tilt-card flex h-full flex-col gap-3 rounded-[20px] p-6">
                    <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                    <p className="font-display text-base font-semibold text-white">
                      {fact.title}
                    </p>
                    <p className="text-sm text-steel">{fact.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Application form */}
      <section id="apply" className="scroll-mt-28 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-ink-navy/50">
              Apply to join
            </p>
            <h2 className="headline mt-3 text-3xl text-ink-navy md:text-5xl">Apply to Join</h2>
            <p className="mt-4 text-sm text-ink-navy/65 md:text-base">
              Our team reviews every application and responds within 24 to 48
              hours.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10">
              <ClipperApplicationForm />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="glass-panel-light mt-10 rounded-[20px] p-7">
              <h3 className="font-display text-sm uppercase tracking-[0.15em] text-ink-navy/50">
                What happens after you apply
              </h3>
              <ol className="mt-5 space-y-4">
                {CLIPPER_WHAT_HAPPENS_NEXT.map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="font-display shrink-0 text-sm text-ink-navy/40">
                      {item.step}
                    </span>
                    <p className="text-sm text-ink-navy/75">{item.body}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-ink-navy/10 pt-4 text-xs text-ink-navy/50">
                {CLIPPER_WHAT_HAPPENS_NEXT_NOTE}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="relative overflow-hidden">
        <AuroraBlobs />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 md:py-24">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">FAQ</p>
            <h2 className="headline mt-3 text-3xl text-white md:text-5xl">Questions, Answered</h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10">
              <FaqAccordion items={CLIPPER_FAQ} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <Reveal>
            <h2 className="headline text-3xl text-ink-navy md:text-5xl">
              Ready To Put Your Page To Work?
            </h2>
            <p className="mt-4 text-sm text-ink-navy/65 md:text-base">
              Questions first? Email us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-ink-navy underline">
                {SITE.email}
              </a>
              .
            </p>
            <div className="mt-8">
              <a
                href="#apply"
                className="font-display inline-block rounded-full bg-zafaye-orange px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
              >
                Apply Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
