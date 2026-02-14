
import React, { useRef, useEffect } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Impostiamo la velocità a 0.75 per un effetto rallentato ma fluido
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <video 
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="http://avid3952177.altervista.org/Sfondi%20Video/Sfondo_2.mp4"
          autoPlay 
          muted 
          loop 
          playsInline
        />
        
        {/* Overlay nero per migliorare il contrasto e la leggibilità - Opacità al 70% */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center items-center text-center">
        {/* Logo Juventus Official Fan Club Enna - Appare per primo */}
        <img 
          src="http://palestralc.altervista.org/img/FAN_WHITE_ENNA.png" 
          alt="Juventus Official Fan Club Enna Logo" 
          className="mt-10 md:mt-20 h-28 md:h-44 lg:h-52 w-auto drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-fade-in mb-8 transition-transform hover:scale-105 duration-700"
        />
        
        {/* Slogan Wrapper */}
        <div className="flex flex-col items-center gap-2 w-fit">
          {/* Box Bianco Decennale - Appare con ritardo (300ms) */}
          <div className="bg-white px-3 py-1 md:px-4 md:py-1.5 shadow-2xl w-full opacity-0 animate-fade-in-up animation-delay-300">
            {/* Testo Decennale - Peso ridotto a semibold */}
            <p className="text-black font-display font-semibold text-xl md:text-3xl lg:text-4xl uppercase tracking-tight whitespace-nowrap">
              2016 - 2026: 10 Anni Insieme...
            </p>
          </div>
          
          {/* Testo Rosso Passione - Appare per ultimo (600ms+) */}
          <p className="text-[#ff2850] font-display text-lg md:text-2xl lg:text-3xl italic uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] tracking-wider opacity-0 animate-fade-in-up animation-delay-800">
            UNITI DA UNA GRANDE PASSIONE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
