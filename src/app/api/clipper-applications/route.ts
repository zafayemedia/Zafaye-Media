import { NextResponse } from "next/server";
import { isSupabaseConfigured, supabase, type ClipperApplication } from "@/lib/supabase";
import { sendNotificationEmail } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

type Body = Partial<ClipperApplication> & { website?: string };

export async function POST(request: Request) {
  const body = (await request.json()) as Body;

  // Honeypot: real visitors never fill this hidden field. If it's filled,
  // pretend success without touching the database or sending an email.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const requiredFields: (keyof ClipperApplication)[] = [
    "full_name",
    "email",
    "whatsapp",
    "country",
    "city",
    "main_platform",
    "follower_range",
    "avg_views_range",
    "top_audience_country",
    "audience_percent_tier1",
    "niche",
    "page_age_range",
    "edits_own_clips",
    "clips_per_day",
    "done_paid_clipping",
  ];

  for (const field of requiredFields) {
    if (!body[field]) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
  }

  if (!body.age_confirmed || !body.accuracy_consent || !body.organic_consent) {
    return NextResponse.json({ error: "Missing required confirmations." }, { status: 400 });
  }

  if (!EMAIL_RE.test(body.email as string)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const urlFields = [
    body.instagram_url,
    body.tiktok_url,
    body.youtube_url,
    body.facebook_url,
    body.other_platform_url,
  ].filter((v): v is string => Boolean(v && v.trim()));

  if (urlFields.length === 0) {
    return NextResponse.json(
      { error: "Add at least one page link (Instagram, TikTok, YouTube, Facebook, or other)." },
      { status: 400 },
    );
  }

  for (const url of urlFields) {
    if (!isValidUrl(url)) {
      return NextResponse.json({ error: "One of the page links isn't a valid URL." }, { status: 400 });
    }
  }

  if (!isSupabaseConfigured || !supabase) {
    return NextResponse.json(
      { error: "This site isn't connected to a database yet. Please reach out on WhatsApp instead." },
      { status: 503 },
    );
  }

  const application: ClipperApplication = {
    full_name: body.full_name as string,
    email: body.email as string,
    whatsapp: body.whatsapp as string,
    country: body.country as string,
    city: body.city as string,
    age_confirmed: true,
    instagram_url: body.instagram_url || null,
    tiktok_url: body.tiktok_url || null,
    youtube_url: body.youtube_url || null,
    facebook_url: body.facebook_url || null,
    other_platform_url: body.other_platform_url || null,
    main_platform: body.main_platform as string,
    follower_range: body.follower_range as string,
    avg_views_range: body.avg_views_range as string,
    top_audience_country: body.top_audience_country as string,
    audience_percent_tier1: body.audience_percent_tier1 as string,
    niche: body.niche as string,
    page_age_range: body.page_age_range as string,
    edits_own_clips: body.edits_own_clips as string,
    editing_software: body.editing_software || null,
    sample_clips: body.sample_clips || null,
    clips_per_day: body.clips_per_day as string,
    done_paid_clipping: body.done_paid_clipping as string,
    paid_clipping_details: body.paid_clipping_details || null,
    notes: body.notes || null,
    accuracy_consent: true,
    organic_consent: true,
  };

  const { error } = await supabase.from("clipper_applications").insert(application);

  if (error) {
    return NextResponse.json({ error: "Could not save application." }, { status: 500 });
  }

  const pages = [
    application.instagram_url && `Instagram: ${application.instagram_url}`,
    application.tiktok_url && `TikTok: ${application.tiktok_url}`,
    application.youtube_url && `YouTube: ${application.youtube_url}`,
    application.facebook_url && `Facebook: ${application.facebook_url}`,
    application.other_platform_url && `Other: ${application.other_platform_url}`,
  ]
    .filter(Boolean)
    .join("<br>");

  await sendNotificationEmail(
    `New Be a Clipper application: ${application.full_name}`,
    `
      <h2>New clipper application</h2>
      <p><strong>Name:</strong> ${application.full_name}</p>
      <p><strong>Email:</strong> ${application.email}</p>
      <p><strong>WhatsApp:</strong> ${application.whatsapp}</p>
      <p><strong>Location:</strong> ${application.city}, ${application.country}</p>
      <p><strong>Pages:</strong><br>${pages}</p>
      <p><strong>Main platform:</strong> ${application.main_platform}</p>
      <p><strong>Followers:</strong> ${application.follower_range}</p>
      <p><strong>Avg views (last 10 posts):</strong> ${application.avg_views_range}</p>
      <p><strong>Top audience country:</strong> ${application.top_audience_country}</p>
      <p><strong>Audience % US/UK/CA/AU:</strong> ${application.audience_percent_tier1}</p>
      <p><strong>Niche:</strong> ${application.niche}</p>
      <p><strong>Page age:</strong> ${application.page_age_range}</p>
      <p><strong>Edits own clips:</strong> ${application.edits_own_clips}</p>
      <p><strong>Editing software:</strong> ${application.editing_software || "Not provided"}</p>
      <p><strong>Sample clips:</strong> ${application.sample_clips || "Not provided"}</p>
      <p><strong>Clips per day:</strong> ${application.clips_per_day}</p>
      <p><strong>Done paid clipping before:</strong> ${application.done_paid_clipping}</p>
      <p><strong>Details:</strong> ${application.paid_clipping_details || "Not provided"}</p>
      <p><strong>Notes:</strong> ${application.notes || "None"}</p>
    `,
  );

  return NextResponse.json({ ok: true });
}
