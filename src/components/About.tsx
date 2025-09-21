import React from 'react';
// Removed unused imports: Award, MapPin, Headphones, Heart
import { useTranslation } from '../hooks/useTranslation';

interface AboutProps {
  language: string;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const { t } = useTranslation(language);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-emerald-50 via-white to-sky-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-emerald-300/30 to-sky-300/30 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 bg-gradient-to-r from-rose-300/30 to-emerald-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-r from-sky-300/30 to-rose-300/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-500 via-sky-600 to-rose-500 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h2>
          <p className="text-xl text-emerald-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-700 mb-6">
              {t('about.story.title')}
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {t('about.story.content1')}
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              {t('about.story.content2')}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <div className="text-emerald-600 font-medium">
                  {language === 'hr' ? 'Godina Iskustva' : language === 'en' ? 'Years Experience' : 'Jahre Erfahrung'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <div className="text-emerald-600 font-medium">
                  {language === 'hr' ? 'Zadovoljnih Gostiju' : language === 'en' ? 'Happy Guests' : 'Zufriedene Gäste'}
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-slate-400/20 backdrop-blur-md rounded-3xl p-8 border border-slate-400/30 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
              <img
                src="/rm1/rm1:15.jpeg"
                alt="Bilice Houses"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};