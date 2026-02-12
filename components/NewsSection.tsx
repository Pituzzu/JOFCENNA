
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ViewState } from '../App';

interface NewsCardData {
  id: number;
  title: string;
  category: string;
  image: string;
  buttonText: string;
  action?: ViewState; 
}

interface NewsSectionProps {
  onNavigate: (view: ViewState) => void;
}

const NEWS_ITEMS: NewsCardData[] = [
  {
    id: 1,
    category: "In Evidenza",
    title: "Campagna Tesseramento 2025/26",
    image: "http://palestralc.altervista.org/img/campagna_tesseramento.jpeg",
    buttonText: "Iscriviti Ora"
  },
  {
    id: 99, 
    category: "Solidarietà",
    title: "Raccolta Solidale 2025 – Il Natale di Tutti",
    image: "https://palestralc.altervista.org/img/RACCOLTA.jpeg",
    buttonText: "Scopri di più",
    action: "charity"
  },
  {
    id: 2,
    category: "Club",
    title: "Buone Feste Bianconere!",
    image: "http://palestralc.altervista.org/img/BUONE_FESTE.jpeg",
    buttonText: "Auguri"
  },
  {
    id: 3,
    category: "Comunicazione Ufficiale",
    title: "Rinnovo Consiglio Direttivo",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    buttonText: "Leggi l'Articolo",
    action: "board-election"
  },
  {
    id: 4,
    category: "Riconoscimenti",
    title: "Premiati al JOFC Day 2025 per l'evento con Vucinic",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop", 
    buttonText: "Leggi l'Articolo",
    action: "jofc-award"
  },
  {
    id: 5,
    category: "Nomina Ufficiale",
    title: "Presidente Michele Russo nominato Referente Regionale",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop", 
    buttonText: "Leggi l'Articolo",
    action: "president-referent"
  }
];

const PARTNERS = [
  { id: 7, url: "http://avid3952177.altervista.org/img/sicurezza.png", name: "Impresa di pulizia e servizi integrati" },
  { id: 2, url: "http://palestralc.altervista.org/img/La_nuova_posta.png", name: "La Nuova Posta" },
  { id: 3, url: "http://palestralc.altervista.org/img/Americo_Generali.png", name: "Americo Generali" },
  { id: 4, url: "http://avid3952177.altervista.org/img/Max_Market.png", name: "Max Market" },
  { id: 5, url: "http://avid3952177.altervista.org/img/borgo_Deodato.png", name: "Borgo Deodato" },
  { id: 6, url: "http://avid3952177.altervista.org/img/nuova_3d.png", name: "Nuova 3D" },
  { id: 1, url: "http://palestralc.altervista.org/img/print.png", name: "Print" },
  { id: 8, url: null, name: "Spazio Disponibile" },
];

const NewsSection: React.FC<NewsSectionProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setVisibleItems(1);
      } else {
        setVisibleItems(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const staticNews = NEWS_ITEMS[0];
  const scrollingNews = NEWS_ITEMS.slice(1);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= scrollingNews.length - visibleItems ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, scrollingNews.length - visibleItems) : prev - 1
    );
  };

  const handleNewsClick = (action?: ViewState) => {
    if (action) {
      onNavigate(action);
    }
  };

  return (
    <section id="news" className="relative z-20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12 md:gap-16">
          
          {/* TOP ROW: Locandina + Ultime Notizie */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-4 h-full min-h-[400px]">
               <div 
                 className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black cursor-pointer"
                 onClick={() => handleNewsClick(staticNews.action)}
               >
                  <img 
                    src={staticNews.image} 
                    alt={staticNews.title} 
                    className="w-full h-full object-contain"
                  />
               </div>
            </div>

            <div className="lg:col-span-8 relative flex flex-col justify-center min-h-[400px]">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="text-white font-display font-bold uppercase text-2xl drop-shadow-md border-l-4 border-juve-gold pl-4">
                     Ultime Notizie
                  </h3>
                  <div className="flex gap-2">
                     <button onClick={prevSlide} className="bg-white/10 hover:bg-juve-gold text-white p-2 rounded-full transition-colors border border-white/20 backdrop-blur-md">
                        <ChevronLeft className="w-5 h-5" />
                     </button>
                     <button onClick={nextSlide} className="bg-white/10 hover:bg-juve-gold text-white p-2 rounded-full transition-colors border border-white/20 backdrop-blur-md">
                        <ChevronRight className="w-5 h-5" />
                     </button>
                  </div>
               </div>

               <div className="overflow-hidden w-full h-full rounded-2xl">
                  <div 
                    className="flex transition-transform duration-500 ease-out h-full gap-4"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                  >
                     {scrollingNews.map((item) => (
                        <div 
                          key={item.id} 
                          className={`min-w-full lg:min-w-[calc(50%-8px)] p-0 h-full cursor-pointer`}
                          onClick={() => handleNewsClick(item.action)}
                        >
                           <div className="group relative w-full h-[450px] overflow-hidden rounded-2xl shadow-xl bg-black transform transition-all duration-300">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 w-full p-6">
                                <h4 className="text-juve-gold font-bold text-[10px] uppercase tracking-widest mb-2">{item.category}</h4>
                                <h3 className="font-display font-bold text-xl text-white uppercase leading-tight mb-4 drop-shadow-lg line-clamp-2">
                                  {item.title}
                                </h3>
                                <button className="bg-white text-black font-display font-bold uppercase text-[10px] px-6 py-3 hover:bg-juve-gold hover:text-white transition-colors tracking-widest">
                                  {item.buttonText}
                                </button>
                              </div>
                          </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>

          {/* BOTTOM ROW: PARTNERS SECTION - Spazio bianco minimizzato */}
          <div className="w-full">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-widest text-white drop-shadow-lg">
                Official Partner 2025/26
              </h3>
              <div className="h-px flex-grow bg-white/20 ml-6 hidden md:block"></div>
            </div>

            <div className="bg-gray-300 rounded-xl shadow-2xl overflow-hidden border border-white/5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-300">
                {PARTNERS.map((partner) => (
                  <div 
                    key={partner.id} 
                    className="h-24 md:h-32 w-full flex items-center justify-center bg-white overflow-hidden p-1 md:p-2"
                  >
                     {partner.url ? (
                        <img 
                          src={partner.url} 
                          alt={partner.name} 
                          className="w-full h-full object-contain pointer-events-none" 
                        />
                     ) : (
                        <div className="flex flex-col items-center gap-1 opacity-10 select-none w-full h-full justify-center bg-gray-50">
                          <span className="text-[8px] font-display font-black text-gray-500 uppercase tracking-widest">Partner</span>
                        </div>
                     )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsSection;
