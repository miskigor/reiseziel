import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedHouses } from './components/FeaturedHouses';
import { Excursions } from './components/Excursions';
import { LastMinute } from './components/LastMinute';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SEOHead } from './components/SEOHead';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const { currentLanguage, languages, changeLanguage } = useLanguage();

  // Generate SEO content based on current language
  const getSEOContent = () => {
    const baseUrl = "https://miskigor.github.io/reiseziel";
    
    switch (currentLanguage.code) {
      case 'hr':
        return {
          title: "Reiseziel Hrvatska - Luksuzni apartmani u Bilice, Šibenik",
          description: "Otkrijte luksuzne apartmane za odmor u Bilice, Šibenik. Prekrasne kuće s bazenom, moderni sadržaji i zadivljujući pogled na Jadran. Rezervirajte svoj savršen hrvatski odmor danas.",
          keywords: "Hrvatska apartmani, Bilice Šibenik, luksuzni apartmani, hrvatska obala, Jadransko more, odmor apartmani, turizam Hrvatska",
          url: `${baseUrl}?lang=hr`
        };
      case 'de':
        return {
          title: "Reiseziel Kroatien - Luxus Ferienwohnungen in Bilice, Šibenik",
          description: "Entdecken Sie luxuriöse Ferienwohnungen in Bilice, Šibenik. Wunderschöne Häuser mit Pool, moderne Ausstattung und atemberaubende Adriatische Aussicht. Buchen Sie noch heute Ihren perfekten kroatischen Urlaub.",
          keywords: "Kroatien Ferienwohnung, Bilice Šibenik, Luxus Ferienhaus, kroatische Küste, Adriatisches Meer, Urlaub Kroatien",
          url: `${baseUrl}?lang=de`
        };
      default:
        return {
          title: "Reiseziel Hrvatska - Luxury House Rentals in Bilice, Šibenik",
          description: "Discover luxury vacation rentals in Bilice, Šibenik. Beautiful houses with pools, modern amenities, and stunning Adriatic views. Book your perfect Croatian getaway today.",
          keywords: "Croatia vacation rental, Bilice Šibenik, luxury house rental, Croatian coast, Adriatic Sea, vacation home, holiday rental, Croatia tourism",
          url: baseUrl
        };
    }
  };

  const seoContent = getSEOContent();

  return (
    <ErrorBoundary>
      <SEOHead
        title={seoContent.title}
        description={seoContent.description}
        keywords={seoContent.keywords}
        url={seoContent.url}
        locale={currentLanguage.code === 'hr' ? 'hr_HR' : currentLanguage.code === 'de' ? 'de_DE' : 'en_US'}
      />
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