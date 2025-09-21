import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedHouses } from './components/FeaturedHouses';
import { Excursions } from './components/Excursions';
import { LastMinute } from './components/LastMinute';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const { currentLanguage, languages, changeLanguage } = useLanguage();

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Header 
          currentLanguage={currentLanguage}
          languages={languages}
          onLanguageChange={changeLanguage}
        />
        <Hero language={currentLanguage.code} />
        <FeaturedHouses language={currentLanguage.code} />
        <Excursions language={currentLanguage.code} />
        <LastMinute language={currentLanguage.code} />
        <About language={currentLanguage.code} />
        <Contact language={currentLanguage.code} />
      </div>
    </ErrorBoundary>
  );
}

export default App;