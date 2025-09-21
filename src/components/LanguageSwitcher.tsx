import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  languages: Language[];
  onLanguageChange: (languageCode: 'hr' | 'en' | 'de') => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  languages,
  onLanguageChange
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-1 bg-slate-400/20 backdrop-blur-md rounded-lg border border-slate-400/30 text-slate-700 hover:bg-slate-400/30 transition-all duration-300 transform hover:scale-105 text-xs"
      >
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="text-xs font-medium">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 bg-white/95 backdrop-blur-md rounded-xl border border-slate-400/30 shadow-2xl z-50 min-w-[150px] transform-gpu animate-in slide-in-from-top-2 duration-200">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gradient-to-r hover:from-sky-50 hover:to-rose-50 transition-all duration-200 ${
                currentLanguage.code === language.code 
                  ? 'bg-gradient-to-r from-sky-100 to-rose-100 text-sky-700' 
                  : 'text-slate-600'
              }`}
            >
              <span className="text-xl">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};