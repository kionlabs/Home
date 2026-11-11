create table public.site_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table public.class_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(btrim(title)) between 1 and 120),
  summary text not null check (char_length(btrim(summary)) between 1 and 250),
  body text not null check (char_length(btrim(body)) > 0),
  category text not null check (category in ('수업 기록', '수업 자료', '공지')),
  course_name text not null default '',
  class_date date,
  resource_url text check (resource_url is null or resource_url like 'https://%'),
  published boolean not null default false,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index class_posts_public_order on public.class_posts (created_at desc) where published;

create table public.class_post_files (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.class_posts(id) on delete cascade,
  storage_path text not null unique,
  filename text not null,
  content_type text not null,
  size_bytes bigint not null check (size_bytes between 0 and 26214400),
  created_at timestamptz not null default now()
);

create index class_post_files_post_id on public.class_post_files (post_id);

alter table public.site_admins enable row level security;
alter table public.class_posts enable row level security;
alter table public.class_post_files enable row level security;

revoke all on public.site_admins from anon, authenticated;
grant select on public.site_admins to anon, authenticated;
grant select on public.class_posts to anon, authenticated;
grant insert, update, delete on public.class_posts to authenticated;
grant select on public.class_post_files to anon, authenticated;
grant insert, delete on public.class_post_files to authenticated;

create policy "admins read own membership" on public.site_admins
  for select to authenticated using (user_id = (select auth.uid()));

create policy "public reads published posts" on public.class_posts
  for select to anon, authenticated using (
    published or exists (
      select 1 from public.site_admins where user_id = (select auth.uid())
    )
  );

create policy "admins create posts" on public.class_posts
  for insert to authenticated with check (
    created_by = (select auth.uid())
    and exists (select 1 from public.site_admins where user_id = (select auth.uid()))
  );

create policy "admins update posts" on public.class_posts
  for update to authenticated using (
    exists (select 1 from public.site_admins where user_id = (select auth.uid()))
  ) with check (
    exists (select 1 from public.site_admins where user_id = (select auth.uid()))
  );

create policy "admins delete posts" on public.class_posts
  for delete to authenticated using (
    exists (select 1 from public.site_admins where user_id = (select auth.uid()))
  );

create policy "public reads published files" on public.class_post_files
  for select to anon, authenticated using (
    exists (
      select 1 from public.class_posts
      where id = post_id and published
    ) or exists (
      select 1 from public.site_admins where user_id = (select auth.uid())
    )
  );

create policy "admins create file records" on public.class_post_files
  for insert to authenticated with check (
    exists (select 1 from public.site_admins where user_id = (select auth.uid()))
  );

create policy "admins delete file records" on public.class_post_files
  for delete to authenticated using (
    exists (select 1 from public.site_admins where user_id = (select auth.uid()))
  );

create policy "site admins read consultations" on public.consultations
  for select to authenticated using (
    exists (select 1 from public.site_admins where user_id = (select auth.uid()))
  );

insert into storage.buckets (id, name, public, file_size_limit)
values ('class-materials', 'class-materials', false, 26214400);

create policy "public reads published material objects" on storage.objects
  for select to anon, authenticated using (
    bucket_id = 'class-materials' and (
      exists (
        select 1 from public.class_post_files f
        join public.class_posts p on p.id = f.post_id
        where f.storage_path = name and p.published
      ) or exists (
        select 1 from public.site_admins where user_id = (select auth.uid())
      )
    )
  );

create policy "site admins upload material objects" on storage.objects
  for insert to authenticated with check (
    bucket_id = 'class-materials'
    and exists (select 1 from public.site_admins where user_id = (select auth.uid()))
  );

create policy "site admins delete material objects" on storage.objects
  for delete to authenticated using (
    bucket_id = 'class-materials'
    and exists (select 1 from public.site_admins where user_id = (select auth.uid()))
  );
