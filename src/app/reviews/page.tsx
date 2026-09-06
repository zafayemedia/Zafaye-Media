import type { Metadata } from "next";
import ReviewForm from "@/components/ReviewForm";
import Lines from "@/components/motion/Lines";
import { isSupabaseConfigured, supabase, type Review } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Reviews — Zafaye Media",
  description: "Client reviews for Zafaye Media. Published only after the working relationship is verified.",
};

// Without this, Next.js prerenders this page once at build time and it
// never picks up newly approved reviews until the next deploy.
export const revalidate = 30;

async function getApprovedReviews(): Promise<Review[]> {
  if (!isSupabaseConfigured || !supabase) return [];

  const { data, error } = await supabase
    .from("reviews")
    .select("id, created_at, name, company, rating, comment")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (!error && data) return data as Review[];

  // The `company` column is new (brand-black rebuild migration). Until that
  // migration has been run in Supabase, fall back to the original column
  // set rather than showing no reviews at all.
  const fallback = await supabase
    .from("reviews")
    .select("id, created_at, name, rating, comment")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (fallback.error || !fallback.data) return [];
  return fallback.data as Review[];
}

export default async function ReviewsPage() {
  const reviews = await getApprovedReviews();

  return (
    <div className="zm-page">
      <section className="zm-phead">
        <div className="zm-glow" aria-hidden="true" />
        <div className="zm-wrap">
          <div className="zm-meta">
            <span>reviews</span>
            <span>published after approval</span>
          </div>
          <Lines as="h1" className="zm-disp zm-h-xl" lines={["checked,", "not claimed."]} />
          <p className="zm-body">
            Every review below was left by a client we have actually worked with. Nothing is
            published until we have confirmed it, and nothing is edited once it is.
          </p>
        </div>
      </section>

      <section className="zm-sec">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">01</span>
            <h2>what clients say</h2>
          </div>
          {reviews.length === 0 ? (
            <p className="zm-body">
              Reviews are being collected. Check back soon, or be the first to leave one below.
            </p>
          ) : (
            <div className="zm-voices">
              {reviews.map((review) => (
                <article key={review.id} className="zm-voice">
                  <div className="zm-stars" aria-hidden="true">
                    {"★".repeat(review.rating)}
                    <span style={{ color: "var(--zm-dim)" }}>{"★".repeat(5 - review.rating)}</span>
                  </div>
                  <blockquote>{review.comment}</blockquote>
                  <div className="zm-who">
                    <b>{review.name}</b>
                    {review.company && <small>{review.company}</small>}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="zm-sec" id="write">
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">02</span>
            <h2>leave a review</h2>
          </div>
          <div className="zm-two">
            <div>
              <Lines
                className="zm-disp zm-h-lg"
                style={{ marginBottom: "30px" }}
                lines={["worked with us?", "say so honestly."]}
              />
              <p className="zm-body">
                Reviews are read before they go up. What we will not publish is anything from
                someone we have never worked with.
              </p>
              <div className="zm-note-box">
                <p>
                  Submitted reviews are held for approval and are not visible on this page until
                  we have verified the working relationship.
                </p>
              </div>
            </div>
            <ReviewForm />
          </div>
        </div>
      </section>

      <section className="zm-cta">
        <div className="zm-glow" aria-hidden="true" style={{ top: "50%" }} />
        <div className="zm-wrap">
          <div className="zm-sec-label">
            <span className="zm-mark-num">03</span>
            <h2>not a client yet</h2>
          </div>
          <Lines
            className="zm-disp zm-h-xl"
            style={{ fontSize: "clamp(2.4rem,7vw,5.4rem)" }}
            lines={["read them,", "then check us."]}
          />
          <p className="zm-body" style={{ maxWidth: "48ch", margin: "30px auto 0" }}>
            Ask for the client behind any review here and we will connect you, with their
            permission.
          </p>
          <a href="/contact" className="zm-btn">
            request a free proposal <span>&#8594;</span>
          </a>
        </div>
      </section>
    </div>
  );
}
