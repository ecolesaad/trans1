import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { Truck, Building2, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Clock, Phone } from 'lucide-react';

interface ServicesPageProps {
  currentLanguage: Language;
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ currentLanguage, onNavigate }) => {
  const t = translations[currentLanguage];
  const isRtl = currentLanguage === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const [imgError, setImgError] = useState(false);

  const services = [
    {
      id: 'goods_transport',
      title: t.services.list[0].title,
      description: t.services.list[0].description,
      details: t.services.list[0].details,
      icon: <Truck className="w-7 h-7 text-blue-700" strokeWidth={2.2} />,
      badge: currentLanguage === 'fr' ? 'Service Essentiel' : 'الخدمة الأساسية',
      featuresFr: [
        'Acheminement sécurisé par voie routière entre les villes du Maroc',
        'Contrôle rigoureux et respect des conditions de chargement et déchargement',
        'Chauffeurs routiers professionnels maîtrisant le réseau national',
        'Suivi direct et régulier de l\'état d\'avancement de la cargaison',
      ],
      featuresAr: [
        'نقل طرقي آمن بين مختلف المدن والمناطق المغربية',
        'فحص دقيق ومراقبة صارمة لظروف التحميل والتفريغ',
        'سائقون مهنيون ذوو خبرة واسعة في شبكة الطرق الوطنية',
        'متابعة مباشرة ومستمرة لحالة ومسار الشحنة',
      ],
    },
    {
      id: 'business_transport',
      title: t.services.list[1].title,
      description: t.services.list[1].description,
      details: t.services.list[1].details,
      icon: <Building2 className="w-7 h-7 text-blue-700" strokeWidth={2.2} />,
      badge: currentLanguage === 'fr' ? 'B2B & Professionnels' : 'للشركات والمهنيين',
      featuresFr: [
        'Accompagnement dédié aux PME, distributeurs et professionnels',
        'Organisation des flux logistiques réguliers ou transferts inter-sites',
        'Flexibilité adaptée à vos plannings de production et réassorts',
        'Interlocuteur logistique unique pour vos demandes et opérations',
      ],
      featuresAr: [
        'مواكبة مخصصة للمقاولات والتجار والمؤسسات الصناعية',
        'تنظيم التدفقات اللوجستية المنتظمة ونقل المخزونات بين المقرات',
        'مرونة توافق جداول الإنتاج ومواعيد العمل لديكم',
        'مخاطب لوجستي موحد لإدارة ومتابعة كافة طلبياتكم',
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Banner */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            {t.services.sectionTitle}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            {currentLanguage === 'fr'
              ? 'Nos solutions de transport routier au Maroc'
              : 'خدمات النقل الطرقي للبضائع في المغرب'}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.services.sectionSubtitle}
          </p>
        </div>

        {/* Visual Showcase Card */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 aspect-16/7 sm:aspect-21/9">
          {!imgError ? (
            <img
              src="/images/logistics_warehouse_trucks.jpg"
              alt="Plateforme logistique et camions de transport RempliTrans"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-slate-900 flex items-center justify-center p-8 text-white">
              <Truck className="w-12 h-12 text-blue-400" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-lg font-bold">RempliTrans Logistique Routière</p>
              <p className="text-xs text-slate-300">
                {currentLanguage === 'fr' ? 'Organisation logistique entre villes marocaines' : 'تنظيم لوجستي متكامل بين المدن المغربية'}
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-colors shadow-xs"
            >
              <span>{t.hero.btnContact}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* The 2 Services Cards - Clean & Distinctive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((srv, index) => {
            const features = currentLanguage === 'fr' ? srv.featuresFr : srv.featuresAr;

            return (
              <div
                key={srv.id}
                className="p-8 sm:p-10 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-8"
              >
                <div className="space-y-6">
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div className="w-14 h-14 rounded-xl bg-blue-100/70 border border-blue-200 flex items-center justify-center">
                      {srv.icon}
                    </div>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Titles */}
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-slate-950">
                      {srv.title}
                    </h2>
                    <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                      « {srv.description} »
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.details}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    {features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    RempliTrans Service 0{index + 1}
                  </span>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors shadow-xs"
                  >
                    <span>{t.services.requestQuoteAction}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practical Note Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-blue-50/80 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-lg font-bold text-blue-950">
              {currentLanguage === 'fr' ? 'Besoin d’un transport adapté ?' : 'هل تحتاجون إلى خدمة نقل مخصصة ؟'}
            </h3>
            <p className="text-sm text-blue-900 leading-relaxed">
              {currentLanguage === 'fr'
                ? 'Indiquez-nous les détails de vos marchandises, itinéraires et créneaux. Notre équipe logistique est à votre disposition pour vous répondre rapidement.'
                : 'حددوا لنا تفاصيل شحناتكم، المسار المرغوب والمواعيد. وسيتولى فريقنا التواصل معكم في أسرع وقت.'}
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors shadow-xs"
          >
            {t.hero.btnContact}
          </button>
        </div>

      </div>
    </div>
  );
};
