export type CaseStudy = {
  client: string;
  category: string;
  stat: string;
  statLabel: string;
  summary: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: "MyLight.pk",
    category: "Leather tote bag brand",
    stat: "8.4x",
    statLabel: "Average ROAS",
    summary:
      "Scaled from 1-2 orders a day to 15-20 orders a day on Meta ads, at an average return on ad spend of 8.4x.",
  },
  {
    client: "Jacquard Gallery",
    category: "Tote bag B2B manufacturer",
    stat: "PKR 20-30",
    statLabel: "Per quality lead",
    summary:
      "Ongoing lead generation for a B2B manufacturer, holding quality leads at PKR 20 to 30 each.",
  },
  {
    client: "LRN Online Academy",
    category: "Interactive online learning platform",
    stat: "PKR 30-50",
    statLabel: "Per lead",
    summary:
      "Lead generation campaigns for an online academy, running at PKR 30 to 50 per lead.",
  },
  {
    client: "ZAZ Real Estate",
    category: "Property developer",
    stat: "PKR 80-100",
    statLabel: "Per quality lead",
    summary:
      "Quality-filtered lead generation for a real estate developer: no time wasters, audience targeted to actual buyers, at PKR 80 to 100 per quality lead.",
  },
  {
    client: "Thaheem Farms",
    category: "Mango orchard, Multan — export and domestic",
    stat: "7x",
    statLabel: "ROAS",
    summary:
      "Export-quality mango sales for a Multan orchard selling domestically and internationally: 7x return on ad spend, cost per result at 10% of product price, 14 orders a day.",
  },
  {
    client: "Shumaila Asad",
    category: "Eastern couture and bridal designer brand",
    stat: "PKR 40-70",
    statLabel: "Per lead",
    summary:
      "Lead generation and appointment booking for a bridal and eastern couture brand, at PKR 40 to 70 per lead.",
  },
];
