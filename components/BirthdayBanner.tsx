
import React, { useState, useEffect } from 'react';
import { Cake } from 'lucide-react';
import { getBirthdaysToday } from '../services/dataService';

const BirthdayBanner: React.FC = () => {
  const [birthdays, setBirthdays] = useState<string[]>([]);

  useEffect(() => {
    // Carichiamo i compleanni reali dal dataService
    setBirthdays(getBirthdaysToday());
  }, []);

  const hasBirthdays = birthdays.length > 0;
  
  // Se non ci sono compleanni, usiamo un messaggio di fallback da far scorrere
  const displayItems = hasBirthdays ? birthdays : ["Nessun compleanno oggi"];
  
  // Prepariamo la lista per il marquee ripetendo gli elementi
  const marqueeList = Array(20).fill(displayItems).flat();

  return (
    <div className="relative z-30 bg-white border-t-4 border-juve-gold overflow-hidden py-2 shadow-2xl">
      <div className="flex items-center gap-2">
        {/* Etichetta fissa laterale */}
        <div className="absolute left-0 z-40 bg-white px-6 h-full flex items-center shadow-[10px_0_15px_rgba(0,0,0,0.1)] border-r border-gray-100">
            <span className="text-juve-gold font-display font-black uppercase text-lg hidden md:block tracking-tighter">
                BUON COMPLEANNO AI SOCI:
            </span>
            <span className="text-juve-gold font-display font-black uppercase text-lg md:hidden">
                AUGURI SOCI:
            </span>
        </div>

        {/* Scrolling Content (Marquee) - Ora scorre sempre */}
        <div className="flex items-center whitespace-nowrap pl-56 md:pl-96 animate-marquee">
            {marqueeList.map((text, index) => (
              <React.Fragment key={index}>
                <span className={`font-display font-bold text-xl uppercase mx-4 tracking-tight ${hasBirthdays ? 'text-black' : 'text-black/30 italic'}`}>
                  {text}
                </span>
                <Cake className={`w-5 h-5 mx-8 text-juve-gold ${hasBirthdays ? 'animate-bounce' : 'opacity-20'}`} />
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayBanner;
