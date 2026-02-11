
import React from 'react';

interface FooterProps {
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="relative z-20 bg-black text-white py-12 border-t border-gray-900">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <button 
              onClick={onAdminClick}
              className="group relative focus:outline-none"
            >
              <img 
                src="http://palestralc.altervista.org/img/FAN_WHITE_ENNA.png" 
                alt="Juventus Official Fan Club Enna" 
                className="w-24 mb-4 object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute -inset-2 bg-juve-gold/0 group-hover:bg-juve-gold/5 rounded-full transition-all duration-300"></div>
            </button>
            <p className="text-white text-sm font-display tracking-wider mb-2 font-bold">
              &copy; {new Date().getFullYear()} JOFC ENNA
            </p>
            <p className="text-white text-xs uppercase font-medium whitespace-nowrap">
              Tutti i marchi Juventus sono di esclusiva proprietà di Juventus FC
            </p>
          </div>
          
          <div className="flex gap-6 text-sm font-bold uppercase">
            <a href="#" className="text-white hover:text-juve-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-white hover:text-juve-gold transition-colors">Cookie Policy</a>
            <a href="#" className="text-white hover:text-juve-gold transition-colors">Credits</a>
          </div>
        </div>

        {/* Powered By - Centered at Bottom */}
        <div className="w-full text-center border-t border-gray-900 pt-6 mt-4 flex flex-col items-center">
          <p className="text-juve-gold text-[10px] uppercase font-bold tracking-widest mb-1">
            Powered By La Fenice
          </p>
          <a 
            href="https://lafeniceweb.it/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 text-[10px] hover:text-white transition-colors font-sans"
          >
            www.lafeniceweb.it
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
