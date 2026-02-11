
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
  
  // Prepariamo la lista per il marquee se ci sono compleanni
  const marqueeList = hasBirthdays ? Array(20).fill(birthdays).flat() : [];

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

        {/* Scrolling Content (Marquee) - Solo se ci sono compleanni */}
        <div className={`flex items-center whitespace-nowrap pl-56 md:pl-96 ${hasBirthdays ? 'animate-marquee' : ''}`}>
          {hasBirthdays ? (
            marqueeList.map((text, index) => (
              <React.Fragment key={index}>
                <span className="text-black font-display font-bold text-xl uppercase mx-4 tracking-tight">
                  {text}
                </span>
                <Cake className="w-5 h-5 mx-8 text-juve-gold animate-bounce" />
              </React.Fragment>
            ))
          ) : (
            /* Messaggio se non ci sono compleanni (non scorre) */
            <span className="text-black/20 font-display font-bold text-xl uppercase mx-4 tracking-tight italic">
              Nessun compleanno oggi
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BirthdayBanner;
