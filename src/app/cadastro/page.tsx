'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus, Mail, Phone, Calendar, Lock, User } from 'lucide-react';
import { toast } from 'sonner';

export default function CadastroPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Formatação do telefone com DDD
    if (name === 'telefone') {
      let formatted = value.replace(/\D/g, '');
      if (formatted.length <= 11) {
        if (formatted.length > 2) {
          formatted = `(${formatted.slice(0, 2)}) ${formatted.slice(2)}`;
        }
        if (formatted.length > 10) {
          formatted = `${formatted.slice(0, 10)}-${formatted.slice(10)}`;
        }
        setFormData({ ...formData, [name]: formatted });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    // Validar nome completo
    if (formData.nomeCompleto.trim().split(' ').length < 2) {
      toast.error('Por favor, insira seu nome completo');
      return false;
    }

    // Validar data de nascimento
    if (!formData.dataNascimento) {
      toast.error('Por favor, insira sua data de nascimento');
      return false;
    }

    const dataNasc = new Date(formData.dataNascimento);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNasc.getFullYear();
    
    if (idade < 13) {
      toast.error('Você deve ter pelo menos 13 anos para se cadastrar');
      return false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Por favor, insira um email válido');
      return false;
    }

    // Validar telefone
    const telefoneNumeros = formData.telefone.replace(/\D/g, '');
    if (telefoneNumeros.length < 10) {
      toast.error('Por favor, insira um telefone válido com DDD');
      return false;
    }

    // Validar senha
    if (formData.senha.length < 6) {
      toast.error('A senha deve ter no mínimo 6 caracteres');
      return false;
    }

    // Validar confirmação de senha
    if (formData.senha !== formData.confirmarSenha) {
      toast.error('As senhas não coincidem');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Verificar se o email já está cadastrado
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      const emailExiste = usuarios.find((u: any) => u.email === formData.email);

      if (emailExiste) {
        toast.error('Este email já está cadastrado');
        setLoading(false);
        return;
      }

      // Salvar novo usuário
      const novoUsuario = {
        id: Date.now().toString(),
        nomeCompleto: formData.nomeCompleto,
        dataNascimento: formData.dataNascimento,
        email: formData.email,
        telefone: formData.telefone,
        senha: formData.senha, // Em produção, use hash!
        dataCadastro: new Date().toISOString()
      };

      usuarios.push(novoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      toast.success('Cadastro realizado com sucesso!');
      
      // Redirecionar para login após 1 segundo
      setTimeout(() => {
        router.push('/login');
      }, 1000);

    } catch (error) {
      toast.error('Erro ao realizar cadastro. Tente novamente.');
      console.error('Erro no cadastro:', error);
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
              <UserPlus className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-white">
            Criar Conta
          </CardTitle>
          <CardDescription className="text-center text-slate-400">
            Preencha seus dados para começar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome Completo */}
            <div className="space-y-2">
              <Label htmlFor="nomeCompleto" className="text-slate-200">
                Nome Completo
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="nomeCompleto"
                  name="nomeCompleto"
                  type="text"
                  placeholder="João Silva Santos"
                  value={formData.nomeCompleto}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Data de Nascimento */}
            <div className="space-y-2">
              <Label htmlFor="dataNascimento" className="text-slate-200">
                Data de Nascimento
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="dataNascimento"
                  name="dataNascimento"
                  type="date"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white"
                />
              </div>
            </div>

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

            {/* Telefone */}
            <div className="space-y-2">
              <Label htmlFor="telefone" className="text-slate-200">
                Telefone com DDD
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.telefone}
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
                  placeholder="Mínimo 6 caracteres"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Confirmar Senha */}
            <div className="space-y-2">
              <Label htmlFor="confirmarSenha" className="text-slate-200">
                Confirmar Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="confirmarSenha"
                  name="confirmarSenha"
                  type="password"
                  placeholder="Digite a senha novamente"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Botão de Cadastro */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold"
            >
              {loading ? 'Cadastrando...' : 'Criar Conta'}
            </Button>

            {/* Link para Login */}
            <div className="text-center text-sm text-slate-400">
              Já tem uma conta?{' '}
              <button
                type="button"
                onClick={() => router.push('/login')}
                className="text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Fazer Login
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
