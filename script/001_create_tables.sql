-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create users table (extends auth.users)
create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  role text not null default 'user' check (role in ('admin', 'user')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create products table
create table if not exists public.products (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text,
  price decimal(10, 2) not null,
  image_url text,
  stock integer not null default 0,
  category text,
  created_by uuid references public.users(id) on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.users enable row level security;
alter table public.products enable row level security;

-- Users table policies
create policy "Users can view their own data"
  on public.users for select
  using (auth.uid() = id);

create policy "Users can update their own data"
  on public.users for update
  using (auth.uid() = id);

-- Products table policies
create policy "Anyone can view products"
  on public.products for select
  to authenticated
  using (true);

create policy "Only admins can insert products"
  on public.products for insert
  to authenticated
  with check (
    exists (
      select 1 from public.users
      where users.id = auth.uid()
      and users.role = 'admin'
    )
  );

create policy "Only admins can update products"
  on public.products for update
  to authenticated
  using (
    exists (
      select 1 from public.users
      where users.id = auth.uid()
      and users.role = 'admin'
    )
  );

create policy "Only admins can delete products"
  on public.products for delete
  to authenticated
  using (
    exists (
      select 1 from public.users
      where users.id = auth.uid()
      and users.role = 'admin'
    )
  );

-- Create function to handle new user creation
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.users (id, email, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'role', 'user')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

-- Create trigger for new user creation
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();

-- Create updated_at trigger function
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$;

-- Add updated_at triggers
drop trigger if exists set_updated_at on public.users;
create trigger set_updated_at
  before update on public.users
  for each row
  execute function public.handle_updated_at();

drop trigger if exists set_updated_at on public.products;
create trigger set_updated_at
  before update on public.products
  for each row
  execute function public.handle_updated_at();
