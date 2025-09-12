alter table public.escola_members
add column if not exists papel text not null default 'aluno'
check (papel in ('admin','secretaria','financeiro','professor','aluno'));
