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

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Reiseziel Hrvatska - Luxury House Rentals in Bilice, Šibenik",
  description = "Discover luxury vacation rentals in Bilice, Šibenik. Beautiful houses with pools, modern amenities, and stunning Adriatic views. Book your perfect Croatian getaway today.",
  keywords = "Croatia vacation rental, Bilice Šibenik, luxury house rental, Croatian coast, Adriatic Sea, vacation home, holiday rental, Croatia tourism",
  image = "/logo-social.svg",
  url = "https://miskigor.github.io/reiseziel",
  type = "website",
  siteName = "Reiseziel Hrvatska",
  locale = "en_US",
  alternateLocales = [
    { lang: "hr", url: "https://miskigor.github.io/reiseziel?lang=hr" },
    { lang: "de", url: "https://miskigor.github.io/reiseziel?lang=de" }
  ]
}) => {
  // Update document title
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  // Update meta tags
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

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Reiseziel Hrvatska');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', url + image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:locale', locale, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', url + image);

    // Additional SEO tags
    updateMetaTag('geo.region', 'HR-15');
    updateMetaTag('geo.placename', 'Bilice, Šibenik, Croatia');
    updateMetaTag('geo.position', '43.8167;15.8833');
    updateMetaTag('ICBM', '43.8167, 15.8833');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Alternate language links
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

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "name": "Reiseziel Hrvatska",
      "description": description,
      "url": url,
      "logo": url + "/IMG_1127.jpg",
      "image": url + image,
      "telephone": "+385-XX-XXX-XXX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bilice",
        "addressLocality": "Šibenik",
        "addressCountry": "HR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.8167",
        "longitude": "15.8833"
      },
      "priceRange": "€€",
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Swimming Pool",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification", 
          "name": "WiFi",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Kitchen",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Parking",
          "value": true
        }
      ],
      "starRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "87",
        "bestRating": "5"
      }
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, [title, description, keywords, image, url, type, siteName, locale, alternateLocales]);

  return null; // This component doesn't render anything
};
