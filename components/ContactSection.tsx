
import React from 'react';
import { Mail, MapPin, Facebook, Instagram, Info } from 'lucide-react';

const ContactSection: React.FC = () => {
  const socialLinks = {
    instagram: "https://www.instagram.com/juventus_club_enna?igsh=MWl5YzVubmFwaDNoag%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1BsaLLM366/?mibextid=wwXIfr"
  };

  return (
    <section id="contact" className="relative z-20 bg-juve-gray py-24">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row rounded-xl border border-gray-100">
          
          {/* Info Side (Black Bar) */}
          <div className="bg-black text-white p-12 md:w-1/3 flex flex-col justify-between relative overflow-hidden">
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-juve-gold opacity-10 blur-3xl rounded-full translate-x-16 -translate-y-16"></div>
            
            <div className="relative z-10">
              <h3 className="font-display font-bold text-4xl uppercase mb-4 tracking-tighter">Contatti</h3>
              <p className="text-white/80 mb-10 text-base font-medium">Siamo a disposizione per ogni informazione sul tesseramento e sulle trasferte organizzate.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-3 rounded-lg text-juve-gold border border-white/5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-sm uppercase tracking-widest text-juve-gold mb-1">Sede Club</h5>
                    <p className="text-white text-base">Via Roma 117/119, 94100 Enna (EN)</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-3 rounded-lg text-juve-gold border border-white/5">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-sm uppercase tracking-widest text-juve-gold mb-1">Email Ufficiale</h5>
                    <p className="text-white text-base font-medium">jcdenna@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 relative z-10 border-t border-white/10 pt-8">
              <h5 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-6 text-white/50">Seguici sui Social</h5>
              <div className="flex gap-6">
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-juve-gold transition-all transform hover:scale-110"><Facebook className="w-7 h-7" /></a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-juve-gold transition-all transform hover:scale-110"><Instagram className="w-7 h-7" /></a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 md:w-2/3 bg-white relative">
            <h3 className="font-display font-bold text-4xl text-black uppercase mb-4 tracking-tighter">Inviaci un Messaggio</h3>
            
            {/* Note about inactive form */}
            <div className="bg-gray-50 border-l-4 border-juve-gold p-4 mb-8 flex items-center gap-3">
              <Info className="w-5 h-5 text-juve-gold shrink-0" />
              <p className="text-sm font-bold text-gray-700 uppercase tracking-tight">
                Il modulo di contatto è temporaneamente inattivo. Per qualsiasi informazione, vi invitiamo a scriverci direttamente via email a <span className="text-juve-gold">jcdenna@gmail.com</span>.
              </p>
            </div>

            <form className="space-y-8 opacity-40 cursor-not-allowed select-none">
              <fieldset disabled className="space-y-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2 transition-colors">Nome</label>
                    <input type="text" className="w-full border-b-2 border-gray-200 outline-none py-3 transition-all text-black font-medium cursor-not-allowed" placeholder="Inserisci il tuo nome" />
                  </div>
                  <div className="relative group">
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2 transition-colors">Cognome</label>
                    <input type="text" className="w-full border-b-2 border-gray-200 outline-none py-3 transition-all text-black font-medium cursor-not-allowed" placeholder="Inserisci il tuo cognome" />
                  </div>
                </div>
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2 transition-colors">Email</label>
                  <input type="email" className="w-full border-b-2 border-gray-200 outline-none py-3 transition-all text-black font-medium cursor-not-allowed" placeholder="esempio@email.it" />
                </div>
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2 transition-colors">Il tuo Messaggio</label>
                  <textarea rows={4} className="w-full border-b-2 border-gray-200 outline-none py-3 transition-all resize-none text-black font-medium cursor-not-allowed" placeholder="Come possiamo aiutarti?"></textarea>
                </div>
                <button type="button" className="bg-gray-400 text-white font-display font-bold uppercase text-sm tracking-widest px-12 py-5 cursor-not-allowed">
                  Invia Richiesta
                </button>
              </fieldset>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
