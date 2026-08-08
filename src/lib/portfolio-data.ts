export type CaseStudy = {
  client: string;
  category: string;
  stat: string;
  statLabel: string;
  summary: string;
};

// Ordered strongest results and broadest scope first, down to the least specific.
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
    client: "Thaheem Farms",
    category: "Mango orchard, Multan — export and domestic",
    stat: "7x",
    statLabel: "ROAS",
    summary:
      "Export-quality mango sales for a Multan orchard selling domestically and internationally: 7x return on ad spend, cost per result at 10% of product price, 14 orders a day.",
  },
  {
    client: "Nakhlistan PK",
    category: "Organic products — flagship: choco-filled almond dates",
    stat: "0 → 4-5/day",
    statLabel: "Daily orders, minimal ad budget",
    summary:
      "Full social and digital presence managed end to end, plus a Meta ads campaign that scaled from zero orders a day to a consistent 4 to 5 orders a day, on a minimal budget.",
  },
  {
    client: "Vero Eyewear",
    category: "Sunglasses brand",
    stat: "0 → 3-4/day",
    statLabel: "Daily sales, minimal ad budget",
    summary:
      "Scaled from zero sales a day to a consistent 3 to 4 sales a day, on a minimal ad spend budget set by the client.",
  },
  {
    client: "Indus Gems US",
    category: "Natural gemstone brand, US",
    stat: "Full-service",
    statLabel: "Social, website, Etsy, content, ads",
    summary:
      "Complete digital presence and growth handled end to end: social media, website, Etsy store, content, and Meta ads.",
  },
  {
    client: "Zafaye CLO",
    category: "Clothing brand, US — tradition revival",
    stat: "Full-service",
    statLabel: "Design, website, and social",
    summary:
      "Entire digital presence handled end to end, from brand design through website and social media, for a modern take on traditional attire.",
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
    client: "Shumaila Asad",
    category: "Eastern couture and bridal designer brand",
    stat: "PKR 40-70",
    statLabel: "Per lead",
    summary:
      "Lead generation and appointment booking for a bridal and eastern couture brand, at PKR 40 to 70 per lead.",
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
    client: "Jacquard Gallery",
    category: "Tote bag B2B manufacturer",
    stat: "PKR 20-30",
    statLabel: "Per quality lead",
    summary:
      "Ongoing lead generation for a B2B manufacturer, holding quality leads at PKR 20 to 30 each.",
  },
  {
    client: "Saman Labs",
    category: "Medical laboratory, Lahore",
    stat: "Consistent leads",
    statLabel: "Appointments booked, minimal budget",
    summary:
      "Consistent leads and appointment bookings from the Lahore area, run on a minimal budget set by the client.",
  },
  {
    client: "Professional Hearing Solutions",
    category: "Hearing aid and audiology clinic, Islamabad",
    stat: "Appointments booked",
    statLabel: "Through structured Meta ads",
    summary:
      "A steady flow of appointments booked at the clinic through a structured Meta ads system.",
  },
  {
    client: "Irhamirhaa",
    category: "Handmade beaded clutch handbags",
    stat: "Landing page + campaign",
    statLabel: "Built from the ground up",
    summary:
      "Landing page structured from scratch, plus a full campaign launch with original creatives.",
  },
  {
    client: "Hyzora",
    category: "Jewellery brand, Islamabad",
    stat: "Meta ads launched",
    statLabel: "Campaign structured and running",
    summary:
      "Meta ads campaign structured and launched, generating results for the brand.",
  },
];

// Client names shown in the homepage marquee only — not yet written up as
// full Portfolio page case studies.
export const MARQUEE_ONLY_NAMES = ["Peak Prep Academy"];
