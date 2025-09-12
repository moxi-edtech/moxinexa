-- ===============================
-- 👑 Super Admin
-- ===============================
insert into auth.users (id, email, encrypted_password, raw_user_meta_data)
values (
  '11111111-1111-1111-1111-111111111111',
  'superadmin@moxi.com',
  crypt('Senha#2025', gen_salt('bf')),
  '{"role": "super_admin"}'
)
on conflict (id) do nothing;

insert into public.profiles (user_id, nome)
values ('11111111-1111-1111-1111-111111111111', 'Super Admin')
on conflict (user_id) do nothing;

-- ===============================
-- 🏫 Escola Modelo
-- ===============================
insert into public.escolas (id, nome, endereco)
values (
  '22222222-2222-2222-2222-222222222222',
  'Escola Modelo',
  'Luanda - Angola'
)
on conflict (id) do nothing;

-- ===============================
-- 👨‍💼 Admin Local
-- ===============================
insert into auth.users (id, email, encrypted_password, raw_user_meta_data)
values (
  '33333333-3333-3333-3333-333333333333',
  'admin@escola.com',
  crypt('Senha#2025', gen_salt('bf')),
  '{"role": "admin"}'
)
on conflict (id) do nothing;

insert into public.profiles (user_id, nome)
values ('33333333-3333-3333-3333-333333333333', 'Admin Local')
on conflict (user_id) do nothing;

insert into public.escola_members (escola_id, user_id, papel)
values ('22222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333', 'admin')
on conflict (escola_id, user_id) do nothing;

-- ===============================
-- 📘 Aluno
-- ===============================
insert into auth.users (id, email, encrypted_password, raw_user_meta_data)
values (
  '44444444-4444-4444-4444-444444444444',
  'aluno@escola.com',
  crypt('Senha#2025', gen_salt('bf')),
  '{"role": "aluno"}'
)
on conflict (id) do nothing;

insert into public.profiles (user_id, nome)
values ('44444444-4444-4444-4444-444444444444', 'Aluno Teste')
on conflict (user_id) do nothing;

insert into public.alunos (id, escola_id, profile_id, nome)
values ('aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '22222222-2222-2222-2222-222222222222', '44444444-4444-4444-4444-444444444444', 'Aluno Teste')
on conflict (id) do nothing;

insert into public.escola_members (escola_id, user_id, papel)
values ('22222222-2222-2222-2222-222222222222', '44444444-4444-4444-4444-444444444444', 'aluno')
on conflict (escola_id, user_id) do nothing;

-- ===============================
-- 🧑‍🏫 Professor
-- ===============================
insert into auth.users (id, email, encrypted_password, raw_user_meta_data)
values (
  '55555555-5555-5555-5555-555555555555',
  'professor@escola.com',
  crypt('Senha#2025', gen_salt('bf')),
  '{"role": "professor"}'
)
on conflict (id) do nothing;

insert into public.profiles (user_id, nome)
values ('55555555-5555-5555-5555-555555555555', 'Professor Teste')
on conflict (user_id) do nothing;

insert into public.professores (id, escola_id, profile_id, nome)
values ('bbbbb1b1-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '22222222-2222-2222-2222-222222222222', '55555555-5555-5555-5555-555555555555', 'Professor Teste')
on conflict (id) do nothing;

insert into public.escola_members (escola_id, user_id, papel)
values ('22222222-2222-2222-2222-222222222222', '55555555-5555-5555-5555-555555555555', 'professor')
on conflict (escola_id, user_id) do nothing;

-- ===============================
-- 📑 Secretaria
-- ===============================
insert into auth.users (id, email, encrypted_password, raw_user_meta_data)
values (
  '66666666-6666-6666-6666-666666666666',
  'secretaria@escola.com',
  crypt('Senha#2025', gen_salt('bf')),
  '{"role": "secretaria"}'
)
on conflict (id) do nothing;

insert into public.profiles (user_id, nome)
values ('66666666-6666-6666-6666-666666666666', 'Secretaria Teste')
on conflict (user_id) do nothing;

insert into public.escola_members (escola_id, user_id, papel)
values ('22222222-2222-2222-2222-222222222222', '66666666-6666-6666-6666-666666666666', 'secretaria')
on conflict (escola_id, user_id) do nothing;

-- ===============================
-- 💰 Financeiro
-- ===============================
insert into auth.users (id, email, encrypted_password, raw_user_meta_data)
values (
  '77777777-7777-7777-7777-777777777777',
  'financeiro@escola.com',
  crypt('Senha#2025', gen_salt('bf')),
  '{"role": "financeiro"}'
)
on conflict (id) do nothing;

insert into public.profiles (user_id, nome)
values ('77777777-7777-7777-7777-777777777777', 'Financeiro Teste')
on conflict (user_id) do nothing;

insert into public.escola_members (escola_id, user_id, papel)
values ('22222222-2222-2222-2222-222222222222', '77777777-7777-7777-7777-777777777777', 'financeiro')
on conflict (escola_id, user_id) do nothing;
