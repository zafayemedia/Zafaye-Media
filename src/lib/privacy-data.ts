export type PrivacySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export const PRIVACY_INTRO =
  "This Privacy Policy explains what personal information Zafaye Media collects, why we collect it, and how it's handled, whether you're a client reaching out through this site or a page owner applying to our clipper program.";

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    heading: "1. Who We Are",
    paragraphs: [
      "Zafaye Media is a trade name of Zafaye LLC, registered in East Setauket, NY 11733. For any question about this policy or your data, contact us at zazufmedia@gmail.com.",
    ],
  },
  {
    heading: "2. What We Collect",
    bullets: [
      "For client inquiries: the details you submit through our contact form, including your name, email, phone number, business name, and anything else you choose to include.",
      "For clipper applications: your name, email, WhatsApp number, country, city, social media profile URLs, page performance information (followers, views, audience data), and the editing and availability details submitted in the application form.",
    ],
  },
  {
    heading: "3. Why We Collect It",
    paragraphs: [
      "We use this information to respond to inquiries, to review clipper applications, to verify page ownership and audience data, and to administer campaign participation and payment for accepted clippers.",
    ],
  },
  {
    heading: "4. Who We Share It With",
    paragraphs: [
      "Your information is accessible to our internal team. Where a campaign requires it, we share relevant details with the campaign platform or campaign owner, solely to verify account ownership and view data. We do not sell your personal data to anyone.",
    ],
  },
  {
    heading: "5. How Long We Keep It",
    paragraphs: [
      "Clipper applications are retained while under review, and for the duration of any working relationship that follows. Client inquiry details are kept for as long as needed to respond to, and where relevant service, the inquiry.",
    ],
  },
  {
    heading: "6. Your Rights",
    paragraphs: [
      "You can request access to, correction of, or deletion of your data at any time by emailing zazufmedia@gmail.com.",
    ],
  },
  {
    heading: "7. Cookies and Analytics",
    paragraphs: [
      "This site does not use tracking cookies, advertising pixels, or third-party analytics. Typefaces are self-hosted through Next.js and load without contacting any third-party font server. Form submissions are processed through Supabase (database storage) and Resend (email notifications); neither is used for tracking or advertising.",
    ],
  },
];

export const PRIVACY_LAST_UPDATED = "Last updated: September 2026.";
