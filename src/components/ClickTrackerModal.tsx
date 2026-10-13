import React from 'react';
import { LocalClickRecord } from '../utils/useClickTracker';
import { X, MousePointerClick, Trash2, Info, AlertCircle, ShieldAlert } from 'lucide-react';

interface ClickTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  clickCount: number;
  clickHistory: LocalClickRecord[];
  onReset: () => void;
}

export const ClickTrackerModal: React.FC<ClickTrackerModalProps> = ({
  isOpen,
  onClose,
  clickCount,
  clickHistory,
  onReset
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full border border-stone-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Cabeçalho */}
        <div className="p-5 sm:p-6 bg-[#F8F9F7] border-b border-stone-200 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-stone-900 text-emerald-400">
              <MousePointerClick className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-heading font-extrabold text-lg text-stone-900">
                  Contador Local de Cliques
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300 font-mono">
                  DEMONSTRATIVO
                </span>
              </div>
              <p className="text-xs text-stone-500">
                Transparência técnica do protótipo no navegador
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm text-stone-700">
          
          {/* AVISO CRÍTICO OBRIGATÓRIO */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 text-xs">
            <div className="flex items-start gap-2 text-amber-950 font-bold">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>Regra de Transparência Comercial & Privacidade:</span>
            </div>
            <p className="text-amber-900/90 leading-relaxed pl-6">
              <strong>Este contador opera 100% no seu navegador (localStorage).</strong> Não existe backend, banco de dados externo ou rastreador de telemetria conectado a esta função.
            </p>
            <p className="text-amber-950 font-semibold pl-6 border-t border-amber-200/60 pt-2">
              Importante: Um clique demonstrativo <u>NÃO é compra</u> e <u>NÃO gera comissão financeira real</u>. Trata-se unicamente de uma simulação funcional de interface.
            </p>
          </div>

          {/* Resumo Numérico */}
          <div className="flex items-center justify-between p-4 bg-[#F8F9F7] rounded-xl border border-stone-200">
            <div>
              <span className="text-xs text-stone-500 block">Total de cliques simulados nesta sessão:</span>
              <span className="font-mono font-extrabold text-2xl text-stone-900">
                {clickCount}
              </span>
            </div>

            {clickCount > 0 && (
              <button
                onClick={onReset}
                className="px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Zerar Contador
              </button>
            )}
          </div>

          {/* Histórico Local */}
          <div>
            <span className="font-bold text-stone-900 block text-xs uppercase tracking-wider text-stone-500 mb-2">
              Registro Local de Eventos (Últimos itens clicados)
            </span>
            
            {clickHistory.length === 0 ? (
              <p className="text-xs text-stone-400 italic p-4 text-center bg-stone-50 rounded-xl border border-dashed border-stone-200">
                Nenhum clique demonstrativo foi acionado ainda nesta sessão. Clique no botão de simulação em qualquer item do catálogo para testar.
              </p>
            ) : (
              <div className="max-h-48 overflow-y-auto rounded-xl border border-stone-200 divide-y divide-stone-100 text-xs bg-white">
                {clickHistory.map((rec, idx) => (
                  <div key={idx} className="p-2.5 flex items-center justify-between hover:bg-stone-50">
                    <div>
                      <span className="font-semibold text-stone-800 block">{rec.productName}</span>
                      <span className="text-[10px] text-stone-400">Coleção: {rec.collection}</span>
                    </div>
                    <span className="font-mono text-[10px] text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded">
                      {rec.timestamp}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Rodapé */}
        <div className="p-4 sm:p-5 bg-[#F8F9F7] border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Entendido, Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
