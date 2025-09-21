import React from 'react';
import { ConciergeBell as Concierge, Plane, Sparkles, Map } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface ServicesProps {
  language: string;
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const { t } = useTranslation(language);

  const services = [
    {
      icon: <Concierge className="w-10 h-10" />,
      titleKey: 'services.concierge',
      gradient: 'from-purple-500 to-pink-500',
      description: language === 'hr' ? 'Osobni asistent za sve vaše potrebe' : language === 'en' ? 'Personal assistant for all your needs' : 'Persönlicher Assistent für alle Ihre Bedürfnisse'
    },
    {
      icon: <Plane className="w-10 h-10" />,
      titleKey: 'services.transfer',
      gradient: 'from-blue-500 to-cyan-500',
      description: language === 'hr' ? 'Udoban prijevoz od zračne luke' : language === 'en' ? 'Comfortable transport from the airport' : 'Komfortabler Transport vom Flughafen'
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      titleKey: 'services.cleaning',
      gradient: 'from-green-500 to-teal-500',
      description: language === 'hr' ? 'Profesionalno čišćenje apartmana' : language === 'en' ? 'Professional apartment cleaning' : 'Professionelle Apartment-Reinigung'
    },
    {
      icon: <Map className="w-10 h-10" />,
      titleKey: 'services.tours',
      gradient: 'from-orange-500 to-red-500',
      description: language === 'hr' ? 'Ekskluzivni obilasci s lokalnim vodičima' : language === 'en' ? 'Exclusive tours with local guides' : 'Exklusive Touren mit lokalen Führern'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
              {t('services.title')}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `floatIn 1s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Service Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl transform-gpu hover:scale-105 transition-all duration-700 hover:shadow-3xl relative overflow-hidden">
                {/* Glowing Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon with 3D Effect */}
                <div className={`relative z-10 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl transform-gpu group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>
                <p className="relative z-10 text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Floating Particles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"></div>
                </div>
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110" style={{ animationDelay: '0.2s' }}>
                  <div className="w-1 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {language === 'hr' ? 'Trebate posebnu uslugu?' : language === 'en' ? 'Need a special service?' : 'Benötigen Sie einen besonderen Service?'}
            </h3>
            <p className="text-blue-100 mb-6">
              {language === 'hr' ? 'Kontaktirajte nas za prilagođene usluge prilagođene vašim potrebama' : language === 'en' ? 'Contact us for customized services tailored to your needs' : 'Kontaktieren Sie uns für maßgeschneiderte Services nach Ihren Bedürfnissen'}
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform-gpu hover:scale-105 shadow-lg hover:shadow-xl">
              {language === 'hr' ? 'Kontaktiraj Nas' : language === 'en' ? 'Contact Us' : 'Kontaktieren Sie uns'}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(40px) rotateY(15deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateY(0deg);
          }
        }
      `}</style>
    </section>
  );
};