import React from 'react';
import { Home, Moon, Trees, Sparkles, Check, AlertTriangle, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { ProductCategory } from '../data/products';

interface ThreePathsSectionProps {
  onSelectCategory: (category: ProductCategory) => void;
  onNavigateToEdu: () => void;
}

export const ThreePathsSection: React.FC<ThreePathsSectionProps> = ({
  onSelectCategory,
  onNavigateToEdu
}) => {
  return (
    <section id="caminhos" className="py-12 sm:py-16 bg-[#F5F6F3] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da seção */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            Primeiro Nicho de Adaptação
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight">
            Os Três Caminhos Práticos de Proteção
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            Organizamos opções físicas não químicas para os três momentos mais vulneráveis do dia a dia, 
            priorizando soluções acessíveis e viáveis mesmo em habitações alugadas ou sem furação.
          </p>
        </div>

        {/* Os 3 Cards Grandes das Coleções */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: CASA */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Home className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  Coleção 01
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-stone-900 mb-2">
                CASA: Telas & Barreiras Físicas
              </h3>
              
              <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                Telas mosquiteiras de velcro para janelas, cortinas magnéticas de fechamento automático em portas, vedadores de frestas e fitas de reparo rápido.
              </p>

              <div className="space-y-2 text-xs text-stone-700 mb-6 border-t border-stone-100 pt-3">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Eficácia física 24h:</strong> Impede a entrada de mosquitos sem gerar dispersão química no ar interno.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Sem furos obrigatórios:</strong> Opções com fitas adesivas e ímãs para não danificar alvenaria.</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectCategory('casa')}
              className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              Ver produtos da Coleção Casa <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: SONO PROTEGIDO */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <Moon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                  Coleção 02
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-stone-900 mb-2">
                SONO PROTEGIDO: Leito & Viagem
              </h3>
              
              <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                Mosquiteiros pop-up autoportantes para cama, modelos clássicos cônicos de teto com 1 gancho e opções com elástico para berços e carrinhos de bebê.
              </p>

              <div className="space-y-2 text-xs text-stone-700 mb-6 border-t border-stone-100 pt-3">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Repouso ininterrupto:</strong> Elimina o zumbido perturbador e o risco de picadas durante a noite.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Seguro para recém-nascidos:</strong> Essencial para faixas etárias que não podem usar repelentes químicos tópicos.</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectCategory('sono')}
              className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              Ver produtos de Sono Protegido <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: CAMPO */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                  <Trees className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                  Coleção 03
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-stone-900 mb-2">
                CAMPO: Deslocamento & Externas
              </h3>
              
              <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                Chapéus com tela mosquiteira ampla para cabeça e pescoço, redes de descanso com mosquiteiro embutido e tendas abrigo para áreas externas.
              </p>

              <div className="space-y-2 text-xs text-stone-700 mb-6 border-t border-stone-100 pt-3">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span><strong>Resistente à transpiração:</strong> A tela não perde o efeito mecânico com o suor intenso em trabalho rural ou trilhas.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span><strong>Portátil e leve:</strong> Dobrável para transporte em mochilas de caminhada ou viagens ecológicas.</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectCategory('campo')}
              className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              Ver produtos da Coleção Campo <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Painel Regulatório & Científico: Repelentes vs Botânicos sem Comprovação */}
        <div className="rounded-2xl bg-amber-50/70 border border-amber-200/90 p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-amber-200/70 text-amber-900">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <span className="font-heading font-bold text-sm sm:text-base text-amber-950">
                  Critério Rígido: Repelentes Tópicos vs Produtos Botânicos
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                <strong>Repelentes tópicos:</strong> Apenas produtos regularizados pela Anvisa (Grau 2) com princípios ativos testados 
                (<strong>Icaridina, DEET ou IR3535</strong>) têm eficácia comprovada documentada na literatura biomédica. 
                <span className="block mt-1">
                  <strong>Aviso de responsabilidade científica:</strong> Plantas aromáticas em vasos (como citronela viva), incensos botânicos e velas 
                  <strong> NÃO podem ter alegação de eficácia como escudo protetor contra mosquitos</strong> em ambientes reais, conforme revisões sistemáticas e diretrizes da OMS.
                </span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => onSelectCategory('repelente')}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold transition-colors cursor-pointer text-center"
              >
                Ver Repelentes Regularizados Anvisa
              </button>
              <button
                onClick={onNavigateToEdu}
                className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-white hover:bg-amber-100/60 text-amber-950 border border-amber-300 text-xs font-medium transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                Por que velas e plantas não protegem?
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
