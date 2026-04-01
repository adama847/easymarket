import { ExternalLink } from "lucide-react";

const shops = [
  {
    name: "Grandkabir",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop",
    description: "Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnus pour nos services informatiques.",
    link: "#",
  },
  {
    name: "Yeksina Home",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    description: "Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnus pour nos services informatiques.",
    link: "#",
  },
  {
    name: "Kazamansa",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
    description: "Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnus pour nos services informatiques.",
    link: "#",
  },
];

const ClientShopsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#313a4b] mb-3 animate-fade-in">
          Visitez les <span className="text-[#f9941f]">boutiques</span> de nos clients
        </h2>
        <p className="text-gray-600 text-lg mb-14 max-w-2xl mx-auto">
          Découvrez les boutiques de nos clients
          <br />
          Des commerçants qui utilisent EasyMarket au quotidien
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {shops.map((shop, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl shadow-md overflow-hidden text-left flex flex-col"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3">{shop.name}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">{shop.description}</p>
                <a
                  href={shop.link}
                  className="text-[#f9941f] font-semibold text-sm inline-flex items-center gap-1 hover:underline"
                >
                  Visiter la boutique <ExternalLink className="w-4 h-4 text-[#f9941f]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientShopsSection;
