import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ShieldCheck, Menu, X, MousePointerClick, Info } from 'lucide-react';

interface NavbarProps {
  clickCount: number;
  onOpenClickTracker: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  clickCount,
  onOpenClickTracker,
  activeSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'como-funciona', label: 'Como Funciona' },
    { id: 'caminhos', label: '3 Caminhos' },
    { id: 'como-escolher', label: 'Como Escolher' },
    { id: 'catalogo', label: 'Catálogo' },
    { id: 'proximas-pontes', label: 'Próximas Pontes' },
    { id: 'editorial', label: 'Editorial' },
    { id: 'educacao', label: 'Evidências' },
    { id: 'transparencia', label: 'Transparência' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-stone-800 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Nome Centralizado */}
          <button 
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg p-1 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-inner group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/80 px-2 py-0.5 rounded">
                  Protótipo
                </span>
              </div>
              <p className="text-xs text-stone-400 hidden sm:block truncate max-w-xs">
                Prevenção e adaptação ambiental
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-stone-800 text-emerald-300 font-semibold'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Click Counter Chip (Demonstrative) + Mobile Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenClickTracker}
              title="Ver contador demonstrativo local de cliques no navegador"
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 bg-stone-800/90 hover:bg-stone-700/90 border border-stone-700 text-stone-200 rounded-lg text-xs transition-colors cursor-pointer group"
            >
              <MousePointerClick className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline text-stone-400 text-[11px]">Cliques locais:</span>
              <span className="font-mono font-bold text-emerald-400 bg-stone-900 px-1.5 py-0.5 rounded text-xs">
                {clickCount}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-amber-300 bg-amber-950/60 px-1 rounded border border-amber-800/60">
                Demo
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-4 pt-3 pb-5 space-y-2 animate-in fade-in duration-150">
          <div className="p-2.5 mb-2 bg-stone-900 rounded-lg border border-stone-800 flex items-start gap-2 text-xs text-stone-400">
            <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p>
              Iniciativa independente de curadoria e acesso para autonomia e adaptação ambiental.
            </p>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-emerald-950/80 text-emerald-300 font-semibold border-l-4 border-emerald-500'
                  : 'text-stone-200 hover:bg-stone-900 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
