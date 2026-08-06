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
  service: string;
  business_name: string;
  website_or_social: string;
  ad_spend: string | null;
  what_they_sell: string;
  notes: string | null;
};

export type Review = {
  id?: string;
  created_at?: string;
  name: string;
  rating: number;
  comment: string;
  approved?: boolean;
};
