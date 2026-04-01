const steps = [
  "Ajoutez vos produits et organisez votre catalogue",
  "Enregistrez ventes, dépenses et mouvements de stock",
  "Suivez vos chiffres en temps réel",
  "Analysez vos performances et prenez de meilleures décisions",
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Comment ça marche</h2>
        <p className="text-gray-600 text-lg mb-14">
          Une gestion simple.
          <br />
          Des décisions plus intelligentes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[#f9941f] from-primary to-accent rounded-2xl p-8 min-h-[160px] flex items-center shadow-lg"
            >
              <p className="text-white font-bold text-lg text-left">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
