import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { FileText, ArrowLeft, ArrowRight, Scale } from 'lucide-react';

interface TermsPageProps {
  currentLanguage: Language;
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ currentLanguage, onNavigate }) => {
  const t = translations[currentLanguage].termsOfService;
  const isRtl = currentLanguage === 'ar';
  const ArrowIcon = isRtl ? ArrowRight : ArrowLeft;

  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation back */}
        <button
          onClick={() => {
            onNavigate('accueil');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors"
        >
          <ArrowIcon className="w-4 h-4" />
          <span>{currentLanguage === 'fr' ? 'Retour à l\'accueil' : 'العودة إلى الرئيسية'}</span>
        </button>

        {/* Header */}
        <div className="space-y-3 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-2 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>{currentLanguage === 'fr' ? 'Cadre Légal & Réglementaire' : 'الإطار القانوني والتنظيمي'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {t.title}
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            {t.lastUpdated}
          </p>
        </div>

        {/* Intro */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs text-slate-700 text-sm leading-relaxed">
          <p>{t.intro}</p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-2xs">
          {t.sections.map((section, idx) => (
            <div key={idx} className="space-y-3 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
              <h2 className="text-lg font-bold text-slate-900">
                {section.heading}
              </h2>
              <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-900 leading-relaxed text-center">
          <p>
            {currentLanguage === 'fr'
              ? 'Document préparé avec des espaces réservés [À REMPLACER] prêts à être complétés par la direction de RempliTrans lors de son immatriculation définitive.'
              : 'تم إعداد هذه الوثيقة ببيانات مخصصة [À REMPLACER] مهيأة لتعبئتها من قِبل إدارة شركة رمبلي ترانس عند الإيداع القانوني النهائي.'}
          </p>
        </div>

      </div>
    </div>
  );
};
