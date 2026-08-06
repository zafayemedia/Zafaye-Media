import { NextResponse } from "next/server";
import { isSupabaseConfigured, supabase, type Inquiry } from "@/lib/supabase";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<Inquiry>;

  if (!body.service || !body.business_name || !body.website_or_social || !body.what_they_sell) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!isSupabaseConfigured || !supabase) {
    return NextResponse.json(
      { error: "This site isn't connected to a database yet. Please reach out on WhatsApp instead." },
      { status: 503 },
    );
  }

  const inquiry: Inquiry = {
    service: body.service,
    business_name: body.business_name,
    website_or_social: body.website_or_social,
    ad_spend: body.ad_spend ?? null,
    what_they_sell: body.what_they_sell,
    notes: body.notes ?? null,
  };

  const { error } = await supabase.from("inquiries").insert(inquiry);

  if (error) {
    return NextResponse.json({ error: "Could not save inquiry." }, { status: 500 });
  }

  await sendNotificationEmail(
    `New inquiry: ${inquiry.service}`,
    `
      <h2>New inquiry — ${inquiry.service}</h2>
      <p><strong>Business:</strong> ${inquiry.business_name}</p>
      <p><strong>Website / social:</strong> ${inquiry.website_or_social}</p>
      <p><strong>Current ad spend:</strong> ${inquiry.ad_spend || "Not provided"}</p>
      <p><strong>What they sell:</strong> ${inquiry.what_they_sell}</p>
      <p><strong>Notes:</strong> ${inquiry.notes || "None"}</p>
    `,
  );

  return NextResponse.json({ ok: true });
}
