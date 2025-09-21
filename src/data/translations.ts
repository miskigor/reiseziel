import { Translation } from '../types';

export const translations: Record<string, Translation> = {
  hr: {
    nav: {
      home: 'Početna',
      houses: 'Kuće',
      excursions: 'Izleti',
      lastminute: 'Last Minute',
      about: 'O nama',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Kuće za odmor i apartmani u Bilicama',
      subtitle: 'Vaš miran kutak na obali Prokljanskog jezera.',
      searchPlaceholder: 'Odaberite kuću...',
      checkIn: 'Dolazak',
      checkOut: 'Odlazak',
      guests: 'gosti',
      search: 'Pretraži'
    },
    houses: {
      title: 'Naše Kuće',
      subtitle: 'Snoviti odmor u zadivljujućem krajoliku'
    },
    excursions: {
      title: 'Izleti u našoj blizini',
      subtitle: 'Otkrijte ljepote Šibensko-kninske županije',
      story: {
        title: 'Naši Izleti',
        content1: 'Bilice su idealno smještene za istraživanje najljepših destinacija Dalmacije. Naša lokacija omogućuje vam lagan pristup Nacionalnom parku Krka, povijesnom gradu Šibeniku, UNESCO-ovom gradu Trogiru i brojnim drugim atrakcijama. Organiziramo personalizirane izlete prilagođene vašim interesima - od prirodnih ljepota do kulturnih znamenitosti.',
        content2: 'Naš tim lokalnih stručnjaka pozna svaki kutak regije i rado će podijeliti skrivene dragulje koje turisti obično ne otkrivaju. Bilo da preferirate aktivne avanture, kulturne ture ili opuštajuće šetnje prirodom, imamo savršen izlet za vas. Svi naši izleti uključuju prijevoz, stručno vodstvo i fleksibilno planiranje prema vašim željama.'
      }
    },
    lastminute: {
      title: 'Last Minute Ponude',
      subtitle: 'Iskoristite naše specijalne ponude za spontane bijegove',
      story: {
        title: ' Organiziraj svoj boravak s nama – bez stresa i komplikacija!',
        content1: ' Imaš želju organizirati putovanje, retreat ili aktivni odmor u Hrvatskoj? Tu smo da ti pomognemo u svakom koraku! Bez obzira planiraš li: Joga retreat, pilates, borilačke vještine ili fitness programe, Kampove za smanjenje stresa, radionice zdrave prehrane ili autogeni trening Ili jednostavno odmor u prekrasnim kućama s bazenom, Naš tim će ti pomoći da sve bude savršeno organizirano!',
        content2: ' Što nudimo: Pomoć pri organizaciji aktivnosti, smještaja i prijevoza, Individualni pristup – sve prilagođeno tvojim željama i potrebama, Iskustvo i lokalne kontakte – znamo gdje su najbolji smještaji, aktivnosti i skrivena mjesta, Pristupačne cijene – pronaći ćemo najbolju ponudu za tvoj budžet, Tvoje putovanje, tvoja pravila – mi se brinemo za ostalo! Javi nam se i reci svoje želje – zajedno ćemo stvoriti nezaboravno iskustvo u Hrvatskoj!'
      },
      bachelorette: {
        title: 'Organizirajte nezaboravno djevojačko veče kod nas!',
        content1: 'Tražite savršeno mjesto za proslavu djevojačke večeri? Na pravom ste mjestu! Naša lokacija nudi idealan spoj opuštanja, zabave i elegancije – sve što vam treba za večer koju ćete pamtiti zauvijek.',
        content2: 'Privatni bazen samo za vas Uživajte u intimnoj atmosferi uz osvježavajući bazen, savršen za opušteno druženje, koktele i sjajne fotke za uspomenu! Savršeno mjesto za slavlje Naš prostor možete prilagoditi svom stilu – bilo da želite tematsku zabavu, mirnu večeru pod svijećama ili ludi provod s muzikom do kasno u noć. Mogućnost keteringa i dekoracije U suradnji s provjerenim partnerima nudimo vam opciju organizacije hrane, pića i dekoracije – vi se samo pojavite i uživajte! Idealno za fotkanje Svaki kutak našeg prostora osmišljen je da izgleda sjajno na slikama – jer znamo koliko uspomene znače!'
      }
    },
    about: {
      title: 'O Nama',
      subtitle: 'Vaš domaćin za nezaboravan odmor u Bilicama',
      story: {
        title: 'Naša Priča',
        content1: 'Mi smo obiteljski tim koji se od 2019. godine bavi iznajmljivanjem kuća i apartmana u Bilicama, malom dalmatinskom mjestu smještenom uz obalu Prokljanskog jezera, nadomak Šibenika. Ovo jedinstveno mjesto pruža savršenu kombinaciju slatkovodne i morske prirode, s netaknutom okolinom, čistim zrakom i predivnim pogledima na jezero.Naša ideja od samog početka bila je jednostavna – stvoriti smještaj u kojem će se gosti osjećati kao kod kuće. Svaka kuća i apartman pažljivo je uređen, opremljen svime što vam je potrebno za ugodan odmor, i nalazi se u mirnom okruženju – idealnom za opuštanje, šetnje uz jezero, vožnje biciklom ili istraživanjeDalmacije.',
        content2: 'S obzirom na blizinu Nacionalnog parka Krka, grada Šibenika, kao i brojnih plaža i otočića, Bilice su savršena polazna točka za aktivan i raznolik odmor. Osim toga, Prokljansko jezero nudi mogućnosti za ribolov, vožnju kajakom i uživanje u prirodnim ljepotama daleko od gradske gužve. Gostima nudimo osobni pristup, savjete i podršku tijekom cijelog boravka. Naš cilj nije samo iznajmiti smještaj – nego stvoriti iskustvo koje ćete poželjeti ponoviti. Hvala svim dosadašnjim gostima na ukazanom povjerenju, a novima poručujemo – dobrodošli u Bilice, na jezero koje spaja prirodu i mir.',
      }
    },
    contact: {
      title: 'Kontaktirajte Nas',
      subtitle: 'Spremni smo odgovoriti na sva vaša pitanja',
      phone: 'Telefon',
      email: 'Email',
      address: 'Adresa',
      info: 'Kontakt Informacije',
      hours: 'Radno Vrijeme',
      weekdays: 'Ponedjeljak - Petak: 8:00 - 20:00',
      weekend: 'Vikend: 9:00 - 18:00',
      sendMessage: 'Pošaljite Poruku',
      name: 'Ime',
      subject: 'Tema',
      message: 'Vaša poruka...',
      send: 'Pošalji Poruku',
      rights: 'Sva prava pridržana.'
    },
    common: {
      perNight: 'po noći',
      perPerson: 'po osobi',
      guests: 'gosti',
      bedrooms: 'spavaće sobe',
      bathrooms: 'kupaonice',
      viewDetails: 'Pogledaj Detalje',
      bookNow: 'Rezerviraj Sada',
      bookExcursion: 'Rezerviraj Izlet',
      bookingInquiryFor: 'Upit za rezervaciju za'
    }
  },
  en: {
    nav: {
      home: 'Home',
      houses: 'Houses',
      excursions: 'Excursions',
      lastminute: 'Last Minute',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Holiday homes and apartments in Bilice',
      subtitle: 'Your peaceful retreat on the shore of Lake Prokljan.',
      searchPlaceholder: 'Choose a house...',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'guests',
      search: 'Search'
    },
    houses: {
      title: 'Our Houses',
      subtitle: 'Dreamlike relaxation in a breathtaking landscape'
    },
    excursions: {
      title: 'Excursions in our area',
      subtitle: 'Discover the beauty of Šibenik-Knin County',
      story: {
        title: 'Our Excursions',
        content1: 'Bilice is ideally located for exploring the most beautiful destinations in Dalmatia. Our location provides easy access to Krka National Park, the historic city of Šibenik, the UNESCO city of Trogir, and numerous other attractions. We organize personalized excursions tailored to your interests - from natural wonders to cultural landmarks.',
        content2: 'Our team of local experts knows every corner of the region and is happy to share hidden gems that tourists usually don\'t discover. Whether you prefer active adventures, cultural tours, or relaxing nature walks, we have the perfect excursion for you. All our tours include transportation, expert guidance, and flexible planning according to your wishes.'
      }
    },
    lastminute: {
      title: 'Last Minute Offers',
      subtitle: 'Take advantage of our special offers for spontaneous getaways',
      story: {
        title: ' Plan your stay with us – stress-free and easy!',
        content1: ' Want to organize a trip, retreat, or active vacation in Croatia? We re here to help you every step of the way! Whether youre planning: A yoga retreat, pilates, martial arts, or fitness programs, Stress-reduction camps, healthy eating workshops, or autogenic training, Or simply a relaxing holiday in beautiful houses with a pool Our team will make sure everything is perfectly organized!',
        content2: ' What we offer: Help with organizing activities, accommodation, and transportation, A personalized approach – everything tailored to your wishes and needs, Experience and local contacts – we know where to find the best places, activities, and hidden gems.Affordable prices – we’ll find the best offer for your budget Your trip, your rules – we take care of the rest! Contact us and tell us what youre looking for – together, well create an unforgettable experience in Croatia!'
      },
      bachelorette: {
        title: 'Organize an unforgettable bachelorette party with us!',
        content1: 'Looking for the perfect place to celebrate your bachelorette party? You\'re in the right place! Our location offers the ideal combination of relaxation, fun, and elegance – everything you need for an evening you\'ll remember forever.',
        content2: 'Private pool just for you Enjoy an intimate atmosphere by the refreshing pool, perfect for relaxed socializing, cocktails, and great photos for memories! Perfect place for celebration You can customize our space to your style – whether you want a themed party, quiet dinner under candlelight, or wild fun with music until late at night. Catering and decoration options In collaboration with trusted partners, we offer you the option of organizing food, drinks, and decoration – you just show up and enjoy! Perfect for photos Every corner of our space is designed to look great in pictures – because we know how much memories mean!'
      }
    },
    about: {
      title: 'About Us',
      subtitle: 'Your host for an unforgettable vacation in Bilice',
      story: {
        title: 'Our Story',
        content1: 'We are a family-run business that has been renting houses and apartments in Bilice since 2019 – a small Dalmatian village located on the shore of Lake Prokljan, just a short distance from Šibenik. This unique location offers the best of both freshwater and coastal landscapes, with untouched nature, clean air, and beautiful views. Each of our accommodations is carefully furnished and equipped with everything you need for a comfortable and relaxing stay. Located in a quiet environment, they are perfect for unwinding, walking along the lake, cycling, or exploring the wider region.',
        content2: 'Thanks to its proximity to Krka National Park, the city of Šibenik, and numerous beaches and islands, Bilice is an ideal base for an active and diverse holiday. The Prokljan Lake also offers opportunities for fishing, kayaking, and enjoying nature away from the crowds. We take pride in offering a personal approach and are always available for tips, recommendations, and support during your stay. Our goal is not just to rent out a place – but to create an experience you\'ll want to return to. To our past guests – thank you for your trust. And to our future ones – welcome to Bilice, on the lake where nature and peace meet.'
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are ready to answer all your questions',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      info: 'Contact Information',
      hours: 'Business Hours',
      weekdays: 'Monday - Friday: 8:00 - 20:00',
      weekend: 'Weekend: 9:00 - 18:00',
      sendMessage: 'Send Message',
      name: 'Name',
      subject: 'Subject',
      message: 'Your message...',
      send: 'Send Message',
      rights: 'All rights reserved.'
    },
    common: {
      perNight: 'per night',
      perPerson: 'per person',
      guests: 'guests',
      bedrooms: 'bedrooms',
      bathrooms: 'bathrooms',
      viewDetails: 'View Details',
      bookNow: 'Book Now',
      bookExcursion: 'Book Excursion',
      bookingInquiryFor: 'Booking Inquiry for'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      houses: 'Häuser',
      excursions: 'Ausflüge',
      lastminute: 'Last Minute',
      about: 'Über uns',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Ferienhäuser und Apartments in Bilice',
      subtitle: 'Ihr ruhiger Rückzugsort am Ufer des Prokljan-Sees.',
      searchPlaceholder: 'Haus wählen...',
      checkIn: 'Anreise',
      checkOut: 'Abreise',
      guests: 'Gäste',
      search: 'Suchen'
    },
    houses: {
      title: 'Unsere Häuser',
      subtitle: 'Traumhafte Erholung in atemberaubender Landschaft '
    },
    excursions: {
      title: 'Ausflüge in unserer Umgebung',
      subtitle: 'Entdecken Sie die Schönheit der Gespanschaft Šibenik-Knin',
      story: {
        title: 'Unsere Ausflüge',
        content1: 'Bilice ist ideal gelegen, um die schönsten Destinationen Dalmatiens zu erkunden. Unsere Lage ermöglicht einfachen Zugang zum Nationalpark Krka, der historischen Stadt Šibenik, der UNESCO-Stadt Trogir und vielen anderen Attraktionen. Wir organisieren personalisierte Ausflüge, die auf Ihre Interessen zugeschnitten sind - von Naturwundern bis zu kulturellen Sehenswürdigkeiten.',
        content2: 'Unser Team lokaler Experten kennt jeden Winkel der Region und teilt gerne versteckte Juwelen mit, die Touristen normalerweise nicht entdecken. Ob Sie aktive Abenteuer, Kulturtouren oder entspannende Naturwanderungen bevorzugen, wir haben den perfekten Ausflug für Sie. Alle unsere Touren beinhalten Transport, fachkundige Führung und flexible Planung nach Ihren Wünschen.'
      }
    },
    lastminute: {
      title: 'Last Minute Angebote',
      subtitle: 'Nutzen Sie unsere Sonderangebote für spontane Ausflüge',
      story: {
        title: ' Organisiere deinen Aufenthalt mit uns – stressfrei und unkompliziert!',
        content1: ' Du möchtest eine Reise, ein Retreat oder einen Aktivurlaub in Kroatien organisieren? Wir sind da, um dir bei jedem Schritt zu helfen! Egal, ob du planst: Ein Yoga-Retreat, Pilates, Kampfsport oder Fitnessprogramme, Camps zur Stressreduktion, Workshops zur gesunden Ernährung oder Autogenes Training, Oder einfach nur einen entspannten Urlaub in traumhaften Häusern mit Pool, Unser Team sorgt dafür, dass alles perfekt organisiert ist!',
        content2: ' Was wir anbieten: Unterstützung bei der Organisation von Aktivitäten, Unterkunft und Transport. Individueller Ansatz – alles wird auf deine Wünsche und Bedürfnisse abgestimmt, Erfahrung und lokale Kontakte – wir wissen, wo die besten Unterkünfte, Aktivitäten und versteckten Orte sind. Faire Preise – wir finden das beste Angebot für dein Budget.  Deine Reise, deine Regeln – wir kümmern uns um den Rest!  Schreib uns und erzähle uns deine Wünsche – gemeinsam schaffen wir ein unvergessliches Erlebnis in Kroatien.'
      },
      bachelorette: {
        title: 'Organisiere einen unvergesslichen Junggesellinnenabschied bei uns!',
        content1: 'Du suchst die perfekte Location für deinen Junggesellinnenabschied? Dann bist du bei uns genau richtig! Unsere Location bietet die perfekte Mischung aus Entspannung, Spaß und Stil – alles, was du für einen unvergesslichen Abend brauchst.',
        content2: 'Privater Pool nur für euch Genießt eine entspannte Atmosphäre am Pool – ideal zum Chillen, für Cocktails und tolle Fotos! Der perfekte Ort zum Feiern Gestalte deine Party ganz nach deinem Geschmack – ob Mottoparty, stilvolles Dinner oder ausgelassene Nacht mit Musik und Tanz. Catering- und Dekorationsservice verfügbar Auf Wunsch kümmern wir uns um Essen, Getränke und Deko – ihr müsst nur noch feiern! Instagram-taugliche Kulisse Jede Ecke unserer Location ist ein Hingucker – für Fotos, die euch ewig an diesen besonderen Abend erinnern.'
      }
    },
    about: {
      title: 'Über Uns',
      subtitle: 'Ihr Gastgeber für einen unvergesslichen Urlaub in Bilice',
      story: {
        title: 'Unsere Geschichte',
        content1: 'Wir sind ein Familienbetrieb, der sich seit 2019 mit der Vermietung von Häusern und Ferienwohnungen in Bilice beschäftigt – einem kleinen dalmatinischen Ort direkt am Ufer des Prokljan-Sees, unweit von Šibenik. Dieser besondere Ort vereint das Beste aus See- und Meereslandschaft, mit unberührter Natur, sauberer Luft und wunderschöner Aussicht. Unsere Unterkünfte sind mit viel Liebe zum Detail eingerichtet und bieten alles, was Sie für einen angenehmen und entspannten Aufenthalt brauchen. Sie befinden sich in ruhiger Lage – perfekt zum Abschalten, Spazierengehen entlang des Sees, Radfahren oder für Tagesausflüge in die Umgebung.',
        content2: 'Durch die Nähe zum Nationalpark Krka, zur Stadt Šibenik und zu zahlreichen Stränden und Inseln ist Bilice der ideale Ausgangspunkt für einen aktiven und abwechslungsreichen Urlaub. Zudem bietet der Prokljan - See Möglichkeiten zum Angeln, Kajakfahren und Genießen der Natur – fernab vom Massentourismus.Wir legen großen Wert auf persönlichen Kontakt, stehen Ihnen jederzeit für Empfehlungen und Unterstützung zur Verfügung und möchten, dass Sie sich bei uns wie zuhause fühlen. Vielen Dank an alle bisherigen Gäste für das entgegengebrachte Vertrauen – und an alle neuen: Willkommen in Bilice, am See, wo Natur und Ruhe sich begegnen.'
      }
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Wir sind bereit, alle Ihre Fragen zu beantworten',
      phone: 'Telefon',
      email: 'E-Mail',
      address: 'Adresse',
      info: 'Kontaktinformationen',
      hours: 'Geschäftszeiten',
      weekdays: 'Montag - Freitag: 8:00 - 20:00',
      weekend: 'Wochenende: 9:00 - 18:00',
      sendMessage: 'Nachricht senden',
      name: 'Name',
      subject: 'Betreff',
      message: 'Ihre Nachricht...',
      send: 'Nachricht senden',
      rights: 'Alle Rechte vorbehalten.'
    },
    common: {
      perNight: 'pro Nacht',
      perPerson: 'pro Person',
      guests: 'Gäste',
      bedrooms: 'Schlafzimmer',
      bathrooms: 'Badezimmer',
      viewDetails: 'Details anzeigen',
      bookNow: 'Jetzt buchen',
      bookExcursion: 'Ausflug buchen',
      bookingInquiryFor: 'Buchungsanfrage für'
    }
  }
};