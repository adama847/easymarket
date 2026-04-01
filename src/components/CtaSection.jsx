import phoneMockup from "../assets/facemob.png";

const CtaSection = () => {
  return (
    <section className="bg-[#f9941f] py-20 mb-32 relative overflow-visible">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        
        {/* TEXTE CONTENT */}
        <div className="flex-1 text-white z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Prêt à mieux piloter votre commerce ?
          </h2>
          <p className="text-white text-lg mb-8 leading-relaxed opacity-90">
            Rejoignez les commerçants qui utilisent EasyMarket pour suivre leurs chiffres,
            mieux contrôler leur activité et prendre de meilleures décisions.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-full bg-white text-[#1d3f72] px-8 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Demander une démo
            </a>
            <a
              href="#commencer"
              className="inline-flex items-center justify-center bg-transparent rounded-full border-2 border-white/50 text-white px-8 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Commencer maintenant
            </a>
          </div>

          {/* STORE BADGES */}
          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:opacity-90 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734c0-.382.218-.72.609-.92z" fill="#4285F4"/>
                <path d="M17.545 8.252L5.19.702a1.002 1.002 0 00-1.058.032l10.29 10.29 3.123-2.772z" fill="#EA4335"/>
                <path d="M17.545 15.748l-3.123-2.772-10.29 10.29a1.002 1.002 0 001.058.032l12.355-7.55z" fill="#34A853"/>
                <path d="M20.803 10.768l-3.258-1.99-3.753 3.222 3.753 3.222 3.258-1.99c.73-.447.73-1.571 0-2.464z" fill="#FBBC04"/>
              </svg>
              <div className="text-left">
                <span className="block text-[10px] opacity-70 leading-none">GET IT ON</span>
                <span className="font-semibold text-sm">Google Play</span>
              </div>
            </a>
            <a href="#" className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:opacity-90 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <span className="block text-[10px] opacity-70 leading-none">Available on the</span>
                <span className="font-semibold text-sm">App Store</span>
              </div>
            </a>
          </div>
        </div>

        {/* IMAGE ANIMÉE QUI DÉPASSE */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={phoneMockup}
            alt="EasyMarket App"
            loading="lazy"
            className="max-w-[280px] lg:max-w-[380px] drop-shadow-2xl animate-float"
          />
        </div>

      </div>

      {/* Animation CSS pour le flottement tout en gardant le dépassement de 30% */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(30%); }
          50% { transform: translateY(25%); }
          100% { transform: translateY(30%); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CtaSection;
