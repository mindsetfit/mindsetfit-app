'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type AvaliacaoFormState = {
  // Dados básicos
  peso: string;
  altura: string;
  genero: string;

  // Bioimpedância (apenas percentuais + idade metabólica)
  percMassaMagra: string;
  percGordura: string;
  percGorduraVisceral: string;
  percAguaCorporal: string;
  idadeMetabolica: string;

  // Medidas
  pescoco: string;
  ombro: string;
  toracica: string;
  cintura: string;
  abdomen: string;
  quadril: string;
  coxaDir: string;
  coxaEsq: string;
  panturrilhaDir: string;
  panturrilhaEsq: string;
  bracoDirRelax: string;
  bracoDirContra: string;
  bracoEsqRelax: string;
  bracoEsqContra: string;

  // Dobras (Pollock 7)
  dobraPeito: string;
  dobraAbdomen: string;
  dobraCoxa: string;
  dobraTriceps: string;
  dobraSubescapular: string;
  dobraAxilarMedia: string;
  dobraSupraIliaca: string;

  // Observações gerais
  observacoes: string;
};

const initialState: AvaliacaoFormState = {
  // Dados básicos
  peso: '',
  altura: '',
  genero: '',

  // Bioimpedância
  percMassaMagra: '',
  percGordura: '',
  percGorduraVisceral: '',
  percAguaCorporal: '',
  idadeMetabolica: '',

  // Medidas
  pescoco: '',
  ombro: '',
  toracica: '',
  cintura: '',
  abdomen: '',
  quadril: '',
  coxaDir: '',
  coxaEsq: '',
  panturrilhaDir: '',
  panturrilhaEsq: '',
  bracoDirRelax: '',
  bracoDirContra: '',
  bracoEsqRelax: '',
  bracoEsqContra: '',

  // Dobras
  dobraPeito: '',
  dobraAbdomen: '',
  dobraCoxa: '',
  dobraTriceps: '',
  dobraSubescapular: '',
  dobraAxilarMedia: '',
  dobraSupraIliaca: '',

  // Observações
  observacoes: '',
};

export default function AvaliacaoPage() {
  const router = useRouter();
  const [form, setForm] = useState<AvaliacaoFormState>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Avaliação física enviada:', form);
    alert(
      'Avaliação salva localmente (console). Integração com banco pode ser feita depois.'
    );
  };

  const cinturaNum = parseFloat(form.cintura || '');
  const quadrilNum = parseFloat(form.quadril || '');
  const rcqValor =
    !Number.isNaN(cinturaNum) && !Number.isNaN(quadrilNum) && quadrilNum > 0
      ? (cinturaNum / quadrilNum).toFixed(2)
      : '-';

  const cardClass =
    'rounded-2xl border border-slate-800 bg-slate-950/80 p-4 md:p-6 space-y-4';

  const labelClass = 'text-xs font-medium text-slate-300';
  const helperClass = 'text-[11px] text-slate-500';
  const inputClass =
    'bg-slate-900/60 border-slate-700 text-slate-50 text-sm placeholder:text-slate-500';

  return (
    <div className="space-y-6">
      {/* Título da página */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
          Avaliação Física Completa
        </h1>
        <p className="text-slate-400 text-sm md:text-base">
          Registre aqui os resultados da sua avaliação física: dados básicos,
          bioimpedância, medidas, dobras cutâneas e RCQ. Essas informações vão
          alimentar toda a inteligência do app (metabolismo, dieta e treinos).
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* DADOS BÁSICOS */}
        <section className={cardClass}>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Dados básicos
            </p>
            <h2 className="mt-1 text-sm font-semibold text-slate-50">
              Informações iniciais do paciente
            </h2>
            <p className={helperClass}>
              Preencha peso, altura e gênero antes de registrar os métodos
              avaliativos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className={labelClass}>Peso atual (kg)</label>
              <Input
                name="peso"
                value={form.peso}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
                placeholder="Ex: 75.0"
              />
            </div>

            <div>
              <label className={labelClass}>Altura (cm)</label>
              <Input
                name="altura"
                value={form.altura}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
                placeholder="Ex: 175"
              />
            </div>

            <div>
              <label className={labelClass}>Gênero</label>
              <select
                name="genero"
                value={form.genero}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro / Prefere não informar</option>
              </select>
            </div>
          </div>
        </section>

        {/* BIOIMPEDÂNCIA – APENAS % */}
        <section className={cardClass}>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Bioimpedância
            </p>
            <h2 className="mt-1 text-sm font-semibold text-slate-50">
              Composição corporal em percentuais
            </h2>
            <p className={helperClass}>
              Use apenas os percentuais principais do laudo: massa magra,
              gordura total, gordura visceral, água corporal e idade
              metabólica.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div>
              <label className={labelClass}>% Massa magra</label>
              <Input
                name="percMassaMagra"
                value={form.percMassaMagra}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
                placeholder="Ex: 80.0"
              />
            </div>

            <div>
              <label className={labelClass}>% Gordura corporal</label>
              <Input
                name="percGordura"
                value={form.percGordura}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
                placeholder="Ex: 20.0"
              />
            </div>

            <div>
              <label className={labelClass}>% Gordura visceral</label>
              <Input
                name="percGorduraVisceral"
                value={form.percGorduraVisceral}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
                placeholder="Ex: 8.0"
              />
            </div>

            <div>
              <label className={labelClass}>% Água corporal</label>
              <Input
                name="percAguaCorporal"
                value={form.percAguaCorporal}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
                placeholder="Ex: 55.0"
              />
            </div>

            <div>
              <label className={labelClass}>Idade metabólica (anos)</label>
              <Input
                name="idadeMetabolica"
                value={form.idadeMetabolica}
                onChange={handleChange}
                type="number"
                step="1"
                className={inputClass}
                placeholder="Ex: 25"
              />
            </div>
          </div>
        </section>

        {/* MEDIDAS CORPORAIS */}
        <section className={cardClass}>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Medidas
            </p>
            <h2 className="mt-1 text-sm font-semibold text-slate-50">
              Circunferências em centímetros
            </h2>
            <p className={helperClass}>
              Use fita métrica e registre as medidas principais em cm.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <label className={labelClass}>Pescoço (cm)</label>
              <Input
                name="pescoco"
                value={form.pescoco}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Ombro (cm)</label>
              <Input
                name="ombro"
                value={form.ombro}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Tórax (cm)</label>
              <Input
                name="toracica"
                value={form.toracica}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Cintura (cm)</label>
              <Input
                name="cintura"
                value={form.cintura}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Abdômen (cm)</label>
              <Input
                name="abdomen"
                value={form.abdomen}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Quadril (cm)</label>
              <Input
                name="quadril"
                value={form.quadril}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Coxa dir. (cm)</label>
              <Input
                name="coxaDir"
                value={form.coxaDir}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Coxa esq. (cm)</label>
              <Input
                name="coxaEsq"
                value={form.coxaEsq}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Panturrilha dir. (cm)</label>
              <Input
                name="panturrilhaDir"
                value={form.panturrilhaDir}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Panturrilha esq. (cm)</label>
              <Input
                name="panturrilhaEsq"
                value={form.panturrilhaEsq}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Braço dir. relaxado (cm)</label>
              <Input
                name="bracoDirRelax"
                value={form.bracoDirRelax}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Braço dir. contraído (cm)</label>
              <Input
                name="bracoDirContra"
                value={form.bracoDirContra}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Braço esq. relaxado (cm)</label>
              <Input
                name="bracoEsqRelax"
                value={form.bracoEsqRelax}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Braço esq. contraído (cm)</label>
              <Input
                name="bracoEsqContra"
                value={form.bracoEsqContra}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>
          </div>
        </section>

        {/* DOBRAS CUTÂNEAS (POLLOCK 7) */}
        <section className={cardClass}>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Dobras cutâneas (Pollock 7)
            </p>
            <h2 className="mt-1 text-sm font-semibold text-slate-50">
              Registro das espessuras em mm
            </h2>
            <p className={helperClass}>
              Idealmente realizadas por profissional habilitado, com adipômetro.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <label className={labelClass}>Peito (mm)</label>
              <Input
                name="dobraPeito"
                value={form.dobraPeito}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Abdômen (mm)</label>
              <Input
                name="dobraAbdomen"
                value={form.dobraAbdomen}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Coxa (mm)</label>
              <Input
                name="dobraCoxa"
                value={form.dobraCoxa}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Tríceps (mm)</label>
              <Input
                name="dobraTriceps"
                value={form.dobraTriceps}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Subescapular (mm)</label>
              <Input
                name="dobraSubescapular"
                value={form.dobraSubescapular}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Axilar média (mm)</label>
              <Input
                name="dobraAxilarMedia"
                value={form.dobraAxilarMedia}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Supra-ilíaca (mm)</label>
              <Input
                name="dobraSupraIliaca"
                value={form.dobraSupraIliaca}
                onChange={handleChange}
                type="number"
                step="0.1"
                className={inputClass}
              />
            </div>
          </div>
        </section>

        {/* RCQ + OBSERVAÇÕES */}
        <section className={cardClass}>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                RCQ — Relação Cintura/Quadril
              </p>
              <h2 className="mt-1 text-sm font-semibold text-slate-50">
                Risco cardiometabólico
              </h2>
              <p className={helperClass}>
                O RCQ é calculado automaticamente a partir das medidas de cintura
                e quadril informadas acima.
              </p>

              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                <p className="text-xs text-slate-400 mb-1">RCQ calculado</p>
                <p className="text-2xl font-semibold text-cyan-300">
                  {rcqValor}
                </p>
                <p className="mt-2 text-[11px] text-slate-500">
                  Valores mais altos indicam maior concentração de gordura
                  abdominal e maior risco cardiometabólico.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Observações da avaliação
              </p>
              <h2 className="mt-1 text-sm font-semibold text-slate-50">
                Pontos importantes
              </h2>
              <p className={helperClass}>
                Use este espaço para registrar comentários relevantes sobre a
                avaliação (postura, histórico, limitações, pontos de atenção).
              </p>

              <textarea
                name="observacoes"
                value={form.observacoes}
                onChange={handleChange}
                rows={6}
                className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="Ex: paciente relata dor lombar ao agachar; foco em fortalecimento de core..."
              />
            </div>
          </div>
        </section>

        {/* BOTÕES FINAIS */}
        <div className="flex justify-between gap-3">
          <Button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6"
          >
            Salvar avaliação
          </Button>

          <Button
            type="button"
            onClick={() => router.push('/metabolismo')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold px-6"
          >
            Avançar para Metabolismo →
          </Button>
        </div>
      </form>
    </div>
  );
}
