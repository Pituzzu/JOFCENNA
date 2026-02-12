
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video - Opacity set to 100% as requested */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
           <iframe 
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-100"
            src="https://www.youtube.com/embed/8wJ4j97DUUI?autoplay=1&mute=1&controls=0&loop=1&playlist=8wJ4j97DUUI&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1" 
            title="Juventus Background Video" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ border: 'none' }}
          ></iframe>
        </div>
        
        {/* Light overlay to maintain text readability without being "covering" */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center items-center text-center">
        {/* Logo - Size: h-32 md:h-48 lg:h-56 */}
        <img 
          src="http://palestralc.altervista.org/img/FAN_WHITE_ENNA.png" 
          alt="Club Logo" 
          className="h-32 md:h-48 lg:h-56 w-auto drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-fade-in-up mb-10 transition-transform hover:scale-105 duration-700"
        />
        
        {/* Text - Single line, lowered (mt-12), color #ff2850 */}
        <div className="relative animate-fade-in-up mt-12">
           <p className="relative font-display font-medium text-[#ff2850] text-xl md:text-3xl italic tracking-widest uppercase px-4 md:px-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] max-w-6xl leading-relaxed">
            2016 - 2026: 10 Anni Insieme ... Uniti da una grande passione
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
