import React, { useState } from 'react';
import { FUNNEL_STAGES, FunnelStage } from '../data/funnelData';
import { 
  ArrowRight, 
  ArrowDown, 
  MousePointerClick, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Activity, 
  ShieldCheck, 
  HelpCircle,
  TrendingUp,
  Layers,
  ChevronRight
} from 'lucide-react';

interface CommercialFunnelSectionProps {
  localClickCount: number;
  onOpenClickTrackerModal: () => void;
}

export const CommercialFunnelSection: React.FC<CommercialFunnelSectionProps> = ({
  localClickCount,
  onOpenClickTrackerModal
}) => {
  const [selectedStageId, setSelectedStageId] = useState<string>(FUNNEL_STAGES[4].id); // Começa na etapa 5 (Clique) ou 1

  const activeStage = FUNNEL_STAGES.find(s => s.id === selectedStageId) || FUNNEL_STAGES[0];

  return (
    <section id="como-funciona" className="py-12 sm:py-16 bg-[#F8F9F7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            Como Funciona o Modelo
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight">
            Funil Comercial e Linha do Tempo da Iniciativa
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            Uma visão aberta de ponta a ponta sobre como a informação gera autonomia para o morador e como o modelo 
            de sustentabilidade por afiliação funciona na prática — distinguindo honestamente o que acontece aqui do que depende do varejista parceiro.
          </p>
        </div>

        {/* Alerta de Transparência Conceitual */}
        <div className="bg-amber-50 border border-amber-200/90 rounded-2xl p-4 sm:p-5 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-amber-950">
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Distinção Rigorosa de Métricas:</strong>
                <p className="text-amber-900/90 mt-0.5 leading-relaxed">
                  Um <strong>clique</strong> em link demonstrativo neste protótipo é apenas uma simulação no seu navegador. 
                  <strong> Cliques nunca devem ser presumidos como compras garantidas nem como comissões auferidas.</strong> 
                  Compras e comissões dependem inteiramente de decisões do consumidor no site parceiro e das regras de cada programa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha do Tempo: Horizontal no Desktop, Vertical no Mobile */}
        <div className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-7 shadow-sm mb-8">
          
          <div className="flex items-center justify-between mb-4 border-b border-stone-100 pb-3">
            <span className="text-xs uppercase font-bold tracking-wider text-stone-400">
              Etapas do Ciclo (Toque em uma etapa para inspecionar):
            </span>
            <span className="text-[11px] text-stone-500 font-medium">
              8 Etapas Integradas
            </span>
          </div>

          {/* Container da Linha do Tempo */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-2 relative">
            {FUNNEL_STAGES.map((stage, idx) => {
              const isSelected = stage.id === selectedStageId;
              const isClick = stage.isClickStage;
              const isConversion = stage.isConversionStage;

              return (
                <div key={stage.id} className="flex flex-col">
                  
                  {/* Botão de Cada Etapa */}
                  <button
                    onClick={() => setSelectedStageId(stage.id)}
                    className={`relative p-3 rounded-2xl text-left transition-all border cursor-pointer h-full flex flex-col justify-between ${
                      isSelected
                        ? isConversion
                          ? 'bg-amber-900 text-white border-amber-950 shadow-md ring-2 ring-amber-400/50'
                          : isClick
                          ? 'bg-emerald-900 text-white border-emerald-950 shadow-md ring-2 ring-emerald-400/50'
                          : 'bg-stone-900 text-white border-stone-950 shadow-md ring-2 ring-stone-400/50'
                        : isConversion
                        ? 'bg-amber-50/70 text-amber-950 border-amber-200 hover:bg-amber-100/70'
                        : isClick
                        ? 'bg-emerald-50/70 text-emerald-950 border-emerald-200 hover:bg-emerald-100/70'
                        : 'bg-[#F8F9F7] text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-stone-200/80 text-stone-700'
                        }`}>
                          0{stage.stepNumber}
                        </span>
                        
                        {isClick && (
                          <span className={`text-[9px] font-bold uppercase px-1 rounded ${
                            isSelected ? 'bg-emerald-400 text-stone-950' : 'bg-emerald-200 text-emerald-900'
                          }`}>
                            Local
                          </span>
                        )}

                        {isConversion && (
                          <span className={`text-[9px] font-bold uppercase px-1 rounded ${
                            isSelected ? 'bg-amber-400 text-stone-950' : 'bg-amber-200 text-amber-900'
                          }`}>
                            Externo
                          </span>
                        )}
                      </div>

                      <h3 className="font-heading font-bold text-xs sm:text-xs leading-snug line-clamp-2">
                        {stage.name}
                      </h3>
                    </div>

                    <p className={`text-[10px] mt-2 line-clamp-2 leading-tight ${
                      isSelected ? 'text-stone-300' : 'text-stone-500'
                    }`}>
                      {stage.shortSummary}
                    </p>
                  </button>

                  {/* Seta indicativa no mobile */}
                  {idx < FUNNEL_STAGES.length - 1 && (
                    <div className="md:hidden flex justify-center py-1 text-stone-300">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Painel de Detalhes da Etapa Selecionada */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase bg-stone-100 px-2 py-0.5 rounded">
                  Etapa 0{activeStage.stepNumber} de 08
                </span>
                
                <span className={`text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${
                  activeStage.isConversionStage
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : activeStage.isClickStage
                    ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                    : 'bg-stone-100 text-stone-800 border-stone-300'
                }`}>
                  {activeStage.badgeLabel}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900">
                {activeStage.name}
              </h3>
            </div>

            {/* Destaque especial na etapa 5 (Clique) com o Contador Local */}
            {activeStage.isClickStage && (
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-900 text-white shrink-0">
                  <MousePointerClick className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-800 block">
                    Contador Demonstrativo Atual no Navegador:
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-extrabold text-xl text-emerald-950">
                      {localClickCount} {localClickCount === 1 ? 'clique' : 'cliques'}
                    </span>
                    <button
                      onClick={onOpenClickTrackerModal}
                      className="text-[11px] text-emerald-800 underline font-semibold hover:text-emerald-950 cursor-pointer"
                    >
                      Inspecionar memória local &rarr;
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Grade de 3 Blocos: Função, Dados Medíveis, Próximas Possibilidades */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Bloco 1: Função da Etapa */}
            <div className="p-5 rounded-2xl bg-[#F8F9F7] border border-stone-200 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block mb-2 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-700" />
                  1. Função Desta Etapa
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {activeStage.functionDescription}
                </p>
              </div>

              {activeStage.externalDependencyNote && (
                <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900/90 leading-relaxed">
                  <strong>Aviso de dependência externa:</strong> {activeStage.externalDependencyNote}
                </div>
              )}
            </div>

            {/* Bloco 2: Dados que Podem Ser Medidos */}
            <div className="p-5 rounded-2xl bg-[#F8F9F7] border border-stone-200">
              <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block mb-2 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-stone-700" />
                2. Dados que Podem Ser Medidos
              </span>
              <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-800 mb-3 font-mono leading-relaxed">
                {activeStage.measurableDataExample}
              </div>
              <p className="text-[11px] text-stone-500 leading-normal">
                Nenhum número exibido em simulações deve ser interpretado como resultado comercial garantido. Métricas reais requerem ferramentas de agregação aprovadas.
              </p>
            </div>

            {/* Bloco 3: Próximas Possibilidades */}
            <div className="p-5 rounded-2xl bg-[#F8F9F7] border border-stone-200">
              <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                3. Próximas Possibilidades
              </span>
              <ul className="space-y-2 text-xs text-stone-700">
                {activeStage.nextPossibilities.map((pos, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 bg-white p-2 rounded-lg border border-stone-100">
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pos}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
