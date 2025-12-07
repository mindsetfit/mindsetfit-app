'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Check, 
  TrendingUp, 
  Calendar,
  Dumbbell,
  X,
  AlertCircle
} from 'lucide-react';
import { 
  WorkoutProgress, 
  saveWorkoutProgress, 
  getWorkoutProgress,
  generateProgressReport,
  TrainingPlan
} from '@/lib/training-system';
import { getExerciseById } from '@/lib/exercises-database';
import { toast } from 'sonner';

interface WorkoutLoggerProps {
  trainingPlan?: TrainingPlan;
  workoutDayIndex?: number;
}

export default function WorkoutLogger({ trainingPlan, workoutDayIndex = 0 }: Partial<WorkoutLoggerProps> = {}) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [sets, setSets] = useState<{ setNumber: number; weight: number; reps: number; completed: boolean }[]>([]);
  const [showReport, setShowReport] = useState(false);
  const [report, setReport] = useState<any>(null);

  // Se não houver plano de treino, mostrar mensagem
  if (!trainingPlan) {
    return (
      <Card className="bg-slate-900/50 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-yellow-400" />
            Nenhum Plano de Treino Ativo
          </CardTitle>
          <CardDescription>
            Você precisa criar um plano de treino primeiro para registrar seus exercícios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-6 rounded-xl border border-cyan-500/30 text-center">
            <Dumbbell className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Comece Agora!</h3>
            <p className="text-slate-300 mb-4">
              Vá para a seção "Treinos Personalizados" e crie seu plano de treino personalizado.
            </p>
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              onClick={() => {
                // Navegar para a página de treinos
                const event = new CustomEvent('changePage', { detail: 'training' });
                window.dispatchEvent(event);
              }}
            >
              Criar Plano de Treino
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const workoutDay = trainingPlan.days[workoutDayIndex];
  const currentWorkoutExercise = workoutDay.exercises[currentExerciseIndex];

  useEffect(() => {
    // Inicializar séries
    const initialSets = Array.from({ length: currentWorkoutExercise.sets }, (_, i) => ({
      setNumber: i + 1,
      weight: 0,
      reps: 0,
      completed: false
    }));
    setSets(initialSets);
  }, [currentExerciseIndex, currentWorkoutExercise.sets]);

  const updateSet = (setIndex: number, field: 'weight' | 'reps', value: number) => {
    const newSets = [...sets];
    newSets[setIndex][field] = value;
    setSets(newSets);
  };

  const toggleSetCompleted = (setIndex: number) => {
    const newSets = [...sets];
    newSets[setIndex].completed = !newSets[setIndex].completed;
    setSets(newSets);
  };

  const saveCurrentExercise = () => {
    const progress: WorkoutProgress = {
      id: Date.now().toString(),
      trainingPlanId: trainingPlan.id,
      exerciseId: currentWorkoutExercise.exercise.id,
      date: new Date().toISOString(),
      sets: sets
    };

    saveWorkoutProgress(progress);
    toast.success('Progresso salvo!');

    // Avançar para próximo exercício
    if (currentExerciseIndex < workoutDay.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      toast.success('Treino completo! Parabéns! 🎉');
      // Verificar se completou 4 semanas
      checkFourWeeksProgress();
    }
  };

  const checkFourWeeksProgress = () => {
    const allProgress = getWorkoutProgress(trainingPlan.id);
    const fourWeeksAgo = new Date();
    fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28);

    const recentProgress = allProgress.filter(p => 
      new Date(p.date) >= fourWeeksAgo
    );

    if (recentProgress.length >= 12) { // Pelo menos 12 treinos em 4 semanas
      const generatedReport = generateProgressReport(trainingPlan.id);
      setReport(generatedReport);
      setShowReport(true);
      toast.success('Relatório de 4 semanas disponível!');
    }
  };

  const skipExercise = () => {
    if (currentExerciseIndex < workoutDay.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  if (showReport && report) {
    return (
      <Card className="bg-slate-900/50 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-cyan-400" />
            Relatório de Evolução - 4 Semanas
          </CardTitle>
          <CardDescription>Seu progresso nos últimos 28 dias</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-bold text-white mb-2">Total de Treinos</h3>
            <p className="text-4xl font-bold text-cyan-400">{report.totalWorkouts}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Evolução por Exercício</h4>
            {Object.entries(report.exercisesProgress).map(([exerciseId, data]: [string, any]) => {
              const exercise = getExerciseById(exerciseId);
              if (!exercise) return null;

              return (
                <Card key={exerciseId} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-base text-white">{exercise.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-slate-400 text-sm">Inicial</p>
                        <p className="text-lg font-bold text-white">{data.initialWeight}kg</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Atual</p>
                        <p className="text-lg font-bold text-cyan-400">{data.currentWeight}kg</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Evolução</p>
                        <p className="text-lg font-bold text-green-400">+{data.improvement}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                        {data.totalSessions} treinos
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Button
            onClick={() => setShowReport(false)}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600"
          >
            Voltar ao Treino
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Progresso do Treino */}
      <Card className="bg-slate-900/50 border-slate-800">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-slate-400 text-sm">Exercício</p>
              <p className="text-white font-semibold">
                {currentExerciseIndex + 1} de {workoutDay.exercises.length}
              </p>
            </div>
            <div className="flex-1 mx-4">
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all"
                  style={{ width: `${((currentExerciseIndex + 1) / workoutDay.exercises.length) * 100}%` }}
                />
              </div>
            </div>
            <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
              {Math.round(((currentExerciseIndex + 1) / workoutDay.exercises.length) * 100)}%
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Exercício Atual */}
      <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/30">
        <CardHeader>
          <CardTitle className="text-2xl text-white">
            {currentWorkoutExercise.exercise.name}
          </CardTitle>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
              {currentWorkoutExercise.sets} séries
            </Badge>
            <Badge variant="outline" className="border-blue-500/50 text-blue-400">
              {currentWorkoutExercise.reps} reps
            </Badge>
            <Badge variant="outline" className="border-purple-500/50 text-purple-400">
              {currentWorkoutExercise.exercise.equipment}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Dicas Rápidas */}
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <h4 className="text-sm font-semibold text-cyan-400 mb-2">💡 Dica Principal:</h4>
            <p className="text-sm text-slate-300">{currentWorkoutExercise.exercise.tips[0]}</p>
          </div>

          {/* Registro de Séries */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Registrar Séries</h4>
            {sets.map((set, index) => (
              <Card key={index} className={`${set.completed ? 'bg-green-500/10 border-green-500/30' : 'bg-slate-800/50 border-slate-700'}`}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        set.completed ? 'bg-green-500 text-white' : 'bg-slate-700 text-slate-400'
                      }`}>
                        {set.setNumber}
                      </div>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-xs text-slate-400">Peso (kg)</Label>
                        <Input
                          type="number"
                          value={set.weight || ''}
                          onChange={(e) => updateSet(index, 'weight', Number(e.target.value))}
                          className="bg-slate-700/50 border-slate-600 text-white h-10"
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-slate-400">Reps</Label>
                        <Input
                          type="number"
                          value={set.reps || ''}
                          onChange={(e) => updateSet(index, 'reps', Number(e.target.value))}
                          className="bg-slate-700/50 border-slate-600 text-white h-10"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    
                    <Button
                      size="icon"
                      variant={set.completed ? 'default' : 'outline'}
                      className={set.completed ? 'bg-green-500 hover:bg-green-600' : 'border-slate-600'}
                      onClick={() => toggleSetCompleted(index)}
                    >
                      {set.completed ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Botões de Ação */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            <Button
              variant="outline"
              onClick={skipExercise}
              className="border-slate-600 text-slate-300"
            >
              <X className="w-4 h-4 mr-2" />
              Pular
            </Button>
            <Button
              onClick={saveCurrentExercise}
              disabled={!sets.some(s => s.completed)}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            >
              <Check className="w-4 h-4 mr-2" />
              Concluir
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Próximo Exercício */}
      {currentExerciseIndex < workoutDay.exercises.length - 1 && (
        <Card className="bg-slate-900/50 border-slate-800">
          <CardContent className="p-4">
            <p className="text-slate-400 text-sm mb-1">Próximo:</p>
            <p className="text-white font-semibold">
              {workoutDay.exercises[currentExerciseIndex + 1].exercise.name}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
