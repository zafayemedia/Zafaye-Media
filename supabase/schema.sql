-- Zafaye Media website schema
-- Run this in the Supabase SQL editor for your project.

create extension if not exists "pgcrypto";

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  service text not null,
  business_name text not null,
  website_or_social text not null,
  ad_spend text,
  what_they_sell text not null,
  notes text
);

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
