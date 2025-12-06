"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Salad, Dumbbell, LogOut } from "lucide-react";

interface UsuarioLogado {
  id: number;
  nomeCompleto: string;
  email: string;
  telefone?: string;
  dataNascimento?: string;
}

export default function HomePage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState<UsuarioLogado | null>(null);

  useEffect(() => {
    try {
      const dados = localStorage.getItem("usuarioLogado");
      if (!dados) {
        router.push("/login");
        return;
      }
      setUsuario(JSON.parse(dados));
    } catch {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    router.push("/login");
  };

  if (!usuario) {
    return (
      <div className="min-h-[calc(100vh-2rem)] flex items-center justify-center">
        <p className="text-slate-300 text-sm">Carregando sua conta...</p>
      </div>
    );
  }

  const primeiroNome = usuario.nomeCompleto.split(" ")[0] || "Atleta";

  return (
    <div className="space-y-4">
      {/* Topo / saudação */}
      <header className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-cyan-400">
            MindsetFit App
          </p>
          <h1 className="text-xl font-bold text-white">
            Bem-vindo, <span className="text-cyan-400">{primeiroNome}</span>
          </h1>
          <p className="text-xs text-slate-400">
            Nutrição, treino e performance em um só lugar.
          </p>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleLogout}
          className="border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800"
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </header>

      {/* Cards principais – mobile first */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-slate-200">
              Avaliação & Metas
            </CardTitle>
            <Activity className="w-5 h-5 text-cyan-400" />
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-xs text-slate-400">
              Revise sua avaliação, metas de peso, composição corporal e
              histórico.
            </p>
            <Button
              size="sm"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white text-xs"
              onClick={() => {
                // Aqui você pode redirecionar para a página de avaliação
                // ex: router.push("/avaliacao");
              }}
            >
              Abrir avaliação
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-slate-200">
              Nutrição & Dieta
            </CardTitle>
            <Salad className="w-5 h-5 text-emerald-400" />
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-xs text-slate-400">
              Acesse seu plano alimentar, macros, cardápios e substituições.
            </p>
            <Button
              size="sm"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs"
              onClick={() => {
                // ex: router.push("/nutricao");
              }}
            >
              Ver plano nutricional
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-slate-200">
              Treinos & Performance
            </CardTitle>
            <Dumbbell className="w-5 h-5 text-indigo-400" />
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-xs text-slate-400">
              Consulte sua divisão de treinos, volume semanal e progressões.
            </p>
            <Button
              size="sm"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white text-xs"
              onClick={() => {
                // ex: router.push("/treinos");
              }}
            >
              Abrir treinos
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Resumo rápido do paciente */}
      <section>
        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm font-semibold text-slate-200">
              Dados do paciente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-xs text-slate-300">
            <p>
              <span className="text-slate-400">Nome: </span>
              {usuario.nomeCompleto}
            </p>
            <p>
              <span className="text-slate-400">Email: </span>
              {usuario.email}
            </p>
            {usuario.telefone && (
              <p>
                <span className="text-slate-400">Telefone: </span>
                {usuario.telefone}
              </p>
            )}
            {usuario.dataNascimento && (
              <p>
                <span className="text-slate-400">Nascimento: </span>
                {usuario.dataNascimento}
              </p>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
