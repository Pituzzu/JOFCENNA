
import React from 'react';
import { ArrowLeft, Image as ImageIcon, AlertTriangle, Calendar } from 'lucide-react';

interface EventPreview {
  id: number;
  title: string;
  date: string;
  icon: React.ReactNode;
}

const EVENTS: EventPreview[] = [
  {
    id: 1,
    title: "EVENTO 1",
    date: "DATA",
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "EVENTO 2",
    date: "DATA",
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "EVENTO 3",
    date: "DATA",
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "EVENTO 4",
    date: "DATA",
    icon: <Calendar className="w-8 h-8" />,
  }
];

interface EventsGalleryPageProps {
  onBack: () => void;
  onSelectEvent: (id: number) => void;
}

const EventsGalleryPage: React.FC<EventsGalleryPageProps> = ({ onBack, onSelectEvent }) => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative animate-fade-in-up">
       <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10">
         <img 
            src="http://palestralc.altervista.org/img/FAN_WHITE_ENNA.png" 
            className="w-[80%] md:w-[50%] h-auto grayscale"
            alt="Watermark"
         />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-juve-gold hover:text-white transition-colors mb-12 font-display font-bold uppercase tracking-wider group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Torna alla Home
        </button>

        <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-lg md:text-xl font-display font-normal uppercase text-white drop-shadow-lg tracking-[0.2em] max-w-4xl mx-auto leading-tight opacity-90 mb-6">
              Rivivi i momenti più emozionanti del nostro club
            </h1>
            
            {/* W.I.P. Badge */}
            <div className="flex items-center gap-2 bg-white/5 text-gray-400 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md mb-6">
              <AlertTriangle className="w-4 h-4 text-juve-gold" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Contenuti multimediali in fase di caricamento</span>
            </div>

            <div className="w-12 h-0.5 bg-juve-gold shadow-lg"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {EVENTS.map((event) => (
            <div 
              key={event.id}
              onClick={() => onSelectEvent(event.id)}
              className="group cursor-pointer relative overflow-hidden rounded-xl border border-gray-800 bg-juve-darkgray/30 transition-all duration-500 hover:border-juve-gold hover:scale-[1.02] shadow-2xl"
            >
              <div className="h-64 md:h-80 overflow-hidden relative">
                
                {/* Placeholder Stylized Silhouette */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                  <div className="flex flex-col items-center opacity-20 transition-opacity group-hover:opacity-40">
                     <div className="scale-[3] text-gray-600 mb-8">
                        {event.icon}
                     </div>
                     <ImageIcon className="w-8 h-8 text-gray-600" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                <h3 className="text-white font-display font-bold text-xl uppercase mb-1 drop-shadow-md tracking-tight">
                  {event.title}
                </h3>
                <p 
                  className="text-xs font-bold uppercase tracking-[0.3em] drop-shadow-md"
                  style={{ color: '#ff2850' }}
                >
                  {event.date}
                </p>
              </div>

              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                Sito in allestimento
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-xs text-gray-500 font-medium uppercase tracking-widest italic">
          Stiamo riorganizzando il nostro archivio storico per offrirvi la migliore esperienza visiva.
        </p>
      </div>
    </div>
  );
};

export default EventsGalleryPage;
