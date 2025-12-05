'use client';

import { useState } from 'react';
import { User, Scale, Ruler, Calendar, Activity, TrendingUp } from 'lucide-react';
import { calculatePollock7, calculateBMI, processBioimpedance } from '@/lib/calculations';
import { PhysicalAssessment } from '@/lib/types';

interface AssessmentFormProps {
  onSave: (assessment: PhysicalAssessment) => void;
}

export default function AssessmentForm({ onSave }: AssessmentFormProps) {
  const [method, setMethod] = useState<'pollock7' | 'imc' | 'bioimpedance'>('pollock7');
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    gender: 'male' as 'male' | 'female',
    // Pollock 7
    triceps: '',
    subscapular: '',
    pectoral: '',
    midaxillary: '',
    suprailiac: '',
    abdominal: '',
    thigh: '',
    // Bioimpedância
    bodyFatPercentage: '',
    muscleMass: '',
    bodyWater: '',
    visceralFat: ''
  });

  const [results, setResults] = useState<PhysicalAssessment | null>(null);

  const handleCalculate = () => {
    const baseData: PhysicalAssessment = {
      id: `assessment-${Date.now()}`,
      userId: 'user-1',
      date: new Date().toISOString(),
      method,
      weight: parseFloat(formData.weight),
      height: parseFloat(formData.height),
      age: parseInt(formData.age),
      gender: formData.gender
    };

    let calculatedResults: PhysicalAssessment;

    if (method === 'pollock7') {
      calculatedResults = calculatePollock7({
        ...baseData,
        triceps: parseFloat(formData.triceps),
        subscapular: parseFloat(formData.subscapular),
        pectoral: parseFloat(formData.pectoral),
        midaxillary: parseFloat(formData.midaxillary),
        suprailiac: parseFloat(formData.suprailiac),
        abdominal: parseFloat(formData.abdominal),
        thigh: parseFloat(formData.thigh)
      });
    } else if (method === 'bioimpedance') {
      calculatedResults = processBioimpedance({
        ...baseData,
        bodyFatPercentage: parseFloat(formData.bodyFatPercentage),
        muscleMass: parseFloat(formData.muscleMass),
        bodyWater: parseFloat(formData.bodyWater),
        visceralFat: parseFloat(formData.visceralFat)
      });
    } else {
      const bmiResult = calculateBMI(baseData.weight, baseData.height);
      calculatedResults = {
        ...baseData,
        bmi: bmiResult.bmi,
        bmiClassification: bmiResult.classification
      };
    }

    setResults(calculatedResults);
    onSave(calculatedResults);
  };

  return (
    <div className="space-y-6">
      {/* Method Selection */}
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Activity className="w-6 h-6 text-cyan-400" />
          Método de Avaliação
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setMethod('pollock7')}
            className={`p-4 rounded-xl border-2 transition-all ${
              method === 'pollock7'
                ? 'border-cyan-500 bg-cyan-500/10'
                : 'border-slate-700 hover:border-slate-600'
            }`}
          >
            <h4 className="font-bold text-white mb-1">Pollock 7 Dobras</h4>
            <p className="text-sm text-slate-400">Método mais preciso</p>
          </button>
          
          <button
            onClick={() => setMethod('imc')}
            className={`p-4 rounded-xl border-2 transition-all ${
              method === 'imc'
                ? 'border-cyan-500 bg-cyan-500/10'
                : 'border-slate-700 hover:border-slate-600'
            }`}
          >
            <h4 className="font-bold text-white mb-1">IMC</h4>
            <p className="text-sm text-slate-400">Rápido e simples</p>
          </button>
          
          <button
            onClick={() => setMethod('bioimpedance')}
            className={`p-4 rounded-xl border-2 transition-all ${
              method === 'bioimpedance'
                ? 'border-cyan-500 bg-cyan-500/10'
                : 'border-slate-700 hover:border-slate-600'
            }`}
          >
            <h4 className="font-bold text-white mb-1">Bioimpedância</h4>
            <p className="text-sm text-slate-400">Com balança</p>
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
        <h3 className="text-xl font-bold text-white mb-6">Dados Pessoais</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              <Scale className="w-4 h-4 inline mr-2" />
              Peso (kg)
            </label>
            <input
              type="number"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
              placeholder="75.0"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              <Ruler className="w-4 h-4 inline mr-2" />
              Altura (cm)
            </label>
            <input
              type="number"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
              placeholder="175"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Idade
            </label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
              placeholder="30"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Sexo
            </label>
            <select
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'male' | 'female' })}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
            >
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </select>
          </div>
        </div>

        {/* Pollock 7 Fields */}
        {method === 'pollock7' && (
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Medidas das Dobras Cutâneas (mm)</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['triceps', 'subscapular', 'pectoral', 'midaxillary', 'suprailiac', 'abdominal', 'thigh'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-slate-300 mb-2 capitalize">
                    {field === 'midaxillary' ? 'Axilar Média' : 
                     field === 'suprailiac' ? 'Supra-ilíaca' :
                     field === 'thigh' ? 'Coxa' :
                     field === 'triceps' ? 'Tríceps' :
                     field === 'subscapular' ? 'Subescapular' :
                     field === 'pectoral' ? 'Peitoral' : 'Abdominal'}
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData[field as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                    placeholder="0.0"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bioimpedance Fields */}
        {method === 'bioimpedance' && (
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Dados da Bioimpedância</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">% Gordura</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.bodyFatPercentage}
                  onChange={(e) => setFormData({ ...formData, bodyFatPercentage: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="15.0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Massa Muscular (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.muscleMass}
                  onChange={(e) => setFormData({ ...formData, muscleMass: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="60.0"
                />
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleCalculate}
          className="mt-6 w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/30"
        >
          Calcular Avaliação
        </button>
      </div>

      {/* Results */}
      {results && (
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-cyan-400" />
            Resultados da Avaliação
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {results.bmi && (
              <div className="bg-slate-900/50 rounded-xl p-4">
                <p className="text-slate-400 text-sm mb-1">IMC</p>
                <p className="text-3xl font-bold text-white">{results.bmi}</p>
                <p className="text-cyan-400 text-sm mt-1">{results.bmiClassification}</p>
              </div>
            )}
            
            {results.bodyFatPercentageCalculated && (
              <div className="bg-slate-900/50 rounded-xl p-4">
                <p className="text-slate-400 text-sm mb-1">% Gordura</p>
                <p className="text-3xl font-bold text-white">{results.bodyFatPercentageCalculated}%</p>
                <p className="text-cyan-400 text-sm mt-1">{results.classification}</p>
              </div>
            )}
            
            {results.leanMass && (
              <div className="bg-slate-900/50 rounded-xl p-4">
                <p className="text-slate-400 text-sm mb-1">Massa Magra</p>
                <p className="text-3xl font-bold text-white">{results.leanMass} kg</p>
              </div>
            )}
            
            {results.fatMassCalculated && (
              <div className="bg-slate-900/50 rounded-xl p-4">
                <p className="text-slate-400 text-sm mb-1">Massa Gorda</p>
                <p className="text-3xl font-bold text-white">{results.fatMassCalculated} kg</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
