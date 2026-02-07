import React from 'react';
import { MEMBER_TIERS } from '../constants';
import { Check } from 'lucide-react';

const MembershipSection: React.FC = () => {
  return (
    <section id="membership" className="bg-juve-black py-20 relative overflow-hidden">
      {/* Decorative Background Stripes */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[repeating-linear-gradient(45deg,white,white_1px,transparent_1px,transparent_20px)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-juve-gold font-bold tracking-widest text-sm uppercase mb-2">Membership 2023/24</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-white uppercase mb-6">
            Entra nella Famiglia
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Scegli il piano adatto a te. Essere soci significa prelazione sui biglietti, eventi esclusivi e la certezza di vivere la Juventus da protagonista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {MEMBER_TIERS.map((tier, index) => (
            <div 
              key={index} 
              className={`relative bg-juve-darkgray border p-8 transition-all duration-300 ${tier.recommended ? 'border-juve-gold scale-105 shadow-[0_0_30px_rgba(255,40,80,0.2)]' : 'border-gray-800 hover:border-white'}`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-juve-gold text-white font-bold text-xs px-4 py-1 uppercase tracking-wider">
                  Più Popolare
                </div>
              )}
              
              <div className="text-center mb-8">
                <h4 className="font-display font-bold text-2xl text-white mb-2">{tier.name}</h4>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-500 ml-1">/anno</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300 text-sm">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.recommended ? 'text-juve-gold' : 'text-white'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 font-display font-bold uppercase tracking-wide transition-colors ${
                tier.recommended 
                  ? 'bg-juve-gold text-white hover:bg-white hover:text-black' 
                  : 'bg-transparent border border-white text-white hover:bg-white hover:text-black'
              }`}>
                Scegli {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;