import React from 'react';
import { Star, Users, Bed, Bath, MapPin, Wifi, Car, Waves } from './Icons';
import { Apartment } from '../types';
import { useTranslation } from '../hooks/useTranslation';

interface ApartmentCardProps {
  apartment: Apartment;
  language: string;
}

export const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment, language }) => {
  const { t } = useTranslation(language);

  const getAmenityIcon = (amenity: string) => {
    const icons: Record<string, React.ReactNode> = {
      'WiFi': <Wifi className="w-4 h-4" />,
      'Kitchen': <span className="text-sm">🍳</span>,
      'Balcony': <span className="text-sm">🏖️</span>,
      'Terrace': <span className="text-sm">🌅</span>,
      'AC': <span className="text-sm">❄️</span>,
      'Sea View': <Waves className="w-4 h-4" />,
      'City View': <span className="text-sm">🏙️</span>,
      'Bay View': <Waves className="w-4 h-4" />,
      'Pool': <span className="text-sm">🏊</span>,
      'Garden': <span className="text-sm">🌿</span>,
      'Parking': <Car className="w-4 h-4" />
    };
    return icons[amenity] || <span className="text-sm">✨</span>;
  };

  return (
    <div className="group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl transform-gpu hover:scale-105 transition-all duration-700 hover:shadow-3xl">
      {/* Image Section with 3D Effect */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={apartment.image}
          alt={apartment.title[language]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Rating Badge with 3D Effect */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-xl transform-gpu hover:scale-110 transition-all duration-300">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-bold text-gray-800">{apartment.rating}</span>
            <span className="text-gray-600 text-sm">({apartment.reviews})</span>
          </div>
        </div>

        {/* Price Badge with Glow Effect */}
        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-xl transform-gpu hover:scale-110 transition-all duration-300">
          <span className="font-bold text-lg">{apartment.price}{apartment.currency}</span>
          <span className="text-blue-100 ml-1">{t('common.perNight')}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title and Location */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
            {apartment.title[language]}
          </h3>
          <div className="flex items-center text-blue-200 mb-3">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{apartment.location[language]}</span>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {apartment.description[language]}
          </p>
        </div>

        {/* Stats with 3D Icons */}
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="flex items-center justify-center space-x-2 bg-white/10 rounded-xl p-3 transform-gpu hover:scale-105 transition-all duration-300">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">{apartment.guests}</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white/10 rounded-xl p-3 transform-gpu hover:scale-105 transition-all duration-300">
            <Bed className="w-5 h-5 text-purple-400" />
            <span className="text-white font-medium">{apartment.bedrooms}</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white/10 rounded-xl p-3 transform-gpu hover:scale-105 transition-all duration-300">
            <Bath className="w-5 h-5 text-pink-400" />
            <span className="text-white font-medium">{apartment.bathrooms}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {apartment.amenities.slice(0, 4).map((amenity, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full text-sm text-white transform-gpu hover:scale-105 transition-all duration-300 hover:bg-white/20"
            >
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </div>
          ))}
          {apartment.amenities.length > 4 && (
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full text-sm text-white transform-gpu hover:scale-105 transition-all duration-300">
              +{apartment.amenities.length - 4} more
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform-gpu hover:scale-105 border border-white/20 hover:border-white/40">
            {t('common.viewDetails')}
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform-gpu hover:scale-105 shadow-lg hover:shadow-xl">
            {t('common.bookNow')}
          </button>
        </div>
      </div>
    </div>
  );
};