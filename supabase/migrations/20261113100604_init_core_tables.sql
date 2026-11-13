create type trip_role as enum ('organizer', 'editor', 'viewer');

create table profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  first_name text not null,
  last_name text not null,
  patronymic text,
  phone_number text,
  blood_type text,
  created_at timestamptz not null default now()
);

alter table profiles enable row level security;

create table trips (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  start_date date,
  planned_end_date date,
  meeting_point text,
  meeting_at timestamptz,
  accommodation text,
  created_at timestamptz not null default now()
);

alter table trips enable row level security;

create table trip_members (
  trip_id uuid not null references trips (id) on delete cascade,
  user_id uuid not null references profiles (id) on delete cascade,
  role trip_role not null,
  primary key (trip_id, user_id)
);

alter table trip_members enable row level security;
