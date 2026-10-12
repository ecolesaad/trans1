import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { Send, FileText, CalendarCheck2, ArrowRight, ArrowLeft } from 'lucide-react';

interface HowItWorksProps {
  currentLanguage: Language;
  onNavigate: (page: PageId) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLanguage, onNavigate }) => {
  const t = translations[currentLanguage];
  const isRtl = currentLanguage === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const stepIcons = [
    <Send key="1" className="w-5 h-5 text-white" />,
    <FileText key="2" className="w-5 h-5 text-white" />,
    <CalendarCheck2 key="3" className="w-5 h-5 text-white" />,
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            {t.howItWorks.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {currentLanguage === 'fr'
              ? 'Votre transport de marchandises planifié en toute simplicité'
              : 'تنظيم نقل بضائعكم بكل سهولة ووضوح'}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.howItWorks.sectionSubtitle}
          </p>
        </div>

        {/* 3 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {t.howItWorks.steps.map((item, index) => (
            <div
              key={item.step}
              className="relative p-8 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-xs">
                    {stepIcons[index]}
                  </div>
                  <span className="text-3xl font-extrabold text-slate-600/80 font-mono">
                    0{item.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white pt-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  « {item.description} »
                </p>
              </div>

              {/* Progress link or visual cue */}
              <div className="mt-8 pt-4 border-t border-slate-700/60 text-xs text-blue-400 font-medium">
                {index === 0 && (currentLanguage === 'fr' ? 'Formulaire en ligne ou contact direct' : 'استمارة رقمية أو اتصال مباشر')}
                {index === 1 && (currentLanguage === 'fr' ? 'Étude logistique et tarif adapté' : 'دراسة لوجستية وتسعيرة مخصصة')}
                {index === 2 && (currentLanguage === 'fr' ? 'Mise à disposition du camion et suivi' : 'توفير الشاحنة وتتبع الشحن')}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action bar */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <span>{currentLanguage === 'fr' ? 'Nous contacter pour votre transport' : 'تواصل معنا لتنظيم شحنتك'}</span>
            <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
