import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    phone: "",
    formule: "",
    source: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Contactez-nous
        </h2>
        <p className="text-muted-foreground text-lg mb-14">
          Notre équipe est là pour vous aider
        </p>

        <div className="max-w-3xl mx-auto bg-[#f9941f] from-primary to-accent rounded-3xl p-8 md:p-12 shadow-xl">
          <form className="space-y-6 text-left">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="nom"
                value={form.nom}
                onChange={handleChange}
                placeholder="Nom"
                className="w-full rounded-full bg-white px-5 py-3 text-sm"
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full rounded-full bg-white px-5 py-3 text-sm"
              />
            </div>

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Téléphone"
              className="w-full rounded-full bg-white px-5 py-3 text-sm"
            />

            <select
              name="formule"
              value={form.formule}
              onChange={handleChange}
              className="w-full rounded-full bg-white px-5 py-3 text-sm"
            >
              <option value="">Formule</option>
              <option value="solo">Solo</option>
              <option value="team">Team</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full rounded-xl bg-white px-5 py-3 text-sm"
            />

            <button className="w-full bg-[#1d3f72] text-white py-3 rounded-full">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;