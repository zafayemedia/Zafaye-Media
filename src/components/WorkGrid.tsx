"use client";

import { useState } from "react";
import { CASE_STUDIES, type CaseStudy } from "@/lib/portfolio-data";

// Categorised for the filter pills below. This is our own organisational
// tag, not a new claim — every underlying stat/summary is unchanged from
// /lib/portfolio-data.ts.
const CATEGORY: Record<string, string> = {
  "MyLight.pk": "paid",
  "Thaheem Farms": "paid",
  "Nakhlistan PK": "social",
  "Vero Eyewear": "paid",
  "Indus Gems US": "social",
  "Zafaye CLO": "brand",
  "ZAZ Real Estate": "paid",
  "Shumaila Asad": "paid",
  "LRN Online Academy": "paid",
  "Jacquard Gallery": "paid",
  "Saman Labs": "paid",
  "Professional Hearing Solutions": "paid",
  Irhamirhaa: "build",
  Hyzora: "paid",
};

const CATEGORY_LABEL: Record<string, string> = {
  paid: "paid social",
  social: "social & content",
  build: "websites & shopify",
  brand: "branding",
};

const FILTERS = ["all", "paid", "social", "build", "brand"] as const;

function CaseCard({ item, hidden }: { item: CaseStudy; hidden: boolean }) {
  return (
    <article className="zm-card" hidden={hidden}>
      <span className="zm-cat">{CATEGORY_LABEL[CATEGORY[item.client]]}</span>
      <p className="zm-who">{item.client}</p>
      <p>{item.summary}</p>
      <div className="zm-res">
        <b>{item.stat}</b>
        <span>{item.statLabel}</span>
      </div>
    </article>
  );
}

export default function WorkGrid({ excludeClient }: { excludeClient?: string }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");
  const items = CASE_STUDIES.filter((c) => c.client !== excludeClient);

  return (
    <>
      <div className="zm-filters">
        {FILTERS.map((f) => (
          <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f === "all" ? "everything" : CATEGORY_LABEL[f]}
          </button>
        ))}
      </div>

      <div className="zm-grid">
        {items.map((item) => (
          <CaseCard
            key={item.client}
            item={item}
            hidden={filter !== "all" && CATEGORY[item.client] !== filter}
          />
        ))}
      </div>
    </>
  );
}

export { CATEGORY, CATEGORY_LABEL };
