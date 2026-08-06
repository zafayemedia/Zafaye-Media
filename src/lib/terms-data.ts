export type TermsSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export const TERMS_INTRO =
  'These Terms & Conditions ("Terms") govern all services provided by Zafaye Media ("Agency") to any business or individual ("Client") engaging the Agency for Meta Ads management, Social Media Management, or any other service offered by the Agency. By engaging the Agency in any capacity, including but not limited to trial periods, paid packages, or custom engagements, the Client acknowledges having read, understood, and agreed to these Terms.';

export const TERMS_SECTIONS: TermsSection[] = [
  {
    heading: "1. Shariah Compliance Policy",
    paragraphs: [
      "The Agency does not market, use, promote, or otherwise engage in any activity that goes against Shariah, including but not limited to the use of uncovered women, haram products, haram songs, or anything else inconsistent with Islamic principles. Creative work may feature male individuals, or female individuals dressed in accordance with Islamic parda (modest covering).",
      "This policy governs the creative direction taken at every stage of an engagement and is applied consistently across all client accounts. The Agency reserves the right to decline any request, at any point during an engagement, that conflicts with this policy, and the Client holds no right to compel the Agency to act against it.",
    ],
  },
  {
    heading: "2. Trial Period",
    paragraphs: [
      "The Agency may offer a low-risk trial period to prospective clients, as described in its published pricing materials. The trial period is limited to its first month only and is offered strictly to allow a prospective Client to evaluate the Agency's services. It is not a substitute for, and does not imply, a formal ongoing service arrangement.",
    ],
  },
  {
    heading: "3. Contract Requirement",
    paragraphs: [
      "Following the completion of any trial period, the Client is required to enter into a formal, signed Service Agreement with the Agency in order to continue receiving services. Clients who do not sign a Service Agreement after their trial period concludes will not be entertained, serviced, or extended any rights, protections, or continuity of service under these Terms or otherwise. The Agency reserves the right to pause, withhold, or discontinue any service, deliverable, communication, or account access with a Client who has not signed a valid Service Agreement.",
    ],
  },
  {
    heading: "4. Service Packages & Scope",
    paragraphs: [
      "Services are provided strictly according to the package selected and confirmed by the Client in writing, via the Agency's onboarding process and/or a signed Service Agreement. Any service, deliverable, or feature not explicitly included in the Client's selected package is considered outside the scope of engagement and may be subject to additional fees, to be agreed upon separately.",
    ],
  },
  {
    heading: "5. Payment Terms",
    bullets: [
      "Fees are due on a monthly basis, on the date specified in the Client's signed Service Agreement.",
      "All payments made to the Agency are non-refundable, regardless of the outcome or performance of services rendered.",
      "Ad spend is separate from the Agency's service fee and is paid directly by the Client to the relevant advertising platform (e.g., Meta).",
      "The Agency reserves the right to revise its pricing and package structure at any time. Such revisions apply to new engagements immediately, and to existing clients only upon renewal or as otherwise specified in their signed Service Agreement.",
    ],
  },
  {
    heading: "6. Late Payment",
    paragraphs: [
      "If a payment is not received by its due date, the Agency reserves the right to pause service delivery for a period equivalent to the delay in payment. Continued late or non-payment may result in suspension or termination of services at the Agency's discretion, in addition to any other remedies available to the Agency.",
    ],
  },
  {
    heading: "7. Termination",
    paragraphs: [
      "Either party may terminate an active engagement by providing the notice period specified in the Client's Service Agreement (standard notice period: 15 days, unless otherwise agreed in writing). Fees for services already delivered up to the date of termination are non-refundable.",
      "As Clients retain ownership of their own advertising and business accounts at all times, the Agency does not have the ability to, and will not attempt to, revoke or remove a Client's access to their own accounts.",
      "If a Client terminates their engagement without providing the agreed notice period, the Agency reserves the right to delete any campaign structures and remove any strategies it has built within the Client's ad account.",
      "If a Client terminates their engagement in accordance with the agreed notice period, any campaign structures built by the Agency remain the Client's property within their own ad account, and the Client may continue to operate them independently, without further involvement from the Agency.",
      "If a Client discontinues their engagement without informing the Agency, and/or removes the Agency's access to any account or platform without prior notice, the Agency reserves the right to pursue lawful action against the Client to protect its interests, including recovery of any outstanding fees or damages.",
    ],
  },
  {
    heading: "8. Client Responsibilities",
    paragraphs: [
      "The Client agrees to provide timely and accurate access to relevant accounts, platforms, and Business Portfolios; supply creative assets, product information, and approvals as reasonably requested; and communicate any concerns or requested changes in a timely manner. Delays caused by the Client in providing access, assets, or approvals may affect service timelines and are not the responsibility of the Agency.",
    ],
  },
  {
    heading: "9. Agency Responsibilities",
    paragraphs: [
      "The Agency agrees to deliver the services outlined in the Client's selected package and/or signed Service Agreement, at the reporting cadence specified for that package, using reasonable professional skill and care.",
    ],
  },
  {
    heading: "10. Performance Disclaimer",
    paragraphs: [
      "The Agency does not guarantee specific results, including but not limited to leads, sales, revenue, engagement, follower growth, or return on ad spend. Advertising and social media performance is influenced by numerous factors outside the Agency's control, including but not limited to the Client's product, offer, pricing, market demand, competition, and platform algorithm changes. Past results, whether the Agency's or any other party's, are not indicative of future performance.",
    ],
  },
  {
    heading: "11. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, the Agency's total liability to the Client for any claim arising out of or relating to its services shall not exceed the total fees paid by the Client to the Agency in the three (3) months preceding the claim. The Agency shall not be liable for any indirect, incidental, consequential, or special damages, including but not limited to loss of profits, loss of business opportunity, or reputational harm.",
    ],
  },
  {
    heading: "12. Force Majeure",
    paragraphs: [
      "Neither party shall be held liable for any failure or delay in performance due to circumstances beyond its reasonable control, including but not limited to natural disasters, internet or platform outages, government action, or other events of force majeure.",
    ],
  },
  {
    heading: "13. Indemnification",
    paragraphs: [
      "The Client agrees to indemnify and hold the Agency harmless from any claims, damages, losses, or expenses, including legal fees, arising from the Client's products, services, business practices, or any content, information, or materials provided by the Client for use in advertising or content creation.",
    ],
  },
  {
    heading: "14. Confidentiality",
    paragraphs: [
      "Both parties agree to keep confidential any business, creative, financial, or strategic information shared during the course of the engagement, and not to disclose such information to third parties without prior written consent, except as required by law.",
    ],
  },
  {
    heading: "15. Ownership of Creative Assets & Intellectual Property",
    paragraphs: [
      "Creative assets, including but not limited to ad copy, images, videos, and social media content, produced for the Client may be used by the Client during and after the engagement, for the purposes for which they were created. Source files, templates, internal strategy documents, and any proprietary tools, frameworks, or processes used by the Agency in delivering its services remain the sole property of the Agency, unless otherwise agreed in writing.",
      "The Agency reserves the right to showcase completed work, including creative assets and campaign results, in its own portfolio, marketing materials, and case studies, unless the Client requests otherwise in writing.",
    ],
  },
  {
    heading: "16. Platform Policy Changes",
    paragraphs: [
      "The Agency is not liable for account restrictions, disapprovals, suspensions, policy changes, outages, or any other actions taken by Meta or any other third-party platform, as these are outside the Agency's control.",
    ],
  },
  {
    heading: "17. Data & Privacy",
    paragraphs: [
      "Any personal, business, or account data shared by the Client with the Agency will be used solely for the purpose of delivering the agreed services, and will not be sold, shared, or disclosed to third parties, except as required to deliver services (e.g., ad platform access) or as required by law.",
    ],
  },
  {
    heading: "18. Amendments to These Terms",
    paragraphs: [
      "The Agency reserves the right to update or amend these Terms & Conditions at any time. Continued engagement with the Agency's services after such updates constitutes acceptance of the revised Terms. Material changes affecting active, signed Service Agreements will only take effect upon renewal, unless otherwise required by law.",
    ],
  },
  {
    heading: "19. Dispute Resolution & Governing Law",
    paragraphs: [
      "Any disputes arising from these Terms or any engagement with the Agency shall first be addressed through good-faith direct communication between the parties. If unresolved, disputes shall be governed by and interpreted in accordance with the laws of Pakistan.",
    ],
  },
  {
    heading: "20. Acceptance of Terms",
    paragraphs: [
      "By engaging the Agency's services in any capacity, including trial periods, paid packages, or custom engagements, the Client acknowledges having read, understood, and agreed to these Terms & Conditions in full.",
    ],
  },
  {
    heading: "21. Contact",
    paragraphs: [
      "For any questions regarding these Terms & Conditions, Clients may reach the Agency at zazufmedia@gmail.com or +1 212 602 1082.",
    ],
  },
];

export const TERMS_LAST_UPDATED =
  "Last updated: August 2026. These Terms & Conditions supersede any prior versions and remain in effect until formally amended by the Agency.";
