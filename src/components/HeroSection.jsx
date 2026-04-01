import phoneMockup from "../assets/phone-mockup-M_BD_kca.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f9941f] min-h-[500px] lg:min-h-[650px] flex items-end">
      
      {/* EFFET DE DÉGRADÉ DISCRET */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* TEXTE GAUCHE - ALIGNÉ PARFAITEMENT */}
        <div className="flex flex-col text-white text-left lg:pt-16 lg:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-[1.1] mb-10 tracking-tight">
            EasyMarket, l'outil
            <br />
            d'aide à la décision des
            <br />
            commerçants africains
          </h1>

          <div className="flex flex-wrap justify-start gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-full bg-[#1d3f72] text-white px-10 py-4 text-base font-bold hover:bg-[#16315a] transition-all shadow-xl"
            >
              Demander une démo
            </a>
            <a
              href="#commencer"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/60 text-white px-10 py-4 text-base font-bold hover:bg-white hover:text-[#f9941f] transition-all"
            >
              Commencer maintenant
            </a>
          </div>
        </div>

        {/* IMAGE DROITE */}
        <div className="flex-1 flex justify-center lg:justify-end items-end">
          <div className="relative translate-y-16 lg:translate-y-24 rotate-[5deg] animate-float-gentle">
            
            {/* BADGE HAUT DROITE */}
            <div className="absolute top-24 -right-2 lg:-right-3 lg:top-62 z-20 bg-white rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734c0-.382.218-.72.609-.92z" fill="#4285F4" />
                <path d="M17.545 8.252L5.19.702a1.002 1.002 0 00-1.058.032l10.29 10.29 3.123-2.772z" fill="#EA4335" />
                <path d="M17.545 15.748l-3.123-2.772-10.29 10.29a1.002 1.002 0 001.058.032l12.355-7.55z" fill="#34A853" />
                <path d="M20.803 10.768l-3.258-1.99-3.753 3.222 3.753 3.222 3.258-1.99c.73-.447.73-1.571 0-2.464z" fill="#FBBC04" />
              </svg>
              <span className="text-gray-800 font-bold text-sm">Google Play</span>
            </div>

            <img
              src={phoneMockup}
              alt="App Screenshot"
              className="relative z-10 drop-shadow-2xl max-w-[280px] md:max-w-[380px] lg:max-w-[480px]"
            />
            
            {/* BADGE BAS GAUCHE */}
            <div className="absolute bottom-48 -left-10 lg:-left-12 lg:bottom-62 z-20 bg-white rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734c0-.382.218-.72.609-.92z" fill="#4285F4" />
                <path d="M17.545 8.252L5.19.702a1.002 1.002 0 00-1.058.032l10.29 10.29 3.123-2.772z" fill="#EA4335" />
                <path d="M17.545 15.748l-3.123-2.772-10.29 10.29a1.002 1.002 0 001.058.032l12.355-7.55z" fill="#34A853" />
                <path d="M20.803 10.768l-3.258-1.99-3.753 3.222 3.753 3.222 3.２58-1.99c.73-.447.73-1.571 0-２．464z" fill="#FBBC04" />
              </svg>
              <span className="text-gray-800 font-bold text-sm">Google Play</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes floatGentle {
          0% { transform: translateY(0px) rotate(5deg); }
          50% { transform: translateY(-20px) rotate(4.5deg); }
          100% { transform: translateY(0px) rotate(5deg); }
        }
        .animate-float-gentle {
          animation: floatGentle 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
