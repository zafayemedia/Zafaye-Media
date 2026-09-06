import type { Metadata } from "next";
import ClipperApplicationForm from "@/components/ClipperApplicationForm";
import { CLIPPER_FAQ } from "@/lib/clipper-data";

export const metadata: Metadata = {
  title: "Work as a Clipper — Zafaye Media",
  description: "Own a page? Get paid per 1,000 views for posting campaign clips from your own account.",
};

export default function ClippersPage() {
  return (
    <div className="zm-page">
      <section className="zm-hero">
        <div className="zm-glow" aria-hidden="true" />
        <div className="zm-wrap">
          <div className="zm-hero-meta">
            <span>clipping — for page owners</span>
            <span>paid on views delivered</span>
          </div>
          <h1 className="zm-disp zm-h-xl">
            you already run
            <br />
            the page.
          </h1>
          <p className="zm-body" style={{ marginTop: "36px", maxWidth: "52ch" }}>
            If you post football, gaming, motivation or anything with a real audience, you can get
            paid for it. We bring the campaigns and the footage. You edit, you post from your own
            page, you get paid on the views you deliver.
          </p>
          <a href="#apply" className="zm-btn" style={{ marginTop: "40px", width: "fit-content" }}>
            apply to join <span>&#8594;</span>
          </a>
        </div>
      </section>

      {/* 01 how you get paid */}
      <section className="zm-sec" id="pay">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">01</span>
            <h2>how you get paid</h2>
          </div>
          <div className="zm-two" style={{ marginBottom: "52px" }}>
            <p className="zm-disp zm-h-lg">
              per 1,000 views.
              <br />
              nothing else.
            </p>
            <p className="zm-body">
              No fixed fee per post, because a post nobody watches is worth nothing to anyone. You
              are paid on what your clips actually deliver, so a page that performs earns more
              than a page that just posts.
            </p>
          </div>
          <div className="zm-big-num">
            <div>
              <b>per 1,000</b>
              <span>you are paid on views delivered, not per post</span>
            </div>
            <div>
              <b>in pkr</b>
              <span>paid locally, no currency conversion on your side</span>
            </div>
            <div>
              <b>in writing</b>
              <span>the rate is confirmed before you post anything</span>
            </div>
          </div>
          <div className="zm-note-box">
            <p>
              Rates differ by campaign and category, so we confirm the exact rate for a campaign
              in writing before you take it. You are never asked to post first and find out later.
            </p>
          </div>
        </div>
      </section>

      {/* 02 how it works */}
      <section className="zm-sec" id="how">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">02</span>
            <h2>how it works</h2>
          </div>
          <div className="zm-steps zm-four">
            <div className="zm-step">
              <span className="zm-n">01</span>
              <h3>apply</h3>
              <p>
                Send us your page, your niche and your numbers. We check the account is real and
                the audience is genuine.
              </p>
            </div>
            <div className="zm-step">
              <span className="zm-n">02</span>
              <h3>get campaigns</h3>
              <p>
                Once you are in, you receive campaigns that suit your niche, with the source
                footage and the rules attached.
              </p>
            </div>
            <div className="zm-step">
              <span className="zm-n">03</span>
              <h3>edit &amp; post</h3>
              <p>You cut the clips yourself and post them from your own page. You keep full control of the account, always.</p>
            </div>
            <div className="zm-step">
              <span className="zm-n">04</span>
              <h3>get paid</h3>
              <p>Views are counted per post. You are paid on views delivered, in PKR, on the agreed schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 what you need */}
      <section className="zm-sec" id="need">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">03</span>
            <h2>what you need</h2>
          </div>
          <div className="zm-panels zm-p2">
            <div className="zm-panel zm-feature">
              <span className="zm-n">we are looking for</span>
              <ul style={{ marginTop: "10px" }}>
                <li>a page you own and control</li>
                <li>a real audience, not bought followers</li>
                <li>a clear niche: football, gaming, motivation and similar</li>
                <li>you can edit your own short form clips</li>
                <li>you can post consistently</li>
              </ul>
            </div>
            <div className="zm-panel">
              <span className="zm-n">not a fit</span>
              <ul style={{ marginTop: "10px" }}>
                <li>you only edit and do not own a page</li>
                <li>engagement is bought or botted</li>
                <li>the page has no consistent theme</li>
                <li>you want a fixed salary per post</li>
              </ul>
            </div>
          </div>
          <div className="zm-note-box">
            <p>
              We work with page owners who edit their own clips. If you edit but do not own a
              page, grow one first and come back.
            </p>
          </div>
        </div>
      </section>

      {/* 04 FAQ */}
      <section className="zm-sec" id="faq">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">04</span>
            <h2>questions</h2>
          </div>
          <div className="zm-faq">
            {CLIPPER_FAQ.map((item) => (
              <details key={item.question}>
                <summary>{item.question.toLowerCase().replace(/\?$/, "")}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 05 apply */}
      <section className="zm-sec" id="apply">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">05</span>
            <h2>apply</h2>
          </div>
          <div className="zm-two">
            <div>
              <p className="zm-disp zm-h-lg" style={{ marginBottom: "30px" }}>
                send your page.
                <br />
                we will take a look.
              </p>
              <p className="zm-body">
                Applications are reviewed manually. If your page fits an active campaign we will
                come back to you with the brief and the rate. If it does not fit yet, we will tell
                you what would change that.
              </p>
              <div className="zm-note-box">
                <p>
                  Working with brands instead?{" "}
                  <a href="/clipping" style={{ color: "var(--zm-orange)" }}>
                    Start a clipping campaign here.
                  </a>
                </p>
              </div>
            </div>
            <ClipperApplicationForm />
          </div>
        </div>
      </section>

      <section className="zm-cta">
        <div className="zm-glow" aria-hidden="true" style={{ top: "50%" }} />
        <div className="zm-wrap">
          <p className="zm-disp zm-h-xl" style={{ fontSize: "clamp(2.4rem,7vw,5.4rem)" }}>
            the page is already
            <br />
            doing the work.
          </p>
          <p className="zm-body" style={{ maxWidth: "48ch", margin: "30px auto 0" }}>
            Start earning from it.
          </p>
          <a href="#apply" className="zm-btn">
            apply to join <span>&#8594;</span>
          </a>
        </div>
      </section>
    </div>
  );
}
