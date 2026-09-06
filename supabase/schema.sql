-- Zafaye Media website schema
-- Run this in the Supabase SQL editor for your project.

create extension if not exists "pgcrypto";

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  service text not null,
  full_name text not null,
  email text not null,
  phone text not null,
  city text,
  country text,
  business_name text not null,
  website_or_social text not null,
  ad_spend text,
  what_they_sell text not null,
  notes text
);

-- Migration: run this instead if the `inquiries` table already exists
-- (e.g. it was created before the contact-info fields were added).
-- alter table inquiries add column if not exists full_name text;
-- alter table inquiries add column if not exists email text;
-- alter table inquiries add column if not exists phone text;
-- alter table inquiries add column if not exists city text;
-- alter table inquiries add column if not exists country text;

alter table inquiries enable row level security;

-- Anyone can submit an inquiry, nobody can read them back through the public API.
-- Zakria reviews inquiries from the Supabase dashboard / Table editor.
create policy "public can insert inquiries"
  on inquiries for insert
  to anon
  with check (true);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  rating int not null check (rating between 1 and 5),
  comment text not null,
  approved boolean not null default false
);

alter table reviews enable row level security;

-- Anyone can submit a review.
create policy "public can insert reviews"
  on reviews for insert
  to anon
  with check (true);

-- Only approved reviews are ever readable through the public API.
-- Approval happens manually in the Supabase dashboard by flipping `approved` to true.
-- Nothing here auto-publishes a review.
create policy "public can read approved reviews"
  on reviews for select
  to anon
  using (approved = true);

-- "Be a Clipper" recruitment applications (page owners/editors, not clients).
create table if not exists clipper_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  whatsapp text not null,
  country text not null,
  city text not null,
  age_confirmed boolean not null,
  instagram_url text,
  tiktok_url text,
  youtube_url text,
  facebook_url text,
  other_platform_url text,
  main_platform text not null,
  follower_range text not null,
  avg_views_range text not null,
  top_audience_country text not null,
  audience_percent_tier1 text not null,
  niche text not null,
  page_age_range text not null,
  edits_own_clips text not null,
  editing_software text,
  sample_clips text,
  clips_per_day text not null,
  done_paid_clipping text not null,
  paid_clipping_details text,
  notes text,
  accuracy_consent boolean not null,
  organic_consent boolean not null
);

alter table clipper_applications enable row level security;

-- Anyone can submit an application, nobody can read them back through the
-- public API. Zakria reviews applications from the Supabase dashboard.
create policy "public can insert clipper applications"
  on clipper_applications for insert
  to anon
  with check (true);
