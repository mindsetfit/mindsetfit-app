'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Apple, 
  ChefHat, 
  Sparkles, 
  TrendingUp,
  Utensils,
  Clock,
  Flame
} from 'lucide-react';
import { toast } from 'sonner';

interface MacroNutrients {
  proteina: number;
  carboidrato: number;
  gordura: number;
  calorias: number;
}

interface Receita {
  id: string;
  nome: string;
  categoria: 'cafe' | 'almoco' | 'jantar' | 'lanche';
  tempoPreparo: number;
  calorias: number;
  proteina: number;
  carboidrato: number;
  gordura: number;
  ingredientes: { item: string; quantidade: string }[];
  modoPreparo: string[];
  dificuldade: 'facil' | 'medio' | 'dificil';
}

export default function NutritionAI() {
  const [currentTab, setCurrentTab] = useState('calculator');
  const [userData, setUserData] = useState({
    peso: 75,
    altura: 175,
    idade: 30,
    sexo: 'masculino' as 'masculino' | 'feminino',
    nivelAtividade: 'moderado' as 'sedentario' | 'leve' | 'moderado' | 'intenso' | 'muito-intenso',
    objetivo: 'manter' as 'perder' | 'manter' | 'ganhar'
  });
  const [tmb, setTmb] = useState<number>(0);
  const [macros, setMacros] = useState<MacroNutrients | null>(null);

  // Banco de receitas
  const receitas: Receita[] = [
    {
      id: '1',
      nome: 'Omelete de Claras com Aveia',
      categoria: 'cafe',
      tempoPreparo: 10,
      calorias: 320,
      proteina: 28,
      carboidrato: 35,
      gordura: 6,
      ingredientes: [
        { item: 'Claras de ovo', quantidade: '6 unidades' },
        { item: 'Aveia em flocos', quantidade: '40g' },
        { item: 'Tomate', quantidade: '1 unidade' },
        { item: 'Cebola', quantidade: '1/4 unidade' },
        { item: 'Sal e temperos', quantidade: 'a gosto' }
      ],
      modoPreparo: [
        'Bata as claras com um garfo',
        'Adicione a aveia e misture bem',
        'Pique o tomate e a cebola',
        'Aqueça uma frigideira antiaderente',
        'Despeje a mistura e adicione tomate e cebola',
        'Cozinhe por 3-4 minutos de cada lado'
      ],
      dificuldade: 'facil'
    },
    {
      id: '2',
      nome: 'Frango Grelhado com Batata Doce',
      categoria: 'almoco',
      tempoPreparo: 25,
      calorias: 450,
      proteina: 45,
      carboidrato: 48,
      gordura: 8,
      ingredientes: [
        { item: 'Peito de frango', quantidade: '150g' },
        { item: 'Batata doce', quantidade: '200g' },
        { item: 'Brócolis', quantidade: '100g' },
        { item: 'Azeite', quantidade: '1 colher de chá' },
        { item: 'Alho e temperos', quantidade: 'a gosto' }
      ],
      modoPreparo: [
        'Tempere o frango com alho, sal e pimenta',
        'Grelhe o frango por 6-7 minutos de cada lado',
        'Cozinhe a batata doce no vapor por 20 minutos',
        'Refogue o brócolis com alho',
        'Monte o prato e regue com azeite'
      ],
      dificuldade: 'facil'
    },
    {
      id: '3',
      nome: 'Salmão com Quinoa e Aspargos',
      categoria: 'jantar',
      tempoPreparo: 30,
      calorias: 520,
      proteina: 38,
      carboidrato: 42,
      gordura: 22,
      ingredientes: [
        { item: 'Filé de salmão', quantidade: '150g' },
        { item: 'Quinoa', quantidade: '60g (seca)' },
        { item: 'Aspargos', quantidade: '150g' },
        { item: 'Limão', quantidade: '1/2 unidade' },
        { item: 'Azeite', quantidade: '1 colher de sopa' }
      ],
      modoPreparo: [
        'Cozinhe a quinoa conforme instruções da embalagem',
        'Tempere o salmão com limão, sal e pimenta',
        'Grelhe o salmão por 4-5 minutos de cada lado',
        'Refogue os aspargos com alho',
        'Monte o prato e finalize com azeite'
      ],
      dificuldade: 'medio'
    },
    {
      id: '4',
      nome: 'Shake Proteico de Banana',
      categoria: 'lanche',
      tempoPreparo: 5,
      calorias: 280,
      proteina: 30,
      carboidrato: 32,
      gordura: 4,
      ingredientes: [
        { item: 'Whey protein', quantidade: '30g' },
        { item: 'Banana', quantidade: '1 unidade' },
        { item: 'Aveia', quantidade: '20g' },
        { item: 'Leite desnatado', quantidade: '200ml' },
        { item: 'Canela', quantidade: 'a gosto' }
      ],
      modoPreparo: [
        'Coloque todos os ingredientes no liquidificador',
        'Bata por 30 segundos até ficar homogêneo',
        'Sirva imediatamente'
      ],
      dificuldade: 'facil'
    },
    {
      id: '5',
      nome: 'Wrap de Frango com Salada',
      categoria: 'almoco',
      tempoPreparo: 15,
      calorias: 380,
      proteina: 35,
      carboidrato: 42,
      gordura: 9,
      ingredientes: [
        { item: 'Tortilha integral', quantidade: '1 unidade' },
        { item: 'Frango desfiado', quantidade: '100g' },
        { item: 'Alface', quantidade: '50g' },
        { item: 'Tomate', quantidade: '1 unidade' },
        { item: 'Iogurte natural', quantidade: '2 colheres de sopa' }
      ],
      modoPreparo: [
        'Aqueça a tortilha levemente',
        'Espalhe o iogurte na tortilha',
        'Adicione o frango desfiado',
        'Coloque alface e tomate picado',
        'Enrole e corte ao meio'
      ],
      dificuldade: 'facil'
    },
    {
      id: '6',
      nome: 'Panqueca de Banana e Aveia',
      categoria: 'cafe',
      tempoPreparo: 12,
      calorias: 290,
      proteina: 18,
      carboidrato: 45,
      gordura: 5,
      ingredientes: [
        { item: 'Banana madura', quantidade: '1 unidade' },
        { item: 'Ovos', quantidade: '2 unidades' },
        { item: 'Aveia', quantidade: '40g' },
        { item: 'Canela', quantidade: '1 colher de chá' },
        { item: 'Mel', quantidade: '1 colher de chá' }
      ],
      modoPreparo: [
        'Amasse a banana com um garfo',
        'Adicione os ovos e misture',
        'Acrescente a aveia e canela',
        'Aqueça frigideira antiaderente',
        'Faça panquecas pequenas',
        'Sirva com mel'
      ],
      dificuldade: 'facil'
    },
    {
      id: '7',
      nome: 'Carne Moída com Arroz Integral',
      categoria: 'almoco',
      tempoPreparo: 35,
      calorias: 480,
      proteina: 42,
      carboidrato: 52,
      gordura: 12,
      ingredientes: [
        { item: 'Carne moída magra', quantidade: '150g' },
        { item: 'Arroz integral', quantidade: '60g (seco)' },
        { item: 'Feijão preto', quantidade: '80g' },
        { item: 'Cebola e alho', quantidade: 'a gosto' },
        { item: 'Tomate', quantidade: '1 unidade' }
      ],
      modoPreparo: [
        'Cozinhe o arroz integral',
        'Refogue cebola e alho',
        'Adicione a carne moída',
        'Acrescente tomate picado',
        'Tempere e cozinhe por 15 minutos',
        'Sirva com arroz e feijão'
      ],
      dificuldade: 'medio'
    },
    {
      id: '8',
      nome: 'Iogurte com Granola e Frutas',
      categoria: 'lanche',
      tempoPreparo: 5,
      calorias: 250,
      proteina: 15,
      carboidrato: 38,
      gordura: 6,
      ingredientes: [
        { item: 'Iogurte grego natural', quantidade: '150g' },
        { item: 'Granola', quantidade: '30g' },
        { item: 'Morango', quantidade: '5 unidades' },
        { item: 'Banana', quantidade: '1/2 unidade' },
        { item: 'Mel', quantidade: '1 colher de chá' }
      ],
      modoPreparo: [
        'Coloque o iogurte em uma tigela',
        'Adicione a granola',
        'Corte as frutas',
        'Distribua sobre o iogurte',
        'Regue com mel'
      ],
      dificuldade: 'facil'
    },
    {
      id: '9',
      nome: 'Tilápia ao Forno com Legumes',
      categoria: 'jantar',
      tempoPreparo: 30,
      calorias: 380,
      proteina: 40,
      carboidrato: 28,
      gordura: 10,
      ingredientes: [
        { item: 'Filé de tilápia', quantidade: '180g' },
        { item: 'Abobrinha', quantidade: '100g' },
        { item: 'Cenoura', quantidade: '80g' },
        { item: 'Batata', quantidade: '100g' },
        { item: 'Azeite e limão', quantidade: 'a gosto' }
      ],
      modoPreparo: [
        'Corte os legumes em cubos',
        'Tempere o peixe com limão',
        'Disponha tudo em uma assadeira',
        'Regue com azeite',
        'Asse a 180°C por 25 minutos'
      ],
      dificuldade: 'facil'
    },
    {
      id: '10',
      nome: 'Tapioca com Frango',
      categoria: 'lanche',
      tempoPreparo: 10,
      calorias: 310,
      proteina: 28,
      carboidrato: 38,
      gordura: 6,
      ingredientes: [
        { item: 'Goma de tapioca', quantidade: '50g' },
        { item: 'Frango desfiado', quantidade: '80g' },
        { item: 'Queijo cottage', quantidade: '30g' },
        { item: 'Tomate', quantidade: '1/2 unidade' },
        { item: 'Orégano', quantidade: 'a gosto' }
      ],
      modoPreparo: [
        'Aqueça frigideira antiaderente',
        'Espalhe a goma de tapioca',
        'Quando firmar, adicione o recheio',
        'Dobre ao meio',
        'Sirva quente'
      ],
      dificuldade: 'facil'
    }
  ];

  const calcularTMB = () => {
    let tmbCalculado = 0;
    
    // Fórmula de Harris-Benedict
    if (userData.sexo === 'masculino') {
      tmbCalculado = 88.362 + (13.397 * userData.peso) + (4.799 * userData.altura) - (5.677 * userData.idade);
    } else {
      tmbCalculado = 447.593 + (9.247 * userData.peso) + (3.098 * userData.altura) - (4.330 * userData.idade);
    }
    
    // Fator de atividade
    const fatoresAtividade = {
      'sedentario': 1.2,
      'leve': 1.375,
      'moderado': 1.55,
      'intenso': 1.725,
      'muito-intenso': 1.9
    };
    
    const caloriasTotais = tmbCalculado * fatoresAtividade[userData.nivelAtividade];
    
    // Ajustar baseado no objetivo
    let caloriasFinais = caloriasTotais;
    if (userData.objetivo === 'perder') {
      caloriasFinais = caloriasTotais * 0.85; // Déficit de 15%
    } else if (userData.objetivo === 'ganhar') {
      caloriasFinais = caloriasTotais * 1.15; // Superávit de 15%
    }
    
    setTmb(Math.round(caloriasFinais));
    
    // Calcular macros
    const proteinaPorKg = userData.objetivo === 'ganhar' ? 2.2 : userData.objetivo === 'perder' ? 2.5 : 2.0;
    const proteina = Math.round(userData.peso * proteinaPorKg);
    const gordura = Math.round((caloriasFinais * 0.25) / 9);
    const carboidrato = Math.round((caloriasFinais - (proteina * 4) - (gordura * 9)) / 4);
    
    setMacros({
      proteina,
      carboidrato,
      gordura,
      calorias: Math.round(caloriasFinais)
    });
    
    toast.success('Cálculo realizado com sucesso!');
  };

  const filtrarReceitas = (categoria: 'cafe' | 'almoco' | 'jantar' | 'lanche') => {
    return receitas.filter(r => r.categoria === categoria);
  };

  return (
    <div className="space-y-6">
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
          <TabsTrigger value="calculator" className="data-[state=active]:bg-cyan-500/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Calculadora IA
          </TabsTrigger>
          <TabsTrigger value="diet" className="data-[state=active]:bg-cyan-500/20">
            <Apple className="w-4 h-4 mr-2" />
            Minha Dieta
          </TabsTrigger>
          <TabsTrigger value="recipes" className="data-[state=active]:bg-cyan-500/20">
            <ChefHat className="w-4 h-4 mr-2" />
            Receitas
          </TabsTrigger>
        </TabsList>

        {/* TAB: CALCULADORA */}
        <TabsContent value="calculator" className="space-y-6">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                Calculadora Inteligente de Nutrição
              </CardTitle>
              <CardDescription>
                Informe seus dados para calcular TMB e divisão de macronutrientes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-slate-200">Peso (kg)</Label>
                  <Input
                    type="number"
                    value={userData.peso}
                    onChange={(e) => setUserData({ ...userData, peso: Number(e.target.value) })}
                    className="bg-slate-800/50 border-slate-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-200">Altura (cm)</Label>
                  <Input
                    type="number"
                    value={userData.altura}
                    onChange={(e) => setUserData({ ...userData, altura: Number(e.target.value) })}
                    className="bg-slate-800/50 border-slate-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-200">Idade</Label>
                  <Input
                    type="number"
                    value={userData.idade}
                    onChange={(e) => setUserData({ ...userData, idade: Number(e.target.value) })}
                    className="bg-slate-800/50 border-slate-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-200">Sexo</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={userData.sexo === 'masculino' ? 'default' : 'outline'}
                      className={userData.sexo === 'masculino' ? 'bg-cyan-500' : 'border-slate-700'}
                      onClick={() => setUserData({ ...userData, sexo: 'masculino' })}
                    >
                      Masculino
                    </Button>
                    <Button
                      variant={userData.sexo === 'feminino' ? 'default' : 'outline'}
                      className={userData.sexo === 'feminino' ? 'bg-cyan-500' : 'border-slate-700'}
                      onClick={() => setUserData({ ...userData, sexo: 'feminino' })}
                    >
                      Feminino
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-200">Nível de Atividade</Label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {[
                    { value: 'sedentario', label: 'Sedentário' },
                    { value: 'leve', label: 'Leve' },
                    { value: 'moderado', label: 'Moderado' },
                    { value: 'intenso', label: 'Intenso' },
                    { value: 'muito-intenso', label: 'Muito Intenso' }
                  ].map((nivel) => (
                    <Button
                      key={nivel.value}
                      variant={userData.nivelAtividade === nivel.value ? 'default' : 'outline'}
                      className={userData.nivelAtividade === nivel.value ? 'bg-cyan-500' : 'border-slate-700 text-slate-300'}
                      onClick={() => setUserData({ ...userData, nivelAtividade: nivel.value as any })}
                    >
                      {nivel.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-200">Objetivo</Label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'perder', label: 'Perder Peso' },
                    { value: 'manter', label: 'Manter' },
                    { value: 'ganhar', label: 'Ganhar Massa' }
                  ].map((obj) => (
                    <Button
                      key={obj.value}
                      variant={userData.objetivo === obj.value ? 'default' : 'outline'}
                      className={userData.objetivo === obj.value ? 'bg-cyan-500' : 'border-slate-700 text-slate-300'}
                      onClick={() => setUserData({ ...userData, objetivo: obj.value as any })}
                    >
                      {obj.label}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                onClick={calcularTMB}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-6"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Calcular com IA
              </Button>
            </CardContent>
          </Card>

          {/* Resultados */}
          {macros && (
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                  Seus Resultados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <p className="text-slate-400 text-sm mb-1">TMB Diário</p>
                    <p className="text-2xl font-bold text-white">{tmb}</p>
                    <p className="text-cyan-400 text-sm">calorias</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <p className="text-slate-400 text-sm mb-1">Proteína</p>
                    <p className="text-2xl font-bold text-white">{macros.proteina}g</p>
                    <p className="text-blue-400 text-sm">{Math.round((macros.proteina * 4 / macros.calorias) * 100)}%</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <p className="text-slate-400 text-sm mb-1">Carboidrato</p>
                    <p className="text-2xl font-bold text-white">{macros.carboidrato}g</p>
                    <p className="text-purple-400 text-sm">{Math.round((macros.carboidrato * 4 / macros.calorias) * 100)}%</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <p className="text-slate-400 text-sm mb-1">Gordura</p>
                    <p className="text-2xl font-bold text-white">{macros.gordura}g</p>
                    <p className="text-orange-400 text-sm">{Math.round((macros.gordura * 9 / macros.calorias) * 100)}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* TAB: MINHA DIETA */}
        <TabsContent value="diet" className="space-y-6">
          {macros ? (
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Seu Plano Nutricional</CardTitle>
                <CardDescription>
                  Baseado no seu objetivo: {userData.objetivo === 'perder' ? 'Perder Peso' : userData.objetivo === 'ganhar' ? 'Ganhar Massa' : 'Manter Peso'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-6 rounded-xl border border-cyan-500/30">
                  <h3 className="text-xl font-bold text-white mb-4">Meta Diária</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-slate-400 text-sm">Calorias</p>
                      <p className="text-2xl font-bold text-cyan-400">{macros.calorias}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Proteína</p>
                      <p className="text-2xl font-bold text-blue-400">{macros.proteina}g</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Carboidrato</p>
                      <p className="text-2xl font-bold text-purple-400">{macros.carboidrato}g</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Gordura</p>
                      <p className="text-2xl font-bold text-orange-400">{macros.gordura}g</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Dicas Personalizadas</h4>
                  <div className="space-y-2">
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                      <p className="text-slate-300">
                        💧 Beba pelo menos {Math.round(userData.peso * 35)}ml de água por dia
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                      <p className="text-slate-300">
                        🍽️ Divida suas refeições em 5-6 porções ao longo do dia
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                      <p className="text-slate-300">
                        ⏰ Faça sua última refeição 2-3 horas antes de dormir
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-slate-900/50 border-slate-800">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Apple className="w-16 h-16 text-slate-600 mb-4" />
                <p className="text-slate-400 text-center mb-4">
                  Calcule suas necessidades nutricionais primeiro
                </p>
                <Button
                  onClick={() => setCurrentTab('calculator')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600"
                >
                  Ir para Calculadora
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* TAB: RECEITAS */}
        <TabsContent value="recipes" className="space-y-6">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <ChefHat className="w-6 h-6 text-cyan-400" />
                Receitas Saudáveis
              </CardTitle>
              <CardDescription>
                Receitas com informações nutricionais completas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="cafe" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
                  <TabsTrigger value="cafe">Café da Manhã</TabsTrigger>
                  <TabsTrigger value="almoco">Almoço</TabsTrigger>
                  <TabsTrigger value="jantar">Jantar</TabsTrigger>
                  <TabsTrigger value="lanche">Lanches</TabsTrigger>
                </TabsList>

                {['cafe', 'almoco', 'jantar', 'lanche'].map((categoria) => (
                  <TabsContent key={categoria} value={categoria} className="space-y-4 mt-6">
                    {filtrarReceitas(categoria as any).map((receita) => (
                      <Card key={receita.id} className="bg-slate-800/50 border-slate-700">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg text-white mb-2">
                                {receita.nome}
                              </CardTitle>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {receita.tempoPreparo} min
                                </Badge>
                                <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                                  <Flame className="w-3 h-3 mr-1" />
                                  {receita.calorias} kcal
                                </Badge>
                                <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                                  P: {receita.proteina}g
                                </Badge>
                                <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                                  C: {receita.carboidrato}g
                                </Badge>
                                <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
                                  G: {receita.gordura}g
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-cyan-400 mb-2">Ingredientes:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                              {receita.ingredientes.map((ing, i) => (
                                <li key={i}>
                                  {ing.item} - {ing.quantidade}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-blue-400 mb-2">Modo de Preparo:</h4>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-slate-300">
                              {receita.modoPreparo.map((passo, i) => (
                                <li key={i}>{passo}</li>
                              ))}
                            </ol>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
