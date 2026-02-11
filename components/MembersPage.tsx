
import React, { useState, useEffect } from 'react';
import { getMembers } from '../services/dataService';
import { Member } from '../types';

const MembersPage: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    setMembers(getMembers());
  }, []);

  // Ordina la lista alfabeticamente
  const sortedList = [...members].sort((a, b) => a.name.localeCompare(b.name));

  // Raggruppa i soci per lettera iniziale
  const groupedMembers = sortedList.reduce((acc, member) => {
    if (!member.name) return acc;
    const letter = member.name.charAt(0).toUpperCase();
    if (!acc[letter]) {
      acc[letter] = [];
    }
    acc[letter].push(member.name);
    return acc;
  }, {} as Record<string, string[]>);

  const sortedLetters = Object.keys(groupedMembers).sort();

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative">
      {/* Background Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-5">
         <img 
            src="http://palestralc.altervista.org/img/FAN_WHITE_ENNA.png" 
            className="w-[80%] md:w-[50%] h-auto grayscale"
            alt="Watermark"
         />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Members Card */}
        <div className="bg-white/95 backdrop-blur-sm text-black rounded-sm shadow-[0_0_40px_rgba(255,255,255,0.1)] overflow-hidden animate-fade-in-up border border-gray-800 mt-8">
           
           {/* Top Stats Bar */}
           <div className="bg-black p-6 md:p-8 flex flex-col md:flex-row justify-between items-center border-b-4 border-juve-gold relative overflow-hidden">
              {/* Decorative Stripes */}
              <div className="absolute top-0 right-0 h-full w-24 bg-[repeating-linear-gradient(45deg,#333,#333_1px,transparent_1px,transparent_20px)] opacity-20"></div>

              <div className="flex items-center gap-4 mb-4 md:mb-0 z-10">
                 <div className="w-12 h-12 bg-juve-gold rounded-full flex items-center justify-center text-black font-bold shadow-lg shrink-0">
                    <span className="text-2xl">J</span>
                 </div>
                 <div>
                    <h3 className="font-display font-bold text-white text-lg md:text-xl uppercase tracking-wider">ELENCO SOCI STAGIONE 2025/26</h3>
                    <p className="text-white text-xs font-medium uppercase">Aggiornato dal Direttivo</p>
                 </div>
              </div>
              
              {/* Only the Number */}
              <div className="flex items-baseline z-10">
                 <span className="font-display font-black text-6xl md:text-7xl text-juve-gold leading-none drop-shadow-md">
                    {members.length}
                 </span>
              </div>
           </div>

           {/* Content Grid */}
           <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                 {sortedLetters.map((letter) => (
                    <div key={letter} className="break-inside-avoid">
                       <div className="flex items-center gap-3 mb-4">
                          <div className="bg-black text-juve-gold w-10 h-10 flex items-center justify-center font-display font-black text-xl rounded-sm shadow-md">
                             {letter}
                          </div>
                          <div className="h-[1px] flex-grow bg-gray-200"></div>
                       </div>
                       
                       <ul className="space-y-2">
                          {groupedMembers[letter].map((name, index) => (
                             <li key={index} className="pl-2 border-l-2 border-transparent hover:border-juve-gold transition-all duration-200">
                                <span className="font-display font-medium text-gray-800 uppercase text-sm tracking-wide block hover:text-black hover:translate-x-1 transition-transform cursor-default">
                                   {name}
                                </span>
                             </li>
                          ))}
                       </ul>
                    </div>
                 ))}
              </div>
           </div>
           
           {/* Footer of Card */}
           <div className="bg-gray-100 p-4 flex justify-center items-center gap-3 border-t border-gray-200">
               <div className="w-2 h-2 rounded-full bg-black"></div>
               <span className="text-xs text-black font-bold uppercase tracking-[0.2em]">Fino Alla Fine</span>
               <div className="w-2 h-2 rounded-full bg-black"></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
