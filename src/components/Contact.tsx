import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface ContactProps {
  language: string;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const { t } = useTranslation(language);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: t('contact.phone'),
      value: '+49 1633362638',
      gradient: 'from-emerald-400 to-sky-500',
      isPhone: true
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: t('contact.email'),
      value: 'info@reiseziel-kroatien.de',
      gradient: 'from-sky-400 to-rose-500',
      isPhone: false
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t('contact.address'),
      value: 'Bilice, Šibenik, Hrvatska',
      gradient: 'from-rose-400 to-emerald-500',
      isPhone: false,
      isAddress: true
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ovdje možete dodati logiku za slanje forme
    alert(language === 'hr' ? 'Poruka je poslana!' : language === 'en' ? 'Message sent!' : 'Nachricht gesendet!');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-sky-50 via-white to-rose-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-rose-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-500 via-sky-600 to-rose-500 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-xl text-emerald-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-slate-700 mb-8">
              {t('contact.info')}
            </h3>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-slate-400/20 backdrop-blur-md rounded-2xl p-6 border border-slate-400/30 shadow-xl transform-gpu hover:scale-105 transition-all duration-500 hover:shadow-2xl"
                style={{
                  animation: `slideInLeft 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-lg transform-gpu group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-slate-700 font-semibold mb-1">{info.label}</h4>
                    {info.isPhone ? (
                      <a 
                        href={`tel:+491633362638`}
                        className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300 cursor-pointer hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : info.label === t('contact.email') ? (
                      <a 
                        href={`mailto:${info.value}`}
                        className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300 cursor-pointer hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : info.isAddress ? (
                      <a 
                        href="https://www.google.com/maps/place/Bilice,+Croatia/@43.8167,15.8833,15z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300 cursor-pointer hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-emerald-600">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Business Hours */}
            <div className="bg-slate-400/20 backdrop-blur-md rounded-2xl p-6 border border-slate-400/30 shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-slate-700 font-semibold text-lg">
                  {t('contact.hours')}
                </h4>
              </div>
              <div className="text-emerald-600 space-y-1">
                <p>{t('contact.weekdays')}</p>
                <p>{t('contact.weekend')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-slate-400/30 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-700">Reiseziel Hrvatska</h4>
              <p className="text-emerald-600 text-sm">Private House Rentals in Bilice</p>
            </div>
          </div>
          <p className="text-slate-500">
            © 2024 Reiseziel Hrvatska. {t('contact.rights')}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};