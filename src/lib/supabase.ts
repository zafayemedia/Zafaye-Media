import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase = isSupabaseConfigured
  ? createClient(url as string, anonKey as string)
  : null;

export type Inquiry = {
  id?: string;
  created_at?: string;
  // "contact" (default) is the general enquiry form; "clipping-brand" is the
  // /clipping enquiry form. Same table, tagged so the two pipelines don't mix.
  source?: "contact" | "clipping-brand";
  service: string;
  full_name: string;
  email: string;
  phone: string;
  city: string | null;
  country: string | null;
  business_name: string | null;
  website_or_social: string | null;
  ad_spend: string | null;
  package: string | null;
  what_they_sell: string | null;
  footage_type: string | null;
  category: string | null;
  budget: string | null;
  notes: string | null;
};

export type ClipperApplication = {
  id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  whatsapp: string;
  country: string;
  city: string;
  age_confirmed: boolean;
  instagram_url: string | null;
  tiktok_url: string | null;
  youtube_url: string | null;
  facebook_url: string | null;
  other_platform_url: string | null;
  main_platform: string;
  follower_range: string;
  avg_views_range: string;
  top_audience_country: string;
  audience_percent_tier1: string;
  niche: string;
  page_age_range: string;
  edits_own_clips: string;
  editing_software: string | null;
  sample_clips: string | null;
  clips_per_day: string;
  done_paid_clipping: string;
  paid_clipping_details: string | null;
  notes: string | null;
  accuracy_consent: boolean;
  organic_consent: boolean;
};

export type Review = {
  id?: string;
  created_at?: string;
  name: string;
  company?: string | null;
  // Verification only — never selected on the public read, never rendered.
  email?: string | null;
  service?: string | null;
  rating: number;
  comment: string;
  approved?: boolean;
};
