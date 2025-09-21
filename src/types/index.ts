export interface Language {
  code: 'hr' | 'en' | 'de';
  name: string;
  flag: string;
}

export interface House {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  price: number;
  currency: string;
  location: Record<string, string>;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  image: string[];
  amenities: string[];
  rating: number;
  reviews: number;
  isPublished: boolean;
}

export interface Translation {
  [key: string]: string | Translation;
}