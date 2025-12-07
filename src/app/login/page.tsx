'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn, Mail, Lock } from 'lucide-react';
import { toast } from 'sonner';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.senha) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    setLoading(true);

    try {
      // Buscar usuários cadastrados
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      
      // Verificar credenciais
      const usuario = usuarios.find(
        (u: any) => u.email === formData.email && u.senha === formData.senha
      );

      if (!usuario) {
        toast.error('Email ou senha incorretos');
        setLoading(false);
        return;
      }

      // Salvar sessão do usuário
      localStorage.setItem('usuarioLogado', JSON.stringify({
        id: usuario.id,
        nomeCompleto: usuario.nomeCompleto,
        email: usuario.email,
        telefone: usuario.telefone,
        dataNascimento: usuario.dataNascimento
      }));

      toast.success('Login realizado com sucesso!');
      
      // Redirecionar para dashboard
      setTimeout(() => {
        router.push('/dashboard');
      }, 500);

    } catch (error) {
      toast.error('Erro ao fazer login. Tente novamente.');
      console.error('Erro no login:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-slate-900/50 border-slate-800 backdrop-blur-sm">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <LogIn className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-white">
            Bem-vindo de volta!
          </CardTitle>
          <CardDescription className="text-center text-slate-400">
            Entre com suas credenciais para continuar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-200">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Senha */}
            <div className="space-y-2">
              <Label htmlFor="senha" className="text-slate-200">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="senha"
                  name="senha"
                  type="password"
                  placeholder="Digite sua senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Botão de Login */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>

            {/* Link para Cadastro */}
            <div className="text-center text-sm text-slate-400">
              Não tem uma conta?{' '}
              <button
                type="button"
                onClick={() => router.push('/cadastro')}
                className="text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Criar Conta
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
