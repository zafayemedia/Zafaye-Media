import type { Metadata } from "next";
import Link from "next/link";
import ClippingEnquiryForm from "@/components/ClippingEnquiryForm";
import Lines from "@/components/motion/Lines";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clipping for Brands — Zafaye Media",
  description:
    "Turn the content you already have into short vertical clips posted at volume across a network of pages. Paid on views delivered.",
};

const FOOTAGE_WORDS = ["podcasts", "product launches", "streams", "founder content", "events", "ugc"];

export default function ClippingPage() {
  return (
    <div className="zm-page">
      <section className="zm-hero">
        <div className="zm-glow" aria-hidden="true" />
        <div className="zm-wrap">
          <div className="zm-hero-meta">
            <span>clipping — for brands</span>
            <span>paid on views delivered</span>
          </div>
          <Lines as="h1" className="zm-disp zm-h-xl" lines={["one video.", "a hundred places."]} />
          <p className="zm-body" style={{ marginTop: "36px", maxWidth: "52ch" }}>
            Clipping turns the content you already have into short vertical videos, posted at
            volume across a network of real pages. You pay for the views that actually land, not
            for a content retainer.
          </p>
          <Link href="#enquire" className="zm-btn" style={{ marginTop: "40px", width: "fit-content" }}>
            talk to us about a campaign <span>&#8594;</span>
          </Link>
        </div>
      </section>

      <div className="zm-strip" aria-hidden="true">
        <div className="zm-strip-track">
          {[...FOOTAGE_WORDS, ...FOOTAGE_WORDS].map((word, i) => (
            <span key={`${word}-${i}`}>
              {word}
              <i>&#9679;</i>
            </span>
          ))}
        </div>
      </div>

      {/* 01 what clipping is */}
      <section className="zm-sec" id="what">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">01</span>
            <h2>what clipping is</h2>
          </div>
          <div className="zm-two">
            <div>
              <Lines
                className="zm-disp zm-h-lg"
                style={{ marginBottom: "32px" }}
                lines={["you already made", "the content."]}
              />
              <p className="zm-body">
                Most brands sit on hours of usable footage. A podcast, a launch video, a founder
                talking, an event, a stream, a pile of UGC. It gets posted once and then it is
                finished.
              </p>
              <p className="zm-body" style={{ marginTop: "20px" }}>
                Clipping takes that footage and cuts it into dozens of short vertical videos, each
                edited to work on its own. Those clips are then posted across a network of pages
                in your category, so the same content reaches audiences your own account has no
                path to.
              </p>
            </div>
            <div className="zm-stack">
              <div>
                <h3>volume, not one hero video</h3>
                <p>
                  Thirty clips from one source beats one polished edit, because you find out which
                  angle works instead of guessing.
                </p>
              </div>
              <div>
                <h3>distribution, not just editing</h3>
                <p>
                  An editor gives you files. We post them, across pages that already have the
                  audience you are trying to reach.
                </p>
              </div>
              <div>
                <h3>paid on performance</h3>
                <p>
                  Campaigns are priced on views delivered. No monthly retainer sitting there
                  whether the clips perform or not.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 why it works — no stat block yet, see /lib/portfolio-data note in CLAUDE.md:
          an empty section beats an invented number, so this is left out entirely
          until the first campaigns close. */}
      <section className="zm-sec" id="why">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">02</span>
            <h2>why it works</h2>
          </div>
          <Lines
            className="zm-disp zm-h-lg"
            style={{ marginBottom: "56px" }}
            lines={["reach you cannot buy", "and cannot fake."]}
          />
          <div className="zm-steps">
            <div className="zm-step">
              <span className="zm-n">01</span>
              <h3>it compounds</h3>
              <p>
                Every clip is a new chance for the algorithm to pick something up. One clip going
                wide pays for the whole batch.
              </p>
            </div>
            <div className="zm-step">
              <span className="zm-n">02</span>
              <h3>it does not look like an ad</h3>
              <p>
                Clips land in feeds as content, from pages people already follow, which is why
                they get watched instead of skipped.
              </p>
            </div>
            <div className="zm-step">
              <span className="zm-n">03</span>
              <h3>it feeds everything else</h3>
              <p>
                The clips that perform organically become your next paid creatives, tested for
                free before you put budget behind them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 how a campaign runs */}
      <section className="zm-sec" id="how">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">03</span>
            <h2>how a campaign runs</h2>
          </div>
          <div className="zm-steps zm-four">
            <div className="zm-step">
              <span className="zm-n">01</span>
              <h3>brief &amp; footage</h3>
              <p>
                You send the source content and tell us what the clips need to do. We agree the
                niche, the rules and the view target.
              </p>
            </div>
            <div className="zm-step">
              <span className="zm-n">02</span>
              <h3>we brief the network</h3>
              <p>
                The campaign goes out to clippers in your category with your brand rules attached,
                so nothing gets posted off-message.
              </p>
            </div>
            <div className="zm-step">
              <span className="zm-n">03</span>
              <h3>clips go live</h3>
              <p>
                Clippers edit and post from their own pages. Every post is tracked back to the
                campaign so views are counted, not estimated.
              </p>
            </div>
            <div className="zm-step">
              <span className="zm-n">04</span>
              <h3>you get the report</h3>
              <p>Views delivered, top performing clips and the files themselves, so you can reuse the winners in paid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 what we handle */}
      <section className="zm-sec" id="handle">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">04</span>
            <h2>what we handle</h2>
          </div>
          <div>
            <div className="zm-cap" style={{ gridTemplateColumns: "60px 1.4fr auto" }}>
              <span className="zm-n">01</span>
              <h3>the network</h3>
              <div className="zm-tags">
                <span>recruiting page owners</span>
                <span>vetting</span>
                <span>onboarding</span>
                <span>payouts</span>
              </div>
            </div>
            <div className="zm-cap" style={{ gridTemplateColumns: "60px 1.4fr auto" }}>
              <span className="zm-n">02</span>
              <h3>the brief</h3>
              <div className="zm-tags">
                <span>brand rules</span>
                <span>hooks &amp; angles</span>
                <span>do-not-post list</span>
                <span>caption guidance</span>
              </div>
            </div>
            <div className="zm-cap" style={{ gridTemplateColumns: "60px 1.4fr auto" }}>
              <span className="zm-n">03</span>
              <h3>quality control</h3>
              <div className="zm-tags">
                <span>every clip reviewed</span>
                <span>takedown on request</span>
                <span>brand safety</span>
              </div>
            </div>
            <div className="zm-cap" style={{ gridTemplateColumns: "60px 1.4fr auto" }}>
              <span className="zm-n">04</span>
              <h3>tracking &amp; reporting</h3>
              <div className="zm-tags">
                <span>views verified per post</span>
                <span>top clip breakdown</span>
                <span>files returned to you</span>
              </div>
            </div>
          </div>
          <div className="zm-note-box">
            <p>You never manage a clipper directly. One brief in, one report out, one invoice.</p>
          </div>
        </div>
      </section>

      {/* 05 who this is for */}
      <section className="zm-sec" id="fit">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">05</span>
            <h2>who this is for</h2>
          </div>
          <div className="zm-panels zm-p2">
            <div className="zm-panel zm-feature">
              <span className="zm-n">good fit</span>
              <ul style={{ marginTop: "10px" }}>
                <li>you have existing long form footage</li>
                <li>a founder or face people will watch</li>
                <li>a category with active fan pages</li>
                <li>you want reach, not just a follower count</li>
                <li>you can brief once and let it run</li>
              </ul>
            </div>
            <div className="zm-panel">
              <span className="zm-n">not yet</span>
              <ul style={{ marginTop: "10px" }}>
                <li>no footage and no plan to make any</li>
                <li>a product that cannot be shown on video</li>
                <li>you need every post approved individually</li>
                <li>you are looking for guaranteed sales, not reach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 06 start a campaign */}
      <section className="zm-sec" id="enquire">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">06</span>
            <h2>start a campaign</h2>
          </div>
          <div className="zm-two">
            <div>
              <Lines
                className="zm-disp zm-h-lg"
                style={{ marginBottom: "30px" }}
                lines={["tell us what", "you have to work with."]}
              />
              <p className="zm-body">
                Send the footage you already have and the audience you want in front of. We will
                come back with a niche, a view target and a number, before you commit to anything.
              </p>
              <div className="zm-note-box">
                <p>
                  Prefer to talk first? WhatsApp {SITE.phoneDisplay} or email{" "}
                  <a href={`mailto:${SITE.email}`} style={{ color: "var(--zm-orange)" }}>
                    {SITE.email}
                  </a>
                  .
                </p>
              </div>
            </div>
            <ClippingEnquiryForm />
          </div>
        </div>
      </section>

      <section className="zm-cta">
        <div className="zm-glow" aria-hidden="true" style={{ top: "50%" }} />
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">07</span>
            <h2>run a page yourself</h2>
          </div>
          <Lines
            className="zm-disp zm-h-xl"
            style={{ fontSize: "clamp(2.4rem,7vw,5.4rem)" }}
            lines={["there is a", "different door for you."]}
          />
          <p className="zm-body" style={{ maxWidth: "48ch", margin: "30px auto 0" }}>
            If you own a page and want to get paid for posting clips rather than hiring us to run
            a campaign, start here instead.
          </p>
          <Link href="/clippers" className="zm-btn">
            apply as a clipper <span>&#8594;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
