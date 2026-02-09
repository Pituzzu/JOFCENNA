
import React from 'react';
import { ArrowLeft, Map, UserCheck } from 'lucide-react';

interface PresidentReferentPageProps {
  onBack: () => void;
}

const PresidentReferentPage: React.FC<PresidentReferentPageProps> = ({ onBack }) => {
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
                <div className="flex justify-center mb-4">
                   <div className="bg-juve-gold p-4 rounded-full text-black shadow-lg">
                      <Map className="w-10 h-10" />
                   </div>
                </div>
                <h2 className="text-juve-gold font-bold uppercase tracking-widest text-sm mb-4">Nomina Ufficiale Juventus FC</h2>
                <h1 className="font-display font-black text-3xl md:text-5xl uppercase leading-tight text-white">
                  Michele Russo <br/>
                  <span className="text-gray-500">Referente Regionale Sicilia</span>
                </h1>
                <div className="w-20 h-1 bg-juve-gold mx-auto mt-6"></div>
             </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="prose prose-lg text-gray-700 font-sans mb-10 text-justify leading-relaxed">
              <p className="mb-6">
                Congratulazioni al nostro Presidente <strong>Michele Russo</strong> per aver ricevuto da Juventus FC la nomina di <strong>Referente Regionale Juventus OFC Sicilia</strong>.
              </p>
              
              <p className="mb-6">
                Questa importante nomina ci rende particolarmente orgogliosi e rappresenta un prestigioso traguardo per il nostro Club.
              </p>

              <div className="bg-gray-100 p-8 rounded-lg mb-8 border-l-4 border-black">
                 <div className="flex items-center gap-4 mb-2">
                    <UserCheck className="w-6 h-6 text-juve-gold" />
                    <h3 className="font-display font-bold text-xl uppercase text-black">Il Nuovo Ruolo</h3>
                 </div>
                 <p className="text-lg text-gray-800">
                   Il nostro presidente affiancherà <strong>Salvatore Capraro</strong>, Presidente JOFC Valle dei Templi, nel coordinamento delle attività regionali.
                 </p>
              </div>
            </div>

            {/* Footer Sign-off */}
            <div className="text-center pt-8 border-t border-gray-100">
               <p className="font-display font-bold text-2xl text-black uppercase mb-6">
                  Buon lavoro 🤍🖤
               </p>
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

export default PresidentReferentPage;
