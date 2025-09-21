import { Apartment } from '../types';

export const apartments: Apartment[] = [
  {
    id: '1',
    title: {
      hr: 'Luksuzni Apartman Vista Mare',
      en: 'Luxury Vista Mare Apartment',
      de: 'Luxus Vista Mare Apartment'
    },
    description: {
      hr: 'Spektakularan apartman s pogledom na more u srcu Dubrovnika',
      en: 'Spectacular sea view apartment in the heart of Dubrovnik',
      de: 'Spektakuläres Apartment mit Meerblick im Herzen von Dubrovnik'
    },
    price: 250,
    currency: '€',
    location: {
      hr: 'Dubrovnik, Hrvatska',
      en: 'Dubrovnik, Croatia',
      de: 'Dubrovnik, Kroatien'
    },
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Kitchen', 'Balcony', 'AC', 'Sea View'],
    rating: 4.9,
    reviews: 127
  },
  {
    id: '2',
    title: {
      hr: 'Penthouse Split Premium',
      en: 'Split Premium Penthouse',
      de: 'Split Premium Penthouse'
    },
    description: {
      hr: 'Moderan penthouse s privatnom terasom u centru Splita',
      en: 'Modern penthouse with private terrace in Split center',
      de: 'Modernes Penthouse mit privater Terrasse im Zentrum von Split'
    },
    price: 180,
    currency: '€',
    location: {
      hr: 'Split, Hrvatska',
      en: 'Split, Croatia',
      de: 'Split, Kroatien'
    },
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Kitchen', 'Terrace', 'AC', 'City View'],
    rating: 4.8,
    reviews: 89
  },
  {
    id: '3',
    title: {
      hr: 'Villa Opatija Elegance',
      en: 'Opatija Elegance Villa',
      de: 'Opatija Elegance Villa'
    },
    description: {
      hr: 'Elegantna vila s bazenom i pogledom na Kvarner',
      en: 'Elegant villa with pool and Kvarner Bay view',
      de: 'Elegante Villa mit Pool und Blick auf die Kvarner Bucht'
    },
    price: 320,
    currency: '€',
    location: {
      hr: 'Opatija, Hrvatska',
      en: 'Opatija, Croatia',
      de: 'Opatija, Kroatien'
    },
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Garden', 'Bay View'],
    rating: 5.0,
    reviews: 156
  }
];