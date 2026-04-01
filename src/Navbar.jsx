import React from 'react'

const Navbar = () => {
  // Style commun pour les liens du menu
  const navLinkStyle = "text-sm font-medium text-foreground/80 hover:text-primary transition-colors";

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur shadow-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        
        {/* LOGO SECTION */}
        <a href="/" className="flex items-center gap-1 group">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-bold text-secondary tracking-tight">Easy</span>
            <span className="text-2xl font-extrabold text-primary -mt-1">Market</span>
          </div>
          <div className="flex flex-col gap-0.5 ml-1 text-primary animate-pulse">
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

        {/* ACTIONS SECTION */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 transition-all active:scale-95">
            Télécharger l'appli
          </button>

          {/* MOBILE BURGER MENU */}
          <button className="lg:hidden p-2 text-foreground hover:bg-accent rounded-md transition-colors" aria-label="Menu">
            <svg xmlns="http://w3.org" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
