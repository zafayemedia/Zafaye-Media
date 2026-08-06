import Link from "next/link";
import { inquireHref } from "@/lib/inquire";
import type { Tier } from "@/lib/services-data";

export default function PricingCard({
  tier,
  serviceLabel,
  tone = "dark",
}: {
  tier: Tier;
  serviceLabel: string;
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";

  return (
    <div
      className={`flex flex-col rounded-[20px] p-7 ${
        isLight ? "glass-panel-light glass-panel-light-hover" : "glass-panel glass-panel-hover"
      } ${tier.highlight ? "ring-1 ring-zafaye-orange" : ""}`}
    >
      {tier.highlight && (
        <p className="font-display mb-4 text-xs uppercase tracking-[0.15em] text-zafaye-orange">
          Most recommended
        </p>
      )}
      <h3 className={`font-display text-lg font-bold ${isLight ? "text-ink-navy" : "text-white"}`}>
        {tier.name}
      </h3>
      <p className={`font-display mt-3 text-3xl font-black ${isLight ? "text-ink-navy" : "text-white"}`}>
        {tier.price}
      </p>
      {tier.priceNote && (
        <p className={`mt-1 text-xs ${isLight ? "text-ink-navy/55" : "text-steel"}`}>
          {tier.priceNote}
        </p>
      )}

      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className={`flex gap-3 text-sm ${isLight ? "text-ink-navy/80" : "text-white/85"}`}
          >
            <span
              className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${isLight ? "bg-ink-navy/40" : "bg-steel"}`}
            />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={inquireHref(`${serviceLabel} — ${tier.name}`)}
        className={`font-display mt-8 rounded-full px-5 py-3 text-center text-sm uppercase tracking-[0.1em] transition-colors ${
          isLight
            ? "border border-ink-navy/15 text-ink-navy hover:border-ink-navy/35"
            : "border border-white/20 text-white hover:border-white/50"
        }`}
      >
        {tier.name === "Custom" ? "Tell us your requirements" : "Inquire"}
      </Link>
    </div>
  );
}
