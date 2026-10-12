import React, { useState, useEffect } from 'react';
import { Language, PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');
  const [currentPage, setCurrentPage] = useState<PageId>('accueil');
  const [selectedRoute, setSelectedRoute] = useState<{ departure?: string; arrival?: string } | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync document language and text direction (RTL for Arabic)
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [currentLanguage]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId, params?: { departure?: string; arrival?: string }) => {
    setCurrentPage(page);
    if (params) {
      setSelectedRoute(params);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'accueil' && (
          <HomePage
            currentLanguage={currentLanguage}
            onNavigate={handleNavigate}
            selectedRoute={selectedRoute}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            currentLanguage={currentLanguage}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'apropos' && (
          <AboutPage
            currentLanguage={currentLanguage}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            currentLanguage={currentLanguage}
            onNavigate={handleNavigate}
            selectedRoute={selectedRoute}
          />
        )}
        {currentPage === 'politique' && (
          <PrivacyPolicyPage
            currentLanguage={currentLanguage}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'conditions' && (
          <TermsPage
            currentLanguage={currentLanguage}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        currentLanguage={currentLanguage}
        onNavigate={handleNavigate}
      />

      {/* Back to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 text-white shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={currentLanguage === 'fr' ? 'Haut de page' : 'أعلى الصفحة'}
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
