import React from 'react';
import { HouseCard } from './HouseCard';
import { houses } from '../data/houses';
import { useTranslation } from '../hooks/useTranslation';

interface FeaturedHousesProps {
  language: string;
}

export const FeaturedHouses: React.FC<FeaturedHousesProps> = ({ language }) => {
  const { t } = useTranslation(language);

  // Filter only published houses
  const publishedHouses = houses.filter(house => house.isPublished);

  return (
    <section id="houses" className="py-20 bg-gradient-to-b from-white via-emerald-50 to-sky-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-500 via-sky-600 to-rose-500 bg-clip-text text-transparent">
              {t('houses.title')}
            </span>
          </h2>
          <p className="text-xl text-emerald-600 max-w-3xl mx-auto leading-relaxed">
            {t('houses.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Houses Grid - Changed from 3 columns to 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-fr">
          {publishedHouses.map((house, index) => (
            <div
              key={house.id}
              className="transform-gpu flex"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              <HouseCard house={house} language={language} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};