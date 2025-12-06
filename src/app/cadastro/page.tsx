"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserPlus, Mail, Lock, Phone, Calendar } from "lucide-react";
import { toast } from "sonner";

export default function CadastroPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    senha: "",
    confirmarSenha: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.nomeCompleto ||
      !formData.email ||
      !formData.telefone ||
      !formData.dataNascimento ||
      !formData.senha ||
      !formData.confirmarSenha
    ) {
      toast.error("Preencha todos os campos");
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      toast.error("As senhas não conferem");
      return;
    }

    setLoading(true);

    try {
      const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

      const jaExiste = usuarios.some(
        (u: any) => u.email === formData.email
      );

      if (jaExiste) {
        toast.error("Já existe um usuário com esse email");
        setLoading(false);
        return;
      }

      const novoUsuario = {
        id: Date.now(),
        nomeCompleto: formData.nomeCompleto,
        email: formData.email,
        telefone: formData.telefone,
        dataNascimento: formData.dataNascimento,
        senha: formData.senha,
      };

      const novaLista = [...usuarios, novoUsuario];
      localStorage.setItem("usuarios", JSON.stringify(novaLista));

      toast.success("Cadastro realizado com sucesso!");

      setTimeout(() => {
        router.push("/login");
      }, 600);
    } catch (error) {
      console.error("Erro no cadastro:", error);
      toast.error("Erro ao cadastrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-2rem)] w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center py-6">
      <Card className="w-full max-w-md mx-auto bg-slate-900/60 border-slate-800 backdrop-blur-sm shadow-xl">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-white">
            Criar conta
          </CardTitle>
          <CardDescription className="text-center text-slate-400">
            Preencha seus dados para acessar o MindsetFit
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome */}
            <div className="space-y-2">
              <Label htmlFor="nomeCompleto" className="text-slate-200">
                Nome completo
              </Label>
              <Input
                id="nomeCompleto"
                name="nomeCompleto"
                placeholder="Seu nome"
                value={formData.nomeCompleto}
                onChange={handleChange}
                required
                className="bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500"
              />
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
                  className="pl-10 bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Telefone */}
            <div className="space-y-2">
              <Label htmlFor="telefone" className="text-slate-200">
                Telefone
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="telefone"
                  name="telefone"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Data de nascimento */}
            <div className="space-y-2">
              <Label htmlFor="dataNascimento" className="text-slate-200">
                Data de nascimento
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
                  className="pl-10 bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500"
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
                  placeholder="Crie uma senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Confirmar senha */}
            <div className="space-y-2">
              <Label htmlFor="confirmarSenha" className="text-slate-200">
                Confirmar senha
              </Label>
              <Input
                id="confirmarSenha"
                name="confirmarSenha"
                type="password"
                placeholder="Repita a senha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                required
                className="bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>

            {/* Botão de cadastro */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold"
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </Button>

            <div className="text-center text-sm text-slate-400">
              Já tem conta?{" "}
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                Fazer login
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
