import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { ShieldCheck, ArrowLeft, ArrowRight, Lock, FileText } from 'lucide-react';

interface PrivacyPolicyPageProps {
  currentLanguage: Language;
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  currentLanguage,
  onNavigate,
}) => {
  const t = translations[currentLanguage].privacyPolicy;
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
            <Lock className="w-4 h-4" />
            <span>{currentLanguage === 'fr' ? 'Protection des Données Personnelles' : 'حماية المعطيات ذات الطابع الشخصي'}</span>
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

        {/* Policy Sections */}
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

        {/* Bottom Note */}
        <div className="text-xs text-slate-500 text-center pt-4">
          <p>
            {currentLanguage === 'fr'
              ? 'RempliTrans.com – Conforme aux dispositions de la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP - Loi 09-08).'
              : 'RempliTrans.com – مطابق لمقتضيات اللجنة الوطنية لمراقبة حماية المعطيات ذات الطابع الشخصي (CNDP - القانون 09-08).'}
          </p>
        </div>

      </div>
    </div>
  );
};
