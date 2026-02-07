import React from 'react';
import { ArrowLeft, Gift, Calendar, MapPin } from 'lucide-react';

interface CharityEventPageProps {
  onBack: () => void;
}

const CharityEventPage: React.FC<CharityEventPageProps> = ({ onBack }) => {
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

        {/* Main Card */}
        <div className="bg-white text-black rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.1)] overflow-hidden border border-gray-800">
          
          {/* Hero Image */}
          <div className="w-full h-64 md:h-96 relative bg-black">
            <img 
              src="https://palestralc.altervista.org/img/RACCOLTA.jpeg" 
              alt="Raccolta Solidale 2025" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            
            {/* Header */}
            <div className="border-b-4 border-juve-gold pb-6 mb-8">
              <h2 className="text-juve-gold font-bold uppercase tracking-widest text-sm mb-2">Iniziativa Sociale</h2>
              <h1 className="font-display font-bold text-3xl md:text-5xl uppercase leading-tight">
                Raccolta Solidale 2025 <br/>
                <span className="text-gray-400">Il Natale di Tutti</span>
              </h1>
            </div>

            {/* Main Text */}
            <div className="prose prose-lg text-gray-700 font-sans mb-10 text-justify">
              <p className="font-bold text-xl mb-4 text-black">
                Anche quest’anno il nostro albero bianconero si accende di solidarietà!
              </p>
              <p>
                Dal <strong>7 dicembre al 12 gennaio</strong>, presso la nostra sede in via Pergusa 117/119, raccoglieremo doni destinati alla <strong>Parrocchia San Bartolomeo</strong>, che si occuperà della distribuzione a persone o famiglie in difficoltà della nostra città.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
               <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-juve-gold">
                  <div className="flex items-center gap-3 mb-3">
                     <Calendar className="w-6 h-6 text-black" />
                     <h4 className="font-display font-bold uppercase text-lg">Quando</h4>
                  </div>
                  <p className="font-medium text-gray-600">Dal 7 Dicembre al 12 Gennaio</p>
               </div>
               
               <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-juve-gold">
                  <div className="flex items-center gap-3 mb-3">
                     <MapPin className="w-6 h-6 text-black" />
                     <h4 className="font-display font-bold uppercase text-lg">Dove</h4>
                  </div>
                  <p className="font-medium text-gray-600">Sede Club - Via Pergusa 117/119, Enna</p>
               </div>
            </div>

            {/* List of Items */}
            <div className="bg-black text-white p-8 rounded-lg mb-10 relative overflow-hidden">
               {/* Decorative Circle */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-juve-gold rounded-full blur-3xl opacity-20 translate-x-10 -translate-y-10"></div>
               
               <h3 className="font-display font-bold text-2xl uppercase mb-6 flex items-center gap-3 relative z-10">
                  <Gift className="w-6 h-6 text-juve-gold" />
                  Cosa donare
               </h3>
               <ul className="space-y-4 relative z-10">
                  <li className="flex items-start gap-3">
                     <span className="w-2 h-2 bg-juve-gold rounded-full mt-2"></span>
                     <span className="text-lg">Beni alimentari a lunga conservazione</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <span className="w-2 h-2 bg-juve-gold rounded-full mt-2"></span>
                     <span className="text-lg">Prodotti per l’igiene personale</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <span className="w-2 h-2 bg-juve-gold rounded-full mt-2"></span>
                     <span className="text-lg">Giocattoli nuovi o usati in buono stato</span>
                  </li>
               </ul>
            </div>

            {/* Footer Text */}
            <div className="text-center pt-6 border-t border-gray-100">
               <p className="font-display font-medium text-xl uppercase italic text-gray-800 mb-2">
                  "I piccoli gesti possono trasformarsi in grandi sorrisi ✨"
               </p>
               <p className="font-bold text-juve-gold text-lg uppercase tracking-widest">
                  Vi aspettiamo! 🤍🖤
               </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CharityEventPage;