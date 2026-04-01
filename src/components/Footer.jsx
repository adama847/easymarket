import React from 'react';
// Importation des icônes depuis react-icons
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: "Pricing", href: "#pricing" },
    { name: "Démo", href: "#démo" },
    { name: "À propos", href: "#a-propos" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF size={18} />, href: "#", label: "Facebook" },
    { icon: <FaInstagram size={18} />, href: "#", label: "Instagram" },
    { icon: <FaLinkedinIn size={18} />, href: "#", label: "LinkedIn" },
    { icon: <FaTiktok size={18} />, href: "#", label: "TikTok" },
  ];

  return (
    <footer className="bg-[#f9941f]  from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* LOGO */}
          <div className="space-y-4 text-center md:text-left">
            <a href="/" className="text-2xl font-bold tracking-tight text-white">
              Easy<span className="font-extrabold">Market</span>
            </a>
            <p className="text-white mt-5 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Obtenez un outil de gestion et/ou un site e-commerce en un temps record pour booster votre business.
            </p>
          </div>

          {/* LIENS */}
          <div className="md:justify-self-center text-center md:text-left">
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white hover:text-white text-sm transition-all hover:pl-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RESEAUX SOCIAUX */}
          <div className="md:justify-self-end text-center md:text-left">
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Rejoignez-nous</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-white text-[#f9941f] flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white py-8 text-center">
        <p className="text-white text-xs tracking-widest uppercase">
          © 2026 <span className="font-bold text-white">EasyMarket</span>. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
