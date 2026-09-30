-- Apply only after the owner has enrolled and verified a TOTP factor in Twin Studio.
-- This makes an AAL2 (password + MFA) session mandatory for all private Studio data.
create or replace function public.is_studio_user() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce(auth.jwt()->>'aal', 'aal1') = 'aal2'
    and exists(select 1 from public.profiles where id = auth.uid() and role in ('owner','editor'))
$$;

create or replace function public.is_owner() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce(auth.jwt()->>'aal', 'aal1') = 'aal2'
    and exists(select 1 from public.profiles where id = auth.uid() and role = 'owner')
$$;
