export type Tier = {
  name: string;
  price: string;
  priceNote?: string;
  features: string[];
  highlight?: boolean;
};

export const META_ADS_TIERS: Tier[] = [
  {
    name: "Trial",
    price: "PKR 10,000",
    priceNote: "+ 10% of ad spend, billed every 10 days. First month only.",
    features: [
      "Business Portfolio setup guidance",
      "Ad account setup and optimization",
      "Meta Pixel integration and setup",
      "Business growth consultation and offer buildup guidance",
      "Landing page and website audit, with clear direction on what to fix",
      "Lead closing and appointment-setting guidance",
      "1 ad campaign, built and launched by our team",
      "Up to 4 ad creatives, using your logos, product photos, images and videos",
      "Initial audience research and targeting setup",
      "Ad copy: headline, primary text and description",
      "Weekly monitoring and optimization",
      "End-of-trial performance report with next-step recommendation",
    ],
  },
  {
    name: "Essential",
    price: "PKR 20,000",
    priceNote: "per month",
    features: [
      "Business Portfolio setup guidance",
      "Ad account setup and optimization",
      "Meta Pixel integration and setup",
      "Business growth consultation and offer buildup guidance",
      "Landing page and website audit and correction guidance",
      "Lead closing and appointment-setting guidance",
      "Audience and competitor research",
      "Up to 2 ad campaigns",
      "Up to 8 ad creatives, mix of images and simple videos",
      "Basic-to-intermediate audience targeting",
      "Conversion-focused ad copy: headline, text, description and CTA variants",
      "Weekly optimization",
      "Monthly performance report",
    ],
  },
  {
    name: "Advanced",
    price: "PKR 30,000",
    priceNote: "per month",
    highlight: true,
    features: [
      "Everything in Essential, plus",
      "Up to 4 campaigns, testing and scaling structures run in parallel",
      "Up to 14 ad creatives, a real mix of images and video",
      "Competitor ad analysis and full funnel mapping, cold to warm to conversion",
      "Advanced audience targeting and lookalike audiences",
      "Retargeting across visitors, engagers and past customers",
      "A/B testing across creatives and audiences",
      "Weekly performance reports",
      "Strategy guidance, bi-weekly check-ins",
      "Priority support",
    ],
  },
  {
    name: "Dominate",
    price: "PKR 45,000",
    priceNote: "per month",
    features: [
      "Everything in Advanced, plus",
      "Up to 6 campaigns, a genuine full-funnel strategy: awareness, consideration, conversion, retention",
      "Up to 20 high-converting ad creatives",
      "Daily optimization",
      "Ongoing competitor monitoring and seasonal campaign planning",
      "Advanced scaling strategies: budget rules, CBO layering",
      "Custom audiences and deep, multi-layer retargeting",
      "Weekly strategy calls and detailed performance insights",
      "Dedicated account manager",
      "Priority support",
    ],
  },
  {
    name: "Custom",
    price: "Custom",
    priceNote: "Totally dependent on your requirements",
    features: [
      "For businesses whose needs span both Meta Ads and Social Media Management, or don't fit neatly into a fixed tier",
      "Scoped entirely around your goals, budget, and where your business is right now",
      "Every detail, from platforms to deliverables to pricing, worked out together on a discovery call",
    ],
  },
];

export const META_ADS_INCLUDED = [
  "Business Portfolio setup guidance",
  "Ad account setup and optimization, using your existing account or setting one up for you",
  "Access sharing guidance",
  "Meta Pixel integration and setup",
  "Business growth consultation and offer buildup guidance",
  "Landing page and website audit and correction guidance",
  "Lead closing and appointment-setting guidance",
];

export const SOCIAL_TIERS: Tier[] = [
  {
    name: "Tier 1 — Presence",
    price: "PKR 15,000",
    priceNote: "per month",
    features: [
      "Business page/profile optimization, built to convert visitors into followers and followers into customers",
      "Content strategy guidance, so every post has a purpose",
      "12 posts a month, on-brand, a mix of images and videos",
      "Captions written to sound like your brand, not a template",
      "Full content calendar, posting and scheduling handled for you",
      "Monthly performance insights, with clear takeaways",
    ],
  },
  {
    name: "Tier 2 — Growth",
    price: "PKR 25,000",
    priceNote: "per month",
    highlight: true,
    features: [
      "Everything in Presence, plus",
      "20 posts a month, built around trends and what's working in your niche",
      "Advanced page optimization",
      "SEO-based, conversion-aware captions",
      "Story posting to stay visible between main posts",
      "Comment and DM replies, so engagement never goes unanswered",
      "Weekly performance tracking",
      "Ongoing engagement and growth strategy",
    ],
  },
  {
    name: "Tier 3 — Authority & Scale",
    price: "PKR 40,000",
    priceNote: "per month",
    features: [
      "Everything in Growth, plus",
      "Daily posting strategy, active and consistent",
      "Advanced growth strategy, built to scale reach without losing brand consistency",
      "Full community management: every comment, DM and mention handled",
      "Trend-based content execution and platform-specific optimization",
      "Detailed analytics and performance optimization",
      "ManyChat integration (basic setup) for FAQ and lead capture automation",
      "WhatsApp/DM funnel setup (basic)",
      "Ongoing brand strategy consultation",
    ],
  },
];

export const BRANDING_TIER: Tier = {
  name: "Starter",
  price: "PKR 10,000",
  features: [
    "Logo system: primary and secondary marks",
    "Full colour palette with usage rules",
    "Typography system, up to 3 typefaces",
    "Brand voice and messaging guidelines",
    "Clear space, minimum size, and usage rules",
  ],
};
