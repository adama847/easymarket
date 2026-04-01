import { Check } from "lucide-react";

const plans = [
  {
    name: "Formule Solo",
    desc: "Pour les commerçants qui veulent démarrer simplement.",
    price: "5 900",
    features: [
      "Un utilisateur",
      "Gestion des ventes",
      "Gestion du stock simplifiée",
      "Suivi des dépenses",
      "Tableau de bord intuitif",
      "Factures et tickets",
    ],
  },
  {
    name: "Formule Team",
    desc: "Pour les équipes qui veulent mieux collaborer.",
    price: "15 000",
    features: [
      "Plusieurs comptes utilisateurs",
      "Accès adaptés selon les rôles",
      "Suivi centralisé de l'activité",
      "Contrôle renforcé",
      "Tableau de bord partagé",
    ],
  },
  {
    name: "Formule Team",
    desc: "Pour les commerces qui veulent aller plus loin.",
    price: "25 000",
    features: [
      "Gestion avancée",
      "Equipe et supervision multi-utilisateurs",
      "Pilotage plus structuré",
      "Site e-commerce lié à l'application",
      "Accompagnement à la mise en place",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#313a4b] mb-3">
          Choisissez la <span className="text-[#f9941f]">Formule</span> qui Vous Convient !
        </h2>
        <p className="text-gray-600 text-lg mb-14">
          Des offres simples pour grandir à votre rythme
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className="bg- rounded-2xl  shadow-md overflow-hidden flex flex-col">
              {/* Top circle */}
              <div className="flex justify-center pt-6">
                <div className="w-16 h-8 bg-[#1d3f72] rounded-b-full" />
              </div>

              <div className="px-6 pt-4 pb-2  text-center">
                <h3 className="text-xl font-extrabold text-[#313a4b] mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.desc}</p>
              </div>

              {/* Price */}
              <div className="mx-6 bg-[#f9941f] from-primary to-accent rounded-xl py-4 px-6 text-center">
                <p className="text-white text-3xl font-extrabold">{plan.price} FCFA</p>
                <p className="text-white/80 text-sm">par utilisateur / mois</p>
              </div>

              {/* Features */}
              <ul className="px-6 pt-6 pb-4 space-y-3 flex-1 text-left">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#f9941f] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="px-6 pb-6">
                <a
                  href="#contact"
                  className="block w-full text-center bg-[#f9941f] text-white rounded-full py-3 font-semibold hover:opacity-90 transition-opacity"
                >
                  Commencer maintenant
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
