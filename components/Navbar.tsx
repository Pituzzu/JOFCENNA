
import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, ChevronDown } from 'lucide-react';
import { ViewState } from '../App';

interface SubLink {
  name: string;
  href: string;
  action?: string;
}

interface NavLink {
  name: string;
  href: string;
  submenu?: SubLink[];
  action?: string; // Custom action identifier
}

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { 
      name: 'IL CLUB', 
      href: '#about',
      submenu: [
        { name: 'STORIA', href: '#', action: 'wip' },
        { name: 'SOCI FONDATORI', href: '#', action: 'founders' },
        { name: 'DIRETTIVO', href: '#', action: 'board-members' },
        { name: 'SEDE', href: '#', action: 'clubhouse' }
      ]
    },
    { name: 'SOCI 25/26', href: '#membership', action: 'members' },
    { 
      name: 'GALLERY', 
      href: '#gallery',
      submenu: [
        { name: 'EVENTI', href: '#', action: 'events-gallery' },
        { name: 'ALLIANZ STADIUM', href: '#', action: 'wip' },
        { name: 'TRASFERTE', href: '#', action: 'wip' },
        { name: 'CLUB', href: '#', action: 'wip' },
        { name: 'VIDEOMESSAGGI', href: '#', action: 'wip' }
      ]
    },
    { name: 'ENNA', href: '#', action: 'enna' },
    { name: 'CONTATTI', href: '#contact' },
  ];

  const toggleMobileSubmenu = (name: string) => {
    if (mobileSubmenuOpen === name) {
      setMobileSubmenuOpen(null);
    } else {
      setMobileSubmenuOpen(name);
    }
  };

  const handleNavigation = (action?: string, href?: string) => {
      if (action === 'wip') {
          onNavigate('work-in-progress');
      } else if (action === 'members') {
          onNavigate('members');
      } else if (action === 'founders') {
          onNavigate('founders');
      } else if (action === 'board-members') {
          onNavigate('board-members');
      } else if (action === 'events-gallery') {
          onNavigate('events-gallery');
      } else if (action === 'enna') {
          onNavigate('enna');
      } else if (action === 'clubhouse') {
          onNavigate('clubhouse');
      } else {
          onNavigate('home');
          if (href && href.startsWith('#')) {
             setTimeout(() => {
                 const element = document.querySelector(href);
                 if (element) element.scrollIntoView({ behavior: 'smooth' });
             }, 100);
          }
      }
      setIsOpen(false);
  };

  const socialLinks = {
    instagram: "https://www.instagram.com/juventus_club_enna?igsh=MWl5YzVubmFwaDNoag%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1BsaLLM366/?mibextid=wwXIfr"
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white text-black ${scrolled ? 'py-1 shadow-lg' : 'py-2 shadow-sm'}`}>
      <div className="container mx-auto px-4 flex items-center relative">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('home')}>
          <img 
            src="http://palestralc.altervista.org/img/FAN_BLACK_ENNA.png" 
            onError={(e) => {
                e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/5/51/Juventus_FC_2017_logo.svg";
                e.currentTarget.className = "h-12 w-auto p-2 filter brightness-0"; 
            }}
            alt="Juventus Official Fan Club Enna" 
            className="h-12 md:h-14 w-auto object-contain transition-all"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 ml-auto mr-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a 
                href={link.href} 
                onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.action, link.href);
                }}
                className="flex items-center text-black font-display font-bold text-base hover:text-juve-gold transition-colors py-3 cursor-pointer"
              >
                {link.name}
                {link.submenu && <ChevronDown className="ml-1 w-3 h-3" />}
              </a>
              
              {link.submenu && (
                <div className="absolute left-0 top-full w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 rounded-b-lg overflow-hidden">
                  {link.submenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(subItem.action, subItem.href);
                      }}
                      className="block px-6 py-3 text-xs font-bold uppercase hover:bg-juve-gray hover:text-juve-gold transition-colors border-b border-gray-50 last:border-0"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-4 h-4" style={{ color: '#E1306C' }} />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-4 h-4" style={{ color: '#E1306C' }} />
            </a>
          </div>
        </div>

        <button 
          className="md:hidden text-black ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-xl max-h-[90vh] overflow-y-auto">
          <div className="flex flex-col p-6 gap-6 text-center">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col items-center w-full">
                <div className="flex items-center justify-center gap-2 w-full">
                   <a 
                    href={link.submenu ? '#' : link.href}
                    className="text-black font-display font-bold text-lg hover:text-juve-gold"
                    onClick={(e) => {
                      if (link.submenu) {
                        e.preventDefault();
                        toggleMobileSubmenu(link.name);
                      } else {
                        e.preventDefault();
                        handleNavigation(link.action, link.href);
                      }
                    }}
                  >
                    {link.name}
                  </a>
                  {link.submenu && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform ${mobileSubmenuOpen === link.name ? 'rotate-180' : ''}`} 
                      onClick={() => toggleMobileSubmenu(link.name)}
                    />
                  )}
                </div>

                {link.submenu && mobileSubmenuOpen === link.name && (
                  <div className="flex flex-col gap-4 mt-4 bg-gray-50 w-full p-4 rounded-lg animate-fade-in-up">
                    {link.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="text-gray-600 font-bold text-xs uppercase hover:text-juve-gold"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(subItem.action, subItem.href);
                        }}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="h-px bg-gray-200 w-full"></div>
            
            <div className="flex gap-6 justify-center">
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity"><Instagram className="w-5 h-5" style={{ color: '#E1306C' }} /></a>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity"><Facebook className="w-5 h-5" style={{ color: '#E1306C' }} /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
