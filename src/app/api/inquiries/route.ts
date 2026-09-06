import { NextResponse } from "next/server";
import { isSupabaseConfigured, supabase, type Inquiry } from "@/lib/supabase";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<Inquiry>;
  const source = body.source === "clipping-brand" ? "clipping-brand" : "contact";

  if (source === "contact") {
    if (
      !body.service ||
      !body.full_name ||
      !body.email ||
      !body.phone ||
      !body.city ||
      !body.country ||
      !body.what_they_sell
    ) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
  } else {
    // clipping-brand: name, company, email and phone are the only required fields.
    if (!body.full_name || !body.business_name || !body.email || !body.phone) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
  }

  if (!isSupabaseConfigured || !supabase) {
    return NextResponse.json(
      { error: "This site isn't connected to a database yet. Please reach out on WhatsApp instead." },
      { status: 503 },
    );
  }

  const inquiry: Inquiry = {
    source,
    service: body.service || (source === "clipping-brand" ? "Clipping campaign" : ""),
    full_name: body.full_name,
    email: body.email,
    phone: body.phone,
    city: body.city ?? null,
    country: body.country ?? null,
    business_name: body.business_name ?? null,
    website_or_social: body.website_or_social ?? null,
    ad_spend: body.ad_spend ?? null,
    package: body.package ?? null,
    what_they_sell: body.what_they_sell ?? null,
    footage_type: body.footage_type ?? null,
    category: body.category ?? null,
    budget: body.budget ?? null,
    notes: body.notes ?? null,
  };

  const { error } = await supabase.from("inquiries").insert(inquiry);

  if (error) {
    return NextResponse.json({ error: "Could not save inquiry." }, { status: 500 });
  }

  if (source === "clipping-brand") {
    await sendNotificationEmail(
      `New clipping campaign enquiry: ${inquiry.business_name}`,
      `
        <h2>New clipping enquiry (brand)</h2>
        <p><strong>Name:</strong> ${inquiry.full_name}</p>
        <p><strong>Brand / company:</strong> ${inquiry.business_name}</p>
        <p><strong>Email:</strong> ${inquiry.email}</p>
        <p><strong>WhatsApp:</strong> ${inquiry.phone}</p>
        <p><strong>Country:</strong> ${inquiry.country || "Not provided"}</p>
        <p><strong>Footage they have:</strong> ${inquiry.footage_type || "Not provided"}</p>
        <p><strong>Category:</strong> ${inquiry.category || "Not provided"}</p>
        <p><strong>Monthly budget:</strong> ${inquiry.budget || "Not provided"}</p>
        <p><strong>Message:</strong> ${inquiry.what_they_sell || "None"}</p>
      `,
    );
  } else {
    await sendNotificationEmail(
      `New inquiry: ${inquiry.service}`,
      `
        <h2>New inquiry — ${inquiry.service}</h2>
        <p><strong>Name:</strong> ${inquiry.full_name}</p>
        <p><strong>Email:</strong> ${inquiry.email}</p>
        <p><strong>Phone / WhatsApp:</strong> ${inquiry.phone}</p>
        <p><strong>Location:</strong> ${[inquiry.city, inquiry.country].filter(Boolean).join(", ") || "Not provided"}</p>
        <p><strong>Business:</strong> ${inquiry.business_name || "Not provided"}</p>
        <p><strong>Website / social:</strong> ${inquiry.website_or_social || "Not provided"}</p>
        <p><strong>Package interest:</strong> ${inquiry.package || "Not specified"}</p>
        <p><strong>Current ad spend:</strong> ${inquiry.ad_spend || "Not provided"}</p>
        <p><strong>Message:</strong> ${inquiry.what_they_sell || "None"}</p>
      `,
    );
  }

  return NextResponse.json({ ok: true });
}
