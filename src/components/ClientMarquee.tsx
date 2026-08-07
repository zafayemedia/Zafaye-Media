import { CASE_STUDIES } from "@/lib/portfolio-data";

const NAMES = CASE_STUDIES.map((c) => c.client);
const LOOP = [...NAMES, ...NAMES];

export default function ClientMarquee() {
  return (
    <div className="marquee-viewport overflow-hidden">
      <div className="marquee-track">
        {LOOP.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="font-display mx-3 shrink-0 rounded-full border border-ink-navy/10 bg-white/60 px-6 py-3 text-sm text-ink-navy/70"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
