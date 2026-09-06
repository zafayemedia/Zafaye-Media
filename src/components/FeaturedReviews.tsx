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
    return <p className="zm-body">Reviews are being collected. Check back soon.</p>;
  }

  return (
    <div className="zm-voices">
      {reviews.map((review) => (
        <article key={review.id} className="zm-voice">
          <span className="zm-q" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote>{review.comment}</blockquote>
          <div className="zm-who">
            <b>{review.name}</b>
          </div>
        </article>
      ))}
    </div>
  );
}
