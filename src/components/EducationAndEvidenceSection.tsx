import React, { useState } from 'react';
import { 
  ACTIVE_REPELLENT_SUBSTANCES, 
  CLIMATE_AND_VECTOR_DATA, 
  MYTHS_VS_FACTS 
} from '../data/scientificSources';
import { 
  ShieldCheck, 
  FlaskConical, 
  AlertTriangle, 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  MapPin, 
  ExternalLink,
  HelpCircle,
  Clock
} from 'lucide-react';

export const EducationAndEvidenceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ativos' | 'mitos' | 'clima'>('ativos');

  return (
    <section id="educacao" className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            <FlaskConical className="w-3.5 h-3.5 text-emerald-700" />
            Base Científica & Evidências Regulatórias
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight">
            Educação Sem Sensacionalismo: O Que Funciona e o Que Não Funciona
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            A proteção contra mosquitos exige clareza entre métodos de barreira mecânica, princípios ativos certificados 
            e crenças populares ineficazes. Nenhuma incerteza climática é omitida para induzir compras.
          </p>
        </div>

        {/* Abas Superiores */}
        <div className="flex border-b border-stone-200 mb-8 overflow-x-auto no-scrollbar gap-2">
          <button
            onClick={() => setActiveTab('ativos')}
            className={`pb-3 px-4 text-xs sm:text-sm font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'ativos'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            1. Repelentes Regulares Anvisa (Ativos Reais)
          </button>
          
          <button
            onClick={() => setActiveTab('mitos')}
            className={`pb-3 px-4 text-xs sm:text-sm font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'mitos'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            2. Mitos Populares vs Evidências (Plantas & Velas)
          </button>

          <button
            onClick={() => setActiveTab('clima')}
            className={`pb-3 px-4 text-xs sm:text-sm font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'clima'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            3. Contexto Climático Real & Incertezas Declaradas
          </button>
        </div>

        {/* CONTEÚDO DA ABA 1: ATIVOS ANVISA */}
        {activeTab === 'ativos' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-xl text-xs text-emerald-950 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong>Regulamentação no Brasil:</strong>
                <p className="mt-0.5 leading-relaxed">
                  Para comercialização regular como repelente de insetos no Brasil, o produto deve ser registrado na Anvisa como Cosmético de Grau 2, 
                  comprovar eficácia contra <em>Aedes aegypti</em> e <em>Culex</em> por testes laboratoriais padronizados e especificar o tempo de proteção em rótulo.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {ACTIVE_REPELLENT_SUBSTANCES.map((substance) => (
                <div 
                  key={substance.name} 
                  className="bg-[#F8F9F7] rounded-2xl border border-stone-200 p-5 flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase bg-stone-200/80 text-stone-800 px-2 py-0.5 rounded">
                        PubChem CID: {substance.pubchemCid}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                        OMS / Anvisa
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-lg text-stone-900 leading-snug">
                        {substance.name}
                      </h3>
                      <p className="text-[11px] font-mono text-stone-500 truncate" title={substance.scientificName}>
                        {substance.scientificName}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-stone-700 pt-1">
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <span className="font-bold text-stone-900 block text-[11px]">Duração típica de proteção:</span>
                        <span className="text-stone-600">{substance.typicalDuration}</span>
                      </div>

                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <span className="font-bold text-stone-900 block text-[11px]">Diretriz pediátrica Anvisa:</span>
                        <span className="text-stone-600">{substance.pediatricGuidelineAnvisa}</span>
                      </div>

                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <span className="font-bold text-stone-900 block text-[11px]">Mecanismo de ação:</span>
                        <span className="text-stone-600 leading-relaxed">{substance.mechanismOfAction}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-stone-500">
                    <strong>Perfil de compatibilidade:</strong> {substance.safetyProfile}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTEÚDO DA ABA 2: MITOS VS FATOS */}
        {activeTab === 'mitos' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl text-xs text-amber-950 flex items-start gap-2.5 mb-6">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Aviso Rígido sobre Produtos Botânicos e Velas:</strong>
                <p className="mt-0.5 leading-relaxed">
                  Plantas aromáticas, velas e produtos botânicos <strong>não podem ter alegação de eficácia como repelentes de mosquitos</strong>. 
                  A literatura científica e a Anvisa determinam que a dispersão de essências no ambiente não cria raio de proteção mecânica suficiente para impedir picadas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MYTHS_VS_FACTS.map((item) => (
                <div
                  key={item.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    item.isEffective
                      ? 'bg-emerald-50/40 border-emerald-200'
                      : 'bg-[#F8F9F7] border-stone-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                      Alegação Popular
                    </span>
                    <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      item.isEffective
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {item.isEffective ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                          Comprovado
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5 text-red-700" />
                          Sem Eficácia
                        </>
                      )}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base text-stone-900 mb-2">
                    "{item.popularClaim}"
                  </h3>

                  <p className="text-xs font-semibold text-stone-800 mb-1">
                    Veredito científico: {item.scientificVerdict}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    {item.scientificExplanation}
                  </p>

                  <div className="text-[10px] text-stone-400 font-mono border-t border-stone-200 pt-2 flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-stone-400" />
                    Fonte: {item.evidenceSource}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTEÚDO DA ABA 3: CLIMA E INCERTEZAS */}
        {activeTab === 'clima' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="bg-stone-100 border border-stone-300 p-4 rounded-xl text-xs text-stone-800">
              <strong className="block text-stone-900 mb-1">Princípio de Incerteza e Rigor na EcoSyntropia:</strong>
              <p className="leading-relaxed">
                Rejeitamos terminantemente previsões alarmistas que afirmam que fenômenos oceânicos ou climáticos 
                (como El Niño ou secas regionais) causarão números pré-determinados de mosquitos. 
                A biologia vetorial é multifatorial e envolve saneamento urbano, microclima de quintal e comportamento humano.
              </p>
            </div>

            <div className="space-y-4">
              {CLIMATE_AND_VECTOR_DATA.map((entry) => (
                <div key={entry.id} className="bg-[#F8F9F7] rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-xs">
                  
                  <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 mb-2">
                    <span className="flex items-center gap-1 bg-stone-200/80 text-stone-800 px-2 py-0.5 rounded font-medium">
                      <Calendar className="w-3 h-3 text-stone-600" />
                      {entry.date}
                    </span>
                    <span className="flex items-center gap-1 bg-stone-200/80 text-stone-800 px-2 py-0.5 rounded font-medium">
                      <MapPin className="w-3 h-3 text-stone-600" />
                      {entry.referenceRegion}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-stone-900 mb-2">
                    {entry.topic}
                  </h3>

                  <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-800 mb-3">
                    <strong className="text-stone-900 block text-xs mb-0.5">Constatação oficial:</strong>
                    <p className="leading-relaxed text-stone-700">{entry.statement}</p>
                  </div>

                  {/* Limitações e Incertezas - Campo Obrigatório */}
                  <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-950 mb-3">
                    <strong className="text-amber-900 flex items-center gap-1.5 text-xs mb-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                      Limitações e incertezas associadas ao dado:
                    </strong>
                    <p className="leading-relaxed text-amber-900/90">{entry.limitationsAndUncertainty}</p>
                  </div>

                  <div className="text-[11px] text-stone-500 border-t border-stone-200 pt-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-stone-400" />
                    <span><strong>Fonte documental:</strong> {entry.source}</span>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
