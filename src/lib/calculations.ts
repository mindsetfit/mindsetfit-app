// ============================================
// MINDSETFIT - CÁLCULOS METABÓLICOS E AVALIAÇÃO FÍSICA
// ============================================

import { PhysicalAssessment, MetabolicCalculation, ACTIVITY_LEVELS } from './types';

// ============================================
// AVALIAÇÃO FÍSICA - POLLOCK 7 DOBRAS
// ============================================

export function calculatePollock7(assessment: PhysicalAssessment): PhysicalAssessment {
  const { triceps, subscapular, pectoral, midaxillary, suprailiac, abdominal, thigh, age, gender } = assessment;
  
  if (!triceps || !subscapular || !pectoral || !midaxillary || !suprailiac || !abdominal || !thigh) {
    return assessment;
  }
  
  // Soma das 7 dobras
  const sum = triceps + subscapular + pectoral + midaxillary + suprailiac + abdominal + thigh;
  
  // Densidade corporal (Jackson & Pollock)
  let density: number;
  
  if (gender === 'male') {
    density = 1.112 - (0.00043499 * sum) + (0.00000055 * sum * sum) - (0.00028826 * age);
  } else {
    density = 1.097 - (0.00046971 * sum) + (0.00000056 * sum * sum) - (0.00012828 * age);
  }
  
  // % Gordura (Siri)
  const bodyFatPercentage = ((4.95 / density) - 4.5) * 100;
  
  // Massa gorda e magra
  const fatMass = (assessment.weight * bodyFatPercentage) / 100;
  const leanMass = assessment.weight - fatMass;
  
  // Classificação
  const classification = classifyBodyFat(bodyFatPercentage, gender);
  
  return {
    ...assessment,
    bodyFatPercentageCalculated: parseFloat(bodyFatPercentage.toFixed(2)),
    fatMassCalculated: parseFloat(fatMass.toFixed(2)),
    leanMass: parseFloat(leanMass.toFixed(2)),
    classification
  };
}

// ============================================
// IMC (ÍNDICE DE MASSA CORPORAL)
// ============================================

export function calculateBMI(weight: number, height: number): { bmi: number; classification: string } {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  
  let classification: string;
  
  if (bmi < 18.5) classification = 'Abaixo do peso';
  else if (bmi < 25) classification = 'Peso normal';
  else if (bmi < 30) classification = 'Sobrepeso';
  else if (bmi < 35) classification = 'Obesidade Grau I';
  else if (bmi < 40) classification = 'Obesidade Grau II';
  else classification = 'Obesidade Grau III';
  
  return {
    bmi: parseFloat(bmi.toFixed(2)),
    classification
  };
}

// ============================================
// BIOIMPEDÂNCIA
// ============================================

export function processBioimpedance(assessment: PhysicalAssessment): PhysicalAssessment {
  if (!assessment.bodyFatPercentage) return assessment;
  
  const fatMass = (assessment.weight * assessment.bodyFatPercentage) / 100;
  const leanMass = assessment.weight - fatMass;
  
  const classification = classifyBodyFat(assessment.bodyFatPercentage, assessment.gender);
  
  return {
    ...assessment,
    fatMassCalculated: parseFloat(fatMass.toFixed(2)),
    leanMass: parseFloat(leanMass.toFixed(2)),
    classification
  };
}

// ============================================
// CLASSIFICAÇÃO DE % GORDURA
// ============================================

function classifyBodyFat(percentage: number, gender: 'male' | 'female'): string {
  if (gender === 'male') {
    if (percentage < 6) return 'Essencial';
    if (percentage < 14) return 'Atleta';
    if (percentage < 18) return 'Fitness';
    if (percentage < 25) return 'Aceitável';
    return 'Obesidade';
  } else {
    if (percentage < 14) return 'Essencial';
    if (percentage < 21) return 'Atleta';
    if (percentage < 25) return 'Fitness';
    if (percentage < 32) return 'Aceitável';
    return 'Obesidade';
  }
}

// ============================================
// EQUAÇÕES METABÓLICAS
// ============================================

// Mifflin-St Jeor (mais precisa para população geral)
export function calculateMifflin(weight: number, height: number, age: number, gender: 'male' | 'female'): number {
  const bmr = (10 * weight) + (6.25 * height) - (5 * age);
  return gender === 'male' ? bmr + 5 : bmr - 161;
}

// Harris-Benedict (clássica)
export function calculateHarris(weight: number, height: number, age: number, gender: 'male' | 'female'): number {
  if (gender === 'male') {
    return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
}

// Cunningham (para atletas com massa magra conhecida)
export function calculateCunningham(leanMass: number): number {
  return 500 + (22 * leanMass);
}

// Tinsley 2018 (atletas de força)
export function calculateTinsley(weight: number, height: number, age: number, gender: 'male' | 'female'): number {
  if (gender === 'male') {
    return 24.8 * weight + 10;
  } else {
    return 22.18 * weight + 10;
  }
}

// Katch-McArdle (baseado em massa magra)
export function calculateKatch(leanMass: number): number {
  return 370 + (21.6 * leanMass);
}

// ============================================
// RECOMENDAÇÃO AUTOMÁTICA DE EQUAÇÃO
// ============================================

export function recommendEquation(
  assessment: PhysicalAssessment,
  activityLevel: keyof typeof ACTIVITY_LEVELS,
  trainingIntensity: 'low' | 'moderate' | 'high' | 'athlete'
): 'mifflin' | 'harris' | 'cunningham' | 'tinsley' | 'katch' {
  
  // Atletas de força com massa magra conhecida
  if (trainingIntensity === 'athlete' && assessment.leanMass) {
    return 'tinsley';
  }
  
  // Atletas com massa magra conhecida
  if ((activityLevel === 'active' || activityLevel === 'extreme') && assessment.leanMass) {
    return 'katch';
  }
  
  // Pessoas ativas com massa magra
  if (assessment.leanMass && activityLevel !== 'sedentary') {
    return 'cunningham';
  }
  
  // População geral (mais precisa)
  if (activityLevel === 'sedentary' || activityLevel === 'light') {
    return 'mifflin';
  }
  
  // Padrão
  return 'mifflin';
}

// ============================================
// CÁLCULO COMPLETO DE METABOLISMO
// ============================================

export function calculateMetabolism(
  assessment: PhysicalAssessment,
  activityLevel: keyof typeof ACTIVITY_LEVELS,
  equation?: 'mifflin' | 'harris' | 'cunningham' | 'tinsley' | 'katch'
): MetabolicCalculation {
  
  const { weight, height, age, gender, leanMass } = assessment;
  
  // Recomenda equação se não especificada
  const selectedEquation = equation || recommendEquation(assessment, activityLevel, 'moderate');
  
  // Calcula TMB baseado na equação
  let bmr: number;
  
  switch (selectedEquation) {
    case 'mifflin':
      bmr = calculateMifflin(weight, height, age, gender);
      break;
    case 'harris':
      bmr = calculateHarris(weight, height, age, gender);
      break;
    case 'cunningham':
      bmr = leanMass ? calculateCunningham(leanMass) : calculateMifflin(weight, height, age, gender);
      break;
    case 'tinsley':
      bmr = calculateTinsley(weight, height, age, gender);
      break;
    case 'katch':
      bmr = leanMass ? calculateKatch(leanMass) : calculateMifflin(weight, height, age, gender);
      break;
    default:
      bmr = calculateMifflin(weight, height, age, gender);
  }
  
  // Calcula TDEE (Gasto Calórico Diário Total)
  const activityMultiplier = ACTIVITY_LEVELS[activityLevel].multiplier;
  const tdee = bmr * activityMultiplier;
  
  // Calcula macros (padrão: 30% proteína, 40% carbo, 30% gordura)
  const proteinCalories = tdee * 0.30;
  const carbsCalories = tdee * 0.40;
  const fatsCalories = tdee * 0.30;
  
  const protein = proteinCalories / 4; // 4 kcal por grama
  const carbs = carbsCalories / 4;
  const fats = fatsCalories / 9; // 9 kcal por grama
  
  return {
    equation: selectedEquation,
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    activityLevel: activityMultiplier,
    activityDescription: ACTIVITY_LEVELS[activityLevel].description,
    protein: Math.round(protein),
    carbs: Math.round(carbs),
    fats: Math.round(fats),
    proteinPerKg: parseFloat((protein / weight).toFixed(2)),
    carbsPerKg: parseFloat((carbs / weight).toFixed(2)),
    fatsPerKg: parseFloat((fats / weight).toFixed(2))
  };
}

// ============================================
// AJUSTE CALÓRICO (DÉFICIT/SUPERÁVIT)
// ============================================

export function adjustCalories(
  tdee: number,
  goal: 'deficit' | 'maintenance' | 'surplus',
  intensity: 'mild' | 'moderate' | 'aggressive' = 'moderate'
): number {
  
  if (goal === 'maintenance') return tdee;
  
  let adjustment: number;
  
  if (goal === 'deficit') {
    switch (intensity) {
      case 'mild': adjustment = -250; break;
      case 'moderate': adjustment = -500; break;
      case 'aggressive': adjustment = -750; break;
    }
  } else { // surplus
    switch (intensity) {
      case 'mild': adjustment = 200; break;
      case 'moderate': adjustment = 300; break;
      case 'aggressive': adjustment = 500; break;
    }
  }
  
  return Math.round(tdee + adjustment);
}

// ============================================
// PERIODIZAÇÃO (4 EM 4 SEMANAS)
// ============================================

export function shouldAdjustCalories(
  startDate: string,
  currentWeight: number,
  initialWeight: number,
  goal: 'deficit' | 'maintenance' | 'surplus'
): { shouldAdjust: boolean; reason: string; recommendation: number } {
  
  const start = new Date(startDate);
  const now = new Date();
  const weeksPassed = Math.floor((now.getTime() - start.getTime()) / (7 * 24 * 60 * 60 * 1000));
  
  // Verifica a cada 4 semanas
  if (weeksPassed < 4) {
    return { shouldAdjust: false, reason: 'Aguarde completar 4 semanas', recommendation: 0 };
  }
  
  const weightChange = currentWeight - initialWeight;
  const weeklyChange = weightChange / weeksPassed;
  
  if (goal === 'deficit') {
    // Esperado: -0.5 a -1kg por semana
    if (weeklyChange > -0.3) {
      return { 
        shouldAdjust: true, 
        reason: 'Perda de peso muito lenta. Reduza 200 kcal.', 
        recommendation: -200 
      };
    }
    if (weeklyChange < -1.2) {
      return { 
        shouldAdjust: true, 
        reason: 'Perda de peso muito rápida. Aumente 200 kcal.', 
        recommendation: 200 
      };
    }
  }
  
  if (goal === 'surplus') {
    // Esperado: +0.25 a +0.5kg por semana
    if (weeklyChange < 0.15) {
      return { 
        shouldAdjust: true, 
        reason: 'Ganho de peso muito lento. Aumente 200 kcal.', 
        recommendation: 200 
      };
    }
    if (weeklyChange > 0.7) {
      return { 
        shouldAdjust: true, 
        reason: 'Ganho de peso muito rápido. Reduza 200 kcal.', 
        recommendation: -200 
      };
    }
  }
  
  return { shouldAdjust: false, reason: 'Progresso adequado', recommendation: 0 };
}

// ============================================
// HIDRATAÇÃO
// ============================================

export function calculateHydration(
  weight: number,
  activityLevel: 'sedentary' | 'moderate' | 'active' | 'athlete'
): { dailyTarget: number; recommendations: string[] } {
  
  let mlPerKg: number;
  
  switch (activityLevel) {
    case 'sedentary': mlPerKg = 35; break;
    case 'moderate': mlPerKg = 40; break;
    case 'active': mlPerKg = 45; break;
    case 'athlete': mlPerKg = 50; break;
  }
  
  const dailyTarget = Math.round(weight * mlPerKg);
  
  const recommendations = [
    `Beba ${Math.round(dailyTarget / 8)} copos de 250ml por dia`,
    'Distribua ao longo do dia, não apenas quando sentir sede',
    'Aumente a ingestão em dias quentes ou treinos intensos',
    'Urina clara indica boa hidratação',
    'Beba 500ml antes do treino e 200ml a cada 15-20min durante'
  ];
  
  return { dailyTarget, recommendations };
}
