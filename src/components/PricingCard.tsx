import Link from "next/link";
import { inquireHref } from "@/lib/inquire";
import type { Tier } from "@/lib/services-data";

export default function PricingCard({
  tier,
  serviceLabel,
}: {
  tier: Tier;
  serviceLabel: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-7 ${
        tier.highlight
          ? "border-zafaye-orange bg-white/[0.04]"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      {tier.highlight && (
        <p className="font-display mb-4 text-xs uppercase tracking-[0.15em] text-zafaye-orange">
          Most recommended
        </p>
      )}
      <h3 className="font-display text-lg font-bold text-white">{tier.name}</h3>
      <p className="font-display mt-3 text-3xl font-black text-white">
        {tier.price}
      </p>
      {tier.priceNote && (
        <p className="mt-1 text-xs text-steel">{tier.priceNote}</p>
      )}

      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm text-white/85">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={inquireHref(`${serviceLabel} — ${tier.name}`)}
        className="font-display mt-8 rounded-full border border-white/20 px-5 py-3 text-center text-sm uppercase tracking-[0.1em] text-white transition-colors hover:border-white/50"
      >
        {tier.name === "Custom" ? "Tell us your requirements" : "Inquire"}
      </Link>
    </div>
  );
}
