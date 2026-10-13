import React, { useState } from 'react';
import { INITIAL_EDITORIAL_CARDS, EditorialCard, EditorialState, RelatedCollection } from '../data/editorialData';
import { 
  BookOpen, 
  Lightbulb, 
  Users, 
  Target, 
  Home, 
  Moon, 
  Trees, 
  FileText, 
  AlertTriangle, 
  PlusCircle,
  Tag,
  CheckCircle2,
  Bookmark
} from 'lucide-react';

export const EditorialSection: React.FC = () => {
  const [selectedCollectionFilter, setSelectedCollectionFilter] = useState<string>('todas');
  const [selectedStateFilter, setSelectedStateFilter] = useState<string>('todas');
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const filteredCards = INITIAL_EDITORIAL_CARDS.filter(card => {
    const matchCol = selectedCollectionFilter === 'todas' || card.relatedCollection === selectedCollectionFilter;
    const matchState = selectedStateFilter === 'todas' || card.state === selectedStateFilter;
    return matchCol && matchState;
  });

  const getCollectionIcon = (col: RelatedCollection) => {
    switch (col) {
      case 'Casa':
        return <Home className="w-3.5 h-3.5 text-emerald-700" />;
      case 'Sono Protegido':
        return <Moon className="w-3.5 h-3.5 text-teal-700" />;
      case 'Campo':
        return <Trees className="w-3.5 h-3.5 text-amber-700" />;
    }
  };

  const getStateBadge = (state: EditorialState) => {
    switch (state) {
      case 'ideia':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 font-mono">
            <Lightbulb className="w-3 h-3 text-amber-600" />
            Ideia
          </span>
        );
      case 'em rascunho':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-300">
            Em Rascunho
          </span>
        );
      case 'publicado':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
            Publicado
          </span>
        );
    }
  };

  return (
    <section id="editorial" className="py-12 sm:py-16 bg-[#F8F9F7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            Planejamento Editorial
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight">
            Cartões de Pauta para Produção de Conteúdo
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            Estrutura editorial prévia para artigos e guias práticos. Cada pauta define público, objetivo e coleção, 
            mantendo o campo <strong>"Fontes a consultar" vazio por padrão</strong> para preenchimento posterior. 
            Nenhum artigo completo foi escrito nesta rodada.
          </p>
        </div>

        {/* Alerta de Diretriz Editorial Rigorosa */}
        <div className="bg-stone-900 text-stone-200 rounded-2xl p-4 sm:p-5 mb-8 border border-stone-800 flex items-start gap-3 text-xs leading-relaxed">
          <AlertTriangle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-emerald-300 block mb-0.5">Diretriz Editorial Permanente (Anti-Alarmismo):</strong>
            <p className="text-stone-300">
              Todos os artigos derivados destas pautas devem <strong>evitar terminantemente alarmismo, promessas de prevenção milagrosa de doenças</strong> e 
              qualquer alegação de que fenômenos climáticos como o El Niño produzirão uma quantidade determinada de mosquitos. 
              A incerteza científica é um fato natural e deve ser respeitada em todos os textos.
            </p>
          </div>
        </div>

        {/* Filtros de Pautas */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-stone-500 font-semibold">Coleção:</span>
            {['todas', 'Casa', 'Sono Protegido', 'Campo'].map((col) => (
              <button
                key={col}
                onClick={() => setSelectedCollectionFilter(col)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCollectionFilter === col
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {col === 'todas' ? 'Todas as Coleções' : col}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-stone-400">
            {filteredCards.length} {filteredCards.length === 1 ? 'pauta cadastrada' : 'pautas cadastradas'} (todas em estado "ideia")
          </div>

        </div>

        {/* Grade dos Cartões de Pauta */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => {
            const isExpanded = activeCardId === card.id;

            return (
              <div
                key={card.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6">
                  
                  {/* Topo do Cartão */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-stone-700 bg-stone-100 px-2.5 py-1 rounded-full border border-stone-200">
                      {getCollectionIcon(card.relatedCollection)}
                      Coleção: {card.relatedCollection}
                    </span>
                    {getStateBadge(card.state)}
                  </div>

                  {/* Título da Pauta */}
                  <h3 className="font-heading font-extrabold text-lg text-stone-900 leading-snug mb-3">
                    {card.title}
                  </h3>

                  {/* Público */}
                  <div className="space-y-2 text-xs mb-4">
                    <div className="p-3 bg-[#F8F9F7] rounded-xl border border-stone-100">
                      <span className="font-bold text-stone-900 flex items-center gap-1.5 text-[11px] mb-0.5">
                        <Users className="w-3.5 h-3.5 text-stone-500" />
                        Público-alvo:
                      </span>
                      <p className="text-stone-600 leading-relaxed">
                        {card.targetAudience}
                      </p>
                    </div>

                    {/* Objetivo */}
                    <div className="p-3 bg-[#F8F9F7] rounded-xl border border-stone-100">
                      <span className="font-bold text-stone-900 flex items-center gap-1.5 text-[11px] mb-0.5">
                        <Target className="w-3.5 h-3.5 text-emerald-600" />
                        Objetivo prático:
                      </span>
                      <p className="text-stone-600 leading-relaxed">
                        {card.objective}
                      </p>
                    </div>
                  </div>

                  {/* Campo Obrigatório: Fontes a Consultar (Vazio por padrão) */}
                  <div className="p-3 bg-stone-50 rounded-xl border border-dashed border-stone-300 text-xs">
                    <span className="font-bold text-stone-700 block text-[11px] mb-1 flex items-center gap-1">
                      <Bookmark className="w-3 h-3 text-stone-400" />
                      Fontes a consultar:
                    </span>
                    {card.sourcesToConsult.length === 0 ? (
                      <p className="text-stone-400 italic text-[11px]">
                        (Vazio por padrão — aguardando curadoria documental específica antes da redação)
                      </p>
                    ) : (
                      <ul className="list-disc pl-4 text-stone-600 text-[11px]">
                        {card.sourcesToConsult.map((src, sIdx) => (
                          <li key={sIdx}>{src}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                </div>

                {/* Rodapé do Cartão com Diretriz */}
                <div className="p-4 bg-stone-50/80 border-t border-stone-100 text-[11px] text-stone-500">
                  <span className="font-bold text-stone-700 block mb-0.5">Diretriz da pauta:</span>
                  <p className="leading-snug">{card.editorialGuidelines}</p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
