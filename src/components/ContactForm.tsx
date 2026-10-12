import React, { useState } from 'react';
import { Language, ContactFormData } from '../types';
import { translations } from '../translations';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, ExternalLink, Map } from 'lucide-react';

interface ContactFormProps {
  currentLanguage: Language;
  initialDeparture?: string;
  initialArrival?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  currentLanguage,
  initialDeparture,
  initialArrival,
}) => {
  const t = translations[currentLanguage];

  const defaultMessage = initialDeparture && initialArrival
    ? (currentLanguage === 'fr'
        ? `Bonjour, je souhaite me renseigner pour un transport de marchandises entre ${initialDeparture} et ${initialArrival}.`
        : `السلام عليكم، أود الاستفسار عن نقل البضائع بين ${initialDeparture} و ${initialArrival}.`)
    : '';

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: defaultMessage,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = currentLanguage === 'fr' ? 'Veuillez saisir votre nom.' : 'يرجى إدخال الاسم.';
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = currentLanguage === 'fr' ? 'Veuillez saisir un email valide.' : 'يرجى إدخال بريد إلكتروني صحيح.';
    }
    if (!formData.message.trim()) {
      errs.message = currentLanguage === 'fr' ? 'Veuillez saisir votre message.' : 'يرجى كتابة رسالتكم.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 600);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            {t.contact.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            {currentLanguage === 'fr'
              ? 'Échangez avec l’équipe RempliTrans'
              : 'تواصلوا مباشرة مع فريق رمبلي ترانس'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.contact.sectionSubtitle}
          </p>
        </div>

        {/* 2-Column Layout: Contact Placeholders & Information + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Placeholders & Google Maps Box */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-4">
                {currentLanguage === 'fr' ? 'Coordonnées de l’entreprise' : 'بيانات التواصل الرسمية'}
              </h3>

              <div className="space-y-5 text-sm">
                {/* Téléphone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 block">
                      {t.contact.placeholders.phoneLabel}
                    </span>
                    <span className="font-mono font-semibold text-slate-900 text-base">
                      {t.contact.placeholders.phoneValue}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 block">
                      {t.contact.placeholders.emailLabel}
                    </span>
                    <span className="font-semibold text-slate-900">
                      {t.contact.placeholders.emailValue}
                    </span>
                  </div>
                </div>

                {/* Adresse */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 block">
                      {t.contact.placeholders.addressLabel}
                    </span>
                    <span className="font-semibold text-slate-900">
                      {t.contact.placeholders.addressValue}
                    </span>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {currentLanguage === 'fr' ? 'Maroc' : 'المملكة المغربية'}
                    </p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 block">
                      {t.contact.placeholders.hoursLabel}
                    </span>
                    <span className="font-semibold text-slate-900">
                      {t.contact.placeholders.hoursValue}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder Card as explicitly requested */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 overflow-hidden space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Map className="w-4 h-4 text-blue-700" />
                  <span>{t.contact.mapTitle}</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                  {currentLanguage === 'fr' ? 'Emplacement réservé' : 'موقع مخصص'}
                </span>
              </div>

              {/* Styled Interactive Map Container */}
              <div className="relative rounded-xl overflow-hidden border border-slate-300 aspect-16/9 bg-slate-200 flex flex-col items-center justify-center p-6 text-center shadow-inner">
                {/* Realistic stylised map grid background */}
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 space-y-2 max-w-xs">
                  <div className="w-10 h-10 mx-auto rounded-full bg-blue-700 text-white flex items-center justify-center shadow-md animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-semibold text-slate-800">
                    {currentLanguage === 'fr' ? 'Carte Google Maps interactive' : 'خريطة Google Maps التفاعلية'}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {t.contact.mapPlaceholderNotice}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>Région Grand Casablanca / Rabat</span>
                <span className="font-mono text-slate-400">33.5731° N, 7.5898° W</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xs">
              <h3 className="text-2xl font-bold text-slate-950 mb-2">
                {t.contact.form.title}
              </h3>
              <p className="text-sm text-slate-600 mb-8">
                {currentLanguage === 'fr'
                  ? 'Pour toute question relative à nos prestations ou pour planifier une expédition.'
                  : 'لأي سؤال حول خدماتنا أو لتنظيم شحنتكم المقبلة.'}
              </p>

              {isSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <p className="font-semibold text-sm">{t.contact.form.success}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="text-xs font-semibold text-emerald-700 underline hover:text-emerald-900"
                  >
                    {currentLanguage === 'fr' ? 'Envoyer un autre message' : 'إرسال رسالة أخرى'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Nom */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-900 mb-2">
                      {t.contact.form.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder={t.contact.form.namePlaceholder}
                      className={`w-full px-3.5 py-2.5 bg-slate-50/50 border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-300'
                          : 'border-slate-300 focus:ring-blue-600'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-900 mb-2">
                        {t.contact.form.email} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder={t.contact.form.emailPlaceholder}
                        className={`w-full px-3.5 py-2.5 bg-slate-50/50 border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-300'
                            : 'border-slate-300 focus:ring-blue-600'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-900 mb-2">
                        {t.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="w-full px-3.5 py-2.5 bg-slate-50/50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-900 mb-2">
                      {t.contact.form.message} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder={t.contact.form.messagePlaceholder}
                      className={`w-full px-3.5 py-2.5 bg-slate-50/50 border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-300'
                          : 'border-slate-300 focus:ring-blue-600'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 rounded-lg shadow-xs transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t.contact.form.submitting : t.contact.form.submit}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
