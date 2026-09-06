// Categorised for the /work filter pills and category labels. This is our
// own organisational tag, not a new claim — every underlying stat/summary is
// unchanged from /lib/portfolio-data.ts. A client can carry more than one tag
// when the work itself spans more than one discipline (Irhamirhaa: a landing
// page build plus the campaign launched on it).
export const CATEGORY: Record<string, string[]> = {
  "MyLight.pk": ["paid"],
  "Thaheem Farms": ["paid"],
  "Nakhlistan PK": ["social"],
  "Vero Eyewear": ["paid"],
  "Indus Gems US": ["social"],
  "Zafaye CLO": ["brand"],
  "ZAZ Real Estate": ["paid"],
  "Shumaila Asad": ["paid"],
  "LRN Online Academy": ["paid"],
  "Jacquard Gallery": ["paid"],
  "Saman Labs": ["paid"],
  "Professional Hearing Solutions": ["paid"],
  Irhamirhaa: ["build", "paid"],
  Hyzora: ["paid"],
};

export const CATEGORY_LABEL: Record<string, string> = {
  paid: "paid social",
  social: "social & content",
  build: "websites & shopify",
  brand: "branding",
};

// These four have a phrase where the layout expects a figure ("Consistent
// leads", "Appointments booked", "Landing page + campaign", "Meta ads
// launched"). The headline promises numbers, so rather than let a phrase sit
// in a number's slot, the result block is left off these cards entirely —
// description only. Nothing here is invented to fill the gap.
export const NO_RESULT_CLIENTS = new Set([
  "Saman Labs",
  "Professional Hearing Solutions",
  "Irhamirhaa",
  "Hyzora",
]);

export function categoryLabel(client: string) {
  return CATEGORY[client].map((c) => CATEGORY_LABEL[c]).join(" · ");
}
