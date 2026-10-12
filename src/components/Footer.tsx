import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { Truck, Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  currentLanguage: Language;
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLanguage, onNavigate }) => {
  const t = translations[currentLanguage];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Truck className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Rempli<span className="text-blue-400">Trans</span>
              </span>
            </div>
            
            <p className="text-sm font-medium text-blue-400">
              {t.footer.brandDesc}
            </p>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              {currentLanguage === 'fr'
                ? 'Solutions professionnelles de transport routier de marchandises reliant les principales villes et régions économiques du Maroc.'
                : 'حلول نقل طرقي احترافية للبضائع تربط بين مختلف المدن والمناطق الاقتصادية الرئيسية في المملكة المغربية.'}
            </p>
            
            <div className="text-xs text-slate-400 pt-1">
              <span className="inline-block px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                {t.meta.domain}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleLinkClick('accueil')}
                  className="hover:text-blue-400 transition-colors text-start"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-blue-400 transition-colors text-start"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('apropos')}
                  className="hover:text-blue-400 transition-colors text-start"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-blue-400 transition-colors text-start"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Privacy */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleLinkClick('politique')}
                  className="hover:text-blue-400 transition-colors text-start flex items-center gap-1"
                >
                  {t.nav.privacy}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('conditions')}
                  className="hover:text-blue-400 transition-colors text-start flex items-center gap-1"
                >
                  {t.nav.terms}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </button>
              </li>
            </ul>
            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
              <span className="font-semibold text-slate-300 block mb-1">
                {currentLanguage === 'fr' ? 'Engagement Qualité' : 'التزام بالجودة'}
              </span>
              {currentLanguage === 'fr'
                ? 'Flotte adaptée aux exigences de sécurité routière et respect des délais d’acheminement.'
                : 'أسطول ملائم لمعايير السلامة الطرقية والتزام صارم بآجال التسليم المحددة.'}
            </div>
          </div>

          {/* Col 4: Contact Information Placeholders */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">{t.contact.placeholders.phoneLabel}</span>
                  <span className="font-mono text-slate-200">{t.contact.placeholders.phoneValue}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">{t.contact.placeholders.emailLabel}</span>
                  <span className="text-slate-200">{t.contact.placeholders.emailValue}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">{t.contact.placeholders.addressLabel}</span>
                  <span className="text-slate-200">{t.contact.placeholders.addressValue}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">{t.contact.placeholders.hoursLabel}</span>
                  <span className="text-slate-200">{t.contact.placeholders.hoursValue}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>{t.meta.copyright}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('politique')}
              className="hover:text-slate-200 transition-colors"
            >
              {t.nav.privacy}
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => handleLinkClick('conditions')}
              className="hover:text-slate-200 transition-colors"
            >
              {t.nav.terms}
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span>RempliTrans.com</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
