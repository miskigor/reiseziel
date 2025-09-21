export interface BacheloretteContent {
  id: string;
  title: Record<string, string>;
  content1: Record<string, string>;
  content2: Record<string, string>;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Simulacija baze podataka za djevojačko veče sadržaj
export const bacheloretteContent: BacheloretteContent = {
  id: 'bachelorette-1',
  title: {
    hr: 'Organizirajte nezaboravno vikend kod nas!',
    en: 'Organize an unforgettable Vikend with us!',
    de: 'Organisiere einen unvergesslichen Wochenende bei uns!'
  },
  content1: {
    hr: 'Tražite savršeno mjesto za proslavu djevojačke večeri? Na pravom ste mjestu! Naša lokacija nudi idealan spoj opuštanja, zabave i elegancije – sve što vam treba za večer koju ćete pamtiti zauvijek.',
    en: 'Looking for the perfect place to celebrate your bachelorette party? You\'re in the right place! Our location offers the ideal combination of relaxation, fun, and elegance – everything you need for an evening you\'ll remember forever.',
    de: 'Du suchst die perfekte Location für deinen Junggesellinnenabschied? Dann bist du bei uns genau richtig! Unsere Location bietet die perfekte Mischung aus Entspannung, Spaß und Stil – alles, was du für einen unvergesslichen Abend brauchst.'
  },
  content2: {
    hr: 'Privatni bazen samo za vas Uživajte u intimnoj atmosferi uz osvježavajući bazen, savršen za opušteno druženje, koktele i sjajne fotke za uspomenu! Savršeno mjesto za slavlje Naš prostor možete prilagoditi svom stilu – bilo da želite tematsku zabavu, mirnu večeru pod svijećama ili ludi provod s muzikom do kasno u noć. Mogućnost keteringa i dekoracije U suradnji s provjerenim partnerima nudimo vam opciju organizacije hrane, pića i dekoracije – vi se samo pojavite i uživajte! Idealno za fotkanje Svaki kutak našeg prostora osmišljen je da izgleda sjajno na slikama – jer znamo koliko uspomene znače!',
    en: 'Private pool just for you Enjoy an intimate atmosphere by the refreshing pool, perfect for relaxed socializing, cocktails, and great photos for memories! Perfect place for celebration You can customize our space to your style – whether you want a themed party, quiet dinner under candlelight, or wild fun with music until late at night. Catering and decoration options In collaboration with trusted partners, we offer you the option of organizing food, drinks, and decoration – you just show up and enjoy! Perfect for photos Every corner of our space is designed to look great in pictures – because we know how much memories mean!',
    de: 'Privater Pool nur für euch Genießt eine entspannte Atmosphäre am Pool – ideal zum Chillen, für Cocktails und tolle Fotos! Der perfekte Ort zum Feiern Gestalte deine Party ganz nach deinem Geschmack – ob Mottoparty, stilvolles Dinner oder ausgelassene Nacht mit Musik und Tanz. Catering- und Dekorationsservice verfügbar Auf Wunsch kümmern wir uns um Essen, Getränke und Deko – ihr müsst nur noch feiern! Instagram-taugliche Kulisse Jede Ecke unserer Location ist ein Hingucker – für Fotos, die euch ewig an diesen besonderen Abend erinnern.'
  },
  isActive: true,
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z'
};

// Funkcije za upravljanje sadržajem (simulacija API poziva)
export const updateBacheloretteContent = (
  language: 'hr' | 'en' | 'de',
  field: 'title' | 'content1' | 'content2',
  value: string
): BacheloretteContent => {
  const updatedContent = { ...bacheloretteContent };
  updatedContent[field][language] = value;
  updatedContent.updatedAt = new Date().toISOString();
  
  // Ovdje bi se u stvarnoj aplikaciji poslao API poziv za ažuriranje baze podataka
  console.log(`Updating ${field} for ${language}:`, value);
  
  return updatedContent;
};

export const getBacheloretteContent = (): BacheloretteContent => {
  // Simulacija dohvaćanja iz baze podataka
  return bacheloretteContent;
};