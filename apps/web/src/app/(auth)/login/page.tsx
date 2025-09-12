'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabaseClient'; // ← Import corrigido
import Image from 'next/image';

export default function LoginPage() {
  const supabase = createClient(); // ← Instância criada aqui
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    setErro('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      setErro('Credenciais inválidas. Verifique seus dados.');
    } else {
        router.push("/redirect");

    }

    setCarregando(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 space-y-6">
        <div className="flex items-center justify-center gap-2">
          <Image src="/logo.svg" alt="Moxi Soluções" width={32} height={32} />
          <h1 className="text-2xl font-bold text-gray-800">Moxi Edtech</h1>
        </div>
        <p className="text-sm text-center text-gray-500">Criamos sistemas que escalam</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail institucional
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-600 focus:ring-blue-600"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-600 focus:ring-blue-600"
              placeholder="••••••••"
            />
          </div>

          {erro && <p className="text-red-600 text-sm">{erro}</p>}

          <button
            type="submit"
            disabled={carregando}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {carregando ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Moxi Soluções. Todos os direitos reservados.
        </p>
      </div>
    </main>
  );
}