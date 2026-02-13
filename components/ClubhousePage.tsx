
import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface ClubhousePageProps {
  onBack: () => void;
}

const CLUBHOUSE_IMAGES = [
  "http://avid3952177.altervista.org/img/Sede_1.jpeg",
  "http://avid3952177.altervista.org/img/Sede_2.jpeg",
  "http://avid3952177.altervista.org/img/Sede_3.jpeg"
];

const ClubhousePage: React.FC<ClubhousePageProps> = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CLUBHOUSE_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CLUBHOUSE_IMAGES.length) % CLUBHOUSE_IMAGES.length);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative flex flex-col items-center">
      {/* Background Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-5">
         <img 
            src="http://palestralc.altervista.org/img/FAN_WHITE_ENNA.png" 
            className="w-[80%] md:w-[50%] h-auto grayscale"
            alt="Watermark"
         />
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
        {/* Header with Back Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-juve-gold hover:text-white transition-colors font-display font-bold uppercase tracking-wider group"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Torna alla Home
            </button>
            
            <div className="flex flex-col items-start md:items-end text-left md:text-right">
              <h1 className="font-display font-black text-2xl md:text-5xl uppercase tracking-tighter leading-none mb-2">
                LA NOSTRA SEDE
              </h1>
              <div className="flex items-center gap-2 text-juve-gold font-bold uppercase text-[10px] md:text-xs tracking-widest">
                <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                Via Roma 117/119, Enna
              </div>
            </div>
        </div>

        {/* Main Slider Container - Ingrandito a max-w-7xl */}
        <div className="relative w-full overflow-hidden rounded-sm shadow-[0_30px_80px_rgba(0,0,0,0.9)] group border border-white/5 bg-juve-darkgray/20">
          
          {/* Inner Slider with Slide Effect */}
          <div 
            className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {CLUBHOUSE_IMAGES.map((src, index) => (
              <div key={index} className="w-full flex-shrink-0 flex items-center justify-center bg-black/40">
                <img 
                  src={src} 
                  alt={`Sede Club Foto ${index + 1}`} 
                  className="w-full h-auto object-contain max-h-[85vh] transition-transform duration-1000 group-hover:scale-[1.01]"
                />
              </div>
            ))}
          </div>

          {/* Overlays for Controls */}
          <button 
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-juve-gold text-white p-4 rounded-full transition-all border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 z-20 shadow-xl"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-juve-gold text-white p-4 rounded-full transition-all border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 z-20 shadow-xl"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Counter Badge */}
          <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] z-20 shadow-lg">
            Immagine {currentIndex + 1} / {CLUBHOUSE_IMAGES.length}
          </div>

          {/* Subtle Navigation Dots (Alternative to Thumbnails) */}
          <div className="absolute bottom-6 right-6 flex gap-2 z-20">
            {CLUBHOUSE_IMAGES.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === idx ? 'w-8 bg-juve-gold shadow-[0_0_10px_#ff2850]' : 'w-2 bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        {/* Spacing for layout balance */}
        <div className="mt-12 text-center">
            <p className="text-white/20 font-display font-bold uppercase tracking-[0.5em] text-[10px]">
              Juventus Official Fan Club Enna - La nostra casa
            </p>
        </div>
      </div>
    </div>
  );
};

export default ClubhousePage;
