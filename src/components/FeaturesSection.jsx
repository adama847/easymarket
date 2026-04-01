import phoneMockup from "../assets/facemob.png";

const featuresList = [
  "Gestion des ventes et dépenses",
  "Import / export de produits",
  "Factures et tickets de caisse",
  "Multi-utilisateurs Contrôle à distance",
  "Gestion du stock en temps réel",
  "Site e-commerce lié à l'application",
  "Tableau de bord de performance",
  "Suivi des encaissements et décaissements",
];

const FeaturesSection = () => {
  return (
    <section id="fonctionnalites" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-16">
        
        {/* IMAGE À GAUCHE AVEC ANIMATION */}
        <div className="flex-1 flex justify-center order-1">
          <img
            src={phoneMockup}
            alt="EasyMarket Features"
            className="max-w-[300px] lg:max-w-[310px] drop-shadow-xl animate-float-slow"
          />
        </div>

        {/* CONTENU À DROITE */}
        <div className="flex-1 ms-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#313a4b] mb-2">
            <span className="text-[#f9941f]">Fonctionnalités</span> clés
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Tout ce qu'il vous faut pour gérer et développer<br />votre commerce
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {/* 1. LA LISTE */}
            {featuresList.map((feature, i) => (
              <div key={i} className="relative flex items-center bg-[#f5f5f5] rounded-xl p-4 shadow-sm">
                <span className="absolute -left-2 w-3 h-6 bg-[#f9941f] rounded-r-full" />
                <span className="text-sm font-medium text-gray-700">{feature}</span>
              </div>
            ))}

            {/* 2. LE BOUTON (Bas-Gauche) */}
            <div className="sm:order-1">
              <button className="w-full sm:w-auto rounded-full px-6 py-3 text-white bg-[#1d3f72] font-semibold hover:bg-[#e0851a] transition-colors">
                Demander une démo
              </button>
            </div>

            {/* 3. LA DERNIÈRE CARD (Bas-Droite) */}
            <div className="relative flex items-center bg-[#f5f5f5] rounded-xl p-4 shadow-sm sm:order-2">
              <span className="absolute -left-2 w-3 h-6 bg-[#f9941f] rounded-r-full" />
              <span className="text-sm font-medium text-gray-700">
                Suivi des meilleurs produits
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Style CSS pour l'animation monte/descend douce */}
      <style>{`
        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slow {
          animation: floatSlow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
