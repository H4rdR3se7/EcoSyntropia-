import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ShieldCheck, Mail, BookOpen, AlertCircle, ExternalLink, HeartHandshake } from 'lucide-react';

export const CommercialTransparencyFooter: React.FC = () => {
  return (
    <footer id="transparencia" className="bg-stone-900 text-stone-300 text-xs border-t border-stone-800 pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Bloco 1: Identidade, Conceito e Afiliados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-stone-800">
          
          {/* Coluna 1: Nome & Propósito */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-stone-400 italic text-[11px] leading-relaxed">
              "{SITE_CONFIG.tagline}"
            </p>
            <p className="text-stone-300 leading-relaxed text-xs">
              <strong>Propósito:</strong> {SITE_CONFIG.purpose}
            </p>
            <div className="text-[11px] text-stone-400">
              {SITE_CONFIG.legalEntityNotice}
            </div>
          </div>

          {/* Coluna 2: Transparência Comercial & Modelo de Afiliados */}
          <div className="space-y-3">
            <span className="font-heading font-bold text-sm text-stone-100 flex items-center gap-1.5 uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              Transparência Comercial
            </span>
            <p className="text-stone-400 leading-relaxed text-xs">
              {SITE_CONFIG.conceptDescription}
            </p>
            <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 text-[11px] text-stone-300 leading-relaxed">
              <strong>Modelo de Afiliados:</strong> {SITE_CONFIG.affiliateDisclosure}
            </div>
          </div>

          {/* Coluna 3: Contato & Governança */}
          <div className="space-y-3">
            <span className="font-heading font-bold text-sm text-stone-100 uppercase tracking-wider">
              Contato & Governança
            </span>
            <p className="text-stone-400 text-xs">
              Dúvidas, sugestões de curadoria ou correções científicas:
            </p>
            <a 
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-xs bg-stone-800 px-3 py-2 rounded-lg border border-stone-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {SITE_CONFIG.contactEmail}
            </a>
            <div className="text-[11px] text-stone-400 space-y-1 pt-1">
              <p>• Versão do Protótipo: {SITE_CONFIG.version}</p>
              <p>• Ciclo de Atualização: {SITE_CONFIG.lastUpdated}</p>
            </div>
          </div>

        </div>

        {/* Bloco 2: Fontes Científicas e Órgãos Oficiais */}
        <div className="space-y-3">
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-stone-400 block">
            Fontes Informativas & Referências Oficiais Consultadas
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-[11px] text-stone-400">
            <div className="p-2.5 bg-stone-800/50 rounded-lg border border-stone-800">
              <strong className="text-stone-200 block mb-0.5">Anvisa (Brasil)</strong>
              Regulamentação sanitária de cosméticos repelentes (RDC Grau 2) e notas técnicas de segurança infantil.
            </div>
            <div className="p-2.5 bg-stone-800/50 rounded-lg border border-stone-800">
              <strong className="text-stone-200 block mb-0.5">OMS / WHO</strong>
              Global Vector Control Response (2017-2030) e especificações para telas e mosquiteiros de leito.
            </div>
            <div className="p-2.5 bg-stone-800/50 rounded-lg border border-stone-800">
              <strong className="text-stone-200 block mb-0.5">Ministério da Saúde (BR)</strong>
              Boletins Epidemiológicos da SVSA sobre arboviroses urbanas e vigilância entomológica.
            </div>
            <div className="p-2.5 bg-stone-800/50 rounded-lg border border-stone-800">
              <strong className="text-stone-200 block mb-0.5">Cochrane Library / PubMed</strong>
              Revisões sistemáticas sobre eficácia de barreiras mecânicas e ineficácia de repelentes eletrônicos/ultrassom.
            </div>
          </div>
        </div>

        {/* Bloco 3: Aviso Legal & Isenção de Alarmismo */}
        <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 text-[11px] text-stone-400 space-y-1.5 leading-relaxed">
          <div className="flex items-center gap-1.5 text-stone-300 font-bold">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Isenção de Responsabilidade Médica e Comunicação Sóbria de Riscos:</span>
          </div>
          <p>
            O conteúdo disponibilizado pela {SITE_CONFIG.name} tem caráter estritamente educativo e de orientação prática cotidiana. 
            Nenhum método físico ou químico oferece garantia absoluta de risco zero contra picadas ou transmissão viral. 
            Em caso de febre, dores no corpo ou sintomas de arboviroses, procure imediatamente uma unidade de saúde pública (SUS) ou assistência médica profissional.
          </p>
        </div>

        {/* Rodapé Final */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 pt-4 border-t border-stone-800">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name} — Todos os direitos reservados para adaptação ambiental aberta.</p>
          <p className="mt-2 sm:mt-0 text-stone-400">
            Protótipo responsivo mobile-first desenvolvido em conformidade com as diretrizes do projeto.
          </p>
        </div>

      </div>
    </footer>
  );
};
