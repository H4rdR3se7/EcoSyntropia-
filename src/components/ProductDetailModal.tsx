import React from 'react';
import { ProductItem } from '../data/products';
import { X, Check, AlertTriangle, ExternalLink, ShieldCheck, Wrench, Sparkles, Tag, Layers } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRegisterClick: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRegisterClick
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full border border-stone-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Topo do Modal */}
        <div className="p-5 sm:p-6 bg-[#F8F9F7] border-b border-stone-200 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-200 text-stone-800 px-2 py-0.5 rounded">
                Coleção: {product.collectionLabel}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300 font-mono">
                {product.demonstrativeLabel}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 leading-snug">
              {product.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label="Fechar detalhes"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[75vh] overflow-y-auto text-xs sm:text-sm text-stone-700">
          
          {/* Finalidade */}
          <div>
            <span className="font-bold text-stone-900 block text-xs uppercase tracking-wider text-stone-500 mb-1">
              Finalidade Principal
            </span>
            <p className="text-stone-800 bg-stone-50 p-3 rounded-xl border border-stone-200 leading-relaxed">
              {product.purpose}
            </p>
          </div>

          {/* Faixa de Custo & Instalação */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-[#F8F9F7] rounded-xl border border-stone-200">
              <span className="text-[11px] text-stone-500 block">Faixa de preço de referência:</span>
              <span className="font-mono font-bold text-base text-stone-900 block mt-0.5">
                {product.estimatedPriceRange}
              </span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Valor demonstrativo de mercado</span>
            </div>

            <div className="p-3.5 bg-[#F8F9F7] rounded-xl border border-stone-200">
              <span className="text-[11px] text-stone-500 block">Dificuldade de instalação:</span>
              <span className="font-semibold text-emerald-800 text-sm block mt-0.5">
                {product.installationDifficulty}
              </span>
              <span className="text-[10px] text-stone-600 block mt-0.5">{product.installation}</span>
            </div>
          </div>

          {/* O QUE O PRODUTO NÃO RESOLVE (Limitações Honestas) */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-950 font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              Limitações Operacionais (O que NÃO é prometido):
            </div>
            <ul className="space-y-1.5 text-xs text-amber-900/95 pl-1">
              {product.limitations.map((limit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>{limit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Especificações Técnicas */}
          <div>
            <span className="font-bold text-stone-900 block text-xs uppercase tracking-wider text-stone-500 mb-2">
              Especificações Técnicas e Sanitárias
            </span>
            <div className="p-3.5 bg-white rounded-xl border border-stone-200 space-y-2 text-xs">
              {product.technicalSpecs.meshSize && (
                <div>
                  <strong className="text-stone-900">Abertura de Malha:</strong> {product.technicalSpecs.meshSize}
                </div>
              )}
              {product.technicalSpecs.material && (
                <div>
                  <strong className="text-stone-900">Material:</strong> {product.technicalSpecs.material}
                </div>
              )}
              {product.technicalSpecs.dimensions && (
                <div>
                  <strong className="text-stone-900">Dimensões:</strong> {product.technicalSpecs.dimensions}
                </div>
              )}
              {product.technicalSpecs.activeIngredient && (
                <div>
                  <strong className="text-stone-900">Princípio Ativo Registrado:</strong> {product.technicalSpecs.activeIngredient}
                </div>
              )}
              {product.technicalSpecs.anvisaApprovalNote && (
                <div>
                  <strong className="text-stone-900">Diretriz Anvisa:</strong> {product.technicalSpecs.anvisaApprovalNote}
                </div>
              )}
            </div>
          </div>

          {/* Evidência Científica de Apoio */}
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 block">Fundamentação:</strong>
              {product.evidenceNote}
            </div>
          </div>

        </div>

        {/* Rodapé do Modal */}
        <div className="p-4 sm:p-6 bg-[#F8F9F7] border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-stone-500 text-center sm:text-left">
            *Link demonstrativo com placeholder. Não realiza cobrança nem transação.
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-700 text-xs font-semibold w-full sm:w-auto cursor-pointer"
            >
              Fechar
            </button>
            <button
              onClick={() => {
                onRegisterClick(product);
                onClose();
              }}
              className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center justify-center gap-2 w-full sm:w-auto transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Simular Link Afiliado
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
