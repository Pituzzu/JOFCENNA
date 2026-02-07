import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface FoundersSectionProps {
  onBack: () => void;
}

const FOUNDERS = [
  "Ugo Di Bella",
  "Michele Russo",
  "Luca Andolina",
  "Antonio Giuseppe Guasto",
  "Matteo La Paglia",
  "Luciano Lombardo",
  "Luciano Mingrino",
  "Vincenzo Monastero",
  "Piergiorgio Restivo",
  "Sebastiano Primo Savoca",
  "Mario Sgrò",
  "Francesco Paolo Sicurezza",
  "Filippo Timpanaro"
];

const FoundersSection: React.FC<FoundersSectionProps> = ({ onBack }) => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed pt-32 pb-24 relative"
      style={{ backgroundImage: 'url("http://palestralc.altervista.org/img/fondatori.jpeg")' }}
    >
      {/* Dark Overlay for readability of the white boxes against the image */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:text-juve-gold transition-colors mb-8 font-display font-bold uppercase tracking-wider group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Torna alla Home
        </button>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl animate-fade-in-up">
            
            {/* Header Box - Reverted to Black Background / White Text */}
            <div className="bg-black text-white text-center py-4 px-6 mb-8 border-b-4 border-juve-gold shadow-lg">
              <h1 className="font-display font-bold text-3xl uppercase tracking-widest">
                Soci Fondatori
              </h1>
            </div>

            {/* Names List - Kept White Background / Black Text */}
            <div className="flex flex-col gap-4">
              {FOUNDERS.map((name, index) => (
                <div 
                  key={index}
                  className="bg-white/90 text-black font-display text-xl font-bold italic tracking-wide text-center py-3 px-4 border border-black/10 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:scale-105 hover:bg-white hover:border-juve-gold hover:text-juve-gold transition-all duration-300 cursor-default"
                >
                  {name}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersSection;