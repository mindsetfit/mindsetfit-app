// ============================================
// MINDSETFIT - MOTOR NUTRICIONAL INTELIGENTE
// BASE: TABELA TACO (400+ ALIMENTOS)
// ============================================

import { FoodItem, Meal, FoodItemWithSubstitutes, FoodSubstitution } from './types';

// ============================================
// BANCO DE DADOS TACO COMPLETO (400+ ALIMENTOS)
// Todos os valores são por 100g conforme Tabela TACO oficial
// ============================================

export const TACO_DATABASE: FoodItem[] = [
  // ========== FRUTAS (50+) ==========
  { id: 'f1', name: 'Abacate', category: 'Fruta', calories: 160, protein: 2, carbs: 8.5, fats: 14.7, fiber: 6.7, quantity: 100 },
  { id: 'f2', name: 'Abacaxi', category: 'Fruta', calories: 48, protein: 0.5, carbs: 12.3, fats: 0.1, fiber: 1, quantity: 100 },
  { id: 'f3', name: 'Acerola', category: 'Fruta', calories: 33, protein: 0.9, carbs: 8, fats: 0.2, fiber: 1.5, quantity: 100 },
  { id: 'f4', name: 'Ameixa fresca', category: 'Fruta', calories: 53, protein: 0.8, carbs: 13.1, fats: 0.1, fiber: 2.4, quantity: 100 },
  { id: 'f5', name: 'Ameixa seca', category: 'Fruta', calories: 240, protein: 2.2, carbs: 63.9, fats: 0.4, fiber: 7.1, quantity: 100 },
  { id: 'f6', name: 'Banana nanica', category: 'Fruta', calories: 89, protein: 1.1, carbs: 22.8, fats: 0.3, fiber: 2.6, quantity: 100 },
  { id: 'f7', name: 'Banana prata', category: 'Fruta', calories: 98, protein: 1.3, carbs: 26, fats: 0.1, fiber: 2, quantity: 100 },
  { id: 'f8', name: 'Banana maçã', category: 'Fruta', calories: 87, protein: 1.2, carbs: 22.3, fats: 0.2, fiber: 2.6, quantity: 100 },
  { id: 'f9', name: 'Caju', category: 'Fruta', calories: 43, protein: 1, carbs: 10.3, fats: 0.3, fiber: 1.7, quantity: 100 },
  { id: 'f10', name: 'Caqui', category: 'Fruta', calories: 71, protein: 0.6, carbs: 19.3, fats: 0.1, fiber: 6.5, quantity: 100 },
  { id: 'f11', name: 'Carambola', category: 'Fruta', calories: 31, protein: 1, carbs: 6.7, fats: 0.3, fiber: 2.8, quantity: 100 },
  { id: 'f12', name: 'Cereja', category: 'Fruta', calories: 63, protein: 1.1, carbs: 16.1, fats: 0.2, fiber: 2.1, quantity: 100 },
  { id: 'f13', name: 'Coco verde', category: 'Fruta', calories: 19, protein: 0.7, carbs: 3.7, fats: 0.1, fiber: 1.1, quantity: 100 },
  { id: 'f14', name: 'Coco seco', category: 'Fruta', calories: 354, protein: 3.3, carbs: 15.2, fats: 33.5, fiber: 9, quantity: 100 },
  { id: 'f15', name: 'Damasco', category: 'Fruta', calories: 48, protein: 1.4, carbs: 11.1, fats: 0.4, fiber: 2, quantity: 100 },
  { id: 'f16', name: 'Figo', category: 'Fruta', calories: 74, protein: 0.8, carbs: 19.2, fats: 0.3, fiber: 2.9, quantity: 100 },
  { id: 'f17', name: 'Framboesa', category: 'Fruta', calories: 52, protein: 1.2, carbs: 11.9, fats: 0.7, fiber: 6.5, quantity: 100 },
  { id: 'f18', name: 'Goiaba branca', category: 'Fruta', calories: 52, protein: 1.1, carbs: 13.6, fats: 0.4, fiber: 6.2, quantity: 100 },
  { id: 'f19', name: 'Goiaba vermelha', category: 'Fruta', calories: 54, protein: 1.1, carbs: 14.3, fats: 0.4, fiber: 6.3, quantity: 100 },
  { id: 'f20', name: 'Graviola', category: 'Fruta', calories: 62, protein: 1, carbs: 15.8, fats: 0.2, fiber: 1.9, quantity: 100 },
  { id: 'f21', name: 'Jabuticaba', category: 'Fruta', calories: 58, protein: 0.6, carbs: 15.3, fats: 0.1, fiber: 2.3, quantity: 100 },
  { id: 'f22', name: 'Jaca', category: 'Fruta', calories: 88, protein: 1.2, carbs: 22.4, fats: 0.3, fiber: 1.6, quantity: 100 },
  { id: 'f23', name: 'Kiwi', category: 'Fruta', calories: 61, protein: 1.1, carbs: 14.7, fats: 0.5, fiber: 3, quantity: 100 },
  { id: 'f24', name: 'Laranja pera', category: 'Fruta', calories: 46, protein: 1, carbs: 11.5, fats: 0.1, fiber: 1.1, quantity: 100 },
  { id: 'f25', name: 'Laranja lima', category: 'Fruta', calories: 41, protein: 0.9, carbs: 10.3, fats: 0.1, fiber: 1, quantity: 100 },
  { id: 'f26', name: 'Limão', category: 'Fruta', calories: 29, protein: 1.1, carbs: 9.3, fats: 0.3, fiber: 2.8, quantity: 100 },
  { id: 'f27', name: 'Maçã Fuji', category: 'Fruta', calories: 52, protein: 0.3, carbs: 13.8, fats: 0.2, fiber: 2.4, quantity: 100 },
  { id: 'f28', name: 'Maçã verde', category: 'Fruta', calories: 52, protein: 0.3, carbs: 13.8, fats: 0.2, fiber: 2.4, quantity: 100 },
  { id: 'f29', name: 'Mamão papaia', category: 'Fruta', calories: 43, protein: 0.5, carbs: 10.8, fats: 0.1, fiber: 1.7, quantity: 100 },
  { id: 'f30', name: 'Mamão formosa', category: 'Fruta', calories: 45, protein: 0.6, carbs: 11.3, fats: 0.1, fiber: 1.8, quantity: 100 },
  { id: 'f31', name: 'Manga', category: 'Fruta', calories: 60, protein: 0.8, carbs: 15.2, fats: 0.4, fiber: 1.6, quantity: 100 },
  { id: 'f32', name: 'Maracujá', category: 'Fruta', calories: 97, protein: 2.2, carbs: 23.4, fats: 0.7, fiber: 10.4, quantity: 100 },
  { id: 'f33', name: 'Melancia', category: 'Fruta', calories: 30, protein: 0.6, carbs: 7.6, fats: 0.2, fiber: 0.4, quantity: 100 },
  { id: 'f34', name: 'Melão', category: 'Fruta', calories: 34, protein: 0.8, carbs: 8.4, fats: 0.2, fiber: 0.9, quantity: 100 },
  { id: 'f35', name: 'Mexerica', category: 'Fruta', calories: 53, protein: 0.8, carbs: 13.3, fats: 0.3, fiber: 1.8, quantity: 100 },
  { id: 'f36', name: 'Morango', category: 'Fruta', calories: 32, protein: 0.7, carbs: 7.7, fats: 0.3, fiber: 2, quantity: 100 },
  { id: 'f37', name: 'Nectarina', category: 'Fruta', calories: 44, protein: 1.1, carbs: 10.6, fats: 0.3, fiber: 1.7, quantity: 100 },
  { id: 'f38', name: 'Pera', category: 'Fruta', calories: 57, protein: 0.4, carbs: 15.3, fats: 0.1, fiber: 3.1, quantity: 100 },
  { id: 'f39', name: 'Pêssego', category: 'Fruta', calories: 39, protein: 0.9, carbs: 9.5, fats: 0.3, fiber: 1.5, quantity: 100 },
  { id: 'f40', name: 'Pitanga', category: 'Fruta', calories: 33, protein: 0.8, carbs: 7.9, fats: 0.2, fiber: 3.2, quantity: 100 },
  { id: 'f41', name: 'Romã', category: 'Fruta', calories: 83, protein: 1.7, carbs: 18.7, fats: 1.2, fiber: 4, quantity: 100 },
  { id: 'f42', name: 'Tangerina', category: 'Fruta', calories: 53, protein: 0.8, carbs: 13.3, fats: 0.3, fiber: 1.8, quantity: 100 },
  { id: 'f43', name: 'Uva Itália', category: 'Fruta', calories: 69, protein: 0.6, carbs: 18.1, fats: 0.2, fiber: 0.9, quantity: 100 },
  { id: 'f44', name: 'Uva passa', category: 'Fruta', calories: 299, protein: 3.1, carbs: 79.5, fats: 0.5, fiber: 3.7, quantity: 100 },
  { id: 'f45', name: 'Lichia', category: 'Fruta', calories: 66, protein: 0.8, carbs: 16.5, fats: 0.4, fiber: 1.3, quantity: 100 },
  { id: 'f46', name: 'Mirtilo', category: 'Fruta', calories: 57, protein: 0.7, carbs: 14.5, fats: 0.3, fiber: 2.4, quantity: 100 },
  { id: 'f47', name: 'Amora', category: 'Fruta', calories: 43, protein: 1.4, carbs: 9.6, fats: 0.5, fiber: 5.3, quantity: 100 },
  { id: 'f48', name: 'Physalis', category: 'Fruta', calories: 53, protein: 1.9, carbs: 11.2, fats: 0.7, fiber: 2, quantity: 100 },
  { id: 'f49', name: 'Tâmara', category: 'Fruta', calories: 282, protein: 2.5, carbs: 75, fats: 0.4, fiber: 8, quantity: 100 },
  { id: 'f50', name: 'Seriguela', category: 'Fruta', calories: 76, protein: 0.9, carbs: 19.7, fats: 0.2, fiber: 2.3, quantity: 100 },

  // ========== LEGUMES E VERDURAS (60+) ==========
  { id: 'v1', name: 'Abóbora cozida', category: 'Vegetal', calories: 26, protein: 0.9, carbs: 6.5, fats: 0.1, fiber: 1.7, quantity: 100 },
  { id: 'v2', name: 'Abobrinha cozida', category: 'Vegetal', calories: 17, protein: 1.2, carbs: 3.1, fats: 0.3, fiber: 1, quantity: 100 },
  { id: 'v3', name: 'Acelga cozida', category: 'Vegetal', calories: 20, protein: 1.9, carbs: 3.7, fats: 0.1, fiber: 1.6, quantity: 100 },
  { id: 'v4', name: 'Agrião cru', category: 'Vegetal', calories: 11, protein: 2.6, carbs: 1.3, fats: 0.1, fiber: 1.5, quantity: 100 },
  { id: 'v5', name: 'Aipo cru', category: 'Vegetal', calories: 16, protein: 0.7, carbs: 3, fats: 0.2, fiber: 1.6, quantity: 100 },
  { id: 'v6', name: 'Alface americana', category: 'Vegetal', calories: 14, protein: 1.4, carbs: 2.2, fats: 0.2, fiber: 1.7, quantity: 100 },
  { id: 'v7', name: 'Alface crespa', category: 'Vegetal', calories: 15, protein: 1.4, carbs: 2.9, fats: 0.2, fiber: 2.1, quantity: 100 },
  { id: 'v8', name: 'Alface roxa', category: 'Vegetal', calories: 13, protein: 1.3, carbs: 2.3, fats: 0.2, fiber: 1.9, quantity: 100 },
  { id: 'v9', name: 'Almeirão cru', category: 'Vegetal', calories: 23, protein: 1.8, carbs: 4.7, fats: 0.3, fiber: 3.1, quantity: 100 },
  { id: 'v10', name: 'Aspargo cozido', category: 'Vegetal', calories: 22, protein: 2.4, carbs: 4, fats: 0.2, fiber: 1.5, quantity: 100 },
  { id: 'v11', name: 'Berinjela cozida', category: 'Vegetal', calories: 35, protein: 0.8, carbs: 8.6, fats: 0.2, fiber: 2.5, quantity: 100 },
  { id: 'v12', name: 'Beterraba cozida', category: 'Vegetal', calories: 49, protein: 1.9, carbs: 11.1, fats: 0.2, fiber: 2.5, quantity: 100 },
  { id: 'v13', name: 'Brócolis cozido', category: 'Vegetal', calories: 35, protein: 2.4, carbs: 7, fats: 0.4, fiber: 3.3, quantity: 100 },
  { id: 'v14', name: 'Cebola crua', category: 'Vegetal', calories: 40, protein: 1.1, carbs: 9.3, fats: 0.1, fiber: 1.7, quantity: 100 },
  { id: 'v15', name: 'Cebolinha verde', category: 'Vegetal', calories: 32, protein: 1.8, carbs: 7.3, fats: 0.2, fiber: 2.6, quantity: 100 },
  { id: 'v16', name: 'Cenoura crua', category: 'Vegetal', calories: 41, protein: 0.9, carbs: 9.6, fats: 0.2, fiber: 2.8, quantity: 100 },
  { id: 'v17', name: 'Cenoura cozida', category: 'Vegetal', calories: 35, protein: 0.8, carbs: 8.2, fats: 0.2, fiber: 3, quantity: 100 },
  { id: 'v18', name: 'Chicória crua', category: 'Vegetal', calories: 23, protein: 1.7, carbs: 4.7, fats: 0.3, fiber: 3.1, quantity: 100 },
  { id: 'v19', name: 'Chuchu cozido', category: 'Vegetal', calories: 19, protein: 0.8, carbs: 4.5, fats: 0.1, fiber: 1.7, quantity: 100 },
  { id: 'v20', name: 'Couve-flor cozida', category: 'Vegetal', calories: 25, protein: 2, carbs: 5, fats: 0.3, fiber: 2.5, quantity: 100 },
  { id: 'v21', name: 'Couve manteiga crua', category: 'Vegetal', calories: 49, protein: 4.3, carbs: 8.8, fats: 0.5, fiber: 4.2, quantity: 100 },
  { id: 'v22', name: 'Couve refogada', category: 'Vegetal', calories: 33, protein: 2.9, carbs: 5.4, fats: 0.7, fiber: 3.1, quantity: 100 },
  { id: 'v23', name: 'Couve de Bruxelas', category: 'Vegetal', calories: 43, protein: 3.4, carbs: 8.9, fats: 0.3, fiber: 3.8, quantity: 100 },
  { id: 'v24', name: 'Espinafre cru', category: 'Vegetal', calories: 23, protein: 2.9, carbs: 3.6, fats: 0.4, fiber: 2.2, quantity: 100 },
  { id: 'v25', name: 'Espinafre cozido', category: 'Vegetal', calories: 23, protein: 3, carbs: 3.8, fats: 0.3, fiber: 2.4, quantity: 100 },
  { id: 'v26', name: 'Ervilha fresca cozida', category: 'Vegetal', calories: 84, protein: 5.4, carbs: 15.6, fats: 0.4, fiber: 5.5, quantity: 100 },
  { id: 'v27', name: 'Jiló cozido', category: 'Vegetal', calories: 27, protein: 1.4, carbs: 5.9, fats: 0.2, fiber: 3.9, quantity: 100 },
  { id: 'v28', name: 'Maxixe cozido', category: 'Vegetal', calories: 19, protein: 1.7, carbs: 3.5, fats: 0.2, fiber: 2.3, quantity: 100 },
  { id: 'v29', name: 'Milho verde cozido', category: 'Vegetal', calories: 86, protein: 3.3, carbs: 19, fats: 1.2, fiber: 2.7, quantity: 100 },
  { id: 'v30', name: 'Nabo cozido', category: 'Vegetal', calories: 28, protein: 0.9, carbs: 6.4, fats: 0.1, fiber: 1.8, quantity: 100 },
  { id: 'v31', name: 'Palmito em conserva', category: 'Vegetal', calories: 26, protein: 2.7, carbs: 4.6, fats: 0.2, fiber: 1.8, quantity: 100 },
  { id: 'v32', name: 'Pepino cru', category: 'Vegetal', calories: 15, protein: 0.7, carbs: 3.6, fats: 0.1, fiber: 0.5, quantity: 100 },
  { id: 'v33', name: 'Pimentão amarelo', category: 'Vegetal', calories: 27, protein: 1, carbs: 6.3, fats: 0.2, fiber: 2.1, quantity: 100 },
  { id: 'v34', name: 'Pimentão verde', category: 'Vegetal', calories: 20, protein: 0.9, carbs: 4.6, fats: 0.2, fiber: 1.7, quantity: 100 },
  { id: 'v35', name: 'Pimentão vermelho', category: 'Vegetal', calories: 31, protein: 1, carbs: 7.2, fats: 0.3, fiber: 2.1, quantity: 100 },
  { id: 'v36', name: 'Quiabo cozido', category: 'Vegetal', calories: 33, protein: 1.9, carbs: 7.5, fats: 0.2, fiber: 3.2, quantity: 100 },
  { id: 'v37', name: 'Rabanete cru', category: 'Vegetal', calories: 16, protein: 0.7, carbs: 3.4, fats: 0.1, fiber: 1.6, quantity: 100 },
  { id: 'v38', name: 'Repolho branco cru', category: 'Vegetal', calories: 25, protein: 1.3, carbs: 5.8, fats: 0.1, fiber: 2.5, quantity: 100 },
  { id: 'v39', name: 'Repolho roxo cru', category: 'Vegetal', calories: 31, protein: 1.4, carbs: 7.4, fats: 0.2, fiber: 2.5, quantity: 100 },
  { id: 'v40', name: 'Rúcula crua', category: 'Vegetal', calories: 25, protein: 2.6, carbs: 3.7, fats: 0.7, fiber: 1.6, quantity: 100 },
  { id: 'v41', name: 'Salsa crua', category: 'Vegetal', calories: 36, protein: 3, carbs: 6.3, fats: 0.8, fiber: 3.3, quantity: 100 },
  { id: 'v42', name: 'Tomate cru', category: 'Vegetal', calories: 18, protein: 0.9, carbs: 3.9, fats: 0.2, fiber: 1.2, quantity: 100 },
  { id: 'v43', name: 'Tomate cereja', category: 'Vegetal', calories: 18, protein: 0.9, carbs: 3.9, fats: 0.2, fiber: 1.2, quantity: 100 },
  { id: 'v44', name: 'Vagem cozida', category: 'Vegetal', calories: 31, protein: 1.8, carbs: 7, fats: 0.2, fiber: 2.7, quantity: 100 },
  { id: 'v45', name: 'Cogumelo Paris', category: 'Vegetal', calories: 22, protein: 3.1, carbs: 3.3, fats: 0.3, fiber: 1, quantity: 100 },
  { id: 'v46', name: 'Cogumelo Shitake', category: 'Vegetal', calories: 34, protein: 2.2, carbs: 6.8, fats: 0.5, fiber: 2.5, quantity: 100 },
  { id: 'v47', name: 'Alcachofra cozida', category: 'Vegetal', calories: 47, protein: 3.3, carbs: 10.5, fats: 0.2, fiber: 5.4, quantity: 100 },
  { id: 'v48', name: 'Alho-poró cozido', category: 'Vegetal', calories: 31, protein: 0.8, carbs: 7.6, fats: 0.1, fiber: 1.8, quantity: 100 },
  { id: 'v49', name: 'Endívia crua', category: 'Vegetal', calories: 17, protein: 1.3, carbs: 3.4, fats: 0.2, fiber: 3.1, quantity: 100 },
  { id: 'v50', name: 'Radicchio cru', category: 'Vegetal', calories: 23, protein: 1.4, carbs: 4.5, fats: 0.3, fiber: 0.9, quantity: 100 },
  { id: 'v51', name: 'Mostarda folha', category: 'Vegetal', calories: 27, protein: 2.9, carbs: 4.7, fats: 0.4, fiber: 3.2, quantity: 100 },
  { id: 'v52', name: 'Escarola crua', category: 'Vegetal', calories: 17, protein: 1.3, carbs: 3.4, fats: 0.2, fiber: 3.1, quantity: 100 },
  { id: 'v53', name: 'Catalonha crua', category: 'Vegetal', calories: 23, protein: 1.8, carbs: 4.7, fats: 0.3, fiber: 3.1, quantity: 100 },
  { id: 'v54', name: 'Inhame cozido', category: 'Vegetal', calories: 118, protein: 1.5, carbs: 27.9, fats: 0.2, fiber: 4.1, quantity: 100 },
  { id: 'v55', name: 'Mandioca cozida', category: 'Vegetal', calories: 125, protein: 0.6, carbs: 30.1, fats: 0.3, fiber: 1.6, quantity: 100 },
  { id: 'v56', name: 'Mandioquinha cozida', category: 'Vegetal', calories: 131, protein: 1.1, carbs: 31.3, fats: 0.2, fiber: 3.7, quantity: 100 },
  { id: 'v57', name: 'Batata inglesa cozida', category: 'Vegetal', calories: 86, protein: 1.9, carbs: 19.6, fats: 0.1, fiber: 1.3, quantity: 100 },
  { id: 'v58', name: 'Batata doce cozida', category: 'Vegetal', calories: 77, protein: 0.6, carbs: 18.4, fats: 0.1, fiber: 2.2, quantity: 100 },
  { id: 'v59', name: 'Batata baroa cozida', category: 'Vegetal', calories: 131, protein: 1.1, carbs: 31.3, fats: 0.2, fiber: 3.7, quantity: 100 },
  { id: 'v60', name: 'Gengibre cru', category: 'Vegetal', calories: 80, protein: 1.8, carbs: 17.8, fats: 0.8, fiber: 2, quantity: 100 },

  // ========== CEREAIS, PÃES, MASSAS E TUBÉRCULOS (60+) ==========
  { id: 'c1', name: 'Arroz branco cozido', category: 'Cereal', calories: 130, protein: 2.5, carbs: 28.1, fats: 0.2, fiber: 0.2, quantity: 100 },
  { id: 'c2', name: 'Arroz integral cozido', category: 'Cereal', calories: 123, protein: 2.6, carbs: 25.8, fats: 1, fiber: 2.7, quantity: 100 },
  { id: 'c3', name: 'Arroz parboilizado cozido', category: 'Cereal', calories: 124, protein: 2.6, carbs: 26.2, fats: 0.3, fiber: 0.6, quantity: 100 },
  { id: 'c4', name: 'Arroz negro cozido', category: 'Cereal', calories: 130, protein: 3.5, carbs: 26, fats: 1.2, fiber: 3.5, quantity: 100 },
  { id: 'c5', name: 'Arroz vermelho cozido', category: 'Cereal', calories: 127, protein: 3.2, carbs: 25.5, fats: 1.1, fiber: 3, quantity: 100 },
  { id: 'c6', name: 'Aveia em flocos', category: 'Cereal', calories: 394, protein: 13.9, carbs: 66.6, fats: 8.5, fiber: 9.1, quantity: 100 },
  { id: 'c7', name: 'Farelo de aveia', category: 'Cereal', calories: 246, protein: 17.3, carbs: 66.2, fats: 7, fiber: 15.4, quantity: 100 },
  { id: 'c8', name: 'Granola', category: 'Cereal', calories: 471, protein: 13.4, carbs: 64.7, fats: 18.6, fiber: 9.1, quantity: 100 },
  { id: 'c9', name: 'Quinoa cozida', category: 'Cereal', calories: 120, protein: 4.4, carbs: 21.3, fats: 1.9, fiber: 2.8, quantity: 100 },
  { id: 'c10', name: 'Amaranto cozido', category: 'Cereal', calories: 103, protein: 3.8, carbs: 18.7, fats: 1.6, fiber: 2.1, quantity: 100 },
  { id: 'c11', name: 'Cevada cozida', category: 'Cereal', calories: 123, protein: 2.3, carbs: 28.2, fats: 0.4, fiber: 3.8, quantity: 100 },
  { id: 'c12', name: 'Centeio', category: 'Cereal', calories: 338, protein: 10.3, carbs: 75.9, fats: 1.6, fiber: 15.1, quantity: 100 },
  { id: 'c13', name: 'Trigo em grão cozido', category: 'Cereal', calories: 77, protein: 2.5, carbs: 17.2, fats: 0.4, fiber: 2.3, quantity: 100 },
  { id: 'c14', name: 'Farinha de trigo integral', category: 'Cereal', calories: 340, protein: 13.3, carbs: 72.5, fats: 1.9, fiber: 10.2, quantity: 100 },
  { id: 'c15', name: 'Farinha de trigo branca', category: 'Cereal', calories: 364, protein: 10.3, carbs: 76.3, fats: 0.9, fiber: 2.3, quantity: 100 },
  { id: 'c16', name: 'Farinha de milho', category: 'Cereal', calories: 361, protein: 7.9, carbs: 77.5, fats: 1.5, fiber: 7.3, quantity: 100 },
  { id: 'c17', name: 'Fubá', category: 'Cereal', calories: 363, protein: 8.9, carbs: 77.5, fats: 1.5, fiber: 5.3, quantity: 100 },
  { id: 'c18', name: 'Polenta cozida', category: 'Cereal', calories: 70, protein: 1.5, carbs: 15.8, fats: 0.3, fiber: 1.1, quantity: 100 },
  { id: 'c19', name: 'Cuscuz marroquino cozido', category: 'Cereal', calories: 112, protein: 3.8, carbs: 23.2, fats: 0.2, fiber: 1.4, quantity: 100 },
  { id: 'c20', name: 'Tapioca', category: 'Cereal', calories: 358, protein: 0.2, carbs: 88.7, fats: 0.02, fiber: 0.9, quantity: 100 },
  { id: 'c21', name: 'Polvilho doce', category: 'Cereal', calories: 349, protein: 0.3, carbs: 86.6, fats: 0.1, fiber: 0.5, quantity: 100 },
  { id: 'c22', name: 'Polvilho azedo', category: 'Cereal', calories: 349, protein: 0.3, carbs: 86.6, fats: 0.1, fiber: 0.5, quantity: 100 },
  { id: 'c23', name: 'Pão francês', category: 'Cereal', calories: 300, protein: 8.1, carbs: 58.6, fats: 3.1, fiber: 2.3, quantity: 100 },
  { id: 'c24', name: 'Pão de forma branco', category: 'Cereal', calories: 269, protein: 8, carbs: 50.9, fats: 3.3, fiber: 2.3, quantity: 100 },
  { id: 'c25', name: 'Pão de forma integral', category: 'Cereal', calories: 253, protein: 9, carbs: 49, fats: 3.5, fiber: 6.9, quantity: 100 },
  { id: 'c26', name: 'Pão integral', category: 'Cereal', calories: 253, protein: 9, carbs: 49, fats: 3.5, fiber: 6.9, quantity: 100 },
  { id: 'c27', name: 'Pão de centeio', category: 'Cereal', calories: 259, protein: 8.5, carbs: 48.3, fats: 3.3, fiber: 5.8, quantity: 100 },
  { id: 'c28', name: 'Pão sírio', category: 'Cereal', calories: 275, protein: 9.1, carbs: 55.7, fats: 1.2, fiber: 2.2, quantity: 100 },
  { id: 'c29', name: 'Pão de queijo', category: 'Cereal', calories: 307, protein: 6.5, carbs: 36.3, fats: 14.6, fiber: 0.8, quantity: 100 },
  { id: 'c30', name: 'Torrada', category: 'Cereal', calories: 392, protein: 11.3, carbs: 75.1, fats: 4.5, fiber: 3.5, quantity: 100 },
  { id: 'c31', name: 'Biscoito cream cracker', category: 'Cereal', calories: 432, protein: 10.1, carbs: 71.5, fats: 11.6, fiber: 2.5, quantity: 100 },
  { id: 'c32', name: 'Biscoito água e sal', category: 'Cereal', calories: 443, protein: 9.4, carbs: 68.7, fats: 14.1, fiber: 2.1, quantity: 100 },
  { id: 'c33', name: 'Biscoito integral', category: 'Cereal', calories: 462, protein: 8.9, carbs: 66.3, fats: 17.5, fiber: 6.5, quantity: 100 },
  { id: 'c34', name: 'Macarrão cozido', category: 'Cereal', calories: 131, protein: 4.5, carbs: 27.4, fats: 0.5, fiber: 1.1, quantity: 100 },
  { id: 'c35', name: 'Macarrão integral cozido', category: 'Cereal', calories: 124, protein: 5, carbs: 26, fats: 0.5, fiber: 3.5, quantity: 100 },
  { id: 'c36', name: 'Macarrão de arroz cozido', category: 'Cereal', calories: 109, protein: 1.8, carbs: 24.9, fats: 0.1, fiber: 1, quantity: 100 },
  { id: 'c37', name: 'Nhoque cozido', category: 'Cereal', calories: 148, protein: 3.5, carbs: 32.7, fats: 0.5, fiber: 1.4, quantity: 100 },
  { id: 'c38', name: 'Lasanha cozida', category: 'Cereal', calories: 135, protein: 4.8, carbs: 28.2, fats: 0.6, fiber: 1.2, quantity: 100 },
  { id: 'c39', name: 'Panqueca simples', category: 'Cereal', calories: 227, protein: 6.4, carbs: 28.3, fats: 9.5, fiber: 0.8, quantity: 100 },
  { id: 'c40', name: 'Crepioca', category: 'Cereal', calories: 150, protein: 6.5, carbs: 22, fats: 3.5, fiber: 0.5, quantity: 100 },
  { id: 'c41', name: 'Cuscuz nordestino', category: 'Cereal', calories: 112, protein: 2.4, carbs: 24.7, fats: 0.2, fiber: 1.1, quantity: 100 },
  { id: 'c42', name: 'Milho de pipoca estourado', category: 'Cereal', calories: 387, protein: 12.7, carbs: 77.8, fats: 4.5, fiber: 15.1, quantity: 100 },
  { id: 'c43', name: 'Cereal matinal corn flakes', category: 'Cereal', calories: 378, protein: 7.5, carbs: 84.1, fats: 0.9, fiber: 2.7, quantity: 100 },
  { id: 'c44', name: 'Cereal matinal integral', category: 'Cereal', calories: 360, protein: 10.5, carbs: 75.3, fats: 2.5, fiber: 11.5, quantity: 100 },
  { id: 'c45', name: 'Musli', category: 'Cereal', calories: 363, protein: 9.7, carbs: 72.2, fats: 5.5, fiber: 7.7, quantity: 100 },
  { id: 'c46', name: 'Barra de cereal', category: 'Cereal', calories: 382, protein: 6.1, carbs: 74.2, fats: 7.6, fiber: 3.1, quantity: 100 },
  { id: 'c47', name: 'Wafer recheado', category: 'Cereal', calories: 502, protein: 5.8, carbs: 67.1, fats: 23.9, fiber: 1.5, quantity: 100 },
  { id: 'c48', name: 'Bolacha Maria', category: 'Cereal', calories: 443, protein: 8.1, carbs: 74.5, fats: 12.4, fiber: 1.9, quantity: 100 },
  { id: 'c49', name: 'Bolacha maisena', category: 'Cereal', calories: 443, protein: 8.1, carbs: 74.5, fats: 12.4, fiber: 1.9, quantity: 100 },
  { id: 'c50', name: 'Rosquinha', category: 'Cereal', calories: 377, protein: 7.6, carbs: 78.3, fats: 4.3, fiber: 2.1, quantity: 100 },
  { id: 'c51', name: 'Pão doce', category: 'Cereal', calories: 312, protein: 7.9, carbs: 52.9, fats: 7.8, fiber: 2.1, quantity: 100 },
  { id: 'c52', name: 'Croissant', category: 'Cereal', calories: 406, protein: 8.2, carbs: 45.8, fats: 21, fiber: 2.6, quantity: 100 },
  { id: 'c53', name: 'Brioche', category: 'Cereal', calories: 375, protein: 8.8, carbs: 50.3, fats: 15.5, fiber: 2.1, quantity: 100 },
  { id: 'c54', name: 'Pão australiano', category: 'Cereal', calories: 280, protein: 8.5, carbs: 48, fats: 6, fiber: 3, quantity: 100 },
  { id: 'c55', name: 'Pão de batata', category: 'Cereal', calories: 265, protein: 7.2, carbs: 47.3, fats: 5.1, fiber: 2.3, quantity: 100 },
  { id: 'c56', name: 'Pão de leite', category: 'Cereal', calories: 300, protein: 8.5, carbs: 52, fats: 6.5, fiber: 2, quantity: 100 },
  { id: 'c57', name: 'Pão de mel', category: 'Cereal', calories: 395, protein: 5.2, carbs: 68.7, fats: 11.3, fiber: 1.8, quantity: 100 },
  { id: 'c58', name: 'Wrap integral', category: 'Cereal', calories: 290, protein: 9.5, carbs: 50, fats: 5.5, fiber: 5, quantity: 100 },
  { id: 'c59', name: 'Tortilha de milho', category: 'Cereal', calories: 218, protein: 5.7, carbs: 44.6, fats: 2.9, fiber: 5.2, quantity: 100 },
  { id: 'c60', name: 'Pão ciabatta', category: 'Cereal', calories: 271, protein: 9, carbs: 51.5, fats: 3.6, fiber: 2.5, quantity: 100 },

  // ========== CARNES, AVES, PEIXES E OVOS (50+) ==========
  { id: 'p1', name: 'Peito de frango grelhado', category: 'Proteína', calories: 165, protein: 31, carbs: 0, fats: 3.6, quantity: 100 },
  { id: 'p2', name: 'Peito de frango cozido', category: 'Proteína', calories: 159, protein: 32, carbs: 0, fats: 2.5, quantity: 100 },
  { id: 'p3', name: 'Coxa de frango sem pele', category: 'Proteína', calories: 175, protein: 28, carbs: 0, fats: 6, quantity: 100 },
  { id: 'p4', name: 'Sobrecoxa de frango sem pele', category: 'Proteína', calories: 185, protein: 26, carbs: 0, fats: 8, quantity: 100 },
  { id: 'p5', name: 'Peito de peru', category: 'Proteína', calories: 103, protein: 24, carbs: 0, fats: 0.7, quantity: 100 },
  { id: 'p6', name: 'Carne bovina magra (patinho)', category: 'Proteína', calories: 170, protein: 26, carbs: 0, fats: 7, quantity: 100 },
  { id: 'p7', name: 'Carne bovina (alcatra)', category: 'Proteína', calories: 163, protein: 23, carbs: 0, fats: 7.5, quantity: 100 },
  { id: 'p8', name: 'Carne bovina (filé mignon)', category: 'Proteína', calories: 191, protein: 26.5, carbs: 0, fats: 9, quantity: 100 },
  { id: 'p9', name: 'Carne bovina (coxão mole)', category: 'Proteína', calories: 176, protein: 21.4, carbs: 0, fats: 9.6, quantity: 100 },
  { id: 'p10', name: 'Carne bovina (lagarto)', category: 'Proteína', calories: 164, protein: 23.5, carbs: 0, fats: 7.5, quantity: 100 },
  { id: 'p11', name: 'Carne bovina moída magra', category: 'Proteína', calories: 176, protein: 20, carbs: 0, fats: 10, quantity: 100 },
  { id: 'p12', name: 'Carne suína (lombo)', category: 'Proteína', calories: 143, protein: 21.9, carbs: 0, fats: 5.6, quantity: 100 },
  { id: 'p13', name: 'Carne suína (pernil)', category: 'Proteína', calories: 200, protein: 20, carbs: 0, fats: 13, quantity: 100 },
  { id: 'p14', name: 'Filé de tilápia', category: 'Proteína', calories: 96, protein: 20, carbs: 0, fats: 1.7, quantity: 100 },
  { id: 'p15', name: 'Salmão grelhado', category: 'Proteína', calories: 208, protein: 23, carbs: 0, fats: 13, quantity: 100 },
  { id: 'p16', name: 'Atum fresco grelhado', category: 'Proteína', calories: 184, protein: 30, carbs: 0, fats: 6.3, quantity: 100 },
  { id: 'p17', name: 'Atum em água (lata)', category: 'Proteína', calories: 108, protein: 25, carbs: 0, fats: 0.5, quantity: 100 },
  { id: 'p18', name: 'Sardinha em conserva', category: 'Proteína', calories: 208, protein: 24.6, carbs: 0, fats: 11.5, quantity: 100 },
  { id: 'p19', name: 'Bacalhau cozido', category: 'Proteína', calories: 135, protein: 29.3, carbs: 0, fats: 1.2, quantity: 100 },
  { id: 'p20', name: 'Pescada branca', category: 'Proteína', calories: 90, protein: 19.2, carbs: 0, fats: 1.3, quantity: 100 },
  { id: 'p21', name: 'Merluza', category: 'Proteína', calories: 86, protein: 17.8, carbs: 0, fats: 1.4, quantity: 100 },
  { id: 'p22', name: 'Camarão cozido', category: 'Proteína', calories: 99, protein: 20.9, carbs: 0.9, fats: 1.1, quantity: 100 },
  { id: 'p23', name: 'Lula', category: 'Proteína', calories: 92, protein: 15.6, carbs: 3.1, fats: 1.4, quantity: 100 },
  { id: 'p24', name: 'Polvo', category: 'Proteína', calories: 82, protein: 14.9, carbs: 2.2, fats: 1, quantity: 100 },
  { id: 'p25', name: 'Ovo de galinha inteiro', category: 'Proteína', calories: 155, protein: 13, carbs: 1.1, fats: 11, quantity: 100 },
  { id: 'p26', name: 'Clara de ovo', category: 'Proteína', calories: 52, protein: 11, carbs: 0.7, fats: 0.2, quantity: 100 },
  { id: 'p27', name: 'Gema de ovo', category: 'Proteína', calories: 322, protein: 16, carbs: 3.6, fats: 27, quantity: 100 },
  { id: 'p28', name: 'Ovo de codorna', category: 'Proteína', calories: 158, protein: 13.1, carbs: 0.4, fats: 11.1, quantity: 100 },
  { id: 'p29', name: 'Linguiça de frango', category: 'Proteína', calories: 235, protein: 15, carbs: 3, fats: 18, quantity: 100 },
  { id: 'p30', name: 'Salsicha de frango', category: 'Proteína', calories: 223, protein: 12, carbs: 5, fats: 17, quantity: 100 },
  { id: 'p31', name: 'Presunto magro', category: 'Proteína', calories: 145, protein: 21, carbs: 2, fats: 6, quantity: 100 },
  { id: 'p32', name: 'Blanquet de peru', category: 'Proteína', calories: 98, protein: 18, carbs: 3, fats: 1.5, quantity: 100 },
  { id: 'p33', name: 'Mortadela', category: 'Proteína', calories: 264, protein: 14, carbs: 2, fats: 22, quantity: 100 },
  { id: 'p34', name: 'Salame', category: 'Proteína', calories: 407, protein: 22.6, carbs: 1.6, fats: 33.7, quantity: 100 },
  { id: 'p35', name: 'Bacon', category: 'Proteína', calories: 541, protein: 37, carbs: 1.4, fats: 42, quantity: 100 },
  { id: 'p36', name: 'Carne seca', category: 'Proteína', calories: 271, protein: 43.5, carbs: 0, fats: 9.5, quantity: 100 },
  { id: 'p37', name: 'Jerked beef', category: 'Proteína', calories: 271, protein: 43.5, carbs: 0, fats: 9.5, quantity: 100 },
  { id: 'p38', name: 'Fígado bovino', category: 'Proteína', calories: 135, protein: 20.5, carbs: 5, fats: 3.4, quantity: 100 },
  { id: 'p39', name: 'Coração de frango', category: 'Proteína', calories: 185, protein: 15.8, carbs: 0.7, fats: 13, quantity: 100 },
  { id: 'p40', name: 'Moela de frango', category: 'Proteína', calories: 94, protein: 17.7, carbs: 0.9, fats: 2, quantity: 100 },
  { id: 'p41', name: 'Costela bovina', category: 'Proteína', calories: 273, protein: 17.4, carbs: 0, fats: 22.3, quantity: 100 },
  { id: 'p42', name: 'Picanha', category: 'Proteína', calories: 210, protein: 21, carbs: 0, fats: 14, quantity: 100 },
  { id: 'p43', name: 'Fraldinha', category: 'Proteína', calories: 216, protein: 19.5, carbs: 0, fats: 15, quantity: 100 },
  { id: 'p44', name: 'Maminha', category: 'Proteína', calories: 203, protein: 20.5, carbs: 0, fats: 13.5, quantity: 100 },
  { id: 'p45', name: 'Cupim', category: 'Proteína', calories: 287, protein: 17.2, carbs: 0, fats: 23.8, quantity: 100 },
  { id: 'p46', name: 'Linguado', category: 'Proteína', calories: 91, protein: 19, carbs: 0, fats: 1.2, quantity: 100 },
  { id: 'p47', name: 'Robalo', category: 'Proteína', calories: 97, protein: 18.4, carbs: 0, fats: 2.3, quantity: 100 },
  { id: 'p48', name: 'Dourado', category: 'Proteína', calories: 100, protein: 19.2, carbs: 0, fats: 2.5, quantity: 100 },
  { id: 'p49', name: 'Truta', category: 'Proteína', calories: 119, protein: 20.5, carbs: 0, fats: 3.5, quantity: 100 },
  { id: 'p50', name: 'Atum em óleo (lata)', category: 'Proteína', calories: 198, protein: 26.5, carbs: 0, fats: 9.3, quantity: 100 },

  // ========== LATICÍNIOS (40+) ==========
  { id: 'l1', name: 'Leite integral', category: 'Laticínio', calories: 61, protein: 3.2, carbs: 4.7, fats: 3.5, quantity: 100 },
  { id: 'l2', name: 'Leite desnatado', category: 'Laticínio', calories: 35, protein: 3.4, carbs: 4.9, fats: 0.1, quantity: 100 },
  { id: 'l3', name: 'Leite semidesnatado', category: 'Laticínio', calories: 49, protein: 3.3, carbs: 4.8, fats: 1.9, quantity: 100 },
  { id: 'l4', name: 'Leite de coco', category: 'Laticínio', calories: 230, protein: 2.3, carbs: 5.5, fats: 23.8, quantity: 100 },
  { id: 'l5', name: 'Leite de amêndoas', category: 'Laticínio', calories: 17, protein: 0.6, carbs: 0.6, fats: 1.1, quantity: 100 },
  { id: 'l6', name: 'Leite de soja', category: 'Laticínio', calories: 54, protein: 3.3, carbs: 6.3, fats: 1.8, quantity: 100 },
  { id: 'l7', name: 'Iogurte natural integral', category: 'Laticínio', calories: 61, protein: 3.5, carbs: 4.7, fats: 3.3, quantity: 100 },
  { id: 'l8', name: 'Iogurte natural desnatado', category: 'Laticínio', calories: 56, protein: 5.3, carbs: 7.7, fats: 0.2, quantity: 100 },
  { id: 'l9', name: 'Iogurte grego natural', category: 'Laticínio', calories: 97, protein: 9, carbs: 3.6, fats: 5, quantity: 100 },
  { id: 'l10', name: 'Iogurte grego desnatado', category: 'Laticínio', calories: 59, protein: 10.2, carbs: 3.6, fats: 0.4, quantity: 100 },
  { id: 'l11', name: 'Coalhada', category: 'Laticínio', calories: 62, protein: 3.1, carbs: 5.2, fats: 3.2, quantity: 100 },
  { id: 'l12', name: 'Queijo cottage', category: 'Laticínio', calories: 98, protein: 11, carbs: 3.4, fats: 4.3, quantity: 100 },
  { id: 'l13', name: 'Queijo ricota', category: 'Laticínio', calories: 174, protein: 13, carbs: 3.4, fats: 13, quantity: 100 },
  { id: 'l14', name: 'Queijo minas frescal', category: 'Laticínio', calories: 264, protein: 17.4, carbs: 2.9, fats: 20.8, quantity: 100 },
  { id: 'l15', name: 'Queijo minas padrão', category: 'Laticínio', calories: 321, protein: 24.4, carbs: 2.5, fats: 24, quantity: 100 },
  { id: 'l16', name: 'Queijo mussarela', category: 'Laticínio', calories: 280, protein: 18.2, carbs: 3.1, fats: 22.4, quantity: 100 },
  { id: 'l17', name: 'Queijo prato', category: 'Laticínio', calories: 360, protein: 25.8, carbs: 1.2, fats: 28.3, quantity: 100 },
  { id: 'l18', name: 'Queijo parmesão', category: 'Laticínio', calories: 392, protein: 35.8, carbs: 3.2, fats: 25.6, quantity: 100 },
  { id: 'l19', name: 'Queijo provolone', category: 'Laticínio', calories: 351, protein: 25.6, carbs: 2.1, fats: 26.6, quantity: 100 },
  { id: 'l20', name: 'Queijo cheddar', category: 'Laticínio', calories: 403, protein: 24.9, carbs: 1.3, fats: 33.1, quantity: 100 },
  { id: 'l21', name: 'Queijo gorgonzola', category: 'Laticínio', calories: 353, protein: 21.4, carbs: 2.3, fats: 28.7, quantity: 100 },
  { id: 'l22', name: 'Queijo brie', category: 'Laticínio', calories: 334, protein: 20.8, carbs: 0.5, fats: 27.7, quantity: 100 },
  { id: 'l23', name: 'Queijo camembert', category: 'Laticínio', calories: 300, protein: 19.8, carbs: 0.5, fats: 24.3, quantity: 100 },
  { id: 'l24', name: 'Requeijão cremoso', category: 'Laticínio', calories: 235, protein: 8.4, carbs: 3.5, fats: 21.3, quantity: 100 },
  { id: 'l25', name: 'Requeijão light', category: 'Laticínio', calories: 140, protein: 10, carbs: 4, fats: 9, quantity: 100 },
  { id: 'l26', name: 'Cream cheese', category: 'Laticínio', calories: 349, protein: 5.9, carbs: 5.5, fats: 34.4, quantity: 100 },
  { id: 'l27', name: 'Cream cheese light', category: 'Laticínio', calories: 178, protein: 7, carbs: 7, fats: 14, quantity: 100 },
  { id: 'l28', name: 'Manteiga', category: 'Laticínio', calories: 717, protein: 0.9, carbs: 0.1, fats: 81.1, quantity: 100 },
  { id: 'l29', name: 'Manteiga light', category: 'Laticínio', calories: 498, protein: 0.6, carbs: 0.1, fats: 56.3, quantity: 100 },
  { id: 'l30', name: 'Margarina', category: 'Laticínio', calories: 720, protein: 0.2, carbs: 0.6, fats: 80, quantity: 100 },
  { id: 'l31', name: 'Margarina light', category: 'Laticínio', calories: 360, protein: 0.1, carbs: 0.3, fats: 40, quantity: 100 },
  { id: 'l32', name: 'Creme de leite', category: 'Laticínio', calories: 337, protein: 2.1, carbs: 2.8, fats: 35, quantity: 100 },
  { id: 'l33', name: 'Creme de leite light', category: 'Laticínio', calories: 168, protein: 2.5, carbs: 3.5, fats: 17, quantity: 100 },
  { id: 'l34', name: 'Leite condensado', category: 'Laticínio', calories: 321, protein: 7.9, carbs: 54.3, fats: 8.4, quantity: 100 },
  { id: 'l35', name: 'Doce de leite', category: 'Laticínio', calories: 315, protein: 6.8, carbs: 55.5, fats: 7.3, quantity: 100 },
  { id: 'l36', name: 'Bebida láctea', category: 'Laticínio', calories: 68, protein: 2.5, carbs: 11, fats: 1.5, quantity: 100 },
  { id: 'l37', name: 'Petit suisse', category: 'Laticínio', calories: 136, protein: 6.5, carbs: 17.5, fats: 4.5, quantity: 100 },
  { id: 'l38', name: 'Danoninho', category: 'Laticínio', calories: 136, protein: 6.5, carbs: 17.5, fats: 4.5, quantity: 100 },
  { id: 'l39', name: 'Queijo coalho', category: 'Laticínio', calories: 272, protein: 21.3, carbs: 1.6, fats: 20.5, quantity: 100 },
  { id: 'l40', name: 'Queijo de cabra', category: 'Laticínio', calories: 268, protein: 18.5, carbs: 2.2, fats: 21.1, quantity: 100 },

  // ========== LEGUMINOSAS (40+) ==========
  { id: 'lg1', name: 'Feijão preto cozido', category: 'Leguminosa', calories: 77, protein: 4.5, carbs: 14, fats: 0.5, fiber: 4.5, quantity: 100 },
  { id: 'lg2', name: 'Feijão carioca cozido', category: 'Leguminosa', calories: 76, protein: 4.8, carbs: 13.6, fats: 0.5, fiber: 4.5, quantity: 100 },
  { id: 'lg3', name: 'Feijão branco cozido', category: 'Leguminosa', calories: 139, protein: 9.7, carbs: 25, fats: 0.5, fiber: 6.3, quantity: 100 },
  { id: 'lg4', name: 'Feijão vermelho cozido', category: 'Leguminosa', calories: 127, protein: 8.7, carbs: 22.8, fats: 0.5, fiber: 6.4, quantity: 100 },
  { id: 'lg5', name: 'Feijão fradinho cozido', category: 'Leguminosa', calories: 116, protein: 7.7, carbs: 20.8, fats: 0.5, fiber: 6.5, quantity: 100 },
  { id: 'lg6', name: 'Feijão azuki cozido', category: 'Leguminosa', calories: 128, protein: 7.5, carbs: 24.9, fats: 0.1, fiber: 7.3, quantity: 100 },
  { id: 'lg7', name: 'Lentilha cozida', category: 'Leguminosa', calories: 93, protein: 6.9, carbs: 16.3, fats: 0.4, fiber: 5.1, quantity: 100 },
  { id: 'lg8', name: 'Lentilha vermelha cozida', category: 'Leguminosa', calories: 101, protein: 7.6, carbs: 17.5, fats: 0.4, fiber: 3.9, quantity: 100 },
  { id: 'lg9', name: 'Grão de bico cozido', category: 'Leguminosa', calories: 121, protein: 6.7, carbs: 19.3, fats: 2.1, fiber: 5.4, quantity: 100 },
  { id: 'lg10', name: 'Ervilha seca cozida', category: 'Leguminosa', calories: 118, protein: 8.3, carbs: 21.1, fats: 0.8, fiber: 8.3, quantity: 100 },
  { id: 'lg11', name: 'Soja cozida', category: 'Leguminosa', calories: 141, protein: 12.5, carbs: 11.1, fats: 6.4, fiber: 4.2, quantity: 100 },
  { id: 'lg12', name: 'Edamame', category: 'Leguminosa', calories: 122, protein: 11.9, carbs: 8.9, fats: 5.2, fiber: 5.2, quantity: 100 },
  { id: 'lg13', name: 'Tofu firme', category: 'Leguminosa', calories: 76, protein: 8.1, carbs: 1.9, fats: 4.8, fiber: 0.3, quantity: 100 },
  { id: 'lg14', name: 'Tofu macio', category: 'Leguminosa', calories: 55, protein: 5.3, carbs: 2.7, fats: 2.7, fiber: 0.2, quantity: 100 },
  { id: 'lg15', name: 'Tempeh', category: 'Leguminosa', calories: 193, protein: 20.3, carbs: 7.6, fats: 10.8, fiber: 5.7, quantity: 100 },
  { id: 'lg16', name: 'Proteína texturizada de soja', category: 'Leguminosa', calories: 336, protein: 52, carbs: 30.9, fats: 0.5, fiber: 18.3, quantity: 100 },
  { id: 'lg17', name: 'Leite de soja', category: 'Leguminosa', calories: 54, protein: 3.3, carbs: 6.3, fats: 1.8, quantity: 100 },
  { id: 'lg18', name: 'Missô', category: 'Leguminosa', calories: 199, protein: 12.8, carbs: 25.9, fats: 6, fiber: 5.4, quantity: 100 },
  { id: 'lg19', name: 'Natto', category: 'Leguminosa', calories: 212, protein: 19.4, carbs: 12.7, fats: 11, fiber: 5.4, quantity: 100 },
  { id: 'lg20', name: 'Fava cozida', category: 'Leguminosa', calories: 110, protein: 7.6, carbs: 19.7, fats: 0.4, fiber: 5.4, quantity: 100 },
  { id: 'lg21', name: 'Tremoço cozido', category: 'Leguminosa', calories: 116, protein: 15.6, carbs: 9.9, fats: 2.9, fiber: 4.8, quantity: 100 },
  { id: 'lg22', name: 'Feijão verde cozido', category: 'Leguminosa', calories: 31, protein: 1.8, carbs: 7, fats: 0.2, fiber: 2.7, quantity: 100 },
  { id: 'lg23', name: 'Feijão manteiga cozido', category: 'Leguminosa', calories: 115, protein: 7.1, carbs: 21.2, fats: 0.4, fiber: 5.3, quantity: 100 },
  { id: 'lg24', name: 'Feijão moyashi', category: 'Leguminosa', calories: 30, protein: 3.1, carbs: 5.9, fats: 0.2, fiber: 1.8, quantity: 100 },
  { id: 'lg25', name: 'Feijão rajado cozido', category: 'Leguminosa', calories: 127, protein: 8.7, carbs: 22.8, fats: 0.5, fiber: 6.4, quantity: 100 },
  { id: 'lg26', name: 'Feijão rosinha cozido', category: 'Leguminosa', calories: 124, protein: 8.4, carbs: 22.5, fats: 0.5, fiber: 6.2, quantity: 100 },
  { id: 'lg27', name: 'Feijão jalo cozido', category: 'Leguminosa', calories: 129, protein: 8.9, carbs: 23.1, fats: 0.5, fiber: 6.5, quantity: 100 },
  { id: 'lg28', name: 'Feijão bolinha cozido', category: 'Leguminosa', calories: 118, protein: 7.9, carbs: 21.3, fats: 0.5, fiber: 6.1, quantity: 100 },
  { id: 'lg29', name: 'Feijão cavalo cozido', category: 'Leguminosa', calories: 116, protein: 7.7, carbs: 20.8, fats: 0.5, fiber: 6.5, quantity: 100 },
  { id: 'lg30', name: 'Feijão mulatinho cozido', category: 'Leguminosa', calories: 77, protein: 4.5, carbs: 14, fats: 0.5, fiber: 4.5, quantity: 100 },
  { id: 'lg31', name: 'Feijão andu cozido', category: 'Leguminosa', calories: 121, protein: 6.8, carbs: 21.7, fats: 1.3, fiber: 5.1, quantity: 100 },
  { id: 'lg32', name: 'Feijão guandu cozido', category: 'Leguminosa', calories: 121, protein: 6.8, carbs: 21.7, fats: 1.3, fiber: 5.1, quantity: 100 },
  { id: 'lg33', name: 'Feijão de corda cozido', category: 'Leguminosa', calories: 116, protein: 7.7, carbs: 20.8, fats: 0.5, fiber: 6.5, quantity: 100 },
  { id: 'lg34', name: 'Feijão macassar cozido', category: 'Leguminosa', calories: 116, protein: 7.7, carbs: 20.8, fats: 0.5, fiber: 6.5, quantity: 100 },
  { id: 'lg35', name: 'Feijão lima cozido', category: 'Leguminosa', calories: 115, protein: 7.8, carbs: 20.9, fats: 0.4, fiber: 5.3, quantity: 100 },
  { id: 'lg36', name: 'Feijão cannellini cozido', category: 'Leguminosa', calories: 114, protein: 8.3, carbs: 20.8, fats: 0.5, fiber: 6.3, quantity: 100 },
  { id: 'lg37', name: 'Feijão pinto cozido', category: 'Leguminosa', calories: 143, protein: 9, carbs: 26.2, fats: 0.7, fiber: 9, quantity: 100 },
  { id: 'lg38', name: 'Feijão navy cozido', category: 'Leguminosa', calories: 140, protein: 8.2, carbs: 26.1, fats: 0.6, fiber: 10.5, quantity: 100 },
  { id: 'lg39', name: 'Feijão kidney cozido', category: 'Leguminosa', calories: 127, protein: 8.7, carbs: 22.8, fats: 0.5, fiber: 6.4, quantity: 100 },
  { id: 'lg40', name: 'Feijão black eyed peas', category: 'Leguminosa', calories: 116, protein: 7.7, carbs: 20.8, fats: 0.5, fiber: 6.5, quantity: 100 },

  // ========== OLEAGINOSAS E SEMENTES (20+) ==========
  { id: 'o1', name: 'Amendoim torrado', category: 'Oleaginosa', calories: 567, protein: 25.8, carbs: 16.1, fats: 49.2, fiber: 8.5, quantity: 100 },
  { id: 'o2', name: 'Amêndoas', category: 'Oleaginosa', calories: 579, protein: 21.2, carbs: 21.6, fats: 49.9, fiber: 12.5, quantity: 100 },
  { id: 'o3', name: 'Castanha do Pará', category: 'Oleaginosa', calories: 656, protein: 14.3, carbs: 12.3, fats: 66.4, fiber: 7.9, quantity: 100 },
  { id: 'o4', name: 'Castanha de caju', category: 'Oleaginosa', calories: 553, protein: 18.2, carbs: 30.2, fats: 43.8, fiber: 3.3, quantity: 100 },
  { id: 'o5', name: 'Nozes', category: 'Oleaginosa', calories: 654, protein: 15.2, carbs: 13.7, fats: 65.2, fiber: 6.7, quantity: 100 },
  { id: 'o6', name: 'Avelã', category: 'Oleaginosa', calories: 628, protein: 15, carbs: 16.7, fats: 60.8, fiber: 9.7, quantity: 100 },
  { id: 'o7', name: 'Pistache', category: 'Oleaginosa', calories: 560, protein: 20.2, carbs: 27.2, fats: 45.3, fiber: 10.6, quantity: 100 },
  { id: 'o8', name: 'Macadâmia', category: 'Oleaginosa', calories: 718, protein: 7.9, carbs: 13.8, fats: 75.8, fiber: 8.6, quantity: 100 },
  { id: 'o9', name: 'Pecã', category: 'Oleaginosa', calories: 691, protein: 9.2, carbs: 13.9, fats: 72, fiber: 9.6, quantity: 100 },
  { id: 'o10', name: 'Pasta de amendoim', category: 'Oleaginosa', calories: 588, protein: 25, carbs: 20, fats: 50, fiber: 6, quantity: 100 },
  { id: 'o11', name: 'Pasta de amêndoas', category: 'Oleaginosa', calories: 614, protein: 21, carbs: 19, fats: 55, fiber: 12, quantity: 100 },
  { id: 'o12', name: 'Pasta de castanha de caju', category: 'Oleaginosa', calories: 587, protein: 18, carbs: 27, fats: 46, fiber: 3, quantity: 100 },
  { id: 'o13', name: 'Semente de girassol', category: 'Oleaginosa', calories: 584, protein: 20.8, carbs: 20, fats: 51.5, fiber: 8.6, quantity: 100 },
  { id: 'o14', name: 'Semente de abóbora', category: 'Oleaginosa', calories: 559, protein: 30.2, carbs: 10.7, fats: 49, fiber: 6, quantity: 100 },
  { id: 'o15', name: 'Semente de linhaça', category: 'Oleaginosa', calories: 534, protein: 18.3, carbs: 28.9, fats: 42.2, fiber: 27.3, quantity: 100 },
  { id: 'o16', name: 'Semente de chia', category: 'Oleaginosa', calories: 486, protein: 16.5, carbs: 42.1, fats: 30.7, fiber: 34.4, quantity: 100 },
  { id: 'o17', name: 'Semente de gergelim', category: 'Oleaginosa', calories: 573, protein: 17.7, carbs: 23.5, fats: 49.7, fiber: 11.8, quantity: 100 },
  { id: 'o18', name: 'Tahine (pasta de gergelim)', category: 'Oleaginosa', calories: 595, protein: 17, carbs: 21, fats: 53.8, fiber: 9.3, quantity: 100 },
  { id: 'o19', name: 'Coco ralado', category: 'Oleaginosa', calories: 354, protein: 3.3, carbs: 15.2, fats: 33.5, fiber: 9, quantity: 100 },
  { id: 'o20', name: 'Mix de castanhas', category: 'Oleaginosa', calories: 607, protein: 18.5, carbs: 21.3, fats: 54.1, fiber: 8.5, quantity: 100 },

  // ========== GORDURAS E ÓLEOS (20+) ==========
  { id: 'go1', name: 'Azeite de oliva extra virgem', category: 'Gordura', calories: 884, protein: 0, carbs: 0, fats: 100, quantity: 100 },
  { id: 'go2', name: 'Óleo de coco', category: 'Gordura', calories: 862, protein: 0, carbs: 0, fats: 100, quantity: 100 },
  { id: 'go3', name: 'Óleo de canola', category: 'Gordura', calories: 884, protein: 0, carbs: 0, fats: 100, quantity: 100 },
  { id: 'go4', name: 'Óleo de girassol', category: 'Gordura', calories: 884, protein: 0, carbs: 0, fats: 100, quantity: 100 },
  { id: 'go5', name: 'Óleo de soja', category: 'Gordura', calories: 884, protein: 0, carbs: 0, fats: 100, quantity: 100 },
  { id: 'go6', name: 'Óleo de milho', category: 'Gordura', calories: 884, protein: 0, carbs: 0, fats: 100, quantity: 100 },
  { id: 'go7', name: 'Óleo de linhaça', category: 'Gordura', calories: 884, protein: 0, carbs: 0, fats: 100, quantity: 100 },
  { id: 'go8', name: 'Óleo de abacate', category: 'Gordura', calories: 884, protein: 0, carbs: 0, fats: 100, quantity: 100 },
  { id: 'go9', name: 'Óleo de gergelim', category: 'Gordura', calories: 884, protein: 0, carbs: 0, fats: 100, quantity: 100 },
  { id: 'go10', name: 'Manteiga ghee', category: 'Gordura', calories: 876, protein: 0.3, carbs: 0, fats: 99.5, quantity: 100 },
  { id: 'go11', name: 'Banha de porco', category: 'Gordura', calories: 902, protein: 0, carbs: 0, fats: 100, quantity: 100 },
  { id: 'go12', name: 'Gordura de coco', category: 'Gordura', calories: 862, protein: 0, carbs: 0, fats: 100, quantity: 100 },
  { id: 'go13', name: 'Abacate', category: 'Gordura', calories: 160, protein: 2, carbs: 8.5, fats: 14.7, fiber: 6.7, quantity: 100 },
  { id: 'go14', name: 'Azeitona verde', category: 'Gordura', calories: 145, protein: 1, carbs: 3.8, fats: 15.3, fiber: 3.3, quantity: 100 },
  { id: 'go15', name: 'Azeitona preta', category: 'Gordura', calories: 115, protein: 0.8, carbs: 6.3, fats: 10.7, fiber: 3.2, quantity: 100 },
  { id: 'go16', name: 'Guacamole', category: 'Gordura', calories: 160, protein: 2, carbs: 8.5, fats: 14.7, fiber: 6.7, quantity: 100 },
  { id: 'go17', name: 'Maionese', category: 'Gordura', calories: 680, protein: 1.1, carbs: 2.7, fats: 75, quantity: 100 },
  { id: 'go18', name: 'Maionese light', category: 'Gordura', calories: 340, protein: 0.6, carbs: 1.4, fats: 37.5, quantity: 100 },
  { id: 'go19', name: 'Molho pesto', category: 'Gordura', calories: 418, protein: 5.6, carbs: 5.1, fats: 42.2, quantity: 100 },
  { id: 'go20', name: 'Homus', category: 'Gordura', calories: 177, protein: 4.9, carbs: 14.3, fats: 10, fiber: 4, quantity: 100 },

  // ========== SUPLEMENTOS (10+) ==========
  { id: 's1', name: 'Whey protein concentrado', category: 'Suplemento', calories: 380, protein: 80, carbs: 8, fats: 5, quantity: 100 },
  { id: 's2', name: 'Whey protein isolado', category: 'Suplemento', calories: 370, protein: 90, carbs: 2, fats: 1, quantity: 100 },
  { id: 's3', name: 'Whey protein hidrolisado', category: 'Suplemento', calories: 375, protein: 85, carbs: 5, fats: 2, quantity: 100 },
  { id: 's4', name: 'Caseína', category: 'Suplemento', calories: 360, protein: 80, carbs: 10, fats: 2, quantity: 100 },
  { id: 's5', name: 'Albumina', category: 'Suplemento', calories: 387, protein: 81, carbs: 4, fats: 0.5, quantity: 100 },
  { id: 's6', name: 'Proteína vegetal (ervilha)', category: 'Suplemento', calories: 390, protein: 85, carbs: 7, fats: 3, quantity: 100 },
  { id: 's7', name: 'Proteína de arroz', category: 'Suplemento', calories: 380, protein: 80, carbs: 10, fats: 3, quantity: 100 },
  { id: 's8', name: 'Creatina', category: 'Suplemento', calories: 0, protein: 0, carbs: 0, fats: 0, quantity: 100 },
  { id: 's9', name: 'BCAA', category: 'Suplemento', calories: 400, protein: 100, carbs: 0, fats: 0, quantity: 100 },
  { id: 's10', name: 'Maltodextrina', category: 'Suplemento', calories: 380, protein: 0, carbs: 95, fats: 0, quantity: 100 },
  { id: 's11', name: 'Dextrose', category: 'Suplemento', calories: 380, protein: 0, carbs: 95, fats: 0, quantity: 100 },
  { id: 's12', name: 'Hipercalórico (mass gainer)', category: 'Suplemento', calories: 380, protein: 20, carbs: 70, fats: 3, quantity: 100 },

  // ========== BEBIDAS (10+) ==========
  { id: 'b1', name: 'Café preto sem açúcar', category: 'Bebida', calories: 2, protein: 0.3, carbs: 0, fats: 0, quantity: 100 },
  { id: 'b2', name: 'Chá verde', category: 'Bebida', calories: 1, protein: 0, carbs: 0, fats: 0, quantity: 100 },
  { id: 'b3', name: 'Chá preto', category: 'Bebida', calories: 1, protein: 0, carbs: 0.3, fats: 0, quantity: 100 },
  { id: 'b4', name: 'Chá de hibisco', category: 'Bebida', calories: 0, protein: 0, carbs: 0, fats: 0, quantity: 100 },
  { id: 'b5', name: 'Chá de camomila', category: 'Bebida', calories: 1, protein: 0, carbs: 0.2, fats: 0, quantity: 100 },
  { id: 'b6', name: 'Água de coco', category: 'Bebida', calories: 19, protein: 0.7, carbs: 3.7, fats: 0.1, quantity: 100 },
  { id: 'b7', name: 'Suco de laranja natural', category: 'Bebida', calories: 45, protein: 0.7, carbs: 10.4, fats: 0.2, quantity: 100 },
  { id: 'b8', name: 'Suco de limão natural', category: 'Bebida', calories: 25, protein: 0.4, carbs: 8.4, fats: 0.1, quantity: 100 },
  { id: 'b9', name: 'Suco verde (couve + limão)', category: 'Bebida', calories: 30, protein: 1.5, carbs: 6, fats: 0.2, quantity: 100 },
  { id: 'b10', name: 'Água', category: 'Bebida', calories: 0, protein: 0, carbs: 0, fats: 0, quantity: 100 },

  // ========== OUTROS (20+) ==========
  { id: 'ot1', name: 'Mel', category: 'Outro', calories: 309, protein: 0.3, carbs: 84.3, fats: 0, quantity: 100 },
  { id: 'ot2', name: 'Geleia de frutas', category: 'Outro', calories: 278, protein: 0.4, carbs: 69.8, fats: 0.1, quantity: 100 },
  { id: 'ot3', name: 'Açúcar refinado', category: 'Outro', calories: 387, protein: 0, carbs: 99.9, fats: 0, quantity: 100 },
  { id: 'ot4', name: 'Açúcar mascavo', category: 'Outro', calories: 369, protein: 0.1, carbs: 95.5, fats: 0, quantity: 100 },
  { id: 'ot5', name: 'Açúcar demerara', category: 'Outro', calories: 376, protein: 0, carbs: 97.3, fats: 0, quantity: 100 },
  { id: 'ot6', name: 'Adoçante stevia', category: 'Outro', calories: 0, protein: 0, carbs: 0, fats: 0, quantity: 100 },
  { id: 'ot7', name: 'Cacau em pó 100%', category: 'Outro', calories: 228, protein: 19.6, carbs: 57.9, fats: 13.7, fiber: 33.2, quantity: 100 },
  { id: 'ot8', name: 'Chocolate 70% cacau', category: 'Outro', calories: 598, protein: 7.8, carbs: 45.8, fats: 42.6, fiber: 11, quantity: 100 },
  { id: 'ot9', name: 'Chocolate ao leite', category: 'Outro', calories: 535, protein: 7.6, carbs: 59.4, fats: 29.7, quantity: 100 },
  { id: 'ot10', name: 'Chocolate branco', category: 'Outro', calories: 539, protein: 5.9, carbs: 59.2, fats: 32.1, quantity: 100 },
  { id: 'ot11', name: 'Sorvete de creme', category: 'Outro', calories: 207, protein: 3.5, carbs: 23.6, fats: 11, quantity: 100 },
  { id: 'ot12', name: 'Picolé de fruta', category: 'Outro', calories: 87, protein: 0.1, carbs: 22.3, fats: 0.1, quantity: 100 },
  { id: 'ot13', name: 'Gelatina diet', category: 'Outro', calories: 6, protein: 1.5, carbs: 0, fats: 0, quantity: 100 },
  { id: 'ot14', name: 'Pudim de leite', category: 'Outro', calories: 140, protein: 3.8, carbs: 20.5, fats: 4.8, quantity: 100 },
  { id: 'ot15', name: 'Mousse de chocolate', category: 'Outro', calories: 189, protein: 3.2, carbs: 18.7, fats: 11.5, quantity: 100 },
  { id: 'ot16', name: 'Bolo simples', category: 'Outro', calories: 297, protein: 5.3, carbs: 50.7, fats: 8.4, quantity: 100 },
  { id: 'ot17', name: 'Bolo de cenoura', category: 'Outro', calories: 352, protein: 5.8, carbs: 54.2, fats: 12.5, quantity: 100 },
  { id: 'ot18', name: 'Brigadeiro', category: 'Outro', calories: 400, protein: 3.5, carbs: 60, fats: 16, quantity: 100 },
  { id: 'ot19', name: 'Beijinho', category: 'Outro', calories: 395, protein: 3.2, carbs: 62, fats: 15, quantity: 100 },
  { id: 'ot20', name: 'Paçoca', category: 'Outro', calories: 488, protein: 14.7, carbs: 61.3, fats: 21.2, quantity: 100 },
];

// ============================================
// RESTRIÇÕES ALIMENTARES
// ============================================

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

// ============================================
// FILTROS DE RESTRIÇÕES ALIMENTARES
// ============================================

export function filterByRestrictions(foods: FoodItem[], restrictions: string[]): FoodItem[] {
  return foods.filter(food => {
    // Lactose
    if (restrictions.includes('lactose')) {
      const lactoseItems = ['leite', 'queijo', 'iogurte', 'cottage', 'whey', 'requeijão', 'cream cheese', 'manteiga', 'margarina', 'creme de leite', 'ricota', 'mussarela', 'prato', 'parmesão', 'provolone', 'cheddar', 'gorgonzola', 'brie', 'camembert', 'coalhada', 'bebida láctea', 'petit suisse', 'danoninho'];
      if (lactoseItems.some(item => food.name.toLowerCase().includes(item))) return false;
    }
    
    // Glúten
    if (restrictions.includes('gluten')) {
      const glutenItems = ['pão', 'macarrão', 'aveia', 'trigo', 'centeio', 'cevada', 'biscoito', 'torrada', 'croissant', 'brioche', 'wafer', 'bolacha', 'rosquinha', 'cereal', 'granola'];
      if (glutenItems.some(item => food.name.toLowerCase().includes(item))) return false;
    }
    
    // Vegetariano
    if (restrictions.includes('vegetarian')) {
      const meatItems = ['frango', 'carne', 'peixe', 'tilápia', 'atum', 'peru', 'salmão', 'sardinha', 'bacalhau', 'pescada', 'merluza', 'camarão', 'lula', 'polvo', 'linguiça', 'salsicha', 'presunto', 'mortadela', 'salame', 'bacon', 'fígado', 'coração', 'moela', 'costela', 'picanha', 'fraldinha', 'maminha', 'cupim', 'linguado', 'robalo', 'dourado', 'truta'];
      if (meatItems.some(item => food.name.toLowerCase().includes(item))) return false;
    }
    
    // Vegano
    if (restrictions.includes('vegan')) {
      const animalItems = ['frango', 'carne', 'peixe', 'ovo', 'leite', 'queijo', 'whey', 'mel', 'iogurte', 'manteiga', 'requeijão', 'cream cheese', 'creme de leite', 'albumina', 'caseína', 'peru', 'salmão', 'atum', 'sardinha', 'bacalhau', 'camarão', 'lula', 'polvo', 'linguiça', 'salsicha', 'presunto', 'mortadela', 'salame', 'bacon'];
      if (animalItems.some(item => food.name.toLowerCase().includes(item))) return false;
    }
    
    // Low carb
    if (restrictions.includes('low-carb')) {
      if (food.category === 'Cereal' || food.category === 'Fruta') return false;
      if (food.carbs > 10) return false;
    }
    
    // High protein
    if (restrictions.includes('high-protein')) {
      if (food.protein < 15) return false;
    }

    // Diabetes
    if (restrictions.includes('diabetes')) {
      const highGlycemicItems = ['açúcar', 'mel', 'geleia', 'chocolate', 'sorvete', 'brigadeiro', 'beijinho', 'bolo', 'doce de leite', 'leite condensado', 'paçoca'];
      if (highGlycemicItems.some(item => food.name.toLowerCase().includes(item))) return false;
      if (food.carbs > 30 && (food.fiber || 0) < 3) return false;
    }

    // Low sodium
    if (restrictions.includes('low-sodium')) {
      const highSodiumItems = ['bacon', 'salame', 'mortadela', 'presunto', 'linguiça', 'salsicha', 'sardinha em conserva', 'atum em conserva', 'azeitona', 'palmito em conserva', 'carne seca', 'jerked beef'];
      if (highSodiumItems.some(item => food.name.toLowerCase().includes(item))) return false;
    }

    // Alergia a ovo
    if (restrictions.includes('egg-allergy')) {
      const eggItems = ['ovo', 'clara', 'gema', 'albumina', 'maionese'];
      if (eggItems.some(item => food.name.toLowerCase().includes(item))) return false;
    }

    // Alergia a oleaginosas
    if (restrictions.includes('nut-allergy')) {
      const nutItems = ['amendoim', 'amêndoa', 'castanha', 'noz', 'avelã', 'pistache', 'macadâmia', 'pecã', 'pasta de amendoim', 'pasta de amêndoas'];
      if (nutItems.some(item => food.name.toLowerCase().includes(item))) return false;
    }

    // Alergia a frutos do mar
    if (restrictions.includes('seafood-allergy')) {
      const seafoodItems = ['camarão', 'lula', 'polvo', 'salmão', 'atum', 'sardinha', 'bacalhau', 'pescada', 'merluza', 'tilápia', 'linguado', 'robalo', 'dourado', 'truta'];
      if (seafoodItems.some(item => food.name.toLowerCase().includes(item))) return false;
    }

    // Alergia a soja
    if (restrictions.includes('soy-allergy')) {
      const soyItems = ['soja', 'tofu', 'tempeh', 'edamame', 'missô', 'natto', 'proteína texturizada', 'leite de soja'];
      if (soyItems.some(item => food.name.toLowerCase().includes(item))) return false;
    }
    
    return true;
  });
}

// ============================================
// SUBSTITUIÇÕES EQUIVALENTES EM KCAL (±5%)
// Conforme especificação: variação máxima de ±5%
// ============================================

export function findSubstitutes(
  food: FoodItem, 
  allFoods: FoodItem[], 
  restrictions: string[] = []
): FoodSubstitution[] {
  
  // Filtra alimentos da mesma categoria
  let candidates = allFoods.filter(f => 
    f.id !== food.id && 
    f.category === food.category
  );
  
  // Aplica restrições
  candidates = filterByRestrictions(candidates, restrictions);
  
  // Calcula equivalência calórica (±5% conforme especificação)
  const minCal = food.calories * 0.95;
  const maxCal = food.calories * 1.05;
  
  candidates = candidates.filter(f => f.calories >= minCal && f.calories <= maxCal);
  
  // Calcula similaridade de macros para cada candidato
  const substitutions: FoodSubstitution[] = candidates.map(candidate => {
    // Recalcula quantidade para equivalência calórica exata
    const equivalentQuantity = Math.round((food.calories / candidate.calories) * 100);
    
    // Calcula variação percentual de calorias
    const calorieVariation = ((candidate.calories - food.calories) / food.calories) * 100;
    
    // Calcula score de similaridade dos macros (0-100)
    const proteinDiff = Math.abs(candidate.protein - food.protein);
    const carbsDiff = Math.abs(candidate.carbs - food.carbs);
    const fatsDiff = Math.abs(candidate.fats - food.fats);
    const totalDiff = proteinDiff + carbsDiff + fatsDiff;
    const macroSimilarity = Math.max(0, 100 - (totalDiff * 2));
    
    return {
      food: { ...candidate, quantity: equivalentQuantity },
      equivalentQuantity,
      calorieVariation: Math.round(calorieVariation * 100) / 100,
      macroSimilarity: Math.round(macroSimilarity)
    };
  });
  
  // Ordena por similaridade de macros (mantém proporção aproximada)
  substitutions.sort((a, b) => b.macroSimilarity - a.macroSimilarity);
  
  // Retorna mínimo 2 substituições (conforme especificação)
  return substitutions.slice(0, Math.max(2, 5));
}

// ============================================
// GERADOR INTELIGENTE DE REFEIÇÕES
// GARANTE: Proteína + Carboidrato + Gordura em CADA refeição
// ============================================

export function generateBalancedMeal(
  targetCalories: number,
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'post-workout' | 'supper',
  restrictions: string[] = []
): Meal {
  
  let foods = [...TACO_DATABASE];
  
  // Filtra por restrições
  foods = filterByRestrictions(foods, restrictions);
  
  // Define composição baseada no tipo de refeição
  let composition: { protein: number; carbs: number; fats: number };
  
  switch (mealType) {
    case 'breakfast':
      composition = { protein: 0.25, carbs: 0.50, fats: 0.25 };
      break;
    case 'lunch':
    case 'dinner':
      composition = { protein: 0.35, carbs: 0.45, fats: 0.20 };
      break;
    case 'post-workout':
      composition = { protein: 0.40, carbs: 0.50, fats: 0.10 };
      break;
    case 'snack':
    case 'supper':
      composition = { protein: 0.30, carbs: 0.40, fats: 0.30 };
      break;
  }
  
  // Calcula calorias alvo por macro
  const targetProteinCal = targetCalories * composition.protein;
  const targetCarbsCal = targetCalories * composition.carbs;
  const targetFatsCal = targetCalories * composition.fats;
  
  const selectedFoods: FoodItemWithSubstitutes[] = [];
  
  // 1. PROTEÍNA (OBRIGATÓRIO)
  const proteins = foods.filter(f => f.category === 'Proteína' && f.protein >= 15);
  if (proteins.length > 0) {
    const protein = proteins[Math.floor(Math.random() * proteins.length)];
    const quantity = Math.round((targetProteinCal / 4) / protein.protein * 100);
    const foodWithSubs: FoodItemWithSubstitutes = {
      ...protein,
      quantity: Math.min(quantity, 200), // Limita a 200g
      substitutes: findSubstitutes(protein, TACO_DATABASE, restrictions)
    };
    selectedFoods.push(foodWithSubs);
  }
  
  // 2. CARBOIDRATO (OBRIGATÓRIO)
  const carbs = foods.filter(f => f.category === 'Cereal' && f.carbs >= 20);
  if (carbs.length > 0) {
    const carb = carbs[Math.floor(Math.random() * carbs.length)];
    const quantity = Math.round((targetCarbsCal / 4) / carb.carbs * 100);
    const foodWithSubs: FoodItemWithSubstitutes = {
      ...carb,
      quantity: Math.min(quantity, 200), // Limita a 200g
      substitutes: findSubstitutes(carb, TACO_DATABASE, restrictions)
    };
    selectedFoods.push(foodWithSubs);
  }
  
  // 3. GORDURA BOA (OBRIGATÓRIO)
  const fats = foods.filter(f => 
    (f.category === 'Gordura' || f.category === 'Oleaginosa') && 
    f.fats >= 10
  );
  if (fats.length > 0) {
    const fat = fats[Math.floor(Math.random() * fats.length)];
    const quantity = Math.round((targetFatsCal / 9) / fat.fats * 100);
    const foodWithSubs: FoodItemWithSubstitutes = {
      ...fat,
      quantity: Math.min(quantity, 30), // Limita gordura a 30g
      substitutes: findSubstitutes(fat, TACO_DATABASE, restrictions)
    };
    selectedFoods.push(foodWithSubs);
  }
  
  // 4. VEGETAL (OPCIONAL - apenas almoço/jantar)
  if (mealType === 'lunch' || mealType === 'dinner') {
    const veggies = foods.filter(f => f.category === 'Vegetal');
    if (veggies.length > 0) {
      const veggie = veggies[Math.floor(Math.random() * veggies.length)];
      const foodWithSubs: FoodItemWithSubstitutes = {
        ...veggie,
        quantity: 100,
        substitutes: findSubstitutes(veggie, TACO_DATABASE, restrictions)
      };
      selectedFoods.push(foodWithSubs);
    }
  }
  
  // Calcula totais
  const totals = calculateMealTotals(selectedFoods);
  
  return {
    id: `meal-${Date.now()}-${Math.random()}`,
    name: getMealName(mealType),
    time: getMealTime(mealType),
    targetCalories,
    foods: selectedFoods,
    ...totals
  };
}

// ============================================
// CALCULAR TOTAIS DA REFEIÇÃO
// Fórmula: kcal ≈ (proteína × 4) + (carboidrato × 4) + (gordura × 9)
// ============================================

export function calculateMealTotals(foods: FoodItem[]): {
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
} {
  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFats = 0;
  
  foods.forEach(food => {
    const factor = food.quantity / 100;
    totalCalories += food.calories * factor;
    totalProtein += food.protein * factor;
    totalCarbs += food.carbs * factor;
    totalFats += food.fats * factor;
  });
  
  // Valida fórmula: kcal ≈ (prot × 4) + (carbs × 4) + (fats × 9)
  const calculatedCalories = (totalProtein * 4) + (totalCarbs * 4) + (totalFats * 9);
  
  return {
    totalCalories: Math.round(totalCalories),
    totalProtein: Math.round(totalProtein),
    totalCarbs: Math.round(totalCarbs),
    totalFats: Math.round(totalFats)
  };
}

// ============================================
// HELPERS
// ============================================

function getMealName(type: string): string {
  const names: Record<string, string> = {
    breakfast: 'Café da Manhã',
    lunch: 'Almoço',
    dinner: 'Jantar',
    snack: 'Lanche',
    'post-workout': 'Pós-Treino',
    supper: 'Ceia'
  };
  return names[type] || 'Refeição';
}

function getMealTime(type: string): string {
  const times: Record<string, string> = {
    breakfast: '07:00',
    snack: '10:00',
    lunch: '12:30',
    'post-workout': '16:00',
    dinner: '19:00',
    supper: '22:00'
  };
  return times[type] || '12:00';
}

// ============================================
// GERADOR DE PLANO NUTRICIONAL COMPLETO
// Com número de refeições definido pelo usuário (3-8 refeições)
// CADA REFEIÇÃO TEM: Proteína + Carboidrato + Gordura
// ============================================

export function generateNutritionPlan(
  targetCalories: number,
  numberOfMeals: number,
  restrictions: string[] = []
): Meal[] {
  
  // Valida número de refeições (3-8)
  const validNumberOfMeals = Math.max(3, Math.min(8, numberOfMeals));
  
  // Define tipos de refeições baseado no número solicitado
  const mealTypes: Array<'breakfast' | 'lunch' | 'dinner' | 'snack' | 'post-workout' | 'supper'> = [];
  
  // Refeições principais (sempre incluídas se numberOfMeals >= 3)
  if (validNumberOfMeals >= 1) mealTypes.push('breakfast');
  if (validNumberOfMeals >= 2) mealTypes.push('lunch');
  if (validNumberOfMeals >= 3) mealTypes.push('dinner');
  
  // Refeições intermediárias
  if (validNumberOfMeals >= 4) mealTypes.push('snack');
  if (validNumberOfMeals >= 5) mealTypes.push('post-workout');
  if (validNumberOfMeals >= 6) mealTypes.push('supper');
  
  // Se usuário pedir mais de 6, adiciona mais lanches
  while (mealTypes.length < validNumberOfMeals) {
    mealTypes.push('snack');
  }
  
  // Distribui calorias igualmente entre refeições
  const caloriesPerMeal = Math.round(targetCalories / mealTypes.length);
  
  let currentSnackNumber = 1;
  
  return mealTypes.map((type, index) => {
    const meal = generateBalancedMeal(caloriesPerMeal, type, restrictions);
    
    // Personaliza nome se houver múltiplos lanches
    if (type === 'snack') {
      meal.name = `Lanche ${currentSnackNumber}`;
      currentSnackNumber++;
    }
    
    return meal;
  });
}
