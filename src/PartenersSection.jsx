const partners = [
  "OFII", "Volkeno", "MVP Lab", "KPC Consortium", "Impact Hub Dakar", "Pitch Palabre"
];

const PartnersSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Nos Partenaires Institutionnels</h2>
        <p className="text-muted-foreground text-lg mb-14">
          Ils nous accompagnent dans notre mission de digitalisation du commerce
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="bg-background border rounded-xl px-8 py-6 shadow-sm min-w-[150px] flex items-center justify-center"
            >
              <span className="text-sm font-bold text-foreground">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
