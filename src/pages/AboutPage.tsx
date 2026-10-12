import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { Truck, ShieldCheck, MapPin, Target, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  currentLanguage: Language;
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ currentLanguage, onNavigate }) => {
  const t = translations[currentLanguage];
  const isRtl = currentLanguage === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Title */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            {t.about.sectionTitle}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            {currentLanguage === 'fr'
              ? 'Le partenaire de vos flux routiers au Maroc'
              : 'شريككم الموثوق في النقل الطرقي بالمغرب'}
          </h1>
        </div>

        {/* Presentation Block with authentic text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/70 border border-blue-100 text-slate-900">
              <p className="text-lg sm:text-xl font-medium leading-relaxed">
                « {t.about.mainText} »
              </p>
            </div>

            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                {currentLanguage === 'fr'
                  ? 'Implantée au Maroc, RempliTrans a pour vocation de simplifier l’acheminement de marchandises diverses par route. Nous mettons un point d’honneur à respecter les marchandises confiées, en assurant un arrimage soigné et une conduite professionnelle sur l’ensemble du réseau routier national.'
                  : 'تتطلع شركة رمبلي ترانس إلى تيسير نقل مختلف أصناف البضائع عبر الطرق الوطنية في المغرب، واضعة سلامة الشحنات واحترام المواعيد في صلب أولوياتها اليومية مع قيادة احترافية تراعي شروط السلامة.'}
              </p>
              <p>
                {currentLanguage === 'fr'
                  ? 'Que vous soyez une entreprise à la recherche d’une solution d’approvisionnement entre deux villes ou un client particulier ayant un besoin de transport spécifique, nous étudions chaque trajet pour vous proposer les meilleures conditions de transport.'
                  : 'سواء كنتم مقاولة تبحث عن حل لتدبير تدفقاتها التجارية بين مدينتين، أو زبوناً لديه حاجة نقل خاصة، فإننا ندرس كل مسار بعناية لنقدم لكم أفضل الشروط اللوجستية المتاحة.'}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors shadow-xs"
              >
                <span>{t.nav.contact}</span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right: Authentic Truck on Highway Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 aspect-16/10 sm:aspect-16/9 lg:aspect-4/3">
              {!imgError ? (
                <img
                  src="/images/Upscale_image_quality_2K_20261006150418.jpg"
                  alt="Camion Scania RempliTrans sur autoroute marocaine"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('about_remplitrans_truck.jpg')) {
                      target.src = '/images/about_remplitrans_truck.jpg';
                    } else {
                      setImgError(true);
                    }
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8 bg-slate-900 text-white">
                  <Truck className="w-12 h-12 text-blue-400" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                <p className="font-semibold">RempliTrans.com</p>
                <p className="text-slate-300">{t.footer.brandDesc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Commitments */}
        <div className="space-y-6 pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950">
            {t.about.valuesTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.values.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100/70 flex items-center justify-center text-blue-700">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Direction & Fondateur : Abdeljabar Guerrab */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-slate-50 border border-blue-200 shadow-2xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-extrabold text-xl shadow-md shrink-0">
                AG
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
                  {t.about.ownerTitle}
                </span>
                <h3 className="text-2xl font-bold text-slate-950">
                  {t.about.ownerName}
                </h3>
                <p className="text-sm font-semibold text-slate-600">
                  {t.about.ownerRole}
                </p>
              </div>
            </div>

            <div className="md:max-w-md bg-white p-5 rounded-xl border border-blue-100 shadow-2xs">
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                {t.about.ownerQuote}
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            {t.about.missionTitle}
          </span>
          <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed max-w-4xl">
            {t.about.missionText}
          </p>
        </div>

      </div>
    </div>
  );
};
