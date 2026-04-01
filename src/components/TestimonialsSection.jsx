import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "All-In-Tech",
    text: "Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnus pour nos services informatiques",
  },
  {
    name: "Grandkabir",
    text: "Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnus pour nos services informatiques",
  },
  {
    name: "Yeksina Home",
    text: "Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnus pour nos services informatiques",
  },
  {
    name: "Kazamansa",
    text: "Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnus pour nos services informatiques",
  },
];

const TestimonialsSection = () => {
  const [start, setStart] = useState(0);
  const visible = 3;
  const canPrev = start > 0;
  const canNext = start + visible < testimonials.length;

  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#313a4b]">
            Ils utilisent <span className="text-primary text-[#f9941f]">EasyMarket</span>
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Des commerçants qui utilisent EasyMarket au quotidien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.slice(start, start + visible).map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 shadow-md flex flex-col justify-between min-h-[260px] ${
                i === 0
                  ? "bg-[#f9941f] from-primary to-accent text-white"
                  : "bg-background  text-foreground"
              }`}
            >
              <div>
                <h3 className="text-xl font-extrabold text- mb-1">{t.name}</h3>
                <div className={`w-16 h-0.5 mb-4 ${i === 0 ? "bg-primary-foreground/50" : "bg-primary"}`} />
                <p className={`text-sm leading-relaxed ${i === 0 ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                  {t.text}
                </p>
              </div>
              <a
                href="#"
                className={`text-sm font-semibold mt-4 ${i === 0 ? "text-white" : "text-[#f9941f]"}`}
              >
                Visiter le site
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-8 max-w-5xl mx-auto">
          <button
            onClick={() => setStart((s) => Math.max(0, s - 1))}
            disabled={!canPrev}
            className="p-2 border rounded-lg text-foreground disabled:opacity-30 hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setStart((s) => Math.min(testimonials.length - visible, s + 1))}
            disabled={!canNext}
            className="p-2 bg-primary text-primary-foreground rounded-lg disabled:opacity-30 hover:opacity-90 transition-opacity"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
