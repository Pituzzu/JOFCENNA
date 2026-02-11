
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
  
  // Prepariamo la lista per il marquee
  // Se ci sono compleanni usa quelli, altrimenti il messaggio di default
  const displayItems = hasBirthdays 
    ? birthdays 
    : ["Nessun compleanno oggi, Forza Juve"];

  // Creiamo una lista lunga per l'effetto marquee continuo
  const marqueeList = Array(20).fill(displayItems).flat();

  return (
    <div className="relative z-30 bg-white border-t-4 border-juve-gold overflow-hidden py-2 shadow-2xl">
      <div className="flex items-center gap-2">
        {/* Etichetta fissa laterale - Sempre presente */}
        <div className="absolute left-0 z-40 bg-white px-6 h-full flex items-center shadow-[10px_0_15px_rgba(0,0,0,0.1)] border-r border-gray-100">
            <span className="text-juve-gold font-display font-black uppercase text-lg hidden md:block tracking-tighter">
                BUON COMPLEANNO AI SOCI:
            </span>
            <span className="text-juve-gold font-display font-black uppercase text-lg md:hidden">
                AUGURI SOCI:
            </span>
        </div>

        {/* Scrolling Content (Marquee) - Scorre sempre */}
        <div className="flex items-center whitespace-nowrap pl-56 md:pl-96 animate-marquee">
            {marqueeList.map((text, index) => (
              <React.Fragment key={index}>
                <span className="text-black font-display font-bold text-xl uppercase mx-4 tracking-tight">
                  {text}
                </span>
                {hasBirthdays ? (
                  <Cake className="w-5 h-5 mx-8 text-juve-gold animate-bounce" />
                ) : (
                  // Separatore semplice se non ci sono compleanni
                  <span className="mx-8 text-black/20">•</span>
                )}
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayBanner;
