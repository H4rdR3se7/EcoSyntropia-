import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA, ProductItem, ProductCategory } from '../data/products';
import { Search, Filter, ExternalLink, Info, AlertTriangle, ShieldCheck, Tag, Eye } from 'lucide-react';

interface CatalogSectionProps {
  selectedCategory: ProductCategory | 'todas';
  onSelectCategory: (category: ProductCategory | 'todas') => void;
  onOpenProductDetails: (product: ProductItem) => void;
  onRegisterClick: (product: ProductItem) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenProductDetails,
  onRegisterClick
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState<'todos' | 'Econômico' | 'Intermediário' | 'Especializado'>('todos');
  const [justClickedId, setJustClickedId] = useState<string | null>(null);

  const categories = [
    { id: 'todas', label: 'Todas as Opções' },
    { id: 'casa', label: '1. Casa (Telas & Portas)' },
    { id: 'sono', label: '2. Sono Protegido (Leito)' },
    { id: 'campo', label: '3. Campo (Ar Livre)' },
    { id: 'repelente', label: 'Repelentes Anvisa (Pele)' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      const matchCategory = selectedCategory === 'todas' || item.collection === selectedCategory;
      const matchPrice = priceFilter === 'todos' || item.priceTier === priceFilter;
      const matchSearch = searchQuery.trim() === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.installation.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchPrice && matchSearch;
    });
  }, [selectedCategory, priceFilter, searchQuery]);

  const handleAffiliateClick = (product: ProductItem) => {
    onRegisterClick(product);
    setJustClickedId(product.id);
    setTimeout(() => {
      setJustClickedId(null);
    }, 3000);
  };

  return (
    <section id="catalogo" className="py-12 sm:py-16 bg-[#F8F9F7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-2">
              <Tag className="w-3.5 h-3.5 text-emerald-700" />
              Catálogo Curado
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight">
              Catálogo Demonstrativo de Soluções
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
              Todos os itens abaixo são demonstrativos e acompanham dados técnicos de instalação e limitações operacionais.
            </p>
          </div>

          {/* Banner de Transparência de Afiliados */}
          <div className="bg-amber-50/90 border border-amber-200/90 rounded-xl p-3 text-xs text-amber-900 max-w-md shadow-xs">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Aviso de Transparência de Afiliados:</strong>
                <p className="text-amber-800/90 text-[11px] mt-0.5">
                  Links de compra são demonstrativos. Em uma versão final comercial, compras atribuídas através de links de afiliados podem gerar comissão sem nenhum custo extra para você.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de Filtros e Busca */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm mb-8 space-y-4">
          
          {/* Categorias Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Busca e Filtro de Preço */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-stone-100">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por janela, berço, repelente, velcro, magnética..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-[#F8F9F7] border border-stone-200 rounded-xl text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-500 shrink-0">Faixa:</span>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value as any)}
                className="px-3 py-2 bg-[#F8F9F7] border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="todos">Todos os preços</option>
                <option value="Econômico">Econômico (até ~R$ 40)</option>
                <option value="Intermediário">Intermediário (R$ 45 a R$ 160)</option>
                <option value="Especializado">Especializado</option>
              </select>
            </div>
          </div>

        </div>

        {/* Grade de Produtos */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center">
            <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <h3 className="font-heading font-bold text-lg text-stone-800">
              Nenhuma solução encontrada para esta busca
            </h3>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              Tente redefinir os filtros de categoria ou buscar termos mais genéricos como "tela", "mosquiteiro" ou "repelente".
            </p>
            <button
              onClick={() => {
                onSelectCategory('todas');
                setSearchQuery('');
                setPriceFilter('todos');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold cursor-pointer"
            >
              Limpar todos os filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isJustClicked = justClickedId === product.id;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-stone-200 hover:border-emerald-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between overflow-hidden"
                >
                  
                  {/* Topo do Card */}
                  <div className="p-5">
                    
                    {/* Selos Visuais Obrigatórios */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200">
                        {product.collectionLabel}
                      </span>
                      
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-200 font-mono">
                          DEMONSTRATIVO
                        </span>
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-base text-stone-900 line-clamp-2 leading-snug mb-2">
                      {product.name}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 mb-3 leading-relaxed">
                      {product.purpose}
                    </p>

                    {/* Preço e Instalação Demonstrativos */}
                    <div className="p-3 bg-[#F8F9F7] rounded-xl border border-stone-100 space-y-1.5 text-xs text-stone-700 mb-3">
                      <div className="flex items-center justify-between">
                        <span className="text-stone-500 text-[11px]">Faixa de referência:</span>
                        <span className="font-mono font-bold text-stone-900 text-xs">
                          {product.estimatedPriceRange}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-stone-500 text-[11px]">Instalação:</span>
                        <span className="font-medium text-emerald-800 text-[11px] bg-emerald-50 px-1.5 py-0.2 rounded">
                          {product.installationDifficulty}
                        </span>
                      </div>
                    </div>

                    {/* Limitação Sincera Destacada */}
                    <div className="text-[11px] text-amber-900 bg-amber-50/70 p-2.5 rounded-lg border border-amber-100">
                      <span className="font-bold flex items-center gap-1 text-amber-950 mb-0.5">
                        <AlertTriangle className="w-3 h-3 text-amber-600 shrink-0" />
                        Limitação:
                      </span>
                      <p className="line-clamp-2 text-stone-600">
                        {product.limitations[0]}
                      </p>
                    </div>

                  </div>

                  {/* Rodapé do Card com Ações */}
                  <div className="p-4 bg-stone-50/90 border-t border-stone-100 space-y-2">
                    
                    {/* Botão de Ver Ficha Completa */}
                    <button
                      onClick={() => onOpenProductDetails(product)}
                      className="w-full py-2 px-3 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-stone-600" />
                      Ver Ficha Técnica & Limitações
                    </button>

                    {/* Botão Demonstrativo de Link Afiliado */}
                    <button
                      onClick={() => handleAffiliateClick(product)}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isJustClicked
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-900 hover:bg-stone-800 text-white'
                      }`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {isJustClicked ? 'Clique Registrado no Navegador!' : 'Simular Link de Afiliado (Demo)'}
                    </button>

                    <div className="text-center">
                      <span className="text-[10px] text-stone-400">
                        *Placeholder demonstrativo. Clique registrado apenas localmente.
                      </span>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
