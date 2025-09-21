import React from 'react';
import { Clock, Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface LastMinuteProps {
  language: string;
}

export const LastMinute: React.FC<LastMinuteProps> = ({ language }) => {
  const { t } = useTranslation(language);

  const lastMinuteOffers = [
    {
      id: '1',
      title: {
        hr: 'Apartmani - Specijalna ponuda',
        en: 'Apartments - Special Offer',
        de: 'Apartments - Sonderangebot'
      },
      description: {
        hr: 'Iskoristite našu last minute ponudu od 05.07 do 12.07.2025 izaberi vrijeme koje tebi odgovara. Apartman za 4 osobe bez bazena',
        en: ' Take advantage of our last-minute offer from August 2nd to August 17th – choose the dates that suit you best. Apartment for 4 people without a pool',
        de: ' Nutze unser Last-Minute-Angebot vom 02.08. bis zum 17.08.2025 – wähle den Zeitraum, der dir am besten passt. Ferienwohnung für 4 Personen ohne Pool.'
      },
      originalPrice: 400,
      discountPrice: 120,
      currency: '€',
      discount: 30,
      image: '/IMG_6829.jpeg',
      rating: 4.9,
      validUntil: {
        hr: 'Dostupno dok ne bude iznajmljeno!',
        en: 'Available until it\'s rented!',
        de: 'Verfügbar, solange es nicht vermietet ist!'
      }
    },
    {
      id: '2',
      title: {
        hr: 'Residence Mediterran - Specijalna ponuda',
        en: 'Residence Mediterran - Special Offer',
        de: 'Residence Mediterran - Sonderangebot'
      },
      description: {
        hr: 'Kuća je mala oaza koja poziva na uživanje i opuštanje. U periodu od 05.07. do 12.7.2025. imamo slobodna dva apartmana sa zajedničkim bazenom.',
        en: 'The house is a small oasis that invites you to relax and enjoy. From 05.07 to July 12, 2025, we have two available apartments with a shared pool.',
        de: 'Das Haus ist eine kleine Oase, die zum Wohlfühlen einlädt. Vom 05. Juli bis 12. Juli 2025 sind zwei Apartments mit gemeinsamem Pool verfügbar.'
      },
      originalPrice: 453,
      discountPrice: 340,
      currency: '€',
      discount: 25,
      image: '/IMG_6829.jpeg',
      rating: 4.8,
      validUntil: {
        hr: 'Dostupno dok ne bude iznajmljeno!',
        en: 'Available until it\'s rented!',
        de: 'Verfügbar, solange es nicht vermietet ist!'
      }
    },
    {
      id: '3',
      title: {
        hr: 'Vila Penthous - Specijalna ponuda',
        en: 'Villa Penthous - Special Offer',
        de: 'Villa Penthous - Sonderangebot'
      },
      description: {
        hr: 'Iskoristite našu last minute ponudu od 12.07 do 26.07.2025, izaberi vrijeme koje tebi odgovara. Vila za 10 osoba s bazenom.',
        en: 'Take advantage of our last minute offer from 12.07 to 26.07.2025 – choose the time that suits you best. Villa for 10 people with a pool.',
        de: 'Nutzen Sie unser Last-Minute-Angebot vom 12.07 bis 26.07.2025 – wählen Sie den Zeitraum, der Ihnen am besten passt. Villa für 10 Personen mit Pool..'
      },
      originalPrice: 642,
      discountPrice: 450,
      currency: '€',
      discount: 30,
      image: '/IMG_1127.jpg',
      rating: 4.9,
      validUntil: {
        hr: 'Dostupno dok ne bude iznajmljeno!',
        en: 'Available until it\'s rented!',
        de: 'Verfügbar, solange es nicht vermietet ist!'
      }
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      setTimeout(() => {
        const nameInput = contactSection.querySelector('input[type="text"]') as HTMLInputElement;
        if (nameInput) {
          nameInput.focus();
        }
      }, 1000);
    }
  };

  return (
    <section id="lastminute" className="py-20 bg-gradient-to-b from-rose-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-rose-600 to-yellow-500 bg-clip-text text-transparent">
              {t('lastminute.title')}
            </span>
          </h2>
          <p className="text-xl text-orange-600 max-w-3xl mx-auto leading-relaxed">
            {t('lastminute.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-rose-400 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Last Minute Offers Grid - Now 3 columns with equal height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {lastMinuteOffers.map((offer, index) => (
            <div
              key={offer.id}
              className="group relative bg-slate-400/20 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-400/30 shadow-2xl transform-gpu hover:scale-105 transition-all duration-700 hover:shadow-3xl flex flex-col"
              style={{
                animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Image Section */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full shadow-xl transform-gpu hover:scale-110 transition-all duration-300">
                  <span className="font-bold text-sm">-{offer.discount}%</span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 shadow-xl">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="font-bold text-slate-700 text-sm">{offer.rating}</span>
                  </div>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-3 right-3 bg-gradient-to-r from-orange-400 to-rose-500 text-white px-3 py-1 rounded-full shadow-xl">
                  <div className="flex items-center space-x-1">
                    <span className="text-orange-100 line-through text-xs">{offer.originalPrice}{offer.currency}</span>
                    <span className="font-bold text-sm">{offer.discountPrice}{offer.currency}</span>
                  </div>
                </div>
              </div>

              {/* Content Section - Flex grow to fill available space */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-700 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {offer.title[language]}
                </h3>
                
                <p className="text-slate-600 mb-3 leading-relaxed text-sm flex-1">
                  {offer.description[language]}
                </p>

                {/* Valid Until */}
                <div className="flex items-center text-orange-600 mb-3">
                  <Clock className="w-3 h-3 mr-1" />
                  <span className="text-xs font-medium">{offer.validUntil[language]}</span>
                </div>

                {/* Book Button - Always at bottom */}
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-orange-400 to-rose-500 hover:from-orange-500 hover:to-rose-600 text-white font-bold py-2 px-3 rounded-xl transition-all duration-300 transform-gpu hover:scale-105 shadow-lg hover:shadow-xl text-sm mt-auto"
                >
                  {t('common.bookNow')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* First Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-700 mb-6">
              {t('lastminute.story.title')}
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {t('lastminute.story.content1')}
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              {t('lastminute.story.content2')}
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-slate-400/20 backdrop-blur-md rounded-3xl p-8 border border-slate-400/30 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
              <img
                src="/IMG_6829.jpeg"
                alt="Last Minute Offers"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-100/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>

        {/* Second Story Section - Bachelorette */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-700 mb-6">
              {t('lastminute.bachelorette.title')}
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {t('lastminute.bachelorette.content1')}
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              {t('lastminute.bachelorette.content2')}
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-slate-400/20 backdrop-blur-md rounded-3xl p-8 border border-slate-400/30 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
              <img
                src="/photographe-evjf-greg-G3QdW7rhuoo-unsplash.jpg"
                alt="Bachelorette Party"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-100/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px) rotateX(15deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
      `}</style>
    </section>
  );
};