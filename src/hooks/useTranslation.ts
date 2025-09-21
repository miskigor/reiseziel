import { translations } from '../data/translations';
// Removed unused import: Translation

export const useTranslation = (language: string) => {
  const getTranslation = (key: string): string => {
    const keys = key.split('.');
    let current: Record<string, unknown> = translations[language];
    
    for (const k of keys) {
      if (current && typeof current === 'object') {
        current = current[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof current === 'string' ? current : key;
  };

  return { t: getTranslation };
};