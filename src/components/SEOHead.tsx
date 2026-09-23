import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  alternateLocales?: Array<{ lang: string; url: string }>;
}

const SITE_ORIGIN = 'https://reiseziel-kroatien.de';

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'REISEZIEL KROATIEN - Ferienhäuser & Apartments in Bilice',
  description = 'Entdecken Sie luxuriöse Ferienwohnungen in Bilice, Šibenik. Wunderschöne Häuser mit Pool, moderne Ausstattung und atemberaubende Adriatische Aussicht.',
  keywords = 'Kroatien Ferienwohnung, Bilice Šibenik, Luxus Ferienhaus, kroatische Küste, Adriatisches Meer, Urlaub Kroatien',
  image = `${SITE_ORIGIN}/og-image.jpg`,
  url = `${SITE_ORIGIN}/`,
  type = 'website',
  siteName = 'REISEZIEL KROATIEN',
  locale = 'de_DE',
  alternateLocales = [
    { lang: 'hr', url: `${SITE_ORIGIN}/?lang=hr` },
    { lang: 'de', url: `${SITE_ORIGIN}/?lang=de` },
  ],
}) => {
  const absoluteImage = image.startsWith('http') ? image : `${SITE_ORIGIN}${image.startsWith('/') ? image : `/${image}`}`;

  React.useEffect(() => {
    document.title = title;
  }, [title]);

  React.useEffect(() => {
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'REISEZIEL KROATIEN');
    updateMetaTag('robots', 'index, follow');

    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', absoluteImage, true);
    updateMetaTag('og:image:type', 'image/jpeg', true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:locale', locale, true);

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', absoluteImage);

    updateMetaTag('geo.region', 'HR-15');
    updateMetaTag('geo.placename', 'Bilice, Šibenik, Croatia');
    updateMetaTag('geo.position', '43.8167;15.8833');
    updateMetaTag('ICBM', '43.8167, 15.8833');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    alternateLocales.forEach(({ lang, url: altUrl }) => {
      let alternate = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!alternate) {
        alternate = document.createElement('link');
        alternate.setAttribute('rel', 'alternate');
        alternate.setAttribute('hreflang', lang);
        document.head.appendChild(alternate);
      }
      alternate.setAttribute('href', altUrl);
    });

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: 'REISEZIEL KROATIEN',
      description,
      url,
      logo: `${SITE_ORIGIN}/logo.jpeg`,
      image: absoluteImage,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bilice',
        addressLocality: 'Šibenik',
        addressCountry: 'HR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '43.8167',
        longitude: '15.8833',
      },
      priceRange: '€€',
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Swimming Pool', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Kitchen', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
      ],
      starRating: { '@type': 'Rating', ratingValue: '4.9', bestRating: '5' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '87',
        bestRating: '5',
      },
    };

    document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => el.remove());
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [title, description, keywords, absoluteImage, url, type, siteName, locale, alternateLocales]);

  return null;
};
