import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { Truck, Building2, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface ServicesSectionProps {
  currentLanguage: Language;
  onNavigate: (page: PageId) => void;
  showAllDetails?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLanguage,
  onNavigate,
}) => {
  const t = translations[currentLanguage];
  const isRtl = currentLanguage === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const serviceHighlights = [
    {
      featuresFr: [
        'Acheminement sécurisé et respect strict des cargaisons',
        'Contrôle rigoureux des délais de départ et de livraison',
        'Chauffeurs professionnels sur l\'ensemble du réseau routier marocain',
      ],
      featuresAr: [
        'نقل آمن وحرص تام على سلامة الشحنات',
        'التزام دقيق بمواعيد الانطلاق والتسليم',
        'سائقون محترفون ملمون بكافة محاور الطرق المغربية',
      ],
    },
    {
      featuresFr: [
        'Solutions sur mesure pour flux réguliers de professionnels et PME',
        'Optimisation des transferts de stocks et réassorts interurbains',
        'Interlocuteur unique pour la coordination de vos expéditions',
      ],
      featuresAr: [
        'حلول مخصصة للشحنات المنتظمة للشركات والمقاولات',
        'تسهيل تدبير المخزونات والتوزيع بين المدن',
        'مخاطب لوجستي موحد لتنسيق ومتابعة عمليات النقل',
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            {t.services.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            {currentLanguage === 'fr'
              ? 'Nos deux solutions phares de transport routier'
              : 'خدماتنا الأساسية في النقل الطرقي بالمغرب'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.services.sectionSubtitle}
          </p>
        </div>

        {/* Clean 2-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {t.services.list.map((service, index) => {
            const isFirst = index === 0;
            const Icon = isFirst ? Truck : Building2;
            const highlights = currentLanguage === 'fr'
              ? serviceHighlights[index].featuresFr
              : serviceHighlights[index].featuresAr;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
                      <Icon className="w-6 h-6" strokeWidth={2.2} />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Core Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">
                      « {service.description} »
                    </p>
                    {service.details && (
                      <p className="text-xs text-slate-500 leading-relaxed pt-1">
                        {service.details}
                      </p>
                    )}
                  </div>

                  {/* Clean Feature Points */}
                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    {highlights.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    {currentLanguage === 'fr' ? 'RempliTrans Maroc' : 'رمبلي ترانس المغرب'}
                  </span>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="group inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors shadow-xs"
                  >
                    <span>{t.services.requestQuoteAction}</span>
                    <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Notice */}
        <div className="mt-12 p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-blue-900 font-medium">
            {t.services.notice}
          </p>
        </div>

      </div>
    </section>
  );
};
