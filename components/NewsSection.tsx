import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsCardData {
  id: number;
  title: string;
  category: string;
  image: string;
  buttonText: string;
  action?: string; // Optional action identifier
}

interface NewsSectionProps {
  onNavigate: (view: any) => void;
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
    id: 99, // Special ID for the new item
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
    category: "Eventi",
    title: "Eventi in Sede: Calendario",
    image: "https://images.unsplash.com/photo-1510051640316-543eee9f3ffa?q=80&w=800&auto=format&fit=crop",
    buttonText: "Scopri Date"
  },
  {
    id: 4,
    category: "Biglietteria",
    title: "Biglietti Juve - Inter",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=800&auto=format&fit=crop", // Stadium seats
    buttonText: "Info Soci"
  },
  {
    id: 5,
    category: "Storia",
    title: "Visita allo Juventus Museum",
    image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=800&auto=format&fit=crop", // Museum/Artistic
    buttonText: "Organizza"
  },
  {
    id: 6,
    category: "Merchandising",
    title: "Nuovi Gadget Club Enna",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=800&auto=format&fit=crop", // Shoes/Merch
    buttonText: "Guarda Catalogo"
  }
];

const PARTNERS = [
  { id: 1, url: "http://palestralc.altervista.org/img/print.png", name: "Print" },
  { id: 2, url: "http://palestralc.altervista.org/img/La_nuova_posta.png", name: "La Nuova Posta" },
  { id: 3, url: "http://palestralc.altervista.org/img/Americo_Generali.png", name: "Americo Generali" }
];

const NewsSection: React.FC<NewsSectionProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Separation of content:
  // First item is for the Static Column (Left)
  // Rest of items are for the Carousel (Center)
  const staticNews = NEWS_ITEMS[0];
  const scrollingNews = NEWS_ITEMS.slice(1);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === scrollingNews.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? scrollingNews.length - 1 : prev - 1
    );
  };

  const handleNewsClick = (action?: string) => {
    if (action === 'charity') {
      onNavigate('charity');
    }
    // Other actions can be handled here
  };

  return (
    <section id="news" className="relative z-20 py-24">
      {/* Container is transparent to let Hero video show through (Parallax effect) */}
      <div className="container mx-auto px-4">
        
        {/* NEW GRID LAYOUT: 3 Columns on LG screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* COLUMN 1: STATIC IMAGE (Tesseramento) */}
          <div className="hidden lg:block lg:col-span-1 h-full min-h-[500px]">
             <div 
               className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group border border-white/10 bg-black cursor-pointer"
               onClick={() => handleNewsClick(staticNews.action)}
             >
                <img 
                  src={staticNews.image} 
                  alt={staticNews.title} 
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Removed overlay text as requested */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-300"></div>
             </div>
          </div>

          {/* COLUMN 2: SCROLLING CAROUSEL (Center) */}
          <div className="lg:col-span-1 relative flex flex-col justify-center min-h-[500px]">
             
             {/* Controls Header */}
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-display font-bold uppercase text-xl drop-shadow-md">
                   Ultime Notizie
                </h3>
                <div className="flex gap-2">
                   <button onClick={prevSlide} className="bg-black/80 hover:bg-juve-gold text-white p-2 rounded-full transition-colors border border-white/20">
                      <ChevronLeft className="w-5 h-5" />
                   </button>
                   <button onClick={nextSlide} className="bg-black/80 hover:bg-juve-gold text-white p-2 rounded-full transition-colors border border-white/20">
                      <ChevronRight className="w-5 h-5" />
                   </button>
                </div>
             </div>

             {/* Slider Track Container */}
             <div className="overflow-hidden w-full h-full rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-out h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                   {scrollingNews.map((item) => (
                      <div 
                        key={item.id} 
                        className="min-w-full p-0 h-full cursor-pointer"
                        onClick={() => handleNewsClick(item.action)}
                      >
                         <div className="group relative w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl bg-black transform transition-all duration-300">
                            {/* Background Image */}
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-8">
                              <h4 className="text-juve-gold font-bold text-xs uppercase tracking-widest mb-2">{item.category}</h4>
                              <h3 className="font-display font-bold text-2xl text-white uppercase leading-none mb-6 drop-shadow-lg line-clamp-2">
                                {item.title}
                              </h3>
                              <button className="bg-white text-black font-display font-bold uppercase text-xs px-8 py-4 hover:bg-juve-gold hover:text-white transition-colors">
                                {item.buttonText}
                              </button>
                            </div>
                        </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          {/* COLUMN 3: PARTNERS (Right) */}
          <div className="lg:col-span-1 w-full h-full">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8 h-full flex flex-col min-h-[500px]">
              <h3 className="font-display font-bold text-xl uppercase tracking-widest mb-8 text-black border-l-4 border-juve-gold pl-4">
                Official Partner 2025/26
              </h3>
              
              <div className="flex flex-col gap-8 flex-grow overflow-y-auto max-h-[600px] scrollbar-hide py-4">
                {PARTNERS.map((partner) => (
                  <div key={partner.id} className="w-full shrink-0 border border-gray-100 rounded-lg flex items-center justify-center bg-white hover:bg-gray-50 transition-all cursor-pointer group shadow-sm hover:shadow-md p-4 overflow-hidden h-auto">
                     <img 
                        src={partner.url} 
                        alt={partner.name} 
                        className="max-w-full h-auto object-contain transition-transform group-hover:scale-105"
                     />
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