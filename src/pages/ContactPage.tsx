import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageSquareQuote } from 'lucide-react';

interface ContactPageProps {
  currentLanguage: Language;
  onNavigate: (page: PageId) => void;
  selectedRoute?: { departure?: string; arrival?: string };
}

export const ContactPage: React.FC<ContactPageProps> = ({
  currentLanguage,
  onNavigate,
  selectedRoute,
}) => {
  const t = translations[currentLanguage];

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            {t.contact.sectionTitle}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            {currentLanguage === 'fr'
              ? 'Contactez RempliTrans'
              : 'اتصل بشركة رمبلي ترانس'}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.contact.sectionSubtitle}
          </p>
        </div>

        {/* Contact Form and Placeholders */}
        <ContactForm
          currentLanguage={currentLanguage}
          initialDeparture={selectedRoute?.departure}
          initialArrival={selectedRoute?.arrival}
        />

      </div>
    </div>
  );
};
