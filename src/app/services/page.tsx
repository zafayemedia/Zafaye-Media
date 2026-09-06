import type { Metadata } from "next";
import Link from "next/link";
import {
  BRANDING_TIER,
  LEADBRIDGE,
  META_ADS_INCLUDED,
  META_ADS_TIERS,
  SOCIAL_TIERS,
} from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services & Pricing — Zafaye Media",
  description:
    "Paid social, social and content, clipping, websites and Shopify, branding and lead handling. Full packages and pricing.",
};

function amount(price: string) {
  return price.replace(/^PKR\s*/i, "").toLowerCase();
}

export default function ServicesPage() {
  const [trial, essential, advanced, dominate] = META_ADS_TIERS;
  const [presence, growth, authority] = SOCIAL_TIERS;

  return (
    <div className="zm-page">
      <section className="zm-phead">
        <div className="zm-glow" aria-hidden="true" />
        <div className="zm-wrap">
          <div className="zm-meta">
            <span>services &amp; pricing</span>
            <span>all figures in pkr</span>
          </div>
          <h1 className="zm-disp zm-h-xl">
            five disciplines,
            <br />
            one team.
          </h1>
          <p className="zm-body">
            Every price on this page is the price. No setup fee appears at signature, and nothing
            is quoted per hour. Pick the tier that matches where the business actually is, or ask
            and we will tell you.
          </p>
        </div>
      </section>

      {/* 01 paid social */}
      <section className="zm-sec" id="paid">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">01</span>
            <h2>paid social</h2>
          </div>
          <div className="zm-two" style={{ marginBottom: "56px" }}>
            <p className="zm-disp zm-h-lg">
              more budget will not fix
              <br />a broken campaign.
            </p>
            <p className="zm-body">
              Structure, targeting, creative and weekly optimization. The ad account stays in your
              name from day one and never moves.
            </p>
          </div>

          <div className="zm-panels zm-p5">
            <div className="zm-panel zm-feature">
              <span className="zm-n">01</span>
              <div className="zm-name">trial</div>
              <div className="zm-amt">
                {amount(trial.price)}
                <small>{trial.priceNote}</small>
              </div>
              <ul>
                <li>1 campaign</li>
                <li>up to 4 creatives</li>
                <li>pixel &amp; account setup</li>
                <li>weekly reporting</li>
              </ul>
              <span className="zm-flag">start here</span>
              <Link href="/contact?package=trial" className="zm-start">
                start<span>&#8594;</span>
              </Link>
            </div>
            <div className="zm-panel">
              <span className="zm-n">02</span>
              <div className="zm-name">essential</div>
              <div className="zm-amt">
                {amount(essential.price)}
                <small>per month</small>
              </div>
              <ul>
                <li>up to 2 campaigns</li>
                <li>up to 8 creatives</li>
                <li>weekly optimization</li>
                <li>monthly report</li>
              </ul>
              <Link href="/contact?package=essential" className="zm-start">
                enquire<span>&#8594;</span>
              </Link>
            </div>
            <div className="zm-panel">
              <span className="zm-n">03</span>
              <div className="zm-name">advanced</div>
              <div className="zm-amt">
                {amount(advanced.price)}
                <small>per month</small>
              </div>
              <ul>
                <li>up to 4 campaigns</li>
                <li>up to 14 creatives</li>
                <li>retargeting &amp; a/b testing</li>
                <li>priority support</li>
              </ul>
              <Link href="/contact?package=advanced" className="zm-start">
                enquire<span>&#8594;</span>
              </Link>
            </div>
            <div className="zm-panel">
              <span className="zm-n">04</span>
              <div className="zm-name">dominate</div>
              <div className="zm-amt">
                {amount(dominate.price)}
                <small>per month</small>
              </div>
              <ul>
                <li>up to 6 campaigns</li>
                <li>up to 20 creatives</li>
                <li>daily optimization</li>
                <li>dedicated account manager</li>
              </ul>
              <Link href="/contact?package=dominate" className="zm-start">
                enquire<span>&#8594;</span>
              </Link>
            </div>
            <div className="zm-panel">
              <span className="zm-n">05</span>
              <div className="zm-name">custom</div>
              <div className="zm-amt">
                scoped
                <small>paid plus organic,
                  <br />
                  priced to the brief</small>
              </div>
              <ul>
                <li>multi-service retainer</li>
                <li>built around your budget</li>
                <li>leadbridge can be added</li>
              </ul>
              <Link href="/contact?package=custom" className="zm-start">
                talk to us<span>&#8594;</span>
              </Link>
            </div>
          </div>

          <div className="zm-incl">
            <h4>included from essential upward</h4>
            <div className="zm-items">
              {META_ADS_INCLUDED.map((item) => (
                <p key={item}>{item.toLowerCase()}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 social & content */}
      <section className="zm-sec" id="social">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">02</span>
            <h2>social &amp; content</h2>
          </div>
          <div className="zm-two" style={{ marginBottom: "56px" }}>
            <p className="zm-disp zm-h-lg">
              built in phases.
              <br />
              presence, growth, authority.
            </p>
            <p className="zm-body">
              Content, posting and community handled end to end. Short form and clipping sit
              inside this line, and can also run on their own.
            </p>
          </div>

          <div className="zm-panels zm-p3">
            <div className="zm-panel">
              <span className="zm-n">01</span>
              <div className="zm-name">presence</div>
              <div className="zm-amt">
                {amount(presence.price)}
                <small>per month</small>
              </div>
              <p className="zm-note">
                Get the account consistent and looking like the business it represents.
              </p>
              <ul>
                <li>consistent posting schedule</li>
                <li>profile &amp; page optimization</li>
                <li>content written and designed</li>
                <li>monthly summary</li>
              </ul>
              <Link href="/contact?package=presence" className="zm-start">
                enquire<span>&#8594;</span>
              </Link>
            </div>
            <div className="zm-panel zm-feature">
              <span className="zm-n">02</span>
              <div className="zm-name">growth</div>
              <div className="zm-amt">
                {amount(growth.price)}
                <small>per month</small>
              </div>
              <p className="zm-note">
                Higher volume, built to grow an audience rather than maintain one.
              </p>
              <ul>
                <li>increased content volume</li>
                <li>short form video</li>
                <li>audience growth strategy</li>
                <li>engagement &amp; community</li>
                <li>monthly reporting call</li>
              </ul>
              <Link href="/contact?package=growth" className="zm-start">
                enquire<span>&#8594;</span>
              </Link>
            </div>
            <div className="zm-panel">
              <span className="zm-n">03</span>
              <div className="zm-name">authority</div>
              <div className="zm-amt">
                {amount(authority.price)}
                <small>per month</small>
              </div>
              <p className="zm-note">A full content system across channels, positioning included.</p>
              <ul>
                <li>full content system</li>
                <li>positioning &amp; brand voice</li>
                <li>clipping &amp; repurposing</li>
                <li>scale strategy</li>
                <li>priority support</li>
              </ul>
              <Link href="/contact?package=authority" className="zm-start">
                enquire<span>&#8594;</span>
              </Link>
            </div>
          </div>

          <div className="zm-rows" style={{ marginTop: "44px" }}>
            <Link href="/clipping" className="zm-cap">
              <span className="zm-n">&#43;</span>
              <h3>clipping</h3>
              <div className="zm-tags">
                <span>short form at volume</span>
                <span>paid on views delivered</span>
                <span>runs standalone</span>
              </div>
              <span className="zm-go">&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 03 websites & shopify */}
      <section className="zm-sec" id="build">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">03</span>
            <h2>websites &amp; shopify</h2>
          </div>
          <div className="zm-two" style={{ marginBottom: "56px" }}>
            <p className="zm-disp zm-h-lg">
              the clicks arrive.
              <br />
              the orders do not.
            </p>
            <p className="zm-body">
              Your landing page and your checkout decide what every click you buy is actually
              worth. Priced per project, because a one page build and a full store are not the
              same job.
            </p>
          </div>
          <div className="zm-panels zm-p2">
            <div className="zm-panel">
              <span className="zm-n">what we build</span>
              <ul style={{ marginTop: "10px" }}>
                <li>shopify store build or rebuild</li>
                <li>landing pages for live campaigns</li>
                <li>speed, tracking &amp; checkout fixes</li>
                <li>pixel and events verified end to end</li>
                <li>full handover, you own the files</li>
              </ul>
            </div>
            <div className="zm-panel zm-feature">
              <span className="zm-n">pricing</span>
              <div className="zm-amt">
                scoped
                <small>quoted after we see the brief</small>
              </div>
              <p className="zm-note">
                Send what you need built and what it has to do. You get a written scope and a
                fixed number back, not an hourly rate.
              </p>
              <Link href="/contact?package=website" className="zm-start">
                tell us what you need<span>&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 04 branding */}
      <section className="zm-sec" id="brand">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">04</span>
            <h2>branding</h2>
          </div>
          <div className="zm-two" style={{ marginBottom: "56px" }}>
            <p className="zm-disp zm-h-lg">
              your brand looks premium.
              <br />
              your ads do not.
            </p>
            <p className="zm-body">
              A brand system your ads can actually be built on, delivered as files you own
              outright.
            </p>
          </div>
          <div className="zm-panels zm-p2">
            <div className="zm-panel zm-feature">
              <span className="zm-n">starter</span>
              <div className="zm-amt">
                {amount(BRANDING_TIER.price)}
                <small>one off</small>
              </div>
              <ul>
                {BRANDING_TIER.features.map((f) => (
                  <li key={f}>{f.toLowerCase()}</li>
                ))}
              </ul>
              <Link href="/contact?package=branding" className="zm-start">
                enquire<span>&#8594;</span>
              </Link>
            </div>
            <div className="zm-panel">
              <span className="zm-n">extended</span>
              <div className="zm-amt">
                scoped
                <small>full identity programme</small>
              </div>
              <ul>
                <li>everything in starter</li>
                <li>written brand guidelines</li>
                <li>social and packaging application</li>
                <li>tone of voice</li>
              </ul>
              <Link href="/contact?package=branding-extended" className="zm-start">
                talk to us<span>&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 05 leadbridge */}
      <section className="zm-sec" id="leadbridge">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">05</span>
            <h2>leadbridge</h2>
          </div>
          <div className="zm-two">
            <div>
              <p className="zm-disp zm-h-lg" style={{ marginBottom: "30px" }}>
                ads bring the lead.
                <br />
                leadbridge follows it.
              </p>
              <p className="zm-body">{LEADBRIDGE.tagline} Runs alongside any package above, or on its own if your leads are already coming in and going nowhere.</p>
            </div>
            <div className="zm-panels zm-p2" style={{ gridTemplateColumns: "1fr" }}>
              <div className="zm-panel zm-feature">
                <span className="zm-n">add-on</span>
                <div className="zm-amt">
                  {amount(LEADBRIDGE.price)}
                  <small>{LEADBRIDGE.priceNote}</small>
                </div>
                <ul>
                  <li>cold &amp; warm lead handling</li>
                  <li>structured follow up</li>
                  <li>appointment setting</li>
                  <li>works with any package</li>
                </ul>
                <Link href="/contact?package=leadbridge" className="zm-start">
                  add leadbridge<span>&#8594;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="zm-cta">
        <div className="zm-glow" aria-hidden="true" style={{ top: "50%" }} />
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">06</span>
            <h2>not sure which tier</h2>
          </div>
          <p className="zm-disp zm-h-xl" style={{ fontSize: "clamp(2.4rem,7vw,5.4rem)" }}>
            we will tell you
            <br />
            which one you need.
          </p>
          <p className="zm-body" style={{ maxWidth: "48ch", margin: "30px auto 0" }}>
            Send your website and what you are spending now. We will recommend a package, or say
            plainly if none of them fit yet.
          </p>
          <Link href="/contact" className="zm-btn">
            request a free proposal <span>&#8594;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
