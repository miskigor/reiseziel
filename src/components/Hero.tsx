import React from 'react';
import { MapPin } from './Icons';
import { useTranslation } from '../hooks/useTranslation';

interface HeroProps {
  language: string;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const { t } = useTranslation(language);

  const openLocationOnMap = () => {
    // Koordinate za Bilice, Hrvatska
    const latitude = 43.8167;
    const longitude = 15.8833;
    
    // Koristimo jednostavniji Google Maps URL
    const simpleGoogleMapsUrl = `https://www.google.com/maps/place/Bilice,+Croatia/@${latitude},${longitude},15z`;
    
    // Otvori u novom tabu
    window.open(simpleGoogleMapsUrl, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-rose-100 via-sky-100 to-emerald-100"
        style={{
          backgroundImage: 'url(/IMG_1127.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/80 via-sky-100/70 to-emerald-100/80"></div>
      </div>

      {/* Floating elements for 3D effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-slate-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-300/30 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-sky-300/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge - Now clickable */}
          <button
            onClick={openLocationOnMap}
            className="inline-flex items-center space-x-2 bg-slate-400/30 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-slate-400/40 shadow-xl transform-gpu hover:scale-105 transition-all duration-300 hover:bg-slate-400/40 cursor-pointer group"
          >
            <MapPin className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" />
            <span className="text-slate-700 font-medium group-hover:text-slate-800 transition-colors duration-300">
              Bilice, Hrvatska
            </span>
            <span className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-300 ml-2">
              {language === 'hr' ? '(kliknite za kartu)' : language === 'en' ? '(click for map)' : '(klicken für Karte)'}
            </span>
          </button>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-700 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-500 via-sky-600 to-rose-500 bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-600 mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};