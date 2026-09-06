"use client";

import { useState } from "react";
import HighlightStat from "@/components/HighlightStat";
import CountUpResult from "@/components/motion/CountUpResult";
import { CASE_STUDIES, type CaseStudy } from "@/lib/portfolio-data";
import { CATEGORY, CATEGORY_LABEL, NO_RESULT_CLIENTS, categoryLabel } from "@/lib/work-category";

const FILTERS = ["all", "paid", "social", "build", "brand"] as const;

function CaseCard({ item, hidden }: { item: CaseStudy; hidden: boolean }) {
  const showResult = !NO_RESULT_CLIENTS.has(item.client);
  return (
    <article className="zm-card" hidden={hidden}>
      <span className="zm-cat">{categoryLabel(item.client)}</span>
      <p className="zm-who">{item.client}</p>
      <p>{showResult ? <HighlightStat text={item.summary} stat={item.stat} /> : item.summary}</p>
      {showResult && (
        <div className="zm-res">
          <b>
            <CountUpResult value={item.stat} />
          </b>
          <span>{item.statLabel}</span>
        </div>
      )}
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
            hidden={filter !== "all" && !CATEGORY[item.client].includes(filter)}
          />
        ))}
      </div>
    </>
  );
}
