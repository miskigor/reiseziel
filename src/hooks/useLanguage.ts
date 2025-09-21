import { useState, useCallback } from 'react';
import { Language } from '../types';

const languages: Language[] = [
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[2]); // Njemački jezik

  const changeLanguage = useCallback((languageCode: 'hr' | 'en' | 'de') => {
    const language = languages.find(lang => lang.code === languageCode);
    if (language) {
      setCurrentLanguage(language);
    }
  }, []);

  return {
    currentLanguage,
    languages,
    changeLanguage
  };
};