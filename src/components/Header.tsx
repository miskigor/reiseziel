import React from 'react';
import { Menu, X, Instagram, Facebook } from './Icons';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Language } from '../types';
import { useTranslation } from '../hooks/useTranslation';

interface HeaderProps {
  currentLanguage: Language;
  languages: Language[];
  onLanguageChange: (languageCode: 'hr' | 'en' | 'de') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  languages,
  onLanguageChange
}) => {
  const { t } = useTranslation(currentLanguage.code);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.houses', href: '/#houses' },
    { key: 'nav.excursions', href: '/#excursions' },
    { key: 'nav.retreat', href: '/retreat' },
    { key: 'nav.about', href: '/#about' },
    { key: 'nav.contact', href: '/#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href === '/retreat') {
      if (window.location.pathname.replace(/\/$/, '') !== '/retreat') {
        window.location.assign('/retreat');
      } else {
        document.getElementById('retreat')?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (href === '/') {
      if (window.location.pathname.replace(/\/$/, '') === '/retreat') {
        window.location.assign('/');
      } else {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (window.location.pathname.replace(/\/$/, '') === '/retreat') {
        window.location.assign(`/#${id}`);
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-400/20 backdrop-blur-md border-b border-slate-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('/')}
            className="flex items-center group"
          >
            <img
              src="/logo.jpeg"
              alt="Reiseziel Kroatien"
              className="h-20 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="text-slate-700 hover:text-emerald-600 transition-colors duration-300 font-medium relative group"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-sky-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Social Icons & Language Switcher */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a
                href="https://www.instagram.com/reisezielkroatien/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-700 hover:text-emerald-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-700 hover:text-emerald-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <LanguageSwitcher
              currentLanguage={currentLanguage}
              languages={languages}
              onLanguageChange={onLanguageChange}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              languages={languages}
              onLanguageChange={onLanguageChange}
            />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-emerald-600 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-400/30 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-3 px-4 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 font-medium"
                >
                  {t(item.key)}
                </button>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-slate-200">
                <a
                  href="https://www.instagram.com/reisezielkroatien/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-700 hover:text-emerald-600 transition-colors duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-700 hover:text-emerald-600 transition-colors duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};