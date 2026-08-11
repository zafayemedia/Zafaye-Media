import Image from "next/image";
import type { Metadata } from "next";
import ReviewForm from "@/components/ReviewForm";
import Reveal from "@/components/Reveal";
import { isSupabaseConfigured, supabase, type Review } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Reviews — Zafaye Media",
  description: "Reviews from Zafaye Media clients.",
};

// Without this, Next.js prerenders this page once at build time and it
// never picks up newly approved reviews until the next deploy.
export const revalidate = 30;

async function getApprovedReviews(): Promise<Review[]> {
  if (!isSupabaseConfigured || !supabase) return [];

  const { data, error } = await supabase
    .from("reviews")
    .select("id, created_at, name, rating, comment")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data as Review[];
}

export default async function ReviewsPage() {
  const reviews = await getApprovedReviews();

  return (
    <div className="image-section min-h-screen">
      <div className="image-section-media opacity-70">
        <Image src="/images/reviews-texture.jpeg" alt="" fill priority sizes="100vw" />
      </div>
      <div className="image-section-overlay" />
      <div className="image-section-content mx-auto max-w-6xl px-6 py-16 pt-32 md:py-24 md:pt-40">
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.15em] text-steel">Reviews</p>
          <h1 className="headline mt-3 text-4xl text-white md:text-6xl">Unedited</h1>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            {reviews.length === 0 ? (
              <p className="text-sm text-steel">
                No reviews are published yet. Submitted reviews are checked
                before they go live here.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {reviews.map((review, i) => (
                  <Reveal key={review.id} delay={i * 60}>
                    <div className="glass-panel tilt-card rounded-[20px] p-6">
                      <p className="font-display text-sm text-zafaye-orange">
                        {"★".repeat(review.rating)}
                        <span className="text-steel">
                          {"★".repeat(5 - review.rating)}
                        </span>
                      </p>
                      <p className="mt-3 text-sm text-white/85">{review.comment}</p>
                      <p className="font-display mt-4 text-xs uppercase tracking-[0.1em] text-steel">
                        {review.name}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>

          <Reveal delay={100}>
            <div>
              <h2 className="font-display text-lg font-semibold text-white">
                Leave a review
              </h2>
              <p className="mt-2 text-sm text-steel">
                Checked before it&apos;s published — won&apos;t appear immediately.
              </p>
              <div className="mt-6">
                <ReviewForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
