
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  image?: string;
  noGrayscale?: boolean;
  zoomClass?: string;
}

interface BoardMembersPageProps {
  onBack: () => void;
}

// Silhouette provvisoria (User icon placeholder)
const PLACEHOLDER_IMAGE = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

const TOP_BOARD: Member[] = [
  { 
    name: "Michele Russo", 
    role: "PRESIDENTE", 
    image: "http://avid3952177.altervista.org/img/Direttivo/russo.png",
    noGrayscale: true 
  },
  { name: "Luciano Lombardo", role: "VICE PRESIDENTE", image: PLACEHOLDER_IMAGE },
];

const MID_BOARD: Member[] = [
  { 
    name: "Guido Guglielmaci", 
    role: "SEGRETARIO", 
    image: "http://avid3952177.altervista.org/img/Direttivo/Guglielmacimod.png",
    noGrayscale: true
  },
  { 
    name: "Mirko Lombardo", 
    role: "REFERENTE COMUNICAZIONI", 
    image: "http://avid3952177.altervista.org/img/Direttivo/lombardo_mirko.png",
    noGrayscale: true,
    zoomClass: "scale-150"
  },
  { 
    name: "Salvatore Vullo", 
    role: "TESORIERE", 
    image: "http://avid3952177.altervista.org/img/Direttivo/Vullo.png",
    noGrayscale: true
  },
];

const BOTTOM_BOARD: Member[] = [
  { 
    name: "Stefania Sicurezza", 
    role: "CONSIGLIERE", 
    image: PLACEHOLDER_IMAGE 
  },
  { 
    name: "Luca Andolina", 
    role: "CONSIGLIERE", 
    image: PLACEHOLDER_IMAGE 
  },
  { name: "Enzo Chiolo", role: "CONSIGLIERE", image: PLACEHOLDER_IMAGE },
  { name: "Giancarlo Arena", role: "CONSIGLIERE", image: PLACEHOLDER_IMAGE },
];

const AUDITORS = [
  { name: "Libera Carta", role: "SINDACO REVISORE" },
  { name: "Angelo Ferro", role: "SINDACO REVISORE" },
  { name: "Carmelo De Rose", role: "SINDACO REVISORE" },
];

const MemberCard: React.FC<{ member: Member; size?: 'lg' | 'md' | 'sm' }> = ({ member, size = 'md' }) => {
  const sizeClasses = {
    lg: 'w-48 h-48 md:w-56 md:h-56',
    md: 'w-40 h-40 md:w-48 md:h-48',
    sm: 'w-32 h-32 md:w-40 md:h-40'
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className={`relative ${sizeClasses[size]} rounded-full border-4 border-white overflow-hidden shadow-2xl mb-4 bg-black flex items-center justify-center`}>
         <img 
            src={member.image} 
            alt={member.name} 
            className={`w-full h-full object-cover transition-transform duration-300 ${member.noGrayscale ? '' : 'grayscale'} ${member.zoomClass || ''}`}
         />
      </div>
      <h4 className="font-display font-bold text-white text-lg md:text-xl uppercase italic tracking-tight leading-none mb-1">
        {member.name}
      </h4>
      <p className="font-display text-[10px] md:text-xs text-juve-gold font-bold tracking-[0.2em] uppercase">
        {member.role}
      </p>
    </div>
  );
};

const BoardMembersPage: React.FC<BoardMembersPageProps> = ({ onBack }) => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed pt-24 pb-20 relative flex flex-col"
      style={{ backgroundImage: 'url("http://palestralc.altervista.org/img/fondatori.jpeg")' }}
    >
      {/* Dark Overlay with Blur to match Founders Section style */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] z-0"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* Back Button */}
        <div className="w-full mb-8">
           <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-juve-gold transition-colors font-display font-bold uppercase tracking-wider group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Torna alla Home
          </button>
        </div>

        {/* Title */}
        <h1 className="font-display font-black text-3xl md:text-5xl text-white uppercase mb-16 tracking-tighter shadow-black drop-shadow-lg text-center">
           Consiglio Direttivo
        </h1>

        {/* Row 1: Presidente & Vice */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-16">
           {TOP_BOARD.map((m, i) => <MemberCard key={i} member={m} size="lg" />)}
        </div>

        {/* Row 2: Segretario, Referente, Tesoriere */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 mb-16">
           {MID_BOARD.map((m, i) => <MemberCard key={i} member={m} size="md" />)}
        </div>

        {/* Row 3: Consiglieri */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-24 max-w-5xl">
           {BOTTOM_BOARD.map((m, i) => <MemberCard key={i} member={m} size="sm" />)}
        </div>

        {/* Separator Line */}
        <div className="w-full max-w-4xl h-px bg-white/30 mb-12 shadow-sm"></div>

        {/* Auditors Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white uppercase mb-4 tracking-wide shadow-black drop-shadow-sm">
             Collegio dei sindaci revisori
          </h2>
          <div className="w-20 h-1 bg-juve-gold mx-auto"></div>
        </div>

        {/* Auditors List (Text Only) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-4xl mb-24">
           {AUDITORS.map((m, i) => (
             <div key={i} className="flex flex-col items-center text-center">
                <h4 className="font-display font-bold text-white text-xl md:text-2xl uppercase italic tracking-tight leading-none mb-2">
                  {m.name}
                </h4>
                <p className="font-display text-[10px] md:text-xs text-juve-gold font-bold tracking-[0.2em] uppercase">
                  {m.role}
                </p>
             </div>
           ))}
        </div>

        {/* Group Photo Section */}
        <div className="w-full max-w-4xl mb-12 flex flex-col items-center">
           <div className="relative w-full border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden rounded-sm bg-gray-900">
              <img 
                src="http://avid3952177.altervista.org/img/Direttivo/direttivo.jpeg" 
                alt="Il Direttivo dello JOFC Enna" 
                className="w-full h-auto block"
              />
           </div>
           <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-white/60 italic">
             Il Direttivo dello JOFC Enna
           </p>
        </div>

      </div>
    </div>
  );
};

export default BoardMembersPage;
