export const SITE = {
  name: "Zafaye Media",
  legalName: "Zafaye LLC",
  legalAddress: "East Setauket, NY 11733",
  tagline: "Turning Complexity to Clarity",
  email: "zazufmedia@gmail.com",
  phoneDisplay: "+1 212 602 1082",
  whatsappNumber: "12126021082",
} as const;

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

// Main nav per CLAUDE.md: five items, lowercase. /clippers is deliberately
// excluded — it lives in the footer company column and clipping.html's CTA.
export const NAV_LINKS = [
  { href: "/services", label: "services" },
  { href: "/clipping", label: "clipping" },
  { href: "/work", label: "work" },
  { href: "/reviews", label: "reviews" },
  { href: "/contact", label: "contact" },
] as const;

// Recruitment page for page owners/editors — a different audience from the
// client-facing NAV_LINKS above, so it's kept out of the main nav and only
// linked from the footer company column (Header, Footer).
export const CLIPPER_LINK = { href: "/clippers", label: "work as a clipper" } as const;

export const PORTFOLIO_DRIVE_LINK =
  "https://drive.google.com/drive/folders/1g2WE2J9VWGClVj6OUCNfXuw8iM-bBFEQ?usp=sharing";

export const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/zafaye.media/", label: "Instagram" },
  { href: "https://www.facebook.com/zafaye.media", label: "Facebook" },
  { href: "https://www.linkedin.com/company/zafayemedia", label: "LinkedIn" },
] as const;
