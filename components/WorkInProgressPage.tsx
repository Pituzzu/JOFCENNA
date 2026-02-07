import React from 'react';
import { ArrowLeft, Hammer, HardHat } from 'lucide-react';

interface WorkInProgressPageProps {
  onBack: () => void;
}

const WorkInProgressPage: React.FC<WorkInProgressPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-12 relative animate-fade-in-up flex flex-col items-center">
       {/* Background Watermark */}
       <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10">
         <img 
            src="http://palestralc.altervista.org/img/FAN_WHITE_ENNA.png" 
            className="w-[80%] md:w-[50%] h-auto grayscale"
         />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-2xl text-center">
        
        <div className="bg-juve-darkgray/50 backdrop-blur-sm border border-gray-800 p-12 rounded-2xl shadow-2xl">
            <div className="flex justify-center mb-8">
                <div className="bg-juve-gold p-6 rounded-full text-black animate-pulse">
                    <Hammer className="w-12 h-12" />
                </div>
            </div>

            <h1 className="font-display font-black text-4xl md:text-6xl uppercase mb-4 text-white tracking-tighter">
                WORK IN PROGRESS
            </h1>
            
            <div className="w-24 h-1 bg-juve-gold mx-auto mb-8"></div>

            <p className="font-sans text-xl text-gray-300 mb-2">
                Sito in allestimento
            </p>
            <p className="font-sans text-gray-400 mb-10">
                Stiamo lavorando per portarvi nuovi contenuti. Tornate a trovarci presto!
            </p>

            <button 
                onClick={onBack}
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 font-display font-bold uppercase tracking-widest hover:bg-juve-gold hover:text-white transition-all transform hover:scale-105 rounded-sm"
            >
                <ArrowLeft className="w-5 h-5" />
                Torna alla Home
            </button>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgressPage;