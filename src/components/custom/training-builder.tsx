'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Dumbbell, 
  Calendar, 
  TrendingUp, 
  Target, 
  Plus,
  ChevronRight,
  CheckCircle2,
  BarChart3,
  Zap
} from 'lucide-react';
import { 
  TrainingModel, 
  TrainingDay,
  generateTrainingPlan,
  TrainingPlan,
  SPECIALIZED_WORKOUTS
} from '@/lib/training-system';
import { toast } from 'sonner';

export default function TrainingBuilder() {
  const [currentTab, setCurrentTab] = useState('create');
  const [selectedModel, setSelectedModel] = useState<TrainingModel | null>(null);
  const [selectedDays, setSelectedDays] = useState<TrainingDay[]>([]);
  const [userLevel, setUserLevel] = useState<'iniciante' | 'intermediario' | 'avancado'>('intermediario');
  const [currentPlan, setCurrentPlan] = useState<TrainingPlan | null>(null);
  const [selectedWorkoutDay, setSelectedWorkoutDay] = useState<number>(0);

  const trainingModels: { model: TrainingModel; name: string; description: string; frequency: number }[] = [
    { model: 'ABC', name: 'ABC (3x/semana)', description: 'Divisão clássica em 3 dias', frequency: 3 },
    { model: 'ABCD', name: 'ABCD (4x/semana)', description: 'Divisão em 4 dias', frequency: 4 },
    { model: 'ABCDE', name: 'ABCDE (5x/semana)', description: 'Divisão em 5 dias', frequency: 5 },
    { model: 'UPPER_LOWER', name: 'Upper/Lower (4x/semana)', description: 'Superiores e inferiores alternados', frequency: 4 },
    { model: 'FULL_BODY', name: 'Full Body (3x/semana)', description: 'Corpo inteiro cada treino', frequency: 3 }
  ];

  const weekDays: { day: TrainingDay; label: string }[] = [
    { day: 'segunda', label: 'Segunda' },
    { day: 'terca', label: 'Terça' },
    { day: 'quarta', label: 'Quarta' },
    { day: 'quinta', label: 'Quinta' },
    { day: 'sexta', label: 'Sexta' },
    { day: 'sabado', label: 'Sábado' },
    { day: 'domingo', label: 'Domingo' }
  ];

  const handleGeneratePlan = () => {
    if (!selectedModel) {
      toast.error('Selecione um modelo de treino');
      return;
    }

    const modelConfig = trainingModels.find(m => m.model === selectedModel);
    if (!modelConfig) return;

    if (selectedDays.length < modelConfig.frequency) {
      toast.error(`Selecione pelo menos ${modelConfig.frequency} dias para treinar`);
      return;
    }

    const plan = generateTrainingPlan(selectedModel, modelConfig.frequency, selectedDays, userLevel);
    setCurrentPlan(plan);
    
    // Salvar no localStorage
    localStorage.setItem('currentTrainingPlan', JSON.stringify(plan));
    
    toast.success('Treino gerado com sucesso!');
    setCurrentTab('workout');
  };

  const toggleDay = (day: TrainingDay) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
          <TabsTrigger value="create" className="data-[state=active]:bg-cyan-500/20">
            <Target className="w-4 h-4 mr-2" />
            Criar Treino
          </TabsTrigger>
          <TabsTrigger value="workout" className="data-[state=active]:bg-cyan-500/20">
            <Dumbbell className="w-4 h-4 mr-2" />
            Meu Treino
          </TabsTrigger>
          <TabsTrigger value="specialized" className="data-[state=active]:bg-cyan-500/20">
            <Zap className="w-4 h-4 mr-2" />
            Especializados
          </TabsTrigger>
          <TabsTrigger value="progress" className="data-[state=active]:bg-cyan-500/20">
            <TrendingUp className="w-4 h-4 mr-2" />
            Progresso
          </TabsTrigger>
        </TabsList>

        {/* TAB: CRIAR TREINO */}
        <TabsContent value="create" className="space-y-6">
          {/* Nível do Usuário */}
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Seu Nível de Treino</CardTitle>
              <CardDescription>Selecione seu nível atual</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {['iniciante', 'intermediario', 'avancado'].map((level) => (
                  <Button
                    key={level}
                    variant={userLevel === level ? 'default' : 'outline'}
                    className={userLevel === level 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
                      : 'border-slate-700 text-slate-300'
                    }
                    onClick={() => setUserLevel(level as any)}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Modelo de Treino */}
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Escolha o Modelo de Treino</CardTitle>
              <CardDescription>Selecione a divisão que melhor se adapta à sua rotina</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trainingModels.map((model) => (
                  <Card
                    key={model.model}
                    className={`cursor-pointer transition-all ${
                      selectedModel === model.model
                        ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-500'
                        : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                    }`}
                    onClick={() => setSelectedModel(model.model)}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-white flex items-center justify-between">
                        {model.name}
                        {selectedModel === model.model && (
                          <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                        )}
                      </CardTitle>
                      <CardDescription>{model.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                        {model.frequency}x por semana
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Dias da Semana */}
          {selectedModel && (
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Selecione os Dias de Treino</CardTitle>
                <CardDescription>
                  Escolha pelo menos {trainingModels.find(m => m.model === selectedModel)?.frequency} dias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {weekDays.map(({ day, label }) => (
                    <Button
                      key={day}
                      variant={selectedDays.includes(day) ? 'default' : 'outline'}
                      className={selectedDays.includes(day)
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                        : 'border-slate-700 text-slate-300'
                      }
                      onClick={() => toggleDay(day)}
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Botão Gerar */}
          {selectedModel && selectedDays.length > 0 && (
            <Button
              onClick={handleGeneratePlan}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-6 text-lg"
            >
              <Zap className="w-5 h-5 mr-2" />
              Gerar Meu Treino Inteligente
            </Button>
          )}
        </TabsContent>

        {/* TAB: MEU TREINO */}
        <TabsContent value="workout" className="space-y-6">
          {currentPlan ? (
            <>
              {/* Seletor de Dia de Treino */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {currentPlan.days.map((day, index) => (
                  <Button
                    key={index}
                    variant={selectedWorkoutDay === index ? 'default' : 'outline'}
                    className={selectedWorkoutDay === index
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                      : 'border-slate-700 text-slate-300'
                    }
                    onClick={() => setSelectedWorkoutDay(index)}
                  >
                    {day.name.split(' - ')[0]}
                  </Button>
                ))}
              </div>

              {/* Detalhes do Treino */}
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    {currentPlan.days[selectedWorkoutDay].name}
                  </CardTitle>
                  <CardDescription>
                    {currentPlan.days[selectedWorkoutDay].exercises.length} exercícios
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentPlan.days[selectedWorkoutDay].exercises.map((workoutEx, idx) => (
                    <Card key={idx} className="bg-slate-800/50 border-slate-700">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg text-white mb-2">
                              {idx + 1}. {workoutEx.exercise.name}
                            </CardTitle>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                                {workoutEx.sets} séries
                              </Badge>
                              <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                                {workoutEx.reps} reps
                              </Badge>
                              <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                                {workoutEx.exercise.equipment}
                              </Badge>
                              <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                                {workoutEx.exercise.difficulty}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Instruções */}
                        <div>
                          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Como Executar:</h4>
                          <ol className="list-decimal list-inside space-y-1 text-sm text-slate-300">
                            {workoutEx.exercise.instructions.map((instruction, i) => (
                              <li key={i}>{instruction}</li>
                            ))}
                          </ol>
                        </div>

                        {/* Dicas */}
                        <div>
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Dicas Importantes:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                            {workoutEx.exercise.tips.map((tip, i) => (
                              <li key={i}>{tip}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Registro de Peso */}
                        <div className="pt-4 border-t border-slate-700">
                          <Button
                            variant="outline"
                            className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                            onClick={() => {
                              setCurrentTab('progress');
                              toast.info('Registre seu progresso na aba Progresso');
                            }}
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Registrar Peso e Séries
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </>
          ) : (
            <Card className="bg-slate-900/50 border-slate-800">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Dumbbell className="w-16 h-16 text-slate-600 mb-4" />
                <p className="text-slate-400 text-center mb-4">
                  Você ainda não tem um treino gerado
                </p>
                <Button
                  onClick={() => setCurrentTab('create')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600"
                >
                  Criar Meu Treino
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* TAB: TREINOS ESPECIALIZADOS */}
        <TabsContent value="specialized" className="space-y-6">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Treinos Especializados por Grupo Muscular</CardTitle>
              <CardDescription>
                5 variações de treino para cada grupamento muscular com diferentes focos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(SPECIALIZED_WORKOUTS).map(([muscle, workouts]) => (
                  <Card key={muscle} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-lg text-white capitalize">
                        {muscle}
                      </CardTitle>
                      <CardDescription>{workouts.length} treinos especializados</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="outline"
                        className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                        onClick={() => {
                          toast.info(`Visualizando treinos de ${muscle}`);
                        }}
                      >
                        Ver Treinos
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* TAB: PROGRESSO */}
        <TabsContent value="progress" className="space-y-6">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
                Relatório de Evolução (4 Semanas)
              </CardTitle>
              <CardDescription>
                Acompanhe seu progresso e evolução nos treinos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400 mb-2">
                  Continue treinando para gerar seu relatório
                </p>
                <p className="text-sm text-slate-500">
                  Registre seus pesos e séries para acompanhar sua evolução
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
