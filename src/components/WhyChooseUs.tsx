import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { CheckCircle2, Shield, Globe2, Sparkles, Headphones } from 'lucide-react';

interface WhyChooseUsProps {
  currentLanguage: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  const icons = [
    <Shield key="shield" className="w-5 h-5 text-blue-700" />,
    <Globe2 key="globe" className="w-5 h-5 text-blue-700" />,
    <Sparkles key="sparkles" className="w-5 h-5 text-blue-700" />,
    <Headphones key="headphones" className="w-5 h-5 text-blue-700" />,
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            {t.whyUs.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            {currentLanguage === 'fr'
              ? 'Un partenaire de transport routier sérieux et engagé'
              : 'شريك موثوق وملتزم لنقل بضائعكم عبر الطرق'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.whyUs.sectionSubtitle}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.items.map((item, index) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-start space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100/70 flex items-center justify-center">
                {icons[index]}
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                « {item.description} »
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
