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
      "1 campaign",
      "Up to 4 ad creatives from your logos, product images, or videos",
      "Meta Pixel integration and ad account setup",
    ],
  },
  {
    name: "Essential",
    price: "PKR 20,000",
    priceNote: "per month",
    features: [
      "Up to 2 campaigns",
      "Up to 8 ad creatives",
      "Weekly optimization",
      "Conversion-focused ad copy",
      "Monthly report",
    ],
  },
  {
    name: "Advanced",
    price: "PKR 30,000",
    priceNote: "per month",
    highlight: true,
    features: [
      "Up to 4 campaigns",
      "Up to 14 ad creatives",
      "Retargeting",
      "A/B testing",
      "Strategy guidance",
      "Priority support",
    ],
  },
  {
    name: "Dominate",
    price: "PKR 45,000",
    priceNote: "per month",
    features: [
      "Up to 6 campaigns",
      "Up to 20 ad creatives",
      "Full funnel strategy",
      "Daily optimization",
      "Dedicated account manager",
    ],
  },
  {
    name: "Custom",
    price: "Custom",
    priceNote: "Combined paid + social media management, priced to your requirements",
    features: [
      "Built entirely around your campaigns and channels",
      "Single point of contact across paid and social",
    ],
  },
];

export const META_ADS_INCLUDED = [
  "Meta Pixel integration",
  "Ad account setup and optimization",
  "Business Portfolio setup guidance",
  "Consultation on growth and strategy",
  "Landing page and destination audit",
  "Website and social audit with correction guidelines",
  "Lead closing and lead setting consultation",
];

export const SOCIAL_TIERS: Tier[] = [
  {
    name: "Tier 1 — Presence",
    price: "PKR 15,000",
    priceNote: "per month",
    features: [
      "Your channels set up and organized properly",
      "Regular posting cadence",
      "Content built around your brand, not templates",
    ],
  },
  {
    name: "Tier 2 — Growth",
    price: "PKR 25,000",
    priceNote: "per month",
    highlight: true,
    features: [
      "Everything in Presence",
      "Content calendar and consistent posting across your channels",
      "Community management and response handling",
      "Monthly growth report",
    ],
  },
  {
    name: "Tier 3 — Authority & Scale",
    price: "PKR 40,000",
    priceNote: "per month",
    features: [
      "Everything in Growth",
      "Higher content volume",
      "Collaboration and outreach support",
      "Strategy sessions on positioning and authority",
    ],
  },
];

export const BRANDING_TIER: Tier = {
  name: "Starter",
  price: "PKR 10,000",
  features: [
    "2 logo concepts",
    "3 font pairings",
    "Colour palette application",
  ],
};
