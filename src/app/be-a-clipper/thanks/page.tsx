import type { Metadata } from "next";
import Link from "next/link";
import AuroraBlobs from "@/components/AuroraBlobs";
import Reveal from "@/components/Reveal";
import { CLIPPER_WHAT_HAPPENS_NEXT, CLIPPER_WHAT_HAPPENS_NEXT_NOTE } from "@/lib/clipper-data";

export const metadata: Metadata = {
  title: "Application Received | Zafaye Media",
  description: "Your Be a Clipper application has been received.",
};

export default function ClipperThanksPage() {
  return (
    <section className="relative overflow-hidden">
      <AuroraBlobs />
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-32 md:pb-32 md:pt-40">
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">
            Application received
          </p>
          <h1 className="headline mt-3 text-3xl text-white md:text-5xl">
            You&apos;re In The Queue
          </h1>
          <p className="mt-4 max-w-xl text-sm text-steel md:text-base">
            Our team reviews every application and responds within 24 to 48
            hours, on the email or WhatsApp number you gave us.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass-panel mt-10 rounded-[20px] p-7">
            <h2 className="font-display text-sm uppercase tracking-[0.15em] text-steel">
              What happens next
            </h2>
            <ol className="mt-5 space-y-4">
              {CLIPPER_WHAT_HAPPENS_NEXT.map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="font-display shrink-0 text-sm text-zafaye-orange">
                    {item.step}
                  </span>
                  <p className="text-sm text-white/85">{item.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-white/10 pt-4 text-xs text-steel">
              {CLIPPER_WHAT_HAPPENS_NEXT_NOTE}
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10">
            <Link
              href="/"
              className="glass-panel glass-panel-hover font-display inline-block rounded-full px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-white"
            >
              Back to Homepage
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
