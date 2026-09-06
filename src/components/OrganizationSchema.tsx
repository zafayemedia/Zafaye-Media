import { SITE, whatsappLink } from "@/lib/constants";

// Rendered once in the root layout, so it's present on every page.
// SITE_URL isn't known yet (no production domain is configured anywhere in
// this project) — set NEXT_PUBLIC_SITE_URL once the domain is live and the
// url/logo fields below resolve to real absolute addresses instead of
// relative paths.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";

export default function OrganizationSchema() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    alternateName: SITE.name,
    ...(SITE_URL ? { url: SITE_URL } : {}),
    logo: `${SITE_URL}/logo-primary-transparent.png`,
    email: SITE.email,
    telephone: `+${SITE.whatsappNumber}`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: SITE.email,
      telephone: `+${SITE.whatsappNumber}`,
      url: whatsappLink(),
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "East Setauket",
      addressRegion: "NY",
      postalCode: "11733",
      addressCountry: "US",
    },
    sameAs: ["https://instagram.com/zafaye.media"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
