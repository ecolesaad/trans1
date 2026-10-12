import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { ShieldCheck, MapPin, Sliders, UserCheck, ArrowRight, ArrowLeft, Truck } from 'lucide-react';

interface HeroProps {
  currentLanguage: Language;
  onNavigate: (page: PageId) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLanguage, onNavigate }) => {
  const t = translations[currentLanguage];
  const isRtl = currentLanguage === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition, Headlines, CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Visual Kicker / Top Trust Element */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-blue-300 bg-blue-950/80 border border-blue-800/80 px-3.5 py-1.5 rounded-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{currentLanguage === 'fr' ? 'Transport Routier National · Maroc' : 'النقل الطرقي الوطني · المغرب'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>{t.hero.btnContact}</span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </button>
            </div>

            {/* 4 Trust Highlights */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-7 h-7 rounded bg-blue-900/60 border border-blue-700/60 flex items-center justify-center text-blue-400 shrink-0">
                    <Truck className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">{t.hero.badges.national}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-7 h-7 rounded bg-blue-900/60 border border-blue-700/60 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">{t.hero.badges.intercity}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-7 h-7 rounded bg-blue-900/60 border border-blue-700/60 flex items-center justify-center text-blue-400 shrink-0">
                    <Sliders className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">{t.hero.badges.tailored}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-7 h-7 rounded bg-blue-900/60 border border-blue-700/60 flex items-center justify-center text-blue-400 shrink-0">
                    <UserCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">{t.hero.badges.professional}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
              <img
                src="/images/Upscale_image_quality_2K_20261006150418.jpg"
                alt="RempliTrans Transport Routier"
                className="w-full h-auto block object-contain"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
