import React from 'react';
import { CheckCircle } from './Icons';
import { useTranslation } from '../hooks/useTranslation';

interface RetreatProps {
  language: string;
}

export const Retreat: React.FC<RetreatProps> = ({ language }) => {
  const { t } = useTranslation(language);

  const highlights = [
    'retreat.highlights.pilates',
    'retreat.highlights.outdoor',
    'retreat.highlights.villa',
    'retreat.highlights.group',
    'retreat.highlights.relax',
  ];

  return (
    <section
      id="retreat"
      className="pt-8 pb-20 bg-gradient-to-b from-sky-50 via-white to-slate-50 relative overflow-hidden scroll-mt-24"
    >
      {/* Wide image */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 mb-12">
        <div className="overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
          <img
            src="/pilates-retreat.jpg"
            alt={t('retreat.title')}
            className="w-full h-auto min-h-[280px] sm:min-h-[360px] md:min-h-[480px] object-cover object-center"
          />
        </div>
      </div>

      {/* Text below */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        <p className="text-center text-2xl md:text-3xl italic font-medium text-slate-800 mb-4">
          {t('retreat.tagline')}
        </p>

        <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
          {t('retreat.description')}
        </p>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 mb-10">
          <p className="text-center text-3xl md:text-4xl font-bold text-sky-800 mb-6 tracking-wide">
            {t('retreat.dates')}
          </p>

          <ul className="space-y-4">
            {highlights.map((key) => (
              <li key={key} className="flex items-start gap-3 text-slate-700">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg leading-snug">{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {t('retreat.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};
