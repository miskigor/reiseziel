import React from 'react';
import { Star } from './Icons';
import { useTranslation } from '../hooks/useTranslation';

interface ExcursionsProps {
  language: string;
}

export const Excursions: React.FC<ExcursionsProps> = ({ language }) => {
  const { t } = useTranslation(language);

  const excursions = [
    {
      id: '1',
      title: {
        hr: 'Nacionalni park Krka – čudo prirode nadomak Bilica',
        en: 'Krka National Park – a natural wonder just minutes from Bilice',
        de: 'Nationalpark Krka – ein Naturwunder ganz in der Nähe von Bilice'
      },
      description: {
        hr: 'Samo nekoliko minuta vožnje od Bilica, smjestio se jedan od najljepših prirodnih dragulja Hrvatske – Nacionalni park Krka. Ova očaravajuća oaza poznata je po kristalno čistoj rijeci Krki, spektakularnim slapovima, šetnicama kroz netaknutu prirodu i bogatoj povijesno-kulturnoj baštini. Najpoznatija atrakcija parka je Skradinski buk – jedan od najljepših i najpoznatijih slapova u Europi, koji oduzima dah svojom veličinom i snagom. Osim njega, tu su i slapovi Roški slap, otočić Visovac s franjevačkim samostanom, brojne edukativne staze, mlinice i vidikovci. Park je idealan za obiteljske izlete, biciklističke ture, planinarenje ili jednostavno opuštanje uz zvuk vode i šum prirode. Tijekom ljeta moguće je i kupanje na označenim mjestima, a brodske ture omogućuju jedinstveno iskustvo doživljaja rijeke izbliza. Boravkom u Bilicama imate privilegiju da vam ulaz u park bude gotovo na dohvat ruke, bez potrebe za dugim putovanjem ili gužvama.',
        en: 'Just a few minutes\' drive from Bilice lies one of Croatia\'s most stunning natural gems – Krka National Park. This enchanting oasis is known for the crystal-clear Krka River, breathtaking waterfalls, scenic walking trails through unspoiled nature, and a rich historical and cultural heritage. The park\'s most famous attraction is Skradinski buk – one of the most beautiful and well-known waterfalls in Europe, truly awe-inspiring in its size and power. Other highlights include the Roški slap waterfalls, the island of Visovac with its Franciscan monastery, educational trails, historic watermills, and panoramic viewpoints. Krka is perfect for family outings, cycling tours, hiking, or simply relaxing to the sound of flowing water and birdsong. In summer, swimming is allowed at designated areas, and boat excursions offer a unique way to experience the river up close. By staying in Bilice, you have the privilege of being just a short step away from the park entrance, with no need for long travel or crowds.',
        de: 'Nur wenige Autominuten von Bilice entfernt befindet sich eines der schönsten Naturjuwele Kroatiens – der Nationalpark Krka. Diese bezaubernde Oase ist bekannt für den kristallklaren Fluss Krka, spektakuläre Wasserfälle, Spazierwege durch unberührte Natur sowie ein reiches historisches und kulturelles Erbe. Die bekannteste Attraktion des Parks ist der Skradinski buk – einer der schönsten und berühmtesten Wasserfälle Europas, der mit seiner Größe und Kraft beeindruckt. Darüber hinaus erwarten Sie auch der Roški slap, die Insel Visovac mit ihrem Franziskanerkloster, zahlreiche Lehrpfade, alte Wassermühlen und atemberaubende Aussichtspunkte. Der Park ist ideal für Familienausflüge, Radtouren, Wanderungen oder einfach zum Entspannen in der Natur. In den Sommermonaten ist das Baden an ausgewiesenen Stellen möglich, und Bootstouren bieten ein einzigartiges Erlebnis aus der Perspektive des Flusses. Ein Aufenthalt in Bilice bietet den Vorteil, dass sich der Parkeingang praktisch in greifbarer Nähe befindet – ganz ohne lange Anfahrtswege oder Menschenmassen.'
      },
      image: '/WhatsApp%20Image%202025-06-09%20at%2015.04.52.jpeg',
      rating: 4.8
    },
    {
      id: '2',
      title: {
        hr: 'Šibenik – Stari Grad: Srce dalmatinske povijesti i kamene duše',
        en: 'Šibenik Old Town – The Heart of Dalmatian History and Stone Soul',
        de: 'Altstadt von Šibenik – Das Herz der dalmatinischen Geschichte und Steinarchitektur'
      },
      description: {
        hr: 'Stari Grad Šibenika pravo je arhitektonsko i povijesno blago koje očarava svakog posjetitelja svojom autentičnom atmosferom, kamenim uličicama i spomenicima koji pričaju priče stoljećima. Smješten na obali Jadrana, između rijeke Krke i kristalno čistog mora, Šibenik je jedan od najstarijih gradova na Jadranu osnovan od strane Hrvata, a prvi put se spominje davne 1066. godine u darovnici kralja Petra Krešimira IV. U srcu Starog Grada nalazi se katedrala sv. Jakova, remek-djelo renesansne arhitekture i UNESCO-va svjetska baština. Građena isključivo od kamena, bez ikakvog vezivnog materijala, katedrala je simbol vjere, upornosti i majstorstva domaćih graditelja, osobito Jurja Dalmatinca. Uske, vijugave ulice Starog Grada, s kamenim stepenicama, lukovima i skrivenim dvorištima, vode posjetitelje do brojnih crkvica, trgova i povijesnih palača. Posebnu čar pruža i Tvrđava sv. Mihovila, s koje se pruža panoramski pogled na grad, more i obližnje otoke. Danas je tvrđava pretvorena u atraktivnu pozornicu na otvorenom, gdje se ljeti održavaju koncerti i kulturni događaji. Šibenik nije samo grad prošlosti, već i grad kulture, umjetnosti i života. Ulični festivali, tradicionalne fešte, zanatske radionice i galerije suvremene umjetnosti stapaju se s povijesnom jezgrom, stvarajući živopisnu i dinamičnu atmosferu.',
        en: 'The Old Town of Šibenik is a true architectural and historical gem, captivating every visitor with its authentic atmosphere, narrow stone streets, and monuments that tell stories centuries old. Nestled between the Krka River and the crystal-clear Adriatic Sea, Šibenik is one of the oldest cities on the Adriatic founded by Croats, first mentioned in 1066 in a charter by King Petar Krešimir IV. At the heart of the Old Town stands the Cathedral of St. James, a masterpiece of Renaissance architecture and a UNESCO World Heritage Site. Built entirely from stone, without any binding materials, it is a symbol of faith, perseverance, and craftsmanship, especially of the famed builder Juraj Dalmatinac. The winding stone alleys of the Old Town lead visitors past small churches, charming squares, and historical palaces. One of the highlights is St. Michael\'s Fortress, offering a breathtaking panoramic view of the city and nearby islands. Today, it serves as an open-air stage for concerts and cultural events during the summer.Šibenik is not only a city of the past but also a living, breathing cultural hub. Street festivals, local celebrations, artisan workshops, and contemporary art galleries merge seamlessly with the historical core, creating a vibrant and dynamic atmosphere.',
        de: 'Die Altstadt von Šibenik ist ein wahres architektonisches und historisches Juwel, das Besucher mit ihrer authentischen Atmosphäre, engen Steingassen und jahrhundertealten Monumenten begeistert. Eingebettet zwischen dem Fluss Krka und der kristallklaren Adria ist Šibenik eine der ältesten Städte an der Küste, gegründet von Kroaten und erstmals im Jahr 1066 in einer Urkunde von König Petar Krešimir IV. erwähnt. Im Zentrum der Altstadt thront die Kathedrale des Heiligen Jakob, ein Meisterwerk der Renaissance-Architektur und ein UNESCO-Weltkulturerbe. Vollständig aus Stein und ohne Bindematerial erbaut, ist sie ein Symbol für Glauben, Ausdauer und das handwerkliche Können, insbesondere von Baumeister Juraj Dalmatinac. Die verwinkelten Gassen führen durch die Altstadt vorbei an kleinen Kirchen, historischen Palästen und malerischen Plätzen. Besonders sehenswert ist die Festung St. Michael, von der sich ein atemberaubender Blick auf die Stadt und die umliegenden Inseln eröffnet. Heute dient sie als Freilichtbühne für Konzerte und kulturelle Veranstaltungen. Šibenik ist nicht nur eine Stadt der Geschichte, sondern auch ein lebendiges Zentrum für Kunst und Kultur. Straßenfeste, traditionelle Feiern, Handwerksläden und Galerien moderner Kunst verschmelzen harmonisch mit dem historischen Erbe.'
      },
      image: '/stari grad/reduced_image.jpg',
      rating: 4.9
    }
  ];

  return (
    <section id="excursions" className="py-20 bg-gradient-to-b from-sky-50 via-rose-50 to-emerald-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-rose-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-500 via-sky-600 to-rose-500 bg-clip-text text-transparent">
              {t('excursions.title')}
            </span>
          </h2>
          <p className="text-xl text-emerald-600 max-w-3xl mx-auto leading-relaxed">
            {t('excursions.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Excursions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {excursions.map((excursion, index) => (
            <div
              key={excursion.id}
              className="group relative bg-slate-400/20 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-400/30 shadow-2xl transform-gpu hover:scale-105 transition-all duration-700 hover:shadow-3xl"
              style={{
                animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={excursion.image}
                  alt={excursion.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-xl">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-bold text-slate-700">{excursion.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-700 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {excursion.title[language]}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {excursion.description[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px) rotateX(15deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
      `}</style>
    </section>
  );
};