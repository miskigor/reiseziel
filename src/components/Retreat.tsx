import React from 'react';
import { Users, Waves, Home, Star, Heart } from './Icons';
import { useTranslation } from '../hooks/useTranslation';

interface RetreatProps {
  language: string;
}

export const Retreat: React.FC<RetreatProps> = ({ language }) => {
  const { t } = useTranslation(language);

  const highlights = [
    { icon: Waves, titleKey: 'retreat.highlights.pilates' },
    { icon: Star, titleKey: 'retreat.highlights.outdoor' },
    { icon: Home, titleKey: 'retreat.highlights.villa' },
    { icon: Users, titleKey: 'retreat.highlights.group' },
    { icon: Heart, titleKey: 'retreat.highlights.relax' },
  ];

  return (
    <section id="retreat" className="py-20 bg-gradient-to-b from-sky-50 via-white to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            {t('retreat.title')}
          </h2>
          <p className="text-xl text-sky-700 font-medium mb-2">
            {t('retreat.subtitle')}
          </p>
          <p className="text-lg text-amber-700 tracking-wide">
            {t('retreat.dates')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-amber-400 mx-auto mt-6 rounded-full" />
        </div>

        <div className="mb-12 overflow-hidden rounded-2xl shadow-2xl border border-slate-200/60 bg-white">
          <img
            src="/pilates-retreat.jpg"
            alt={t('retreat.title')}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto mb-12">
          {t('retreat.description')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {highlights.map(({ icon: Icon, titleKey }) => (
            <div
              key={titleKey}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-100 text-center"
            >
              <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-slate-700 leading-snug">
                {t(titleKey)}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-2xl italic text-sky-800 mb-10">
          {t('retreat.tagline')}
        </p>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-sky-600 to-amber-500 text-white font-bold py-4 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            {t('common.bookNow')}
          </a>
        </div>
      </div>
    </section>
  );
};
