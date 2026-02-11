
import React from 'react';
import { ArrowLeft, MapPin, Landmark, Mountain, TowerControl as Tower, ExternalLink, GraduationCap, Church, Image as ImageIcon, AlertTriangle } from 'lucide-react';

interface EnnaCityPageProps {
  onBack: () => void;
}

const MONUMENTS = [
  {
    title: "Castello di Lombardia",
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    title: "Torre di Federico II",
    icon: <Tower className="w-6 h-6" />,
  },
  {
    title: "Duomo di Enna",
    icon: <Church className="w-6 h-6" />,
  },
  {
    title: "Rocca di Cerere",
    icon: <Mountain className="w-6 h-6" />,
  },
  {
    title: "Lago di Pergusa",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    title: "Università Kore",
    icon: <GraduationCap className="w-6 h-6" />,
  }
];

const USEFUL_LINKS = [
  {
    name: "Comune di Enna - Vivere Enna",
    description: "Sito istituzionale e servizi al cittadino.",
    url: "https://www.comune.enna.it/vivere-enna"
  },
  {
    name: "Università Kore di Enna",
    description: "Il polo universitario d'eccellenza della Sicilia centrale.",
    url: "https://unikore.it/"
  },
  {
    name: "Enna Turismo - Visit Sicily",
    description: "Guida ufficiale ai luoghi da non perdere in città.",
    url: "https://www.visitsicily.info/localita/enna/"
  }
];

const EnnaCityPage: React.FC<EnnaCityPageProps> = ({ onBack }) => {
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

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-juve-gold hover:text-white transition-colors mb-8 font-display font-bold uppercase tracking-wider group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Torna alla Home
        </button>

        <div className="bg-white text-black rounded-sm shadow-[0_0_40px_rgba(255,255,255,0.1)] overflow-hidden border border-gray-800">
          
          {/* Header */}
          <div className="bg-black p-10 md:p-16 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black opacity-80"></div>
             <div className="relative z-10">
                <h1 className="font-display font-black text-4xl md:text-7xl uppercase leading-tight text-white mb-4 tracking-tighter">
                  ENNA
                </h1>
                <p className="text-juve-gold font-display font-bold uppercase tracking-[0.4em] text-sm md:text-lg">
                  L'Ombelico di Sicilia
                </p>
                <div className="w-24 h-1 bg-juve-gold mx-auto mt-8"></div>
             </div>
          </div>

          {/* New Black and White Image Section */}
          <div className="w-full h-auto bg-black overflow-hidden">
            <img 
              src="http://avid3952177.altervista.org/img/enna.jpg" 
              alt="Panorama Enna" 
              className="w-full h-auto grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          <div className="p-8 md:p-16">
            {/* Intro text */}
            <div className="prose prose-lg text-gray-800 font-sans mb-16 text-justify leading-relaxed max-w-none">
              <p className="text-xl font-bold mb-6 border-l-4 border-juve-gold pl-6 italic text-black">
                Enna è un comune italiano, capoluogo di provincia più alto d'Italia e cuore pulsante della Sicilia.
              </p>
              
              <p className="mb-6">
                Denominata <strong>Castrogiovanni</strong> fino al 1927, anno in cui riprese l’antico nome classico, la città svetta sul territorio con un'altitudine che si attesta a 931 m presso il Municipio, raggiungendo i <strong>992 m</strong> sulla sommità del Castello di Lombardia, l’antica acropoli. Questa posizione dominante le è valsa nei secoli appellativi celebri: <strong>Urbs Inexpugnabilis</strong> per i romani, per via della sua leggendaria imprendibilità; <strong>Ombelico di Sicilia</strong>, per la sua assoluta centralità geografica; e <strong>Belvedere di Sicilia</strong>, per le vedute panoramiche mozzafiato che spaziano in ogni direzione, dall'Etna fino alle Madonie.
              </p>

              <p className="mb-6">
                Per oltre tre millenni è stata una roccaforte inespugnabile, testimone e custode del passaggio di sicani, greci, romani, bizantini, arabi, normanni, svevi e aragonesi. Un intreccio di civiltà che ha plasmato un tessuto urbano unico, dove il mito di Cerere si fonde con le architetture medievali e la modernità del polo universitario.
              </p>
            </div>

            {/* Attractions Section */}
            <div className="mb-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <h3 className="font-display font-bold text-3xl uppercase flex items-center gap-3 text-black">
                  <div className="w-2 h-10 bg-juve-gold"></div>
                  I Luoghi Simbolo
                </h3>
                
                {/* W.I.P. Badge */}
                <div className="flex items-center gap-2 bg-gray-100 text-gray-500 px-4 py-2 rounded-full border border-gray-200">
                  <AlertTriangle className="w-4 h-4 text-juve-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Foto in fase di allestimento</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {MONUMENTS.map((monument, index) => (
                  <div key={index} className="group relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-gray-50">
                    
                    {/* Placeholder Stylized Silhouette */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                      <div className="flex flex-col items-center opacity-20 transition-opacity group-hover:opacity-40">
                         <div className="scale-[3] text-gray-400 mb-8">
                            {monument.icon}
                         </div>
                         <ImageIcon className="w-8 h-8 text-gray-400" />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                    
                    <div className="absolute bottom-0 left-0 p-6 flex items-center gap-4 text-white">
                      <div className="bg-juve-gold p-2 rounded-lg text-white shadow-lg transform group-hover:scale-110 transition-transform">
                        {monument.icon}
                      </div>
                      <h4 className="font-display font-bold text-2xl md:text-3xl uppercase drop-shadow-md tracking-tight">
                        {monument.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="mt-8 text-center text-xs text-gray-400 font-medium uppercase tracking-widest italic">
                Stiamo selezionando le migliori immagini per valorizzare i nostri tesori.
              </p>
            </div>

            {/* Useful Links Section */}
            <div className="pt-12 border-t border-gray-100">
               <h3 className="font-display font-bold text-3xl uppercase mb-8 flex items-center gap-3 text-black">
                <div className="w-2 h-10 bg-juve-gold"></div>
                Link Utili
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {USEFUL_LINKS.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group bg-black p-6 rounded-lg text-white hover:bg-juve-gold hover:text-white transition-all transform hover:-translate-y-1 shadow-lg flex flex-col justify-between h-full"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-4">
                           <h4 className="font-display font-bold text-xl uppercase tracking-tight">{link.name}</h4>
                           <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                        </div>
                        <p className="text-sm opacity-80 group-hover:opacity-100 mb-6">
                          {link.description}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest border-t border-white/20 pt-4">Visita il sito</span>
                    </a>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnnaCityPage;
