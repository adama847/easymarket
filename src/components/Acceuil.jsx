import React, { useState } from "react";
import { Check, ArrowLeft, ArrowRight, DollarSign } from "lucide-react";

const Acceuil = () => {

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    phone: "",
    formule: "",
    source: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
  };

  const features = [
    "Suivez vos ventes en temps réel",
    "Sachez exactement ce qu'il vous reste en stock",
    "Identifiez vos produits les plus rentables",
    "Contrôlez votre activité même à distance",
    "Gardez un œil sur vos dépenses",
    "Décidez plus vite grâce à des chiffres clairs",
  ];

  const steps = [
    "Ajoutez vos produits et organisez votre catalogue",
    "Enregistrez ventes, dépenses et mouvements de stock",
    "Suivez vos chiffres en temps réel",
    "Analysez vos performances et prenez de meilleures décisions",
  ];

  const plans = [
    {
      title: "Formule Solo",
      description: "Pour les commerçants qui veulent démarrer simplement.",
      price: "5 900",
      features: ["Un utilisateur", "Gestion des ventes", "Stock simplifié"],
    },
    {
      title: "Formule Team",
      description: "Pour les équipes.",
      price: "15 000",
      highlight: true,
      features: ["Multi utilisateurs", "Rôles", "Dashboard partagé"],
    },
    {
      title: "Formule Pro",
      description: "Pour aller plus loin.",
      price: "25 000",
      features: ["Stats avancées", "Multi boutique", "Support"],
    },
  ];

  const partners = [
    "OFII",
    "Volkeno",
    "MVP Lab",
    "KPC Consortium",
    "Impact Hub Dakar",
    "Pitch Palabre",
  ];

  const PricingCard = ({ title, description, price, features }) => (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      <p className="text-2xl font-bold mb-4">{price} FCFA</p>

      <ul className="space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2 items-center">
            <Check className="w-4 h-4 text-green-500" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {/* FEATURES */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6">Pourquoi EasyMarket ?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div key={i} className="flex gap-3 items-center">
              <DollarSign className="w-5 h-5 text-blue-500" />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STEPS */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Comment ça marche</h2>

        {steps.map((s, i) => (
          <p key={i}>👉 {s}</p>
        ))}
      </section>

      {/* PRICING */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6">Tarifs</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <PricingCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Partenaires</h2>

        <div className="flex flex-wrap gap-4">
          {partners.map((p, i) => (
            <span key={i} className="border px-4 py-2 rounded">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input name="nom" onChange={handleChange} placeholder="Nom" className="border p-2 w-full" />
          <input name="email" onChange={handleChange} placeholder="Email" className="border p-2 w-full" />
          <input name="phone" onChange={handleChange} placeholder="Téléphone" className="border p-2 w-full" />

          <textarea
            name="message"
            onChange={handleChange}
            placeholder="Message"
            className="border p-2 w-full"
          />

          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Envoyer
          </button>
        </form>
      </section>
    </>
  );
};

export default Acceuil;