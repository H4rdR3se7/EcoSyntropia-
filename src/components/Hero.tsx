import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Compass, ShieldCheck, ArrowRight, Home, Moon, Trees, CheckCircle2, AlertCircle } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-850 to-stone-900 text-stone-100 py-12 sm:py-20 border-b border-stone-800">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-600 rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Badge superior com nome provisório e aviso de protótipo */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/80 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Iniciativa {SITE_CONFIG.name}
          </span>
          <span className="text-xs text-stone-400 bg-stone-800/80 px-2.5 py-1 rounded-full border border-stone-700/60">
            Nicho Inicial: Proteção contra Exposição a Mosquitos
          </span>
        </div>

        {/* Tagline em destaque */}
        <div className="max-w-4xl space-y-4">
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15]">
            <span className="text-emerald-400 block sm:inline">Compreender as consequências.</span>{" "}
            <span>Ampliar a capacidade de agir.</span>
          </h1>

          {/* Propósito em caixa de destaque visual */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-800/70 border border-emerald-900/60 shadow-lg backdrop-blur-sm max-w-3xl">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-900/60 text-emerald-300 shrink-0 mt-0.5">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
                  Propósito Fundamental
                </span>
                <p className="text-base sm:text-lg font-medium text-stone-100 leading-snug">
                  {SITE_CONFIG.purpose}
                </p>
              </div>
            </div>
          </div>

          {/* Explicação curta sobre preparação ambiental acessível */}
          <div className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl space-y-3 pt-2">
            <p>
              A <strong className="text-white font-semibold">{SITE_CONFIG.name}</strong> atua como uma ponte de 
              <strong> informação fundamentada, curadoria técnica e acesso comercial prático</strong>.
            </p>
            <p className="text-stone-300">
              Não fabricamos produtos, não mantemos estoque e não vendemos a promessa de eliminar riscos ou erradicar doenças. 
              Nosso papel é auxiliar pessoas comuns a entender uma necessidade ambiental real e encontrar opções físicas e regulamentadas que sejam 
              imediatamente aplicáveis, acessíveis e comprovadas pela literatura científica.
            </p>
          </div>

        </div>

        {/* Três Pilares Rápidos de Honestidade */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-8 max-w-4xl">
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-stone-800/40 border border-stone-800 text-xs text-stone-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-100 block">Curadoria Baseada em Evidências</strong>
              Foco em barreiras físicas mecânicas e princípios ativos homologados pela Anvisa.
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-stone-800/40 border border-stone-800 text-xs text-stone-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-100 block">Sem Alarmismo nem Ilusões</strong>
              Incertezas climáticas explicadas com fontes e sem criar pânico para vender.
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-stone-800/40 border border-stone-800 text-xs text-stone-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-100 block">Transparência de Afiliados</strong>
              Links podem gerar comissões para manter a pesquisa, sem custo adicional para você.
            </div>
          </div>
        </div>

        {/* Os 3 Caminhos Principais (Acesso Rápido) */}
        <div className="pt-4 border-t border-stone-800/80">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs uppercase font-bold tracking-wider text-stone-400">
              Escolha seu caminho inicial de adaptação:
            </h2>
            <button
              onClick={() => onNavigate('caminhos')}
              className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium cursor-pointer"
            >
              Ver detalhes comparativos <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            
            {/* Card Casa */}
            <button
              onClick={() => onNavigate('catalogo')}
              className="text-left p-4 rounded-xl bg-stone-800/70 hover:bg-stone-700/60 border border-stone-700 hover:border-emerald-600/70 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-white group-hover:text-emerald-300 transition-colors">
                  1. CASA
                </h3>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  Telas para janelas, barreiras físicas magnéticas para portas e fitas de reparo rápido sem furos.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 mt-3 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Ver opções para a casa &rarr;
              </span>
            </button>

            {/* Card Sono Protegido */}
            <button
              onClick={() => onNavigate('catalogo')}
              className="text-left p-4 rounded-xl bg-stone-800/70 hover:bg-stone-700/60 border border-stone-700 hover:border-emerald-600/70 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-teal-950 text-teal-400 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                  <Moon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-white group-hover:text-teal-300 transition-colors">
                  2. SONO PROTEGIDO
                </h3>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  Mosquiteiros pop-up autoportantes, modelos de teto e soluções elásticas seguras para berços.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-teal-400 mt-3 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Ver proteção noturna &rarr;
              </span>
            </button>

            {/* Card Campo */}
            <button
              onClick={() => onNavigate('catalogo')}
              className="text-left p-4 rounded-xl bg-stone-800/70 hover:bg-stone-700/60 border border-stone-700 hover:border-emerald-600/70 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-amber-950 text-amber-400 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                  <Trees className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                  3. CAMPO
                </h3>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  Telas para cabeça e pescoço, redes de descanso com malha integrada e tendas para áreas externas.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-amber-400 mt-3 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Ver opções ao ar livre &rarr;
              </span>
            </button>

          </div>
        </div>

        {/* Botões de Ação Principal */}
        <div className="flex flex-wrap gap-3 mt-8">
          <button
            onClick={() => onNavigate('como-escolher')}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-stone-950" />
            Guia Interativo: Como Escolher
          </button>
          <button
            onClick={() => onNavigate('como-funciona')}
            className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            Linha do Tempo: Como Funciona
          </button>
          <button
            onClick={() => onNavigate('educacao')}
            className="px-5 py-2.5 rounded-xl bg-stone-800/60 hover:bg-stone-700 text-stone-300 border border-stone-700/60 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Evidências & Mitos
          </button>
        </div>

      </div>
    </section>
  );
};
