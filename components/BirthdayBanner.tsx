import React from 'react';
import { Cake } from 'lucide-react';

// Dati simulati dei soci che compiono gli anni
const BIRTHDAY_NAMES = [
  "MARIO ROSSI",
  "ANDREA BIANCHI"
];

const BirthdayBanner: React.FC = () => {
  // Ripetiamo la lista molte volte per garantire che il marquee sia continuo
  // e copra l'intera larghezza dello schermo per l'animazione CSS
  const marqueeList = Array(20).fill(BIRTHDAY_NAMES).flat();

  return (
    <div className="relative z-30 bg-white border-t-4 border-juve-gold overflow-hidden py-2 shadow-2xl">
      <div className="flex items-center gap-2">
        {/* Etichetta fissa */}
        <div className="absolute left-0 z-40 bg-white px-6 h-full flex items-center shadow-[10px_0_15px_rgba(0,0,0,0.1)] border-r border-gray-100">
            <span className="text-juve-gold font-display font-black uppercase text-lg hidden md:block tracking-tighter">
                BUON COMPLEANNO AI SOCI:
            </span>
            <span className="text-juve-gold font-display font-black uppercase text-lg md:hidden">
                AUGURI:
            </span>
        </div>

        {/* Scrolling Content - Animazione Marquee riattivata */}
        <div className="flex items-center whitespace-nowrap animate-marquee pl-56 md:pl-96">
          {marqueeList.map((name, index) => (
            <React.Fragment key={index}>
              <span className="text-black font-display font-bold text-xl uppercase mx-4 tracking-tight">
                {name}
              </span>
              <Cake className="w-5 h-5 mx-8 text-juve-gold animate-bounce" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayBanner;