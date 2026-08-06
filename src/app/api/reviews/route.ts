import { NextResponse } from "next/server";
import { isSupabaseConfigured, supabase, type Review } from "@/lib/supabase";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<Review>;

  if (!body.name || !body.comment || !body.rating) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (body.rating < 1 || body.rating > 5) {
    return NextResponse.json({ error: "Rating must be between 1 and 5." }, { status: 400 });
  }

  if (!isSupabaseConfigured || !supabase) {
    return NextResponse.json(
      { error: "This site isn't connected to a database yet." },
      { status: 503 },
    );
  }

  // approved defaults to false in the database — nothing here ever auto-publishes a review.
  const { error } = await supabase.from("reviews").insert({
    name: body.name,
    rating: body.rating,
    comment: body.comment,
  });

  if (error) {
    return NextResponse.json({ error: "Could not save review." }, { status: 500 });
  }

  await sendNotificationEmail(
    "New review submitted",
    `
      <h2>New review awaiting approval</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Rating:</strong> ${body.rating}/5</p>
      <p><strong>Comment:</strong> ${body.comment}</p>
      <p>Approve it from the Supabase dashboard to make it public.</p>
    `,
  );

  return NextResponse.json({ ok: true });
}
