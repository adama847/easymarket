import img1 from "../assets/HubDakar.png";
import img2 from "../assets/Kpc.png";
import img3 from "../assets/Mvp.png";
import img4 from "../assets/volkyno.png";
import img5 from "../assets/Ofii.png";
import img6 from "../assets/PP.png";

const partners = [
  { name: "Impact Hub Dakar", image: img1 },
  { name: "KPC Consortium", image: img2 },
  { name: "MVP Lab", image: img3 },
  { name: "Volkeno", image: img4 },
  { name: "OFII", image: img5 },
  { name: "Pitch Palabre", image: img6 }
];

const PartnersSection = () => {
  // On double la liste pour un effet de boucle infinie
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#313a4b]">
          Nos <span className="text-[#f9941f]">Partenaires</span> Institutionnels
        </h2>
        <p className="text-gray-600 text-lg mb-14">
          Ils nous accompagnent dans notre mission de digitalisation du commerce
        </p>

        {/* CONTENEUR AVEC FADED EDGES (Bords flous) */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white">
          
          {/* BANDE ANIMÉE - S'arrête au survol */}
          <div className="flex w-max animate-scroll gap-12 hover:[animation-play-state:paused]">
            {scrollingPartners.map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center border border-white  min-w-[190px]"
              >
                {/* Image avec couleurs d'origine */}
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="h-20 w-30 object-contain transition-transform duration-300 hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.5rem)); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
