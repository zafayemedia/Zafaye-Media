import type { Metadata } from "next";
import Link from "next/link";
import WorkGrid, { CATEGORY, CATEGORY_LABEL } from "@/components/WorkGrid";
import { CASE_STUDIES } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Case Studies — Zafaye Media",
  description:
    "Selected client work from Zafaye Media across paid social, content, store builds and branding.",
};

const FEATURED_CLIENT = "MyLight.pk";

export default function WorkPage() {
  const featured = CASE_STUDIES.find((c) => c.client === FEATURED_CLIENT)!;

  return (
    <div className="zm-page">
      <section className="zm-phead">
        <div className="zm-glow" aria-hidden="true" />
        <div className="zm-wrap">
          <div className="zm-meta">
            <span>selected work</span>
            <span>verified case studies</span>
          </div>
          <h1 className="zm-disp zm-h-xl">
            ask any of them.
            <br />
            that is the point.
          </h1>
          <p className="zm-body">
            Every account below is one the client owns and can log into today. Nothing here is a
            number we cannot open inside the platform and show you.
          </p>
        </div>
      </section>

      <section className="zm-sec">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">01</span>
            <h2>featured</h2>
          </div>
          <div className="zm-feat">
            <div>
              <span className="zm-cat">{CATEGORY_LABEL[CATEGORY[featured.client]]}</span>
              <p className="zm-who">{featured.client}</p>
              <p>{featured.summary}</p>
              <Link href="/contact" className="zm-btn zm-btn-line" style={{ marginTop: "34px" }}>
                request the full breakdown <span>&#8594;</span>
              </Link>
            </div>
            <div>
              <p className="zm-lbl">result</p>
              <div className="zm-metric zm-lead">
                <b>{featured.stat}</b>
                <span>{featured.statLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="zm-sec">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">02</span>
            <h2>all work</h2>
          </div>
          <WorkGrid excludeClient={FEATURED_CLIENT} />
        </div>
      </section>

      <section className="zm-sec">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">03</span>
            <h2>why these can be checked</h2>
          </div>
          <div className="zm-steps">
            <div className="zm-step">
              <span className="zm-n">01</span>
              <h3>your account, your name</h3>
              <p>
                Campaigns run inside your own Business Portfolio. If we stop working together,
                nothing gets taken away with us.
              </p>
            </div>
            <div className="zm-step">
              <span className="zm-n">02</span>
              <h3>weekly, in plain language</h3>
              <p>
                Spend, result and what changed. No dashboard screenshot that hides the number you
                actually care about.
              </p>
            </div>
            <div className="zm-step">
              <span className="zm-n">03</span>
              <h3>references on request</h3>
              <p>
                Ask for the client behind any case study here and we will connect you, with their
                permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="zm-cta">
        <div className="zm-glow" aria-hidden="true" style={{ top: "50%" }} />
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">04</span>
            <h2>your turn</h2>
          </div>
          <p className="zm-disp zm-h-xl" style={{ fontSize: "clamp(2.4rem,7vw,5.4rem)" }}>
            see what we would do
            <br />
            with your account.
          </p>
          <p className="zm-body" style={{ maxWidth: "48ch", margin: "30px auto 0" }}>
            Send your website and what you are spending now. You get a written plan back, whether
            or not you work with us.
          </p>
          <Link href="/contact" className="zm-btn">
            request a free proposal <span>&#8594;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
