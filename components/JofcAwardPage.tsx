
import React from 'react';
import { ArrowLeft, Trophy, Star, Award } from 'lucide-react';

interface JofcAwardPageProps {
  onBack: () => void;
}

const JofcAwardPage: React.FC<JofcAwardPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative animate-fade-in-up">
       {/* Background Watermark */}
       <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10">
         <img 
            src="http://palestralc.altervista.org/img/FAN_WHITE_ENNA.png" 
            className="w-[80%] md:w-[50%] h-auto grayscale"
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
                    <Trophy className="w-10 h-10" />
                  </div>
                </div>
                <h2 className="text-juve-gold font-bold uppercase tracking-widest text-sm mb-4">Premi e Riconoscimenti</h2>
                <h1 className="font-display font-black text-3xl md:text-5xl uppercase leading-tight text-white">
                  Premiati al JOFC Day 2025 <br/>
                  <span className="text-gray-500 italic">"Sharing is Caring"</span>
                </h1>
                <div className="w-20 h-1 bg-juve-gold mx-auto mt-6"></div>
             </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="prose prose-lg text-gray-700 font-sans mb-10 text-justify leading-relaxed">
              <p className="mb-6">
                Il nostro <strong>Juventus Official Fan Club Enna</strong> è stato premiato allo JOFC Day 2025, svoltosi in Sardegna il 3 e 4 maggio, come secondo miglior evento al mondo nella categoria <strong>“Sharing is Caring”</strong>, grazie all’iniziativa <em>“Insieme per lo sport… con Mirko Vučinić”</em>, organizzata lo scorso 12 aprile.
              </p>
              
              <p className="mb-6">
                Un evento speciale, nato dalla collaborazione con il <strong>Roma Club Enna</strong> e impreziosito dalla partecipazione straordinaria di <strong>Mirko Vučinić</strong> e dalla consegna del premio <em>“Fair Play al centro 2025”</em> alla ASD Polisportiva Pietrina, per un significativo gesto di sportività.
              </p>

              <div className="bg-juve-gray p-6 rounded-lg mb-8 border-l-4 border-black italic">
                A impreziosire ulteriormente l’evento, la straordinaria iniziativa della <strong>Bertino Football Collection</strong>: una suggestiva mostra di cimeli calcistici allestita presso la Galleria Civica, che ha coinvolto numerosi appassionati e realtà del territorio, alla quale abbiamo offerto il nostro supporto logistico.
              </div>

              <p className="mb-6">
                A ritirare il premio per il nostro Club, consegnato da <strong>Andrea Barzagli</strong> ed <strong>Emanuele Giaccherini</strong>, è stato il presidente <strong>Michele Russo</strong>.
              </p>
            </div>

            {/* Achievement Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               <div className="flex flex-col items-center text-center p-8 bg-black text-white rounded-lg">
                  <Award className="w-12 h-12 text-juve-gold mb-4" />
                  <h4 className="font-display font-bold uppercase text-xl mb-2">2° Posto Mondiale</h4>
                  <p className="text-gray-400 text-sm">Categoria Sharing is Caring</p>
               </div>
               <div className="flex flex-col items-center text-center p-8 border-2 border-black rounded-lg">
                  <Star className="w-12 h-12 text-black mb-4" />
                  <h4 className="font-display font-bold uppercase text-xl mb-2">Fair Play</h4>
                  <p className="text-gray-600 text-sm">Riconoscimento allo sport pulito</p>
               </div>
            </div>

            <div className="prose prose-lg text-gray-700 font-sans mb-12 text-justify">
               <p className="mb-6 font-bold text-black">
                Questo riconoscimento, che ci riempie di orgoglio, è il frutto di un percorso fatto di passione autentica, legami veri e rispetto per lo sport.
              </p>
              <p>
                Grazie ai nostri soci che credono e partecipano attivamente a questa idea di tifo basata sul rispetto reciproco e sulla condivisione.
              </p>
            </div>

            {/* Footer Sign-off */}
            <div className="text-center pt-8 border-t border-gray-100">
               <p className="font-display font-black text-3xl text-juve-gold uppercase tracking-tighter mb-2">
                 #jofcenna
               </p>
               <p className="font-bold text-black uppercase tracking-[0.3em] text-sm">
                 Orgoglio Bianconero
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JofcAwardPage;
