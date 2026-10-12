import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { HowItWorks } from '../components/HowItWorks';
import { ServiceAreas } from '../components/ServiceAreas';
import { ArrowRight, ArrowLeft, Shield, Clock, Award, Phone } from 'lucide-react';

interface HomePageProps {
  currentLanguage: Language;
  onNavigate: (page: PageId, params?: { departure?: string; arrival?: string }) => void;
  selectedRoute?: { departure?: string; arrival?: string };
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLanguage,
  onNavigate,
  selectedRoute,
}) => {
  const t = translations[currentLanguage];
  const isRtl = currentLanguage === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero currentLanguage={currentLanguage} onNavigate={onNavigate} />

      {/* 2. Why Choose Us Section */}
      <WhyChooseUs currentLanguage={currentLanguage} />

      {/* 4. How It Works Section */}
      <HowItWorks currentLanguage={currentLanguage} onNavigate={onNavigate} />

      {/* 5. Service Areas Section */}
      <ServiceAreas currentLanguage={currentLanguage} onNavigate={onNavigate} />

      {/* 6. About RempliTrans Presentation Banner */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                {t.about.sectionTitle}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {currentLanguage === 'fr'
                  ? 'Un transporteur routier dédié à vos échanges interurbains'
                  : 'ناقل طرقي مخصص لمبادلاتكم التجارية بين المدن'}
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                « {t.about.mainText} »
              </p>

              {/* Owner Attribution */}
              <div className="pt-2 flex items-center gap-3 border-t border-slate-800">
                <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center font-bold text-blue-400 text-sm shrink-0">
                  AG
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">
                    {t.about.ownerName}
                  </span>
                  <span className="text-xs text-blue-400 block">
                    {t.about.ownerRole}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('apropos')}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  <span>{currentLanguage === 'fr' ? 'En savoir plus sur RempliTrans' : 'المزيد عن رمبلي ترانس'}</span>
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                >
                  {t.nav.contact}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
