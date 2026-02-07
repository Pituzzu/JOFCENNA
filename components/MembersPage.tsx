import React from 'react';

// Elenco Soci Reale Stagione 25/26
const MEMBERS_LIST = [
  "Russo Michele", "Ferro Angelo", "Ferro Mattia", "Di Bella Ugo", "Lombardo Luciano", 
  "Lombardo Mirko", "Andolina Luca", "Andolina Luca", "Bertino Salvatore", "Vullo Salvatore", 
  "Vullo Giovanni Maria", "Vicari Maria Stefania", "Di Franco Samantha Maria", "Sanfilippo Carlo Federico G.", 
  "Sanfilippo Diego", "Ballistreri Alessio", "Giliberto Angelo", "Lucchese Mario", "Arnaldi Micaela", 
  "Lucchese Sonia", "Lattarico Francesco", "Bumbaca Saverio", "D'Agostino Anna Maria", "Passalacqua Ferruccio", 
  "Passalacqua Francesco", "Costa Riccardo Maria", "Costa Davide", "Salvaggio Giuliana Maria", "Gervasi Paolo", 
  "Di Marco Giuseppe", "Di Marco Salvatore", "Taormina David", "Passalacqua Raffaele", "Sicurezza Paolo", 
  "Sicurezza Fsco Paolo", "Sicurezza Marco", "Sicurezza Stefania", "Manusè Giulia", "Manusè Marco", 
  "Sicurezza Giuseppe", "Tosetto Giuseppe", "D'Alù Angelo Domenico", "Dal Piva Simone", "Gruttadauria Miki Francesco", 
  "Gruttadauria Josephine Lucy", "Gueli Asia", "Geraci Leandro", "Geraci Mirko", "Battaglia Cesare", 
  "Castro Carmelo", "Arena Giancarlo", "Carta Libera", "Arena Roberto", "Arena Giuliana", "Puglia Michelangelo", 
  "Di Fina Santo", "Di Fina Sebastiano", "Calì Antonio", "Favale Matteo", "Mingrino Luciano", "Cannarozzo Paolo", 
  "Guglielmaci Guido", "Cristaldi Vincenzo", "La Manna Damiano", "Alessandra Luigi Pasquale", "Mantegna Francesco", 
  "De Rose Carmelo", "De Rose Ezio", "De Rose Giuseppe", "Miserendino Matteo", "Ambra Laura", "Rivoli Salvatore", 
  "Faggiano Francesca", "Rivoli Mario", "Laiosa Valerio", "Oglialoro Giulia", "Canerini Calogero", 
  "Di Fede Maria Concetta", "Nicosia Gaetano", "Calì Giulia", "Calì Gabriele", "Lo Porto Giuseppe", 
  "Sulsenti Vincenzo", "Cannarozzo Sebastiano", "Patelmo Mario", "Mangione Simone", "Savoca Sebastiano Primo", 
  "Di Fabrizio Davide Neva", "Minardi Carmelo", "Di Bella Giuliana", "Primavera Tea", "Primavera Clara", 
  "Perna Giovanni Biagio", "Rizzo Alberto", "Guasto Antonio", "Pavano Giovanni", "Pavano Rosario", 
  "Zarrelli Armando", "Agozzino Silvestro", "Acciaro Giuseppe", "Fileccia Samuele", "Cimino Gaetano", 
  "Morgano Giuseppe", "Severino Paolo", "Serra Pierluigi", "Serra Salvatore", "Campisi Vincenzo", 
  "Campione Alessio", "Di Barca Gaetano", "Puglisi Hermes", "Testaì Giuseppe", "Vitale Giuseppe", 
  "Billanti Samuel Mario", "Rimoldi Manuel", "Cucco Stefano", "Ragona Vincenzo", "Ragona Mattia", 
  "Ragona Ivan Luciano", "Iannello Luca Pio", "Schmaus Thomas", "Nasello Mario Antonino", "Colaleo Maurizio", 
  "Nicosia Carmelo Piero", "Nicosia Mario", "Calascibetta Santo", "Gruttadauria Aida", "Coniglione Cristian", 
  "Ginepri Azzurra", "Oliveri Gemma Maria", "Saltaleggio Emmanuel", "Macaluso Andrea", "Di Dio Mattia Giovanni", 
  "Termine Giovanni", "Sicurezza Massimo", "Andolina Paolo", "Baldi Enrico", "Micali Marco", 
  "Hashemizdehnaeini Shabnam", "Milano Vincenzo", "Calì Christian", "Placenti Simona", "Gervasi Alessandro", 
  "Greca Roberto", "Ciccio Salvatore", "Alaimo Davide", "Contraffatto Federico", "Lahmice Abdellatif", 
  "Giangreco Simone", "Giangreco Elisabetta", "Gervasi Ilaria", "Bonasera Fabrizio", "Randazzo Desirè", 
  "Piazza Giuseppe", "Giunta Danilo Orazio", "Rossignolo Sebastiano", "Farina Salvatore Luca", "Giannone Calogero", 
  "Giannone Samuele", "Palmeri Maurizio", "Di Prima Giuseppe", "Di Prima Mario", "De Santis Jessica", 
  "Nasonte Massimiliano", "Nasonte Saverio", "Passalacqua Filippo", "Cristaldi Bruno Michael", "Mangione Simone", 
  "Mangione Emanuele", "Borghese Francesco", "Di Franco Giuseppe", "Piazza Giuseppe (giovane)", "Milano Stefano", 
  "Americo Lorenzo", "Americo Tommaso", "Ferraro Gianluca", "Ferraro Francesco", "Ferraro Francesco", 
  "Berna Nasca Giacomo", "Benvegna Melania", "La Cognata Giuseppe", "Costarelli Jhonny", "Costarelli Matthias", 
  "D'Alù Ivan", "Benvegna Marzia Ambra", "Tchouyo Yakam Ivan Francesco", "La Delia Carmelo", "La Delia Giuseppe", 
  "Micali Matteo", "Sgrò Francesco Lucio", "Sgrò Leonardo", "Schembri Rosaria", "Sgrò Serena", 
  "Campanile Eleonora Maria", "Vigni Antonino", "Greco Giuseppe", "Napoli Matteo", "Librizzi Daniele", 
  "Barreca Danilo", "Buscemi Davide", "Di Dio Randazzo Stefano", "Di Dio Randazzo Andrea", 
  "Di Dio Randazzo Francesco", "Gervasi Francesco Aldo", "Lianzi Sandro"
];

const MembersPage: React.FC = () => {
  // Ordina la lista alfabeticamente
  const sortedList = [...MEMBERS_LIST].sort((a, b) => a.localeCompare(b));

  // Raggruppa i soci per lettera iniziale
  const groupedMembers = sortedList.reduce((acc, name) => {
    // Gestione spazi vuoti o nomi errati
    if (!name) return acc;
    const letter = name.charAt(0).toUpperCase();
    if (!acc[letter]) {
      acc[letter] = [];
    }
    acc[letter].push(name);
    return acc;
  }, {} as Record<string, string[]>);

  const sortedLetters = Object.keys(groupedMembers).sort();

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative">
      {/* Background Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-5">
         <img 
            src="http://palestralc.altervista.org/img/FAN_WHITE_ENNA.png" 
            className="w-[80%] md:w-[50%] h-auto grayscale"
         />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Members Card */}
        <div className="bg-white/95 backdrop-blur-sm text-black rounded-sm shadow-[0_0_40px_rgba(255,255,255,0.1)] overflow-hidden animate-fade-in-up border border-gray-800 mt-8">
           
           {/* Top Stats Bar */}
           <div className="bg-black p-6 md:p-8 flex flex-col md:flex-row justify-between items-center border-b-4 border-juve-gold relative overflow-hidden">
              {/* Decorative Stripes */}
              <div className="absolute top-0 right-0 h-full w-24 bg-[repeating-linear-gradient(45deg,#333,#333_1px,transparent_1px,transparent_10px)] opacity-20"></div>

              <div className="flex items-center gap-4 mb-4 md:mb-0 z-10">
                 <div className="w-12 h-12 bg-juve-gold rounded-full flex items-center justify-center text-black font-bold shadow-lg shrink-0">
                    <span className="text-2xl">J</span>
                 </div>
                 <div>
                    <h3 className="font-display font-bold text-white text-lg md:text-xl uppercase tracking-wider">ELENCO SOCI STAGIONE 2025/26</h3>
                    <p className="text-white text-xs font-medium uppercase">Aggiornato ad oggi</p>
                 </div>
              </div>
              
              {/* Only the Number */}
              <div className="flex items-baseline z-10">
                 <span className="font-display font-black text-6xl md:text-7xl text-juve-gold leading-none drop-shadow-md">
                    {MEMBERS_LIST.length}
                 </span>
              </div>
           </div>

           {/* Content Grid */}
           <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                 {sortedLetters.map((letter) => (
                    <div key={letter} className="break-inside-avoid">
                       <div className="flex items-center gap-3 mb-4">
                          <div className="bg-black text-juve-gold w-10 h-10 flex items-center justify-center font-display font-black text-xl rounded-sm shadow-md">
                             {letter}
                          </div>
                          <div className="h-[1px] flex-grow bg-gray-200"></div>
                       </div>
                       
                       <ul className="space-y-2">
                          {groupedMembers[letter].map((name, index) => (
                             <li key={index} className="pl-2 border-l-2 border-transparent hover:border-juve-gold transition-all duration-200">
                                <span className="font-display font-medium text-gray-800 uppercase text-sm tracking-wide block hover:text-black hover:translate-x-1 transition-transform cursor-default">
                                   {name}
                                </span>
                             </li>
                          ))}
                       </ul>
                    </div>
                 ))}
              </div>
           </div>
           
           {/* Footer of Card */}
           <div className="bg-gray-100 p-4 flex justify-center items-center gap-3 border-t border-gray-200">
               <div className="w-2 h-2 rounded-full bg-black"></div>
               <span className="text-xs text-black font-bold uppercase tracking-[0.2em]">Fino Alla Fine</span>
               <div className="w-2 h-2 rounded-full bg-black"></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;