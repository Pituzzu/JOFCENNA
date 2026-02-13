
import React from 'react';
import { ArrowLeft, Users, UserCheck } from 'lucide-react';

interface BoardElectionPageProps {
  onBack: () => void;
}

const BoardElectionPage: React.FC<BoardElectionPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative animate-fade-in-up">
       {/* Background Watermark */}
       <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10">
         <img 
            src="http://palestralc.altervista.org/img/FAN_WHITE_ENNA.png" 
            className="w-[80%] md:w-[50%] h-auto grayscale"
            alt="Watermark"
         />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-juve-gold hover:text-white transition-colors mb-6 font-display font-bold uppercase tracking-wider group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Torna alla Home
        </button>

        {/* Main Content Card */}
        <div className="bg-white text-black rounded-sm shadow-[0_0_40px_rgba(255,255,255,0.1)] overflow-hidden border border-gray-800">
          
          <div className="bg-black p-8 md:p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,#111,#111_1px,transparent_1px,transparent_20px)] opacity-30"></div>
             <div className="relative z-10">
                <h2 className="text-juve-gold font-bold uppercase tracking-widest text-sm mb-4">Comunicato Ufficiale</h2>
                <h1 className="font-display font-black text-3xl md:text-5xl uppercase leading-tight text-white">
                  Rinnovo Consiglio Direttivo
                </h1>
                <div className="w-20 h-1 bg-juve-gold mx-auto mt-6"></div>
             </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="prose prose-lg text-gray-700 font-sans mb-8 text-justify leading-relaxed">
              <p className="mb-6">
                Ieri, <strong>22 giugno 2025</strong>, l’Assemblea dei Soci, regolarmente riunita presso la sede del Club, ha provveduto al rinnovo delle cariche sociali per il prossimo biennio, eleggendo i nuovi componenti del Consiglio Direttivo, che risulta così composto:
              </p>
            </div>

            {/* Board Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
               {/* Key Roles */}
               <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="bg-black text-juve-gold p-3 rounded-full group-hover:bg-juve-gold group-hover:text-black transition-colors">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Presidente</p>
                      <p className="font-display font-bold text-2xl uppercase text-black">Michele Russo</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="bg-black text-juve-gold p-3 rounded-full group-hover:bg-juve-gold group-hover:text-black transition-colors">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Vicepresidente</p>
                      <p className="font-display font-bold text-2xl uppercase text-black">Luciano Lombardo</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="bg-black text-juve-gold p-3 rounded-full group-hover:bg-juve-gold group-hover:text-black transition-colors">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Segretario</p>
                      <p className="font-display font-bold text-2xl uppercase text-black">Guido Guglielmaci</p>
                    </div>
                  </div>
               </div>

               <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="bg-black text-juve-gold p-3 rounded-full group-hover:bg-juve-gold group-hover:text-black transition-colors">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tesoriere</p>
                      <p className="font-display font-bold text-2xl uppercase text-black">Salvatore Vullo</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="bg-black text-juve-gold p-3 rounded-full group-hover:bg-juve-gold group-hover:text-black transition-colors">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Referente</p>
                      <p className="font-display font-bold text-2xl uppercase text-black">Mirko Lombardo</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Consiglieri */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12 border-l-4 border-black">
               <h3 className="font-display font-bold text-xl uppercase mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-juve-gold" />
                  Consiglieri
               </h3>
               <p className="text-xl font-display font-bold text-gray-800 tracking-wide">
                  Luca Andolina, Stefania Sicurezza, Giancarlo Arena, Enzo Chiolo
               </p>
            </div>

            <div className="prose prose-lg text-gray-700 font-sans mb-8 text-justify italic border-t border-gray-100 pt-8">
              <p className="mb-4">
                Ai membri uscenti va un sentito ringraziamento per il contributo offerto al Club con dedizione e competenza.
              </p>
              <p>
                Ai nuovi componenti del Consiglio Direttivo, l’augurio di un percorso ricco di entusiasmo, partecipazione e spirito bianconero.
              </p>
            </div>

            {/* Foto di Gruppo - Spostata alla fine e rimpicciolita */}
            <div className="mb-12 flex flex-col items-center">
               <div className="relative w-full max-w-lg border-2 border-black shadow-lg overflow-hidden rounded-sm bg-gray-100">
                  <img 
                    src="http://avid3952177.altervista.org/img/Direttivo/direttivo.jpeg" 
                    alt="Il Direttivo dello JOFC Enna" 
                    className="w-full h-auto block"
                  />
               </div>
               <p className="mt-3 text-center text-[9px] font-bold uppercase tracking-widest text-gray-400 italic">
                 Il Direttivo dello JOFC Enna
               </p>
            </div>

            {/* Footer Sign-off */}
            <div className="text-center">
               <p className="font-display font-black text-3xl text-juve-gold uppercase tracking-tighter mb-2">
                 #jofcenna
               </p>
               <p className="font-bold text-black uppercase tracking-[0.3em] text-sm">
                 Fino Alla Fine
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardElectionPage;
