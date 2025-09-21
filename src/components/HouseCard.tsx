import React, { useState } from 'react';
import { Star, Users, Bed, Bath, MapPin, Wifi, Car, Trees, ChevronLeft, ChevronRight } from './Icons';
import { House } from '../types';
import { useTranslation } from '../hooks/useTranslation';

interface HouseCardProps {
  house: House;
  language: string;
}

export const HouseCard: React.FC<HouseCardProps> = ({ house, language }) => {
  const { t } = useTranslation(language);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getAmenityIcon = (amenity: string) => {
    const icons: Record<string, React.ReactNode> = {
      'WiFi': <Wifi className="w-4 h-4" />,
      'Kitchen': <span className="text-sm">🍳</span>,
      'Garden': <Trees className="w-4 h-4" />,
      'Terrace': <span className="text-sm">🌅</span>,
      'AC': <span className="text-sm">❄️</span>,
      'Sea View': <span className="text-sm">🌊</span>,
      'Pool': <span className="text-sm">🏊</span>,
      'BBQ': <span className="text-sm">🔥</span>,
      'Parking': <Car className="w-4 h-4" />,
      'Fireplace': <span className="text-sm">🔥</span>
    };
    return icons[amenity] || <span className="text-sm">✨</span>;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % house.image.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + house.image.length) % house.image.length);
  };

  const openLocationOnMap = () => {
    // Koordinate za Bilice, Hrvatska
    const latitude = 43.8167;
    const longitude = 15.8833;
    
    // Kreiraj Google Maps URL s preciznim koordinatama
    const googleMapsUrl = `https://www.google.com/maps/place/Bilice,+Croatia/@${latitude},${longitude},15z`;
    
    // Otvori u novom tabu
    window.open(googleMapsUrl, '_blank');
  };

  const handleBookNowClick = () => {
    const houseTitle = house.title[language];
    const subject = `${t('common.bookingInquiryFor')} ${houseTitle}`;
    const mailtoLink = `mailto:info@reiseziel-kroatien.de?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="group relative bg-slate-400/20 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-400/30 shadow-2xl transform-gpu hover:scale-105 transition-all duration-700 hover:shadow-3xl flex flex-col h-full">
      {/* Image Section with 3D Effect */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={house.image[currentImageIndex]}
          alt={house.title[language]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Navigation Controls */}
        {house.image.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/95 rounded-full p-2 shadow-lg transition-all duration-300 transform-gpu hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4 text-slate-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/95 rounded-full p-2 shadow-lg transition-all duration-300 transform-gpu hover:scale-110"
            >
              <ChevronRight className="w-4 h-4 text-slate-700" />
            </button>
          </>
        )}
        
        {/* Rating Badge with 3D Effect */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-xl transform-gpu hover:scale-110 transition-all duration-300">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-bold text-slate-700">{house.rating}</span>
            <span className="text-slate-500 text-sm">({house.reviews})</span>
          </div>
        </div>

        {/* Price Badge with Glow Effect */}
        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-emerald-400 to-sky-500 text-white px-4 py-2 rounded-full shadow-xl transform-gpu hover:scale-110 transition-all duration-300">
          <span className="font-bold text-lg">{house.price}{house.currency}</span>
          <span className="text-emerald-100 ml-1">{t('common.perNight')}</span>
        </div>

        {/* Image Counter */}
        {house.image.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1}/{house.image.length}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        {/* Title and Location */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-700 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
            {house.title[language]}
          </h3>
          
          {/* Clickable Location - Opens Google Maps */}
          <button
            onClick={openLocationOnMap}
            className="flex items-center text-emerald-600 mb-3 hover:text-emerald-700 transition-colors duration-300 cursor-pointer group/location"
          >
            <MapPin className="w-4 h-4 mr-2 group-hover/location:scale-110 transition-transform duration-300" />
            <span className="group-hover/location:underline">{house.location[language]}</span>
            <span className="text-xs text-slate-500 ml-2 opacity-0 group-hover/location:opacity-100 transition-opacity duration-300">
              {language === 'hr' ? '(otvori kartu)' : language === 'en' ? '(open map)' : '(Karte öffnen)'}
            </span>
          </button>
          
          <p className="text-slate-600 leading-relaxed">
            {house.description[language]}
          </p>
        </div>

        {/* Stats with 3D Icons */}
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="flex items-center justify-center space-x-2 bg-slate-400/20 rounded-xl p-3 transform-gpu hover:scale-105 transition-all duration-300">
            <Users className="w-5 h-5 text-emerald-400" />
            <span className="text-slate-700 font-medium">{house.guests}</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-slate-400/20 rounded-xl p-3 transform-gpu hover:scale-105 transition-all duration-300">
            <Bed className="w-5 h-5 text-sky-400" />
            <span className="text-slate-700 font-medium">{house.bedrooms}</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-slate-400/20 rounded-xl p-3 transform-gpu hover:scale-105 transition-all duration-300">
            <Bath className="w-5 h-5 text-rose-400" />
            <span className="text-slate-700 font-medium">{house.bathrooms}</span>
          </div>
        </div>

        {/* Amenities - Now showing ALL amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {house.amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 bg-slate-400/20 px-3 py-1 rounded-full text-sm text-slate-700 transform-gpu hover:scale-105 transition-all duration-300 hover:bg-slate-400/30"
            >
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-4 mt-auto">
          <button 
            onClick={handleBookNowClick}
            className="w-full bg-gradient-to-r from-emerald-400 to-sky-500 hover:from-emerald-500 hover:to-sky-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform-gpu hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t('common.bookNow')}
          </button>
        </div>
      </div>
    </div>
  );
};