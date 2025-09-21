import { House } from '../types';

export const houses: House[] = [
  // Vila Mediteran 1 - Now renamed to Vrt lavande 1 and moved to first position
  {
    id: '5',
    title: {
      hr: 'Vrt lavande 1',
      en: 'Lavendel garden1',
      de: 'Lavendelgarten 1'
    },
    description: {
      hr: 'Apartman 1 nalazi se u prizemlju i nudi sljedeću opremu: Ulaz bez stepenica prilagođeno osobama s invaliditetom 2 spavaće sobe, 1 kupaonica, Dnevni boravak s otvorenom kuhinjom, Pomoćni ležaj (kauč na razvlačenje za 1 osobu), Klimatizacija, Terasa u neposrednoj blizini, Bazen za zajedničko korištenje, Vrtni namještaj na terasi, Vanjski roštilj, Parkirno mjesto u dvorištu.',
      en: 'Apartment 1 is located on the ground floor and offers the following amenities: Step-free entrance, wheelchair accessible, 2 bedrooms, 1 bathroom, Living area with open kitchen, Sofa bed (for 1 person), Air conditioning, Terrace nearby, Shared swimming pool, Terrace furniture, Outdoor grill, Parking space in the courtyard.',
      de: 'Appartement 1 befindet sich im Erdgeschoss und bietet folgende Ausstattung:Stufenloser Eingang, barrierefrei und rollstuhlgerecht, 2 Schlafzimmer, 1 Badezimmer, Wohnbereich mit offener Küche, Schlafcouch (für 1 Person), Klimaanlage, Terrasse in unmittelbarer Nähe, Gemeinschaftspool, Terrassenmöbel, Außengrill, Parkplatz im Innenhof.                                                                                                                                                                                                                                               '
    },
    price: 180,
    currency: '€',
    location: {
      hr: 'Bilice, Šibenik',
      en: 'Bilice, Šibenik',
      de: 'Bilice, Šibenik'
    },
    guests: 5,
    bedrooms: 2,
    bathrooms: 1,
    image: [
      '/vrt lavande 1.jpg',
      '/lavande 1/vl1:2.jpeg',
      '/lavande 1/vl1:3..jpeg',
      '/lavande 1/vl1:4.jpg',
      '/lavande 1/vl1:5.jpg',
      '/lavande 1/vl1:6.jpeg',
      '/lavande 1/vl1:7.jpeg',
      '/lavande 1/vl1:8.jpeg',
      '/lavande 1/vl1:9.jpeg',
    ],
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Garden','BBQ', 'Parking'],
    rating: 4.9,
    reviews: 87,
    isPublished: true
  },
  // Vila Mediteran 2 - Now renamed to Vrt lavande 2 and moved to second position
  {
    id: '6',
    title: {
      hr: 'Vrt lavande 2',
      en: 'Lavendel garden 2',
      de: 'Lavendelgarten 2'
    },
    description: {
      hr: 'Apartman 2 nalazi se na gornjem katu i ima sljedeću opremu: 2 spavaće sobe, 1 kupaonica, dnevni boravak s otvorenom kuhinjom, klima-uređaj, terasa s pogledom na more, vanjski roštilj, veliko parkiralište u dvorištu.',
      en: 'Apartment 2 is located on the upper floor and offers the following amenities: 2 bedrooms, 1 bathroom, living area with open kitchen, air conditioning, terrace with sea view, outdoor grill, large parking space in the yard.',
      de: 'Das Appartement 2 liegt im Obergeschoss und hat folgende Ausstattung: 2 Schlafzimmer, 1 Bad, 1 Wohnbereich inkl. offener Küche, Klimaanlage angrenzend eine Terrasse mit Seeblick, Aussengrill, großer Parkplatz im Hof.  '
    },
    price: 180,
    currency: '€',
    location: {
      hr: 'Bilice, Šibenik',
      en: 'Bilice, Šibenik',
      de: 'Bilice, Šibenik'
    },
    guests: 4,
    bedrooms: 3,
    bathrooms: 1,
    image: [
      '/vl2/vl2:1.jpg',
      '/vl2/vl2:2.jpg',
      '/vl2/vl2:3.jpg',
      '/vl2/vl2:4.jpg',
      '/vl2/vl2-5.jpg',
    ],
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Garden','BBQ', 'Parking', 'Fireplace'],
    rating: 4.7,
    reviews: 42,
    isPublished: true
  },
  // Penthous 1 - Moved before Residence Mediterran 1
  {
    id: '3',
    title: {
      hr: 'Penthouse 1',
      en: 'Penthouse 1',
      de: 'Penthouse 1'
    },
    description: {
      hr: 'Apartman 1 nalazi se u prizemlju, nudi smještaj za 5+1 osoba i ima sljedeću opremu: Ulaz bez stepenica prilagođeno osobama s invaliditetom, 2 spavaće sobe, 1 dječja soba (krevet širine 120 cm), Dnevni boravak, Kauč na razvlačenje (za 1 osobu) Opremljena kuhinja, 1 velika kupaonica, Klimatizacija, Natkrivena terasa u neposrednoj blizini, Parkirno mjesto u dvorištu (natkriveno – carport), Bazen, Vanjski kamin.',
      en: 'Apartment 1 is located on the ground floor, accommodates 5+1 guests, and offers the following amenities: Step-free entrance, wheelchair accessible, 2 bedrooms, 1 children\'s room (120 cm bed), Living area, Sofa bed (sleeps 1 person), Fully equipped kitchen, 1 spacious bathroom, Air conditioning, Adjacent covered terrace, Parking space in the courtyard (carport), Swimming pool, Outdoor fireplace.',
      de: 'Das  Appartement 1 liegt im Untergeschoss, es bietet Platz für 5+1  Personen und hat folgende Ausstattung: Stufenloser Eingang, barrierefrei und rollstuhlgerecht, 2 Schlafzimmer, 1 Kinderzimmer (120 cm Bett), 1 Wohnbereich, Schlafcouch (1 Person) Ausgestattete Küche, 1 großes Bad, Klimaanlage, angrenzend eine überdachte Terrasse , Parkplatz im Hof (Carport) Poolanlage, Außenkamin.'
    },
    price: 321,
    currency: '€',
    location: {
      hr: 'Bilice, Šibenik',
      en: 'Bilice, Šibenik',
      de: 'Bilice, Šibenik'
    },
    guests: 5,
    bedrooms: 3,
    bathrooms: 1,
    image: [
      '/ph1.jpg',
      '/ph1/ph2:2.jpg',
      '/ph1/ph1:4.jpg',
      '/ph1/ph1:5.jpg',
      '/ph1/ph1:6.jpg',
      '/ph1/ph1:8.jpg',
      '/ph1/ph1:11.jpg',
      '/ph1/ph1:12.jpg',
    ],
    amenities: ['WiFi', 'Kitchen', 'Garden', 'AC', 'Parking', 'BBQ'],
    rating: 4.6,
    reviews: 38,
    isPublished: true
  },
  // Penthouse 2 - Moved before Residence Mediterran 1
  {
    id: '4',
    title: {
      hr: 'Penthouse 2',
      en: 'Penthouse 2',
      de: 'Penthouse 2'
    },
    description: {
      hr: 'Dvoetažni apartman (120 m²) -  proteže se kroz srednju i gornju etažu te nudi smještaj za 6+1 osoba. Sadrži sljedeću opremu: Srednja etaža: 2 spavaće sobe, Kauč na razvlačenje, Klimatizacija, 1kupaonica s fenom, Otvoreni dnevni boravak s kuhinjom, Balkon s prekrasnim pogledom na jezero, Pergola na stražnjoj strani kuće, Vrtni namještaj Gornja etaža (potkrovlje): 1 spavaća soba s bračnim krevetom (180 cm), Dodatni ležaj za jednu osobu, Klimatizacija, 1 kupaonica s fenom, Loggia, Dodatno: Parkirno mjesto u dvorištu (natkriveno – carport), Bazen,Vanjski kamin. ',
      en: 'Maisonette Apartment (120 sqm) -  consists of the middle and top floor, offering accommodation for 6+1 guests and includes the following features: Middle floor: 2 bedrooms, Sofa bed,  Air conditioning 1 bathroom with hairdryer, Open-plan living area with kitchen, Balcony with beautiful lake view Pergola at the back of the house, Terrace furniture available, Top floor (attic): 1 bedroom with double  bed (180 cm) Additional sleeping option for one person, Air conditioning, 1 bathroom with hairdryer Loggia, Additional amenities: Parking space in the courtyard (carport), Swimming pool, Outdoor fireplace.',
      de: 'Maisonette Wohnung (120 qm)- besteht aus der mittleren Etage und dem Dachgeschoss, es bietet Platz für 6+1  Personen und hat folgende Ausstattung: 2 Schlafzimmer, Schlafcouch, Klimaanlage, 1 Bad inkl. Fön, Offener Wohnbereich mit Küche, Balkon mit wunderschönen Seeblick, angrenzende Pergola auf der Rückseite des Hauses, Terrassenmöbel vorhanden. Obergeschoss - 1 Schlafzimmer Doppelbett 180 cm, Schlafmöglichkeit für eine weitere Person, Klimaanlage, 1 Bad inkl. Föhn, Loggia , Parkplatz im Hof (Carport), Poolanlage, Außenkamin.'
    },
    price: 321,
    currency: '€',
    location: {
      hr: 'Bilice, Šibenik',
      en: 'Bilice, Šibenik',
      de: 'Bilice, Šibenik'
    },
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    image: [
      '/ph2/ph2.jpg',
      '/ph2/ph2:1.jpg',
      '/ph2/ph2:2a.jpg',
      '/ph2/ph2:3.jpg',
      '/ph2/ph2:4.jpg',
      '/ph2/ph2:5.jpg',
      '/ph2/ph2:6.jpg',
      '/ph2/ph2:7.jpg',
      '/ph2/ph2:8.jpg',
      '/ph2/ph2:9.jpg',
      '/ph2/ph2:10.jpg',
      '/ph2/ph2:11.jpg',
      '/ph2/IMG_2782.jpg',
      '/ph2/ph2 14.jpg',
      
    ],
    amenities: ['WiFi', 'Kitchen', 'Terrace', 'Sea View', 'AC', 'Parking'],
    rating: 4.9,
    reviews: 76,
    isPublished: true
  },
  // Original Vrt lavande 1 - Now renamed to Residence Mediterran 1
  {
    id: '1',
    title: {
      hr: 'Residence Mediterran 1',
      en: 'Residence Mediterran 1',
      de: 'Residence Mediterran 1'
    },
    description: {
      hr: 'Apartman 1 nalazi se u prizemlju i nudi sljedeću opremu:1 spavaća soba s bračnim krevetom, 2 sobe s po jednim krevetom, 1 kupaonica s fenom za kosu, Dnevni boravak s otvorenom kuhinjom, Klimatizacija, Natkrivena terasa u neposrednoj blizini bazena, Bazen za zajedničko korištenje, Vrtni namještaj na terasi, Besplatan parking u dvorištu, Vanjski roštilj i vanjski tuš, Pogled na jezero',
      de: 'Das Appartement 1 befindet sich im Untergeschoss und hat folgende Ausstattung: 1 Schlafzimmer mit Doppelbett, 2 Zimmer mit Einzelbett, 1 Bad inkl. Föhn, 1 Wohnbereich inkl. offener Küche, Klimaanlage, angrenzend eine überdachte Terrasse mit angrenzenden Pool zur gemeinsamen Nutzung, Terrassenmöbel vorhanden, Parkplatz kostenfrei im Hof, Aussengrill und Aussendusche, Seeblick.',
      en: 'Apartment 1 is located on the ground floor and offers the following amenities: 1 bedroom with a double bed, 2 rooms with a single bed each, 1 bathroom including a hairdryer,Living area with open kitchen, Air conditioning, Covered terrace adjacent to the shared pool, Shared-use swimming pool, Terrace furniture available, Free parking in the courtyard,Outdoor grill and outdoor shower, Lake view each with its own terrace or balcony, air conditioning, and a shared pool. Sun loungers are available in sufficient number. All beds are freshly made; towels must be brought.'
    },
    price: 170,
    currency: '€',
    location: {
      hr: 'Bilice, Šibenik',
      en: 'Bilice, Šibenik',
      de: 'Bilice, Šibenik'
    },
    guests: 4,
    bedrooms: 4,
    bathrooms: 1,
    image: [
      '/rm1/rm1:1.jpg',
      '/rm1/rm1:2.jpg',
      '/rm1/rm1:3.jpg',
      '/rm1/rm1:5.jpg',
      '/rm1/rm1:6.jpg',
      '/rm1/IMG_2754.jpg',
      '/rm1/rm1:7.jpg',
      'rm1/rm1:8.jpg',
      '/rm1/rm1:9.jpg',
      '/rm1/rm1:15.jpeg',
    ],
    amenities: ['WiFi', 'Kitchen', 'Terrace', 'Garden', 'AC', 'Parking'],
    rating: 4.8,
    reviews: 64,
    isPublished: true
  },
  // Vrt lavande 2 - Now renamed to Residence Mediterran 2
  {
    id: '2',
    title: {
      hr: 'Residence Mediterran 2',
      en: 'Residence Mediterran 2',
      de: 'Residence Mediterran 2'
    },
    description: {
      hr: 'Apartman 2 nalazi se na gornjoj etaži i nudi sljedeću opremu: 2 spavaće sobe s bračnim krevetom, 1 dječja soba s krevetom na kat, Dnevni boravak s otvorenom kuhinjom, Kauč na razvlačenje (za 1 osobu), 1 kupaonica s fenom za kosu, Klimatizacija, Terasa u neposrednoj blizini, Bazen za zajedničko korištenje, Vrtni namještaj na terasi, Besplatno parkirno mjesto u dvorištu, Pogled na jezero.',
      en: 'Apartment 2 is located on the upper floor and offers the following amenities: 2 bedrooms with double beds, 1 childrens room with a bunk bed, Living area with open kitchen, Sofa bed (sleeps 1 person), 1 bathroom including a hairdryer, Air conditioning, Adjacent terrace, Shared-use swimming pool, Terrace furniture available, Free parking space in the courtyard,Lake view.',
      de: 'Das  Appartement 2 liegt auf der oberen Etage und hat folgende Ausstattung:2 Schlafzimmer mit Doppelbett, 1 Zimmer mit Doppelstöckigen Bett/ Kinderzimmer, 1 Wohnbereich inkl. offener Küche , Schlafcouch (1 Personen), 1 Bad inkl. Föhn, Klimaanlage, angrenzend eine Terrasse, Pool zur gemeinsamen Nutzung, Terrassenmöbel vorhanden, Parkplatz kostenfrei im Hof, Seeblick.'
    },
    price: 170,
    currency: '€',
    location: {
      hr: 'Bilice, Šibenik',
      en: 'Bilice, Šibenik',
      de: 'Bilice, Šibenik'
    },
    guests: 6,
    bedrooms: 3,
    bathrooms: 1,
    image: [
      '/mr2/mr2:1.jpg',
      '/mr2/mr2:2.jpg',
      '/mr2/mr3:3.jpg',
      '/mr2/mr2:4.jpg',
      '/mr2/mr2:5.jpg',
      '/mr2/mr2:6.jpg',
      '/mr2/mr2:7.jpg',
      '/mr2/mr2:8.jpg',
      
    ],
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Garden', 'Sea View', 'BBQ', 'Parking', 'Fireplace'],
    rating: 5.0,
    reviews: 93,
    isPublished: true
  },
  // Apartman 1
  {
    id: '10',
    title: {
      hr: 'Apartman 1',
      en: 'Apartment 1',
      de: 'Apartment 1'
    },
    description: {
      hr: 'Apartman 1 nalazi se u suterenu i ima sljedeću opremu: Ulaz s dvije stepenice, 2 spavaće sobe, 1 kupaonica s fenom za kosu, dnevni boravak s otvorenom kuhinjom, kauč na razvlačenje (za 2 osobe), klima uređaj, natkrivena terasa u neposrednoj blizini, besplatno parkiralište u dvorištu.',
      en: ' Apartment 1 is located in the basement and offers the following amenities: Two-step entrance, 2 bedrooms, 1 bathroom including a hairdryer, 1 living area with an open kitchen, sofa bed (sleeps 2), air conditioning, an adjoining covered terrace, free parking in the courtyard.',
      de: 'Das  Appartement 1 liegt im Untergeschoss und hat folgende Ausstattung: 2 stufiger Eingang, 2 Schlafzimmer, 1 Bad inkl. Föhn, 1 Wohnbereich inkl. offener Küche Schlafcouch (2 Personen) Klimaanlage, angrenzend eine überdachte Terrasse Parkplatz kostenfrei im Hof.'
    },
    price: 120,
    currency: '€',
    location: {
      hr: 'Bilice, Šibenik',
      en: 'Bilice, Šibenik',
      de: 'Bilice, Šibenik'
    },
    guests: 4,
    bedrooms: 3,
    bathrooms: 1,
    image: [
     '/ap1/ap1:1.jpg',
      '/ap1/ap1:2.jpg',
      '/ap1/ap1:3.jpg',
      '/ap1/ap1:4.jpg',
      '/ap1/ap1:5.jpg',
      '/ap1/ap1:6.jpg',
    ],
    amenities: ['WiFi', 'Kitchen', 'AC', 'Parking'],
    rating: 4.5,
    reviews: 25,
    isPublished: true
  },
  // Apartman 2
  {
    id: '11',
    title: {
      hr: 'Apartman 2',
      en: 'Apartment 2',
      de: 'Apartment 2'
    },
    description: {
      hr: 'Apartman 2 nalazi se na srednjem katu s desne strane i ima sljedeću opremu: otvoreni prostor za spavanje i boravak, klima uređaj, 1 kupaonica s fenom za kosu, terasa s pogledom na jezero, terasa je opremljena vrtnim namještajem.',
      en: ' Apartment 2 is located on the middle floor on the right side and offers the following amenities: open-plan sleeping and living area, air conditioning, 1 bathroom including a hairdryer, terrace with lake view,',
      de: ' Das  Appartement 2 liegt auf der mittleren Etage auf der rechten Seite und hat folgende Ausstattung: offener Schlaf- Wohnbereich, Klimaanlage, 1 Bad inkl. Föhn, Terrasse mit Seeblick Terrassenmöbel vorhanden.'
    },
    price: 85,
    currency: '€',
    location: {
      hr: 'Bilice, Šibenik',
      en: 'Bilice, Šibenik',
      de: 'Bilice, Šibenik'
    },
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    image: [
      '/apartman 2/Apartman2:1.jpg',
      '/apartman 2/Apartman2:4.jpg',
      '/apartman 2/Apartmam2:3.jpg',
      '/apartman 2/Apartman2:5.jpg'
    ],
    amenities: ['WiFi', 'Kitchen', 'Terrace', 'AC', 'Parking'],
    rating: 4.6,
    reviews: 18,
    isPublished: true
  },
  // Apartman 3
  {
    id: '12',
    title: {
      hr: 'Apartman 3',
      en: 'Apartment 3',
      de: 'Apartment 3'
    },
    description: {
      hr: ' Apartman 3 nalazi se na srednjem katu s lijeve strane i ima sljedeću opremu:otvoreni prostor za spavanje i boravak, klima uređaj, 1 kupaonica s fenom za kosu, terasa s uključenim vrtnim namještajem.',
      en: 'Apartment 3 is located on the middle floor on the left side and offers the following amenities: open-plan sleeping and living area, air conditioning, 1 bathroom including a hairdryer, terrace with terrace furniture included. ',
      de:  'Das  Appartement 3 liegt auf der mittleren Etage auf der linken Seite und hat folgende Ausstattung: offener Schlaf- Wohnbereich, Klimaanlage, 1 Bad inkl. Föhn, Terrasse inkl. Terrassenmöbel.'
    },
    price: 75,
    currency: '€',
    location: {
      hr: 'Bilice, Šibenik',
      en: 'Bilice, Šibenik',
      de: 'Bilice, Šibenik'
    },
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    image: [
      '/apartman 3/Apartman3:1.jpg',
      '/apartman 3/Apartman3:3.jpg',
      '/apartman 3/Apartman3:4.jpg'
    ],
    amenities: ['WiFi', 'Kitchen', 'Garden', 'AC', 'Parking'],
    rating: 4.4,
    reviews: 12,
    isPublished: true
  },
  // Apartman 4
  {
    id: '13',
    title: {
      hr: 'Apartman 4',
      en: 'Apartment 4',
      de: 'Apartment 4'
    },
    description: {
      hr: ' Apartman 4 nalazi se u potkrovlju i ima sljedeću opremu: dnevni boravak s otvorenom kuhinjom, kauč na razvlačenje (za 2 osobe), kamin, klima uređaj, 1 spavaća soba, 1 kupaonica s fenom za kosu, terasa s pogledom na jezero, terasa je opremljena vrtnim namještajem.',
      en: ' Apartment 4 is located in the attic and offers the following amenities: living area with open kitchen, sofa bed (sleeps 2), fireplace, air conditioning, 1 bedroom, 1 bathroom including a hairdryer, terrace with lake view, terrace furniture is provided.',
      de: ' Das  Appartement 4 liegt im Dachgeschoß und hat folgende Ausstattung: 1 Wohnbereich inkl. offener Küche, Schlafcouch (2 Personen), Kamin, Klimaanlage, 1 Schlafzimmer 1 Bad inkl. Föhn, Terrasse mit Seeblick Terrassenmöbel vorhanden'
    },
    price: 90,
    currency: '€',
    location: {
      hr: 'Bilice, Šibenik',
      en: 'Bilice, Šibenik',
      de: 'Bilice, Šibenik'
    },
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    image: [
      '/apartman 4/Apartman4:1.jpg',
      '/apartman 4/Apartman 4:2.jpg',
      '/apartman 4/Apartman4:3.jpg',
      '/apartman 4/Apartman4:4.jpg',
      '/apartman 4/Apartman4:5.jpg',
      '/apartman 4/Apartman4:6.jpg'
    ],
    amenities: ['WiFi', 'Kitchen', 'Terrace', 'AC', 'Sea View', 'Parking'],
    rating: 4.7,
    reviews: 30,
    isPublished: true
  },
  // Apartman 5 (formerly Vila Belvedere 2)
  {
    id: '8',
    title: {
      hr: 'Apartman 5',
      en: 'Apartment 5',
      de: 'Apartment 5'
    },
    description: {
      hr: ' Apartman 5 nalazi se u prizemlju, s lijeve strane, i ima sljedeću opremu: stepenični ulaz, 1 spavaća soba, 1 kupaonica s uključenim sušilom za kosu, dnevni boravak s otvorenom kuhinjom, klima-uređaj, natkrivena terasa u produžetku, besplatan parking u dvorištu, mogućnost korištenja vrta.',
      en: ' Apartment 5 is located on the ground floor, on the left side, and offers the following amenities: stepped entrance, 1 bedroom, 1 bathroom including hairdryer, living area with open kitchen, air conditioning, adjoining covered terrace, free parking in the yard, garden access.',
      de: ' Apartman 5 befindet sich im Erdgeschoss, auf der linken Seite und hat folgende Ausstattung: stufiger Eingang, ,1  Schlafzimmer, 1 Bad inkl. Föhn,1 Wohnbereich inkl. offener Küche Klimaanlage , angrenzend eine überdachte Terrasse , Parkplatz kostenfrei im Hof, Gartennutzung'
    },
    price: 85,
    currency: '€',
    location: {
      hr: 'Bilice, Šibenik',
      en: 'Bilice, Šibenik',
      de: 'Bilice, Šibenik'
    },
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    image: [
     '/ap5/ap5:1.jpg',
      '/ap5/ap5:2.jpg',
      '/ap5/ap5:3.jpg',
      '/ap5/ap5:4.jpg',
      '/ap5/ap5:5.jpg',
      '/ap5/ap5:6.jpg',
    ],
    amenities: ['WiFi', 'Kitchen','Garden', 'BBQ', 'AC', 'Parking'],
    rating: 4.9,
    reviews: 68,
    isPublished: true
  },
  // Apartman 6 (formerly Vila Belvedere 3)
  {
    id: '9',
    title: {
      hr: 'Apartman 6',
      en: 'Apartment 6',
      de: 'Apartment 6'
    },
    description: {
      hr: 'Apartman 6 nalazi se u donjem prizemlju, s desne strane, i ima sljedeću opremu: ravan ulaz bez stepenica, sastoji se od 2 spavaće sobe, 1 kupaonice s uključenim sušilom za kosu, kuhinje s blagovaonicom, klima-uređaja, natkrivene terase, besplatnog parkirnog mjesta u dvorištu i mogućnosti korištenja vrta.',
      en: 'Apartments 6 is located on the lower ground floor, on the right side, and offers the following amenities: step-free entrance, consists of 2 bedrooms, 1 bathroom including hairdryer, kitchen with dining area, air conditioning, adjoining covered terrace, free parking in the yard, and access to the garden.',
      de: 'Das Appartman 6 liegt im Untergeschoss, auf der rechten Seite und hat folgende Ausstattung: stufenloser Eingang, bestehend aus , 2 Schlafzimmer, 1 Bad inkl.  Föhn, Küche mit Essbereich Klimaanlage angrenzend eine überdachte Terrasse  Parkplatz  kostenfrei im Hof Gartennutzung. prevedi na hr i eng'
    },
    price: 120,
    currency: '€',
    location: {
      hr: 'Bilice, Šibenik',
      en: 'Bilice, Šibenik',
      de: 'Bilice, Šibenik'
    },
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    image: [
     '/ap6/ap6:1.jpg',
      '/ap6/ap6:2.jpg',
      '/ap6/ap6:3.jpg',
      '/ap6/ap6:4.jpg',
      '/ap6/ap6:5.jpg',
      '/ap6/ap6:7.jpg',
      '/ap6/ap6:6.jpg',
    ],
    amenities: ['WiFi', 'Kitchen', 'Terrace', 'AC', 'Sea View', 'Parking'],
    rating: 4.8,
    reviews: 45,
    isPublished: true
  }
];