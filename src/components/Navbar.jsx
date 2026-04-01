import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // ← état du menu mobile

  // Style commun pour les liens du menu
  const navLinkStyle = "text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white backdrop-blur shadow-sm ">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        
        {/* LOGO */}
        <a href="/" className="flex items-center gap-1 group">
          <div className="flex leading-none">
            <span className="text-2xl font-bold text-[#1d3f72] tracking-tight">Easy</span>
            <span className="text-2xl font-extrabold text-[#f9941f]">Market</span>
          </div>
          <div className="flex flex-col mt-6 ml-1 font-bold text-[#f9941f] animate-pulse">
            <span className="text-[8px]">●●</span>
            <span className="text-[8px]">●●</span>
          </div>
        </a>

        {/* NAVIGATION DESKTOP */}
        <ul className="hidden lg:flex items-center gap-x-8">
          <li><a href="#fonctionnalites" className={navLinkStyle}>Fonctionnalités</a></li>
          <li><a href="#pricing" className={navLinkStyle}>Pricing</a></li>
          <li><a href="#demo" className={navLinkStyle}>Démo</a></li>
          <li><a href="#a-propos" className={navLinkStyle}>À propos</a></li>
          <li><a href="#clients" className={navLinkStyle}>Clients</a></li>
          <li><a href="#contact" className={navLinkStyle}>Contact</a></li>
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:inline-flex items-center justify-center rounded-full bg-[#f9941f] px-8 py-3 text-sm font-bold text-white shadow-lg hover:bg-blue-300 hover:scale-105 transition-all active:scale-95">
            Télécharger l'appli
          </button>

          {/* BURGER MENU MOBILE */}
          <button 
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" /> // X pour fermer
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col gap-4 px-6 pb-4 bg-white border-t border-amber-50">
          <li><a href="#fonctionnalites" className={navLinkStyle}>Fonctionnalités</a></li>
          <li><a href="#pricing" className={navLinkStyle}>Pricing</a></li>
          <li><a href="#demo" className={navLinkStyle}>Démo</a></li>
          <li><a href="#a-propos" className={navLinkStyle}>À propos</a></li>
          <li><a href="#clients" className={navLinkStyle}>Clients</a></li>
          <li><a href="#contact" className={navLinkStyle}>Contact</a></li>
          <li>
            <button className="w-full rounded-full bg-[#f9941f] px-8 py-3 text-sm font-bold text-white shadow-lg hover:bg-blue-300 transition-all">
              Télécharger l'appli
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;