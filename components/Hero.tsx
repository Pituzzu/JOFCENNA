import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video - Opacità ridotta per contrasto */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
           <iframe 
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30"
            src="https://www.youtube.com/embed/8wJ4j97DUUI?autoplay=1&mute=1&controls=0&loop=1&playlist=8wJ4j97DUUI&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1" 
            title="Juventus Background Video" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ border: 'none' }}
          ></iframe>
        </div>
        
        {/* Overlay nero più intenso per migliorare il contrasto dei contenuti sovrapposti */}
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center items-center text-center">
        {/* Logo - Posizionato più in basso per non toccare la navbar */}
        <img 
          src="http://palestralc.altervista.org/img/FAN_WHITE_ENNA.png" 
          alt="Club Logo" 
          className="mt-20 md:mt-24 h-32 md:h-48 lg:h-56 w-auto drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-fade-in-up mb-10 transition-transform hover:scale-105 duration-700"
        />
        
        {/* Slogan a due righe coeso */}
        <div className="relative animate-fade-in-up flex flex-col items-center">
           {/* Prima Riga: Rettangolo Bianco compatto con font-bold */}
           <div className="bg-white px-3 py-1 md:px-6 md:py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform -skew-x-3">
              <h2 className="font-display font-bold text-black text-xl md:text-4xl uppercase tracking-tighter transform skew-x-3">
                2016 - 2026: 10 Anni Insieme...
              </h2>
           </div>

           {/* Seconda Riga: Colore Rosso, spaziatura ridotta e molto vicina al rettangolo */}
           <div className="mt-2 md:mt-3">
              <p className="font-display font-bold text-[#ff2850] text-lg md:text-2xl uppercase italic tracking-[0.1em] md:tracking-[0.2em] drop-shadow-lg opacity-90">
                Uniti da una grande passione
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;