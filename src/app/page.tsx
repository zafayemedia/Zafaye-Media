import type { Metadata } from "next";
import Link from "next/link";
import FeaturedReviews from "@/components/FeaturedReviews";
import HighlightStat from "@/components/HighlightStat";
import Lines from "@/components/motion/Lines";
import CountUpResult from "@/components/motion/CountUpResult";
import { SITE } from "@/lib/constants";
import { CASE_STUDIES, MARQUEE_ONLY_NAMES } from "@/lib/portfolio-data";
import { META_ADS_TIERS, SOCIAL_TIERS, BRANDING_TIER, LEADBRIDGE } from "@/lib/services-data";

export const metadata: Metadata = {
  title: `${SITE.name} — Digital Marketing Agency, Pakistan & US`,
  description: `${SITE.tagline}. Paid social, organic content, clipping campaigns, websites and Shopify builds, and branding for businesses in Pakistan and the US.`,
};

// Without this, Next.js prerenders the homepage once at build time and the
// client-voices section never picks up newly approved reviews.
export const revalidate = 30;

const SERVICE_WORDS = [
  "paid social",
  "content & clipping",
  "short form video",
  "websites & shopify",
  "branding",
  "lead handling",
];

const CAPABILITIES = [
  {
    n: "01",
    name: "paid social",
    tags: ["meta ads", "campaign structure", "creative testing", "retargeting"],
    href: "/services#paid",
  },
  {
    n: "02",
    name: "social & content",
    tags: ["grid strategy", "short form", "community", "growth"],
    href: "/services#social",
  },
  {
    n: "03",
    name: "clipping",
    tags: ["short form at volume", "page network", "paid on views delivered"],
    href: "/clipping",
  },
  {
    n: "04",
    name: "websites & shopify",
    tags: ["store builds", "landing pages", "tracking", "checkout fixes"],
    href: "/services#build",
  },
  {
    n: "05",
    name: "branding",
    tags: ["identity", "type systems", "colour", "guidelines"],
    href: "/services#brand",
  },
  {
    n: "06",
    name: "leadbridge",
    tags: ["lead handling", "follow up", "appointment setting"],
    href: "/services#leadbridge",
  },
];

// Four case studies pulled straight from the verified portfolio data,
// chosen for the widest spread of result types (ROAS, cost per lead, order
// growth, full-service). Nothing here is invented — see /lib/portfolio-data.
const FEATURED_CLIENTS = ["MyLight.pk", "ZAZ Real Estate", "Nakhlistan PK", "Zafaye CLO"];
const FEATURED_CATEGORIES: Record<string, string> = {
  "MyLight.pk": "paid social",
  "ZAZ Real Estate": "paid social · lead gen",
  "Nakhlistan PK": "social & content",
  "Zafaye CLO": "branding & web",
};
const FEATURED_WORK = FEATURED_CLIENTS.map(
  (client) => CASE_STUDIES.find((c) => c.client === client)!,
);

const TRUST_NAMES = CASE_STUDIES.map((c) => c.client)
  .concat(MARQUEE_ONLY_NAMES)
  .filter((name) => !FEATURED_CLIENTS.includes(name))
  .slice(0, 6);

const PROCESS_STEPS = [
  {
    n: "01",
    title: "research & discover",
    body: "Your brand, your buyer and your competitors. We audit whatever is already running before touching a single setting.",
  },
  {
    n: "02",
    title: "build the strategy",
    body: "Structure, offer and creative direction written down and agreed with you, not decided quietly on our side.",
  },
  {
    n: "03",
    title: "start, test & scale",
    body: "Launch, measure weekly, cut what fails and put budget behind what is already working.",
  },
];

export default function Home() {
  const trial = META_ADS_TIERS[0];
  const essential = META_ADS_TIERS[1];
  const presence = SOCIAL_TIERS[0];

  return (
    <div className="zm-page">
      {/* Hero */}
      <section className="zm-hero">
        <div className="zm-glow" aria-hidden="true" />
        <div className="zm-wrap">
          <div className="zm-hero-meta">
            <span>digital marketing agency</span>
            <span>pakistan &middot; new york</span>
          </div>
          <Lines
            as="h1"
            className="zm-disp zm-h-xl"
            lines={[
              <>
                paid, organic <em>&amp;</em>
              </>,
              "everything between",
            ]}
          />
          <div className="zm-hero-foot">
            <p className="zm-body">
              We run the ads, the content, the clipping, the store and the brand behind them. One
              team, one account you own, reported in plain language every week.
            </p>
            <span className="zm-scroll-hint">scroll</span>
          </div>
        </div>
      </section>

      {/* 01 the agency */}
      <section className="zm-sec">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">01</span>
            <h2>the agency</h2>
          </div>
          <div className="zm-intro-grid">
            <div>
              <Lines
                className="zm-disp zm-h-lg"
                lines={["most agencies go quiet", "when something breaks."]}
                as="p"
              />
              <p className="zm-body" style={{ marginTop: "34px" }}>
                Zafaye Media is a digital marketing agency working with brands in Pakistan and the
                US. We compete on the one thing that cannot be faked: you can check our work
                yourself, any day, inside your own accounts.
              </p>
            </div>
            <div className="zm-intro-cols">
              <div>
                <h3>ownership</h3>
                <p>
                  Every ad account, page and store stays in your name. If we stop working
                  together, nothing leaves with us.
                </p>
              </div>
              <div>
                <h3>reporting</h3>
                <p>
                  Spend, result and what changed, weekly, in language you can forward to your
                  accountant without translating it.
                </p>
              </div>
              <div>
                <h3>range</h3>
                <p>
                  Paid social, organic content and clipping, web builds and brand systems handled
                  by the same team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="zm-strip" aria-hidden="true">
        <div className="zm-strip-track">
          {[...SERVICE_WORDS, ...SERVICE_WORDS].map((word, i) => (
            <span key={`${word}-${i}`}>
              {word}
              <i>&#9679;</i>
            </span>
          ))}
        </div>
      </div>

      {/* 02 what we do */}
      <section className="zm-sec">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">02</span>
            <h2>what we do</h2>
          </div>
          <div className="zm-cap-head">
            <Lines className="zm-disp zm-h-lg" lines={["six disciplines,", "one team."]} />
            <div className="zm-side">
              not six agencies
              <br />
              invoicing you separately
            </div>
          </div>

          {CAPABILITIES.map((cap) => (
            <Link key={cap.n} href={cap.href} className="zm-cap">
              <span className="zm-n">{cap.n}</span>
              <h3>{cap.name}</h3>
              <div className="zm-tags">
                {cap.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <span className="zm-go">&#8594;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 03 selected work */}
      <section className="zm-sec">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">03</span>
            <h2>selected work</h2>
          </div>
          <Lines
            className="zm-disp zm-h-lg"
            lines={["the numbers,", "not the adjectives."]}
            as="p"
          />
          <div style={{ marginBottom: "56px" }} />

          <div className="zm-work">
            {FEATURED_WORK.map((item) => (
              <article key={item.client} className="zm-w-item">
                <div className="zm-w-top">
                  <span className="zm-who">{item.client}</span>
                  <span className="zm-cat">{FEATURED_CATEGORIES[item.client]}</span>
                </div>
                <p>
                  <HighlightStat text={item.summary} stat={item.stat} />
                </p>
                <div className="zm-w-res">
                  <b>
                    <CountUpResult value={item.stat} />
                  </b>
                  <span>{item.statLabel}</span>
                </div>
              </article>
            ))}
          </div>

          <Link href="/work" className="zm-more">
            <span className="zm-mark-num">&#43;</span>
            <h3>all case studies</h3>
            <span className="zm-go">&#8594;</span>
          </Link>
        </div>
      </section>

      {/* 04 ways to start — light section, trial tier inverted for emphasis */}
      <section className="zm-sec">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">04</span>
            <h2>ways to start</h2>
          </div>
          <Lines
            className="zm-disp zm-h-lg"
            lines={["three ways in.", "no setup fees."]}
            as="p"
          />
          <div style={{ marginBottom: "56px" }} />

          <div className="zm-tiers">
            <div className="zm-tier zm-feature">
              <span className="zm-n">01</span>
              <div className="zm-name">trial</div>
              <div className="zm-amt">
                {trial.price.toLowerCase()}
                <small>{trial.priceNote}</small>
              </div>
              <p className="zm-note">
                One live campaign so you can see how we work before committing to anything longer.
              </p>
              <ul>
                <li>1 campaign</li>
                <li>up to 4 ad creatives</li>
                <li>pixel and account setup</li>
                <li>weekly reporting</li>
              </ul>
              <span className="zm-flag">start here</span>
              <Link href="/contact?package=trial" className="zm-start">
                start<span>&#8594;</span>
              </Link>
            </div>

            <div className="zm-tier">
              <span className="zm-n">02</span>
              <div className="zm-name">monthly</div>
              <div className="zm-amt">
                from {essential.price.toLowerCase()}
                <small>per month</small>
              </div>
              <p className="zm-note">
                Ongoing management across one or more disciplines, scaled to the size of the
                account.
              </p>
              <ul>
                <li>paid social from {essential.price.replace("PKR ", "").toLowerCase()}</li>
                <li>social &amp; content from {presence.price.replace("PKR ", "").toLowerCase()}</li>
                <li>branding from {BRANDING_TIER.price.replace("PKR ", "").toLowerCase()}</li>
                <li>leadbridge add-on {LEADBRIDGE.price.replace("PKR ", "").toLowerCase()}</li>
              </ul>
              <Link href="/services" className="zm-start">
                compare tiers<span>&#8594;</span>
              </Link>
            </div>

            <div className="zm-tier">
              <span className="zm-n">03</span>
              <div className="zm-name">custom</div>
              <div className="zm-amt">
                scoped
                <small>priced to the brief</small>
              </div>
              <p className="zm-note">
                Paid, organic and build work combined for brands that need the whole thing
                handled.
              </p>
              <ul>
                <li>multi-service retainer</li>
                <li>website or store included</li>
                <li>dedicated account lead</li>
                <li>quarterly planning</li>
              </ul>
              <Link href="/contact?package=custom" className="zm-start">
                talk to us<span>&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 05 client voices — light section, review cards stay dark islands */}
      <section className="zm-sec">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">05</span>
            <h2>client voices</h2>
          </div>

          <FeaturedReviews />

          {TRUST_NAMES.length > 0 && (
            <div className="zm-trust">
              <span className="zm-lbl">trusted by</span>
              <div className="zm-names">
                {TRUST_NAMES.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 06 how it runs */}
      <section className="zm-sec">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">06</span>
            <h2>how it runs</h2>
          </div>
          <Lines className="zm-disp zm-h-lg" lines={["we do not blindfire."]} as="p" />
          <div style={{ marginBottom: "56px" }} />
          <div className="zm-steps">
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="zm-step">
                <span className="zm-n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 say hello */}
      <section className="zm-cta">
        <div className="zm-glow" aria-hidden="true" style={{ top: "50%" }} />
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">07</span>
            <h2>say hello</h2>
          </div>
          <a href="mailto:zazufmedia@gmail.com" className="zm-mail">
            zazufmedia@gmail.com
          </a>
          <Lines
            className="zm-disp zm-h-xl"
            style={{ fontSize: "clamp(2.4rem,7vw,5.4rem)" }}
            lines={["got a brief?", "let's talk."]}
            as="p"
          />
          <p className="zm-body" style={{ maxWidth: "48ch", margin: "30px auto 0" }}>
            Send your website and what you are spending now. You get a written plan back, whether
            or not you end up working with us.
          </p>
          <Link href="/contact" className="zm-btn">
            request a free proposal <span>&#8594;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
