import React, { Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SEOHead } from './components/SEOHead';
import { useLanguage } from './hooks/useLanguage';

// Lazy load non-critical components
const FeaturedHouses = lazy(() => import('./components/FeaturedHouses').then(m => ({ default: m.FeaturedHouses })));
const Excursions = lazy(() => import('./components/Excursions').then(m => ({ default: m.Excursions })));
const LastMinute = lazy(() => import('./components/LastMinute').then(m => ({ default: m.LastMinute })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));

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
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div></div>}>
          <FeaturedHouses language={currentLanguage.code} />
        </Suspense>
        <Suspense fallback={<div className="py-20 bg-gray-50"><div className="container mx-auto px-4 text-center"><div className="animate-pulse h-8 bg-gray-300 rounded w-1/3 mx-auto"></div></div></div>}>
          <Excursions language={currentLanguage.code} />
        </Suspense>
        <Suspense fallback={<div className="py-20 bg-gradient-to-b from-sky-50 via-white to-rose-50"><div className="container mx-auto px-4 text-center"><div className="animate-pulse h-8 bg-gray-300 rounded w-1/3 mx-auto"></div></div></div>}>
          <LastMinute language={currentLanguage.code} />
        </Suspense>
        <Suspense fallback={<div className="py-20 bg-gradient-to-b from-rose-50 via-white to-sky-50"><div className="container mx-auto px-4 text-center"><div className="animate-pulse h-8 bg-gray-300 rounded w-1/3 mx-auto"></div></div></div>}>
          <About language={currentLanguage.code} />
        </Suspense>
        <Suspense fallback={<div className="py-20 bg-gradient-to-b from-sky-50 via-white to-rose-50"><div className="container mx-auto px-4 text-center"><div className="animate-pulse h-8 bg-gray-300 rounded w-1/3 mx-auto"></div></div></div>}>
          <Contact language={currentLanguage.code} />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;