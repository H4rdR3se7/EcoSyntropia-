import React, { useState } from 'react';
import { DECISION_SCENARIOS, COMPARISON_TABLE, DecisionScenario } from '../data/decisionMatrix';
import { Compass, CheckCircle2, AlertCircle, ArrowRight, Table, Layers, ChevronRight, ShieldAlert } from 'lucide-react';
import { ProductItem } from '../data/products';

interface HowToChooseSectionProps {
  onSelectProductById: (productId: string) => void;
}

export const HowToChooseSection: React.FC<HowToChooseSectionProps> = ({ onSelectProductById }) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(DECISION_SCENARIOS[0].id);
  const [showTable, setShowTable] = useState<boolean>(false);

  const activeScenario = DECISION_SCENARIOS.find(s => s.id === selectedScenarioId) || DECISION_SCENARIOS[0];

  return (
    <section id="como-escolher" className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200 mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            Matriz de Apoio à Decisão
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight">
            Como Escolher Sem Conhecer Termos Técnicos
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            Você não precisa saber especificações de polímeros ou diâmetro de malha. 
            Selecione a sua situação real abaixo e descubra a solução mecânica mais adequada, 
            entendendo com honestidade o que ela <strong>resolve</strong> e o que ela <strong>não é capaz de resolver</strong>.
          </p>
        </div>

        {/* Seleção de Situações / Cenários do Cotidiano */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-3">
            1. Qual é o seu principal desafio hoje?
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {DECISION_SCENARIOS.map((scenario) => {
              const isSelected = scenario.id === selectedScenarioId;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setSelectedScenarioId(scenario.id)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-900 text-white border-emerald-950 shadow-sm'
                      : 'bg-[#F8F9F7] text-stone-700 border-stone-200 hover:bg-stone-100 hover:border-stone-300'
                  }`}
                >
                  <span className="text-[11px] font-bold block leading-snug line-clamp-2">
                    {scenario.title}
                  </span>
                  <span className={`text-[10px] mt-2 inline-flex items-center gap-1 font-semibold ${
                    isSelected ? 'text-emerald-300' : 'text-stone-500'
                  }`}>
                    {scenario.priceBand} &rarr;
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Resposta Detalhada da Situação Selecionada */}
        <div className="bg-[#F8F9F7] rounded-2xl border border-stone-200 p-5 sm:p-7 mb-10 shadow-inner">
          <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
            
            <div className="space-y-4 max-w-2xl">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                  Recomendação para seu caso
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-stone-900 mt-2">
                  {activeScenario.recommendedSolution}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 italic">
                  Cenário: {activeScenario.situation}
                </p>
              </div>

              {/* Por que esta solução */}
              <div className="p-3.5 bg-white rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-800 space-y-1">
                <span className="font-bold text-stone-900 flex items-center gap-1.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Por que é a escolha ideal:
                </span>
                <p className="text-stone-600 leading-relaxed">
                  {activeScenario.whyThisSolution}
                </p>
              </div>

              {/* Limitação Real e Honesta */}
              <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-1">
                <span className="font-bold text-amber-900 flex items-center gap-1.5 text-xs">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  Limitação sincera (o que NÃO resolve):
                </span>
                <p className="text-amber-900/90 leading-relaxed">
                  {activeScenario.keyLimitation}
                </p>
              </div>
            </div>

            {/* Ação Direta para o Item do Catálogo */}
            <div className="w-full lg:w-72 bg-white rounded-xl border border-stone-200 p-4 shrink-0 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                  Item Demonstrativo
                </span>
                <h4 className="font-heading font-bold text-sm text-stone-900 line-clamp-2 mb-2">
                  {activeScenario.recommendedSolution}
                </h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    Faixa: {activeScenario.priceBand}
                  </span>
                  <span className="text-[10px] text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded">
                    Demonstrativo
                  </span>
                </div>
              </div>

              <button
                onClick={() => onSelectProductById(activeScenario.linkedProductId)}
                className="w-full py-2.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                Abrir ficha no catálogo <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* Alternador para a Tabela Comparativa Geral */}
        <div className="border-t border-stone-200 pt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-heading font-bold text-lg text-stone-900">
                Tabela Comparativa Geral
              </h3>
              <p className="text-xs text-stone-500">
                Compare finalidade, nível de esforço de instalação, custo e restrições lado a lado.
              </p>
            </div>
            
            <button
              onClick={() => setShowTable(!showTable)}
              className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Table className="w-3.5 h-3.5 text-stone-600" />
              {showTable ? 'Recolher Tabela' : 'Expandir Tabela Completa'}
            </button>
          </div>

          {showTable && (
            <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm mt-3 animate-in fade-in duration-200">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-100/90 text-stone-800 border-b border-stone-200 font-semibold">
                    <th className="p-3">Método / Solução</th>
                    <th className="p-3">Coleção</th>
                    <th className="p-3">Indicado Para</th>
                    <th className="p-3">Instalação</th>
                    <th className="p-3">Faixa de Custo</th>
                    <th className="p-3">Principal Limitação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700">
                  {COMPARISON_TABLE.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/80 transition-colors">
                      <td className="p-3 font-semibold text-stone-900 whitespace-nowrap">
                        {row.method}
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-stone-100 text-stone-700">
                          {row.category}
                        </span>
                      </td>
                      <td className="p-3">{row.idealFor}</td>
                      <td className="p-3">{row.installationType}</td>
                      <td className="p-3 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          row.relativeCost === 'Baixo'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {row.relativeCost}
                        </span>
                      </td>
                      <td className="p-3 text-stone-500 italic">{row.mainLimitation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
