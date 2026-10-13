import React, { useState, useMemo } from 'react';
import { ROADMAP_BRIDGES_DATA, BRIDGE_GROUPS, BridgeItem, BridgeState } from '../data/roadmapData';
import { 
  GitBranch, 
  Filter, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  FlaskConical, 
  Sparkles, 
  Layers, 
  Compass, 
  FileEdit,
  ShieldCheck
} from 'lucide-react';

export const BridgesPanelSection: React.FC = () => {
  const [selectedStateFilter, setSelectedStateFilter] = useState<BridgeState | 'todos'>('todos');
  const [selectedGroupFilter, setSelectedGroupFilter] = useState<string>('todos');

  const stateOptions: { id: BridgeState | 'todos'; label: string; badgeClass: string }[] = [
    { id: 'todos', label: 'Todos os Estados', badgeClass: 'bg-stone-100 text-stone-800' },
    { id: 'planejado', label: 'Planejado', badgeClass: 'bg-stone-200 text-stone-700' },
    { id: 'demonstrativo', label: 'Demonstrativo', badgeClass: 'bg-amber-100 text-amber-900 border border-amber-300' },
    { id: 'configurado', label: 'Configurado (0)', badgeClass: 'bg-blue-100 text-blue-900' },
    { id: 'validado', label: 'Validado (0)', badgeClass: 'bg-emerald-100 text-emerald-900' },
  ];

  const filteredItems = useMemo(() => {
    return ROADMAP_BRIDGES_DATA.filter(item => {
      const matchState = selectedStateFilter === 'todos' || item.state === selectedStateFilter;
      const matchGroup = selectedGroupFilter === 'todos' || item.group === selectedGroupFilter;
      return matchState && matchGroup;
    });
  }, [selectedStateFilter, selectedGroupFilter]);

  const getStateBadge = (state: BridgeState) => {
    switch (state) {
      case 'planejado':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
            Planejado
          </span>
        );
      case 'demonstrativo':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 font-mono">
            Demonstrativo
          </span>
        );
      case 'configurado':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-300">
            Configurado
          </span>
        );
      case 'validado':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
            Validado
          </span>
        );
    }
  };

  return (
    <section id="proximas-pontes" className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            <GitBranch className="w-3.5 h-3.5 text-emerald-700" />
            Evolução Estratégica
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight">
            Painel de Próximas Pontes
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            Mapeamento de maturidade da iniciativa em 4 grupos. Conforme as regras da iniciativa, 
            <strong> todo item inicia estritamente como 'planejado' ou 'demonstrativo'</strong>; nenhum item pode começar como 'configurado' ou 'validado' sem verificação real.
          </p>
        </div>

        {/* Barra de Filtros por Estado e por Grupo */}
        <div className="p-4 rounded-2xl bg-[#F8F9F7] border border-stone-200 mb-8 space-y-4">
          
          {/* Filtro por Estado */}
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block mb-2">
              Filtrar por Estado de Maturidade:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {stateOptions.map(opt => {
                const isSelected = selectedStateFilter === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedStateFilter(opt.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-white text-stone-700 hover:bg-stone-200/70 border border-stone-200'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filtro por Grupo */}
          <div className="pt-2 border-t border-stone-200 flex flex-wrap items-center gap-2">
            <span className="text-xs text-stone-500 font-medium">Grupo:</span>
            <button
              onClick={() => setSelectedGroupFilter('todos')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer ${
                selectedGroupFilter === 'todos' ? 'bg-stone-800 text-white' : 'bg-white text-stone-600 border border-stone-200'
              }`}
            >
              Todos os grupos
            </button>
            {BRIDGE_GROUPS.map(g => (
              <button
                key={g.id}
                onClick={() => setSelectedGroupFilter(g.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer ${
                  selectedGroupFilter === g.id ? 'bg-stone-800 text-white' : 'bg-white text-stone-600 border border-stone-200'
                }`}
              >
                {g.id}
              </button>
            ))}
          </div>

        </div>

        {/* Exibição dos 4 Grupos */}
        <div className="space-y-10">
          {BRIDGE_GROUPS.filter(g => selectedGroupFilter === 'todos' || selectedGroupFilter === g.id).map(group => {
            const itemsInGroup = filteredItems.filter(item => item.group === group.id);

            if (itemsInGroup.length === 0 && selectedStateFilter !== 'todos') {
              return null;
            }

            const isResearchGroup = group.id === 'PESQUISA';

            return (
              <div key={group.id} className="space-y-4">
                
                {/* Cabeçalho do Grupo */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-2">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-stone-900 flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${
                        group.id === 'AGORA' ? 'bg-emerald-500' :
                        group.id === 'PRÓXIMO' ? 'bg-blue-500' :
                        group.id === 'FUTURO' ? 'bg-purple-500' : 'bg-amber-500'
                      }`} />
                      {group.label}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {group.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded self-start sm:self-auto">
                    {itemsInGroup.length} {itemsInGroup.length === 1 ? 'item' : 'itens'}
                  </span>
                </div>

                {/* Nota Especial Obrigatória no Grupo PESQUISA */}
                {isResearchGroup && (
                  <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>Regra de Evidência Científica no Grupo PESQUISA:</strong>
                      <p className="mt-0.5 text-amber-900/90 leading-relaxed font-semibold">
                        "Sem alegação de eficácia até haver evidência avaliada."
                      </p>
                      <p className="mt-0.5 text-stone-600 text-[11px] leading-relaxed">
                        A literatura não comprova efeito repelente sustentável de plantas vivas ou velas aromatizadas no controle de dípteros em recintos habitados.
                      </p>
                    </div>
                  </div>
                )}

                {/* Grade de Itens do Grupo */}
                {itemsInGroup.length === 0 ? (
                  <p className="text-xs text-stone-400 italic p-4 bg-stone-50 rounded-xl border border-dashed border-stone-200">
                    Nenhum item com o estado selecionado neste grupo.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {itemsInGroup.map(item => (
                      <div 
                        key={item.id} 
                        className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                          isResearchGroup
                            ? 'bg-amber-50/30 border-amber-200 hover:border-amber-300'
                            : 'bg-[#F8F9F7] border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <span className="text-[10px] font-mono text-stone-400 uppercase">
                              {item.group}
                            </span>
                            {getStateBadge(item.state)}
                          </div>

                          <h4 className="font-heading font-bold text-base text-stone-900 mb-1.5 leading-snug">
                            {item.name}
                          </h4>

                          <p className="text-xs text-stone-600 leading-relaxed mb-3">
                            {item.description}
                          </p>
                        </div>

                        <div className="space-y-2 pt-3 border-t border-stone-200/80 text-[11px]">
                          {item.researchDisclaimer && (
                            <div className="p-2 rounded-lg bg-amber-100/70 text-amber-950 font-bold border border-amber-200">
                              Nota: {item.researchDisclaimer}
                            </div>
                          )}

                          <div className="text-stone-500 text-[10px] flex items-center justify-between">
                            <span>Status técnico:</span>
                            <span className="font-mono">{item.manualUpdateNote}</span>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Nota de Governança dos Estados */}
        <div className="mt-12 p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-600 flex items-start gap-2">
          <FileEdit className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
          <div>
            <strong>Controle de Versão dos Estados:</strong>
            <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed">
              Os estados estão declarados isoladamente no arquivo <code>src/data/roadmapData.ts</code>. Para alterar um estado para 'configurado' ou 'validado', o responsável pelo projeto deve atualizar o arquivo após verificação e confirmação física ou contratual.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
