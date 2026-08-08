export const SITE = {
  name: "Zafaye Media",
  legalName: "ZAFAYE LLC",
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

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

export const PORTFOLIO_DRIVE_LINK =
  "https://drive.google.com/drive/folders/1g2WE2J9VWGClVj6OUCNfXuw8iM-bBFEQ?usp=sharing";

export const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/zafaye.media/", label: "Instagram" },
  { href: "https://www.facebook.com/zafaye.media", label: "Facebook" },
  { href: "https://www.linkedin.com/company/zafayemedia", label: "LinkedIn" },
] as const;
