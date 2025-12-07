// ============================================
// MINDSETFIT - TIPOS TYPESCRIPT COMPLETOS
// ============================================

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  birthDate?: string;
  gender: 'male' | 'female';
  createdAt: string;
}

export interface PhysicalAssessment {
  id: string;
  userId: string;
  date: string;
  method: 'pollock7' | 'imc' | 'bioimpedance';
  
  // Dados básicos
  weight: number;
  height: number;
  age: number;
  gender: 'male' | 'female';
  
  // Pollock 7 dobras (mm)
  triceps?: number;
  subscapular?: number;
  pectoral?: number;
  midaxillary?: number;
  suprailiac?: number;
  abdominal?: number;
  thigh?: number;
  
  // Bioimpedância
  bodyFatPercentage?: number;
  muscleMass?: number;
  fatMass?: number;
  bodyWater?: number;
  visceralFat?: number;
  
  // Resultados calculados
  bmi?: number;
  bmiClassification?: string;
  bodyFatPercentageCalculated?: number;
  leanMass?: number;
  fatMassCalculated?: number;
  classification?: string;
}

export interface MetabolicCalculation {
  equation: 'mifflin' | 'harris' | 'cunningham' | 'tinsley' | 'katch';
  bmr: number; // Taxa Metabólica Basal
  tdee: number; // Gasto Calórico Diário
  activityLevel: number;
  activityDescription: string;
  
  // Macros
  protein: number;
  carbs: number;
  fats: number;
  
  // Gramas por kg
  proteinPerKg: number;
  carbsPerKg: number;
  fatsPerKg: number;
}

export interface NutritionPlan {
  id: string;
  userId: string;
  createdAt: string;
  goal: 'deficit' | 'maintenance' | 'surplus';
  targetCalories: number;
  metabolicCalc: MetabolicCalculation;
  
  // Restrições
  restrictions: string[];
  allergies: string[];
  preferences: string[];
  
  // Distribuição de refeições
  numberOfMeals: number; // Número de refeições por dia definido pelo usuário
  meals: Meal[];
  
  // Periodização (4 em 4 semanas)
  phase: number;
  phaseStartDate: string;
  adjustmentHistory: CalorieAdjustment[];
}

export interface Meal {
  id: string;
  name: string;
  time: string;
  targetCalories: number;
  foods: FoodItemWithSubstitutes[];
  
  // Totais calculados
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
}

export interface FoodItem {
  id: string;
  name: string;
  category: 'Fruta' | 'Vegetal' | 'Cereal' | 'Proteína' | 'Laticínio' | 'Leguminosa' | 'Oleaginosa' | 'Gordura' | 'Suplemento' | 'Bebida' | 'Outro';
  
  // TACO - Valores por 100g
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fiber?: number;
  sodium?: number;
  
  // Quantidade na refeição (em gramas)
  quantity: number;
}

export interface FoodItemWithSubstitutes extends FoodItem {
  // Substituições equivalentes em kcal (±5%)
  substitutes?: FoodSubstitution[];
}

export interface FoodSubstitution {
  food: FoodItem;
  equivalentQuantity: number; // Quantidade recalculada para equivalência calórica
  calorieVariation: number; // Percentual de variação (deve ser ±5%)
  macroSimilarity: number; // Score de similaridade dos macros (0-100)
}

export interface CalorieAdjustment {
  date: string;
  phase: number;
  previousCalories: number;
  newCalories: number;
  reason: string;
  weight: number;
}

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  equipment: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  execution: string[];
  commonMistakes: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export interface WorkoutPlan {
  id: string;
  userId: string;
  name: string;
  type: 'ABC' | 'ABCD' | 'ABCDE' | 'FullBody' | 'UpperLower' | 'Custom';
  goal: 'hypertrophy' | 'strength' | 'endurance' | 'weight-loss' | 'glutes';
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // minutos
  frequency: number; // dias por semana
  workouts: Workout[];
  createdAt: string;
}

export interface Workout {
  id: string;
  day: string;
  name: string;
  focus: string[];
  exercises: WorkoutExercise[];
  duration: number;
  notes?: string;
}

export interface WorkoutExercise {
  exerciseId: string;
  exercise: Exercise;
  sets: number;
  reps: string; // "8-12" ou "15" ou "AMRAP"
  rest: number; // segundos
  weight?: number;
  notes?: string;
  
  // Registro de execução
  logs?: ExerciseLog[];
}

export interface ExerciseLog {
  date: string;
  sets: SetLog[];
  notes?: string;
  feeling?: 'easy' | 'moderate' | 'hard' | 'very-hard';
}

export interface SetLog {
  setNumber: number;
  weight: number;
  reps: number;
  completed: boolean;
}

export interface SleepHygiene {
  userId: string;
  targetHours: number;
  bedtime: string;
  wakeTime: string;
  recommendations: string[];
  checklist: SleepChecklistItem[];
}

export interface SleepChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  importance: 'high' | 'medium' | 'low';
}

export interface HydrationPlan {
  userId: string;
  weight: number;
  activityLevel: 'sedentary' | 'moderate' | 'active' | 'athlete';
  dailyTarget: number; // ml
  recommendations: string[];
}

export interface ProgressData {
  userId: string;
  assessments: PhysicalAssessment[];
  weightHistory: WeightEntry[];
  measurementsHistory: MeasurementEntry[];
  workoutLogs: ExerciseLog[];
}

export interface WeightEntry {
  date: string;
  weight: number;
  bodyFat?: number;
}

export interface MeasurementEntry {
  date: string;
  chest?: number;
  waist?: number;
  hips?: number;
  thigh?: number;
  arm?: number;
  calf?: number;
}

// Constantes
export const ACTIVITY_LEVELS = {
  sedentary: { multiplier: 1.2, description: 'Sedentário (pouco ou nenhum exercício)' },
  light: { multiplier: 1.375, description: 'Levemente ativo (1-3 dias/semana)' },
  moderate: { multiplier: 1.55, description: 'Moderadamente ativo (3-5 dias/semana)' },
  active: { multiplier: 1.725, description: 'Muito ativo (6-7 dias/semana)' },
  extreme: { multiplier: 1.9, description: 'Extremamente ativo (atleta, 2x/dia)' }
};

export const FOOD_RESTRICTIONS = [
  'lactose',
  'gluten',
  'diabetes',
  'low-sodium',
  'vegetarian',
  'vegan',
  'egg-allergy',
  'nut-allergy',
  'seafood-allergy',
  'soy-allergy',
  'sugar-free',
  'low-carb',
  'high-protein'
];

export const MUSCLE_GROUPS = [
  'Peito',
  'Costas',
  'Ombros',
  'Bíceps',
  'Tríceps',
  'Antebraço',
  'Abdômen',
  'Quadríceps',
  'Posterior',
  'Glúteos',
  'Panturrilha',
  'Lombar'
];
