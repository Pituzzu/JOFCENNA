
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative z-20 py-10 md:py-14 bg-white text-black overflow-hidden">
      {/* Elemento Grafico di Sfondo: Cambiato da 2016 a JOFC ENNA */}
      <div className="absolute top-10 right-0 pointer-events-none select-none z-0 opacity-[0.03]">
        <span className="font-display font-black text-[8rem] md:text-[10rem] lg:text-[12rem] leading-none text-black uppercase whitespace-nowrap">
          JOFC ENNA
        </span>
      </div>

      <div className="container mx-auto px-4 lg:px-12 max-w-7xl relative z-10">
        
        {/* TESTO INTRODUTTIVO - Sezione JOFC */}
        <div className="w-full mb-8">
          <div className="bg-gray-50 border-l-8 border-juve-gold p-5 md:p-7 shadow-sm">
            <p className="font-sans text-base md:text-lg text-gray-800 leading-relaxed italic text-center md:text-left">
              Gli <strong>Juventus Official Fan Club (JOFC)</strong> sono gli unici fan club ufficialmente riconosciuti dalla Juventus e rappresentano un autentico punto di riferimento e di aggregazione territoriale per i tifosi di tutto il mondo che condividono la passione per i colori bianconeri.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* COLONNA TESTO STORIA */}
          <div className="lg:w-7/12 flex flex-col">
            <div className="font-sans text-sm md:text-[0.95rem] text-gray-800 leading-relaxed text-justify space-y-4">
              <p>
                Lo <strong>Juventus Official Fan Club Enna</strong> nasce nel <strong>2016</strong> con il nome di Juventus Club DOC Giuseppe Furino. I soci fondatori decisero di creare, nella città di Enna – fino ad allora priva di un club ufficiale – un luogo di incontro e condivisione dedicato a tutti i tifosi juventini del territorio.
              </p>

              <p>
                Il <strong>18 novembre 2016</strong> il club viene ufficialmente inaugurato con la partecipazione straordinaria di <strong>Giuseppe Furino</strong>, presenza che ha reso l’evento ancora più significativo e memorabile.
              </p>

              <p>
                Giuseppe Furino, palermitano di nascita ma juventino d’adozione, è stato uno dei calciatori più rappresentativi della storia bianconera. Dal 1976 al 1984 ha vestito la maglia della Juventus, diventando un <strong>simbolo di grinta, appartenenza e spirito di sacrificio</strong>: valori che ancora oggi ispirano il club e i suoi tifosi.
              </p>

              <p>
                Grazie all'<strong>affiliazione ufficiale</strong>, gli Official Fan Club possono offrire numerosi vantaggi ai propri iscritti: dal welcome pack alla Juventus Card, dai servizi di biglietteria alla possibilità di partecipare a eventi e iniziative riservate organizzate dalla Juventus.
              </p>

              <p>
                Oltre ai servizi garantiti dall’affiliazione, ogni Official Fan Club ha inoltre la facoltà di proporre ai propri soci <strong>ulteriori benefit aggiuntivi</strong>, come la visione collettiva delle partite, eventi e attività private, nonché convenzioni e agevolazioni con esercizi commerciali del territorio.
              </p>
            </div>
          </div>

          {/* COLONNA IMMAGINE */}
          <div className="lg:w-5/12 w-full mt-8 lg:mt-0">
            <div className="relative w-full shadow-[10px_10px_30px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden border border-gray-50">
              <img 
                src="http://palestralc.altervista.org/img/enna.jpeg" 
                alt="Inaugurazione Juventus Club Enna" 
                className="w-full h-auto block grayscale-[5%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
