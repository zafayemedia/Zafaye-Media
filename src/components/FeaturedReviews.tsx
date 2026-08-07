import { isSupabaseConfigured, supabase, type Review } from "@/lib/supabase";

async function getFeaturedReviews(): Promise<Review[]> {
  if (!isSupabaseConfigured || !supabase) return [];

  const { data, error } = await supabase
    .from("reviews")
    .select("id, created_at, name, rating, comment")
    .eq("approved", true)
    .order("rating", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(3);

  if (error || !data) return [];
  return data as Review[];
}

export default async function FeaturedReviews() {
  const reviews = await getFeaturedReviews();

  if (reviews.length === 0) {
    return (
      <p className="text-sm text-ink-navy/50">
        Reviews are being collected — check back soon.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {reviews.map((review) => (
        <div key={review.id} className="glass-panel-light tilt-card rounded-[20px] p-6">
          <p className="font-display text-sm text-zafaye-orange">
            {"★".repeat(review.rating)}
            <span className="text-ink-navy/25">{"★".repeat(5 - review.rating)}</span>
          </p>
          <p className="mt-3 text-sm text-ink-navy/75">{review.comment}</p>
          <p className="font-display mt-4 text-xs uppercase tracking-[0.1em] text-ink-navy/50">
            {review.name}
          </p>
        </div>
      ))}
    </div>
  );
}
