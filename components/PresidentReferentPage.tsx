
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
                <h1 className="font-display font-black text-xl md:text-3xl uppercase leading-tight text-white max-w-2xl mx-auto">
                  Il presidente Michele Russo nominato <br/>
                  Referente Regionale Sicilia
                </h1>
                <div className="w-20 h-1 bg-juve-gold mx-auto mt-6"></div>
             </div>
          </div>

          <div className="p-8 md:p-12">
            
            <div className="prose prose-lg text-gray-700 font-sans mb-10 text-justify leading-relaxed">
              <p className="mb-6">
                <strong>IL PRESIDENTE Michele Russo</strong> è stato ufficialmente nominato da <strong>Juventus FC</strong> come nuovo <strong>Referente Regionale Juventus Official Fan Club per la Sicilia</strong>. Questo prestigioso incarico rappresenta non solo un traguardo personale per il nostro presidente, ma un immenso motivo di orgoglio per tutto lo JOFC Enna, che vede riconosciuto a livello nazionale il lavoro svolto in questi anni nel territorio.
              </p>
              
              <p className="mb-6">
                La nomina è stata confermata direttamente dai vertici della società bianconera a Torino, premiando la dedizione, la serietà e la passione con cui Michele Russo ha guidato il Club di Enna fin dalla sua fondazione, rendendolo un modello di efficienza e partecipazione.
              </p>

              <div className="bg-gray-100 p-8 rounded-lg mb-8 border-l-4 border-black">
                 <div className="flex items-center gap-4 mb-2">
                    <UserCheck className="w-6 h-6 text-juve-gold" />
                    <h3 className="font-display font-bold text-xl uppercase text-black">Il Nuovo Ruolo</h3>
                 </div>
                 <p className="text-lg text-gray-800">
                   Nel suo nuovo ruolo, il nostro presidente avrà il compito di coordinare le attività dei Club siciliani, facilitando il dialogo con la Juventus e promuovendo iniziative regionali, affiancando in questo percorso <strong>Salvatore Capraro</strong> (Presidente JOFC Valle dei Templi).
                 </p>
              </div>

              <p className="mb-6 italic">
                Questa nomina rafforza il legame tra la Sicilia e Torino, portando la voce dei tanti tifosi dell'isola sempre più vicina ai colori che amiamo. A Michele Russo vanno i più sinceri auguri di buon lavoro da parte di tutto il Consiglio Direttivo e dei soci del Club.
              </p>
            </div>

            {/* Footer Sign-off */}
            <div className="text-center pt-8 border-t border-gray-100">
               <p className="font-display font-bold text-2xl text-black uppercase mb-6">
                  Buon lavoro Presidente! 🤍🖤
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
