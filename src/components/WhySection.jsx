import phoneMockup from "../assets/phoneobli.png";
import { DollarSign } from "lucide-react";

const features = [
  "Suivez vos ventes en temps réel",
  "Sachez exactement ce qu'il vous reste en stock",
  "Identifiez vos produits les plus rentables",
  "Contrôlez votre activité même à distance",
  "Gardez un œil sur vos dépenses",
  "Décidez plus vite grâce à des chiffres clairs",
];

const WhySection = () => {
  return (
    <section id="a-propos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        {/* Phone on left */}
        <div className="flex-1 flex justify-center">
         <img
  src={phoneMockup}
  alt="EasyMarket Dashboard"
  loading="lazy"
  width={380}
  height={760}
  className="max-w-[300px] lg:max-w-[380px] drop-shadow-xl animate-float-gentle"
/>
        </div>

        {/* Content on right */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold  text-[#313a4b] mb-2">
            Pourquoi <span className="text-[#f9941f]">EasyMarket</span> ?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Prenez de meilleures décisions pour
            <br />
            votre boutique
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl  p-4 shadow-sm"
              >
                <span className="flex-shrink-0 w-2 h-8 rounded-full bg-[#f9941f] mt-0.5" />
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#f9941f] flex-shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{feature}</span>
                </div>
              </div>
            ))}
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

export default WhySection;
