import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { MOROCCAN_CITIES, getEstimatedDistance } from '../data/cities';
import { MapPin, Navigation, ArrowRight, ArrowLeft, Info, CheckCircle2 } from 'lucide-react';

interface ServiceAreasProps {
  currentLanguage: Language;
  onNavigate: (page: PageId, params?: { departure?: string; arrival?: string }) => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ currentLanguage, onNavigate }) => {
  const t = translations[currentLanguage];
  const isRtl = currentLanguage === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [depCity, setDepCity] = useState<string>('casablanca');
  const [arrCity, setArrCity] = useState<string>('tanger');

  const selectedDep = MOROCCAN_CITIES.find((c) => c.id === depCity);
  const selectedArr = MOROCCAN_CITIES.find((c) => c.id === arrCity);

  const distanceKm = getEstimatedDistance(depCity, arrCity);

  // Approximate transit hours for freight trucks on highways (~70km/h average freight speed)
  const estimatedHours = distanceKm ? Math.ceil((distanceKm / 70) * 1.2) : null;

  const handleSendToQuote = () => {
    const depName = currentLanguage === 'fr' ? selectedDep?.nameFr : selectedDep?.nameAr;
    const arrName = currentLanguage === 'fr' ? selectedArr?.nameFr : selectedArr?.nameAr;
    onNavigate('contact', { departure: depName, arrival: arrName });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            {t.serviceAreas.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            {currentLanguage === 'fr'
              ? 'Liaisons régulières entre métropoles marocaines'
              : 'ربط طرقي موثوق بين الحواضر المغربية'}
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            « {t.serviceAreas.sectionSubtitle} »
          </p>
        </div>

        {/* 2-Part Layout: Moroccan Cities List + Interactive Route Checker */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Highlighted Cities Cards */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-700" />
              <span>{t.serviceAreas.hubsTitle}</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {t.serviceAreas.citiesList.map((cityName) => (
                <div
                  key={cityName}
                  className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/70 hover:bg-blue-50/50 hover:border-blue-300 transition-colors text-center"
                >
                  <span className="text-sm font-bold text-slate-900 block">
                    {cityName}
                  </span>
                  <span className="text-[11px] text-slate-600 block mt-1">
                    {currentLanguage === 'fr' ? 'Pôle de transit' : 'قطب شحن'}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {t.serviceAreas.customRouteNotice}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Route & Transit Availability Box */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-lg bg-blue-700 text-white flex items-center justify-center">
                <Navigation className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {t.serviceAreas.interactiveTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {t.serviceAreas.selectDeparture}
                </label>
                <select
                  value={depCity}
                  onChange={(e) => setDepCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {MOROCCAN_CITIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {currentLanguage === 'fr' ? c.nameFr : c.nameAr}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {t.serviceAreas.selectArrival}
                </label>
                <select
                  value={arrCity}
                  onChange={(e) => setArrCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {MOROCCAN_CITIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {currentLanguage === 'fr' ? c.nameFr : c.nameAr}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Distance and Transit Result */}
            {depCity === arrCity ? (
              <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800">
                {t.serviceAreas.sameCityWarning}
              </div>
            ) : (
              <div className="mt-6 p-5 rounded-xl bg-white border border-slate-200 space-y-4">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500">{t.serviceAreas.approxDistance} :</span>
                  <span className="font-bold text-slate-900 font-mono">
                    {distanceKm ? `${distanceKm} km` : (currentLanguage === 'fr' ? 'À confirmer selon itinéraire' : 'يحدد وفق المسار')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm pt-2 border-t border-slate-100">
                  <span className="text-slate-500">{t.serviceAreas.transitWindow} :</span>
                  <span className="font-semibold text-blue-700">
                    {distanceKm && estimatedHours
                      ? (currentLanguage === 'fr' ? `Env. ${estimatedHours}h à 24h` : `حوالي ${estimatedHours} إلى 24 ساعة`)
                      : (currentLanguage === 'fr' ? 'Selon disponibilité de flotte' : 'حسب جاهزية الشاحنات')}
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSendToQuote}
                    className="w-full group inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
                  >
                    <span>{t.serviceAreas.sendToQuote}</span>
                    <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
