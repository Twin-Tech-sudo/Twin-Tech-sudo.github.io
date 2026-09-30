-- Twin Studio content, enquiries and immutable release history.
-- Run this migration in a new Supabase project, then create the first owner in Auth.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'editor' check (role in ('owner', 'editor')),
  created_at timestamptz not null default now()
);

create table if not exists public.site_records (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('page', 'service', 'project', 'article', 'testimonial', 'setting')),
  slug text not null,
  title text not null,
  status text not null default 'draft' check (status in ('draft', 'published')),
  data jsonb not null default '{}'::jsonb,
  updated_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz,
  unique(kind, slug)
);

create table if not exists public.releases (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  status text not null default 'queued' check (status in ('queued', 'building', 'live', 'failed', 'rolled_back')),
  snapshot jsonb not null,
  github_run_id text,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now()
);

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  service text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'read', 'replied', 'archived')),
  created_at timestamptz not null default now()
);

create table if not exists public.analytics_daily (
  day date primary key,
  sessions integer not null default 0,
  enquiries integer not null default 0,
  impressions integer not null default 0,
  clicks integer not null default 0,
  imported_at timestamptz not null default now()
);

create or replace function public.touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;
drop trigger if exists site_records_touch on public.site_records;
create trigger site_records_touch before update on public.site_records for each row execute function public.touch_updated_at();

alter table public.profiles enable row level security;
alter table public.site_records enable row level security;
alter table public.releases enable row level security;
alter table public.enquiries enable row level security;
alter table public.analytics_daily enable row level security;

create or replace function public.is_studio_user() returns boolean language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role in ('owner','editor'))
$$;
create or replace function public.is_owner() returns boolean language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role = 'owner')
$$;

create policy "studio reads content" on public.site_records for select to authenticated using (public.is_studio_user());
create policy "studio creates content" on public.site_records for insert to authenticated with check (public.is_studio_user() and updated_by = auth.uid());
create policy "studio updates content" on public.site_records for update to authenticated using (public.is_studio_user()) with check (public.is_studio_user() and updated_by = auth.uid());
create policy "owners delete content" on public.site_records for delete to authenticated using (public.is_owner());
create policy "studio reads releases" on public.releases for select to authenticated using (public.is_studio_user());
create policy "owners create releases" on public.releases for insert to authenticated with check (public.is_owner() and created_by = auth.uid());
create policy "studio reads enquiries" on public.enquiries for select to authenticated using (public.is_studio_user());
create policy "studio updates enquiries" on public.enquiries for update to authenticated using (public.is_studio_user());
create policy "studio reads analytics" on public.analytics_daily for select to authenticated using (public.is_studio_user());
create policy "owners manage profiles" on public.profiles for all to authenticated using (public.is_owner()) with check (public.is_owner());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('media', 'media', true, 10485760, array['image/png','image/jpeg','image/webp','image/svg+xml'])
on conflict (id) do nothing;
create policy "public reads media" on storage.objects for select using (bucket_id = 'media');
create policy "studio uploads media" on storage.objects for insert to authenticated with check (bucket_id = 'media' and public.is_studio_user());
create policy "studio updates media" on storage.objects for update to authenticated using (bucket_id = 'media' and public.is_studio_user());
create policy "owners delete media" on storage.objects for delete to authenticated using (bucket_id = 'media' and public.is_owner());

-- After creating the owner in Authentication, run once with their UUID:
-- insert into public.profiles (id, role) values ('AUTH_USER_UUID', 'owner');
