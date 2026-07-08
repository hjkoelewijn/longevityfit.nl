-- Tabel voor intake aanvragen van longevityfit.nl/intake-gesprek.html
-- Voer dit uit in de Supabase SQL Editor

create table if not exists public.intake_gesprekken (
  id             uuid primary key default gen_random_uuid(),
  voornaam       text not null,
  achternaam     text,
  email          text not null,
  telefoon       text,
  leeftijd       text,
  start_moment   text,
  uitdaging      text,
  commitment     text,
  event_id       text,
  ingediend_op   timestamptz not null default now()
);

-- Row Level Security inschakelen (geen publieke policies: alleen service role heeft toegang)
alter table public.intake_gesprekken enable row level security;
