import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative z-20 py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        {/* Usiamo items-stretch per far sì che le due colonne abbiano tendenzialmente la stessa altezza visiva */}
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Left: Text Only (No Title) - Added more text to match image bulk */}
          <div className="lg:w-1/2 flex flex-col justify-center">
             <div className="prose prose-lg text-gray-700 font-sans text-justify">
               <p className="mb-6">
                 Gli Juventus Official Fan Club (JOFC) sono gli unici fan club ufficialmente riconosciuti dalla Juventus e rappresentano un autentico punto di riferimento e di aggregazione territoriale per i tifosi di tutto il mondo che condividono la passione per i colori bianconeri.
               </p>
               <p className="mb-6">
                 Lo <strong>Juventus Official Fan Club Enna</strong> nasce nel 2016 con il nome di Juventus Club DOC Giuseppe Furino. I soci fondatori decisero di creare, nella città di Enna – fino ad allora priva di un club ufficiale – un luogo di incontro e condivisione dedicato a tutti i tifosi juventini del territorio.
               </p>
               <p className="mb-6">
                 Il 18 novembre 2016 il club viene ufficialmente inaugurato con la partecipazione straordinaria di Giuseppe Furino, presenza che ha reso l’evento ancora più significativo e memorabile.
               </p>
               <p className="mb-6">
                 Giuseppe Furino, palermitano di nascita ma juventino d’adozione, è stato uno dei calciatori più rappresentativi della storia bianconera. Dal 1976 al 1984 ha vestito la maglia della Juventus, diventando un simbolo di grinta, appartenenza e spirito di sacrificio: valori che ancora oggi ispirano il club e i suoi tifosi.
               </p>
               <p className="mb-6">
                 Grazie all’affiliazione ufficiale, gli Official Fan Club possono offrire numerosi vantaggi ai propri iscritti: dal welcome pack alla Juventus Card, dai servizi di biglietteria alla possibilità di partecipare a eventi e iniziative riservate organizzate dalla Juventus.
               </p>
               <p className="mb-6">
                 Oltre ai servizi garantiti dall’affiliazione, ogni Official Fan Club ha inoltre la facoltà di proporre ai propri soci ulteriori benefit aggiuntivi, come la visione collettiva delle partite, eventi e attività private, nonché convenzioni e agevolazioni con esercizi commerciali del territorio.
               </p>
               <p className="mt-8 text-center lg:text-left font-display font-bold text-2xl uppercase tracking-widest" style={{ color: '#ff2850' }}>
                 UNITI DA UNA GRANDE PASSIONE
               </p>
             </div>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2 min-h-[500px]">
             <div className="relative w-full h-full bg-black shadow-2xl overflow-hidden rounded-lg">
                {/* Immagine originale senza overlay scuri o opacità */}
                <img 
                  src="http://palestralc.altervista.org/img/enna.jpeg" 
                  alt="Fan Club Atmosphere" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;