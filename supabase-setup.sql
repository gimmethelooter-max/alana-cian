-- Supabase table and storage setup for a private family memory book.
-- Replace the project URL and anon key in config.js to connect the app.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text,
  created_at timestamptz default now()
);

create table if not exists public.timeline_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  entry_date date not null,
  description text,
  event_type text default 'relationship',
  family_member text default 'both',
  created_at timestamptz default now()
);

create table if not exists public.memories (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  memory_date date not null,
  category text not null,
  description text,
  created_at timestamptz default now()
);

create table if not exists public.diary_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  entry_date date not null,
  content text not null,
  created_at timestamptz default now()
);

create table if not exists public.letters (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  letter_date date not null,
  content text not null,
  created_at timestamptz default now()
);

create table if not exists public.voice_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  recorded_at date not null,
  description text,
  storage_path text,
  created_at timestamptz default now()
);

create table if not exists public.family_photos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  photo_date date not null,
  caption text,
  storage_path text,
  favorite boolean default false,
  created_at timestamptz default now()
);

-- Example row-level security policies.
-- Use these as a starting point for a truly private family space.

alter table public.profiles enable row level security;
alter table public.timeline_entries enable row level security;
alter table public.memories enable row level security;
alter table public.diary_entries enable row level security;
alter table public.letters enable row level security;
alter table public.voice_notes enable row level security;
alter table public.family_photos enable row level security;

create policy "Profiles are viewable by authenticated users"
on public.profiles
for select
using (auth.role() = 'authenticated');

create policy "Allow authenticated users to insert profiles"
on public.profiles
for insert
with check (auth.role() = 'authenticated');

create policy "Timeline entries are viewable by authenticated users"
on public.timeline_entries
for select
using (auth.role() = 'authenticated');

create policy "Authenticated users may manage timeline entries"
on public.timeline_entries
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

create policy "Authenticated users may manage memories"
on public.memories
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

create policy "Authenticated users may manage diary entries"
on public.diary_entries
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

create policy "Authenticated users may manage letters"
on public.letters
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

create policy "Authenticated users may manage voice notes"
on public.voice_notes
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

create policy "Authenticated users may manage photos"
on public.family_photos
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

-- Storage buckets should be configured privately in Supabase Storage.
-- Example bucket names: family-photos and family-audio
-- Use private buckets and server-side signed URLs only.
