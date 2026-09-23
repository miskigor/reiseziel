import React, { useEffect } from 'react';
import { CheckCircle } from './Icons';
import { useTranslation } from '../hooks/useTranslation';
import { retreatTerms, type RetreatTerm } from '../data/retreats';

interface RetreatProps {
  language: string;
  /** Term to scroll into view when opening a dedicated link */
  focusTerm?: RetreatTerm | null;
}

const SITE = 'https://reiseziel-kroatien.de';

export const Retreat: React.FC<RetreatProps> = ({ language, focusTerm = null }) => {
  const { t } = useTranslation(language);
  const lang = (language === 'hr' || language === 'en' || language === 'de' ? language : 'de') as
    | 'hr'
    | 'en'
    | 'de';

  const highlights = [
    'retreat.highlights.pilates',
    'retreat.highlights.outdoor',
    'retreat.highlights.villa',
    'retreat.highlights.group',
    'retreat.highlights.relax',
  ];

  useEffect(() => {
    if (!focusTerm) return;
    const id = `retreat-${focusTerm.id}`;
    let tries = 0;
    const timer = window.setInterval(() => {
      tries += 1;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.clearInterval(timer);
      } else if (tries > 40) {
        window.clearInterval(timer);
      }
    }, 80);
    return () => window.clearInterval(timer);
  }, [focusTerm]);

  return (
    <section
      id="retreat"
      className="pt-8 pb-20 bg-gradient-to-b from-sky-50 via-white to-slate-50 relative overflow-hidden scroll-mt-24"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 mb-12">
        <div className="overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
          <img
            src="/pilates-retreat.jpg"
            alt={t('retreat.title')}
            className="w-full h-auto min-h-[280px] sm:min-h-[360px] md:min-h-[480px] object-cover object-center"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        <p className="text-center text-2xl md:text-3xl italic font-medium text-slate-800 mb-4">
          {t('retreat.tagline')}
        </p>

        <p className="text-lg text-slate-600 leading-relaxed text-center mb-12">
          {t('retreat.description')}
        </p>

        <div className="space-y-10">
          {retreatTerms.map((item) => {
            const shareUrl = `${SITE}${item.path}`;
            const isFocused = focusTerm?.id === item.id;

            return (
              <article
                key={item.id}
                id={`retreat-${item.id}`}
                className={`scroll-mt-28 bg-white rounded-2xl shadow-xl border p-6 md:p-8 ${
                  isFocused ? 'border-sky-400 ring-2 ring-sky-200' : 'border-slate-100'
                }`}
              >
                <p className="text-center text-sm font-semibold uppercase tracking-wide text-sky-700 mb-2">
                  {item.label[lang]}
                </p>
                <p className="text-center text-3xl md:text-4xl font-bold text-sky-800 mb-6 tracking-wide">
                  {item.dates[lang]}
                </p>

                <ul className="space-y-4 mb-8">
                  {highlights.map((key) => (
                    <li key={key} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg leading-snug">{t(key)}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-6">
                  <a
                    href="#contact"
                    className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-bold py-3.5 px-9 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {t('retreat.cta')}
                  </a>
                </div>

                <p className="text-center text-xs text-slate-400 mb-1">{t('retreat.shareLink')}</p>
                <a
                  href={item.path}
                  className="block text-center text-sm font-medium text-sky-700 break-all hover:underline"
                >
                  {shareUrl}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
