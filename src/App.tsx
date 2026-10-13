import React, { useState } from 'react';
import { SITE_CONFIG } from './config/siteConfig';
import { PRODUCTS_DATA, ProductItem, ProductCategory } from './data/products';
import { useClickTracker } from './utils/useClickTracker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ThreePathsSection } from './components/ThreePathsSection';
import { HowToChooseSection } from './components/HowToChooseSection';
import { CatalogSection } from './components/CatalogSection';
import { EducationAndEvidenceSection } from './components/EducationAndEvidenceSection';
import { CommercialFunnelSection } from './components/CommercialFunnelSection';
import { BridgesPanelSection } from './components/BridgesPanelSection';
import { EditorialSection } from './components/EditorialSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ClickTrackerModal } from './components/ClickTrackerModal';
import { CommercialTransparencyFooter } from './components/CommercialTransparencyFooter';
import { CheckCircle2, ShieldCheck, ArrowUp } from 'lucide-react';

export default function App() {
  const { clickCount, clickHistory, registerDemonstrativeClick, resetLocalClicks } = useClickTracker();
  
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [selectedCatalogCategory, setSelectedCatalogCategory] = useState<ProductCategory | 'todas'>('todas');
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<ProductItem | null>(null);
  const [isClickTrackerOpen, setIsClickTrackerOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectPathCategory = (category: ProductCategory) => {
    setSelectedCatalogCategory(category);
    setActiveSection('catalogo');
    const el = document.getElementById('catalogo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectProductById = (productId: string) => {
    const found = PRODUCTS_DATA.find(p => p.id === productId);
    if (found) {
      setSelectedProductForDetail(found);
    }
  };

  const handleRegisterClick = (product: ProductItem) => {
    registerDemonstrativeClick(product.id, product.name, product.collectionLabel);
    setToastMessage(`Clique demonstrativo registrado para "${product.name}". (Lembrete: clique não é compra nem comissão).`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F7] text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Barra de Navegação Superior */}
      <Navbar
        clickCount={clickCount}
        onOpenClickTracker={() => setIsClickTrackerOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        
        {/* Seção 1: Início / Hero com Tagline e Propósito */}
        <div id="inicio">
          <Hero onNavigate={handleNavigate} />
        </div>

        {/* Seção 2: Como Funciona - Linha do Tempo do Funil Comercial */}
        <CommercialFunnelSection
          localClickCount={clickCount}
          onOpenClickTrackerModal={() => setIsClickTrackerOpen(true)}
        />

        {/* Seção 3: Os Três Caminhos (Casa, Sono Protegido, Campo) */}
        <ThreePathsSection
          onSelectCategory={handleSelectPathCategory}
          onNavigateToEdu={() => handleNavigate('educacao')}
        />

        {/* Seção 4: Como Escolher (Matriz de Decisão por Cenário) */}
        <HowToChooseSection
          onSelectProductById={handleSelectProductById}
        />

        {/* Seção 5: Catálogo Demonstrativo com Selo de Afiliado */}
        <CatalogSection
          selectedCategory={selectedCatalogCategory}
          onSelectCategory={setSelectedCatalogCategory}
          onOpenProductDetails={(prod) => setSelectedProductForDetail(prod)}
          onRegisterClick={handleRegisterClick}
        />

        {/* Seção 6: Painel de Próximas Pontes (AGORA, PRÓXIMO, FUTURO, PESQUISA) */}
        <BridgesPanelSection />

        {/* Seção 7: Planejamento Editorial (Cartões de Pauta) */}
        <EditorialSection />

        {/* Seção 8: Educação & Evidências Científicas */}
        <EducationAndEvidenceSection />

      </main>

      {/* Rodapé de Transparência Comercial */}
      <CommercialTransparencyFooter />

      {/* Modal de Detalhes e Limitações do Produto */}
      <ProductDetailModal
        product={selectedProductForDetail}
        onClose={() => setSelectedProductForDetail(null)}
        onRegisterClick={handleRegisterClick}
      />

      {/* Modal do Rastreador Demonstrativo de Cliques */}
      <ClickTrackerModal
        isOpen={isClickTrackerOpen}
        onClose={() => setIsClickTrackerOpen(false)}
        clickCount={clickCount}
        clickHistory={clickHistory}
        onReset={resetLocalClicks}
      />

      {/* Toast Flutuante de Feedback do Clique Demonstrativo */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 max-w-sm bg-stone-900 text-white p-3.5 rounded-2xl shadow-xl border border-stone-700 flex items-start gap-2.5 text-xs animate-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-bold text-emerald-300 block text-[11px] uppercase tracking-wider">
              Simulação de Interface Local
            </span>
            <p className="text-stone-300 mt-0.5 leading-snug">
              {toastMessage}
            </p>
          </div>
        </div>
      )}

      {/* Botão de Rolar para o Topo (Acessibilidade Mobile) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 left-5 z-30 p-2.5 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white shadow-md border border-stone-700 transition-all cursor-pointer hidden sm:block"
        aria-label="Voltar ao início da página"
        title="Voltar ao início da página"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </div>
  );
}
