import React from 'react';
import { MapPin } from './Icons';
import { useTranslation } from '../hooks/useTranslation';

interface HeroProps {
  language: string;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const { t } = useTranslation(language);

  const openLocationOnMap = () => {
    const latitude = 43.8167;
    const longitude = 15.8833;
    const simpleGoogleMapsUrl = `https://www.google.com/maps/place/Bilice,+Croatia/@${latitude},${longitude},15z`;
    window.open(simpleGoogleMapsUrl, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/bilice.jpeg"
          alt="Bilice Croatia"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/20 to-slate-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto pt-32">
          <button
            type="button"
            onClick={openLocationOnMap}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-12 border border-slate-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <MapPin className="w-4 h-4 text-emerald-600 group-hover:text-teal-600 transition-colors" />
            <span className="text-slate-700 font-semibold text-sm">Bilice, Hrvatska</span>
            <span className="text-xs text-slate-500">
              {language === 'hr' ? '(karta)' : language === 'en' ? '(map)' : '(Karte)'}
            </span>
          </button>

          <div className="mb-8 relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              {t('hero.title')}
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-white mb-16 leading-relaxed max-w-3xl mx-auto font-light drop-shadow-lg">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};
