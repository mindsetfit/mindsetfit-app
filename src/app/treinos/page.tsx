'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TrainingSelector from '@/components/custom/training-selector';

// IMPORTAÇÃO DO BANCO COMPLETO DE EXERCÍCIOS (280+)
import fullDB from '@/lib/full-training-database'; 
// fullDB = [
//   { id, name, group, modality, series, reps, rest, notes, level }
// ]

export default function TreinosPage() {
  const [userSelection, setUserSelection] = useState<any | null>(null);

  const modalities = ["musculacao", "casa", "corrida", "spinning", "crossfit"];

  const grouped = {
    musculacao: fullDB.filter(x => x.modality === "musculacao"),
    casa: fullDB.filter(x => x.modality === "casa"),
    corrida: fullDB.filter(x => x.modality === "corrida"),
    spinning: fullDB.filter(x => x.modality === "spinning"),
    crossfit: fullDB.filter(x => x.modality === "crossfit"),
  };

  return (
    <div className="space-y-10 p-4 md:p-8 text-white">

      {/* TÍTULO PRINCIPAL */}
      <section>
        <h1 className="text-3xl font-bold">Treinos personalizados e inteligentes</h1>
        <p className="text-slate-400 mt-2 max-w-2xl">
          Defina modalidade, tempo disponível, nível e quantos dias você treina na semana.
          O app distribui grupamentos, gera sugestões e permite montar e registrar tudo.
        </p>
      </section>

      {/* BLOCO CONFIGURAÇÃO DO TREINO */}
      <TrainingSelector
        onConfirm={(sel) => {
          console.log("Configuração salva:", sel);
          setUserSelection(sel);
        }}
      />

      {/* BIBLIOTECA DE TREINOS PREMIUM */}
      <Card className="bg-slate-900/40 border-slate-800 mt-10">
        <CardHeader>
          <CardTitle className="text-xl">
            Biblioteca de Treinos • MindsetFit Premium v3.0
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="musculacao" className="w-full">

            {/* LISTA DE MODALIDADES */}
            <TabsList className="grid grid-cols-5 bg-slate-800/50 mb-6">
              <TabsTrigger value="musculacao">Musculação</TabsTrigger>
              <TabsTrigger value="casa">Casa</TabsTrigger>
              <TabsTrigger value="corrida">Corrida</TabsTrigger>
              <TabsTrigger value="spinning">Spinning</TabsTrigger>
              <TabsTrigger value="crossfit">Crossfit</TabsTrigger>
            </TabsList>

            {/* GERADOR DINÂMICO DE ABA */}
            {modalities.map((mod) => (
              <TabsContent key={mod} value={mod}>
                <h2 className="text-lg font-semibold capitalize mb-4">{mod}</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {grouped[mod].map((ex) => (
                    <Card key={ex.id} className="bg-slate-950/50 border-slate-800">
                      <CardHeader>
                        <CardTitle className="text-base">{ex.name}</CardTitle>
                        <p className="text-slate-400 text-sm">{ex.group}</p>
                      </CardHeader>
                      <CardContent className="space-y-1 text-sm">
                        <p><strong>Séries:</strong> {ex.series || "—"}</p>
                        <p><strong>Repetições:</strong> {ex.reps || "—"}</p>
                        <p><strong>Descanso:</strong> {ex.rest || "—"}</p>
                        {ex.notes && (
                          <p className="text-slate-400 text-xs mt-2">{ex.notes}</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}

          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
