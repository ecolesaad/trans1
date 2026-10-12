import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { Menu, X, Globe, Truck, Phone } from 'lucide-react';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLanguage];

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'accueil', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'apropos', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single text element wordmark with clean subtle icon */}
          <button
            onClick={() => handleNavClick('accueil')}
            className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
            aria-label="RempliTrans - Accueil"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
              <Truck className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-950 font-sans">
              Rempli<span className="text-blue-700">Trans</span>
            </span>
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-2 transition-colors duration-150 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded ${
                    isActive ? 'text-blue-700 font-semibold' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary actions (Language switcher + CTA button) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Selector */}
            <div
              className="flex items-center border border-slate-200 rounded-lg p-1 bg-slate-50 text-xs font-medium"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => onLanguageChange('fr')}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                  currentLanguage === 'fr'
                    ? 'bg-white text-blue-800 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Français"
              >
                Français
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('ar')}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                  currentLanguage === 'ar'
                    ? 'bg-white text-blue-800 shadow-xs font-semibold font-arabic'
                    : 'text-slate-600 hover:text-slate-900 font-arabic'
                }`}
                title="العربية"
              >
                العربية
              </button>
            </div>

            {/* Primary Contact CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-xs transition-colors duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              {t.hero.btnContact}
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onLanguageChange(currentLanguage === 'fr' ? 'ar' : 'fr')}
              className="px-2.5 py-1 text-xs font-semibold border border-slate-200 rounded-md text-blue-700 bg-slate-50"
              aria-label="Changer de langue"
            >
              {currentLanguage === 'fr' ? 'العربية' : 'Français'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Menu principal"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-start px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  currentPage === link.id
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-600 px-1">
              <span className="flex items-center gap-1.5 font-medium">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                {currentLanguage === 'fr' ? 'Langue / اللغة :' : 'اللغة / Langue :'}
              </span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => onLanguageChange('fr')}
                  className={`px-3 py-1 rounded text-xs ${
                    currentLanguage === 'fr' ? 'bg-blue-700 text-white font-medium' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  Français
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('ar')}
                  className={`px-3 py-1 rounded text-xs ${
                    currentLanguage === 'ar' ? 'bg-blue-700 text-white font-medium' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  العربية
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-xs transition-colors"
            >
              {t.hero.btnContact}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
