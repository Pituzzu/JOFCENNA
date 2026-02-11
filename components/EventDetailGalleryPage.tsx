
import React from 'react';
import { ArrowLeft, Grid } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

interface EventDetailGalleryPageProps {
  eventId: number;
  onBack: () => void;
}

const EventDetailGalleryPage: React.FC<EventDetailGalleryPageProps> = ({ eventId, onBack }) => {
  // Simuliamo immagini diverse in base all'ID evento usando le immagini esistenti o variazioni
  const getEventImages = () => {
    switch(eventId) {
      case 1: return GALLERY_IMAGES;
      case 2: return GALLERY_IMAGES.slice(0, 4);
      case 3: return [GALLERY_IMAGES[0], GALLERY_IMAGES[2], GALLERY_IMAGES[4]];
      default: return GALLERY_IMAGES;
    }
  };

  const images = getEventImages();

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative animate-fade-in-up">
       <div className="container mx-auto px-4 relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-juve-gold hover:text-white transition-colors mb-8 font-display font-bold uppercase tracking-wider group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Torna alla lista eventi
        </button>

        <div className="mb-12 border-l-4 border-juve-gold pl-6">
            <h1 className="text-3xl md:text-5xl font-display font-black uppercase mb-2 text-white tracking-tighter">
              Galleria Evento
            </h1>
            <div className="flex items-center gap-2 text-gray-500 font-bold uppercase text-xs tracking-widest">
              <Grid className="w-4 h-4" />
              {images.length} Immagini trovate
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div 
              key={index}
              className="group relative h-72 md:h-64 overflow-hidden rounded-sm bg-gray-900 border border-white/5 cursor-zoom-in"
            >
              <img 
                src={src} 
                alt={`Foto ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-500 font-display text-xl uppercase italic">Caricamento immagini in corso...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetailGalleryPage;
