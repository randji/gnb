import { useState } from "react";
import Image from "next/image";

export default function FormSection() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message envoyé avec succès !");
        setFormData({
          nom: "",
          prenom: "",
          telephone: "",
          email: "",
          message: "",
        });
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 relative mb-6 p-6">
      <div className="absolute inset-0 h-full mx-[5%] ">
        <Image
          src="/imgGnb/Fichier2.png"
          alt="Background"
          fill
          className="object-cover rounded-2xl"
          quality={100}
        />
        <div className="absolute inset-0" />
      </div>
      <div className="container mx-auto px-4 relative text-white">
        <h2 className="text-center mb-12">Contactez-nous</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Nom</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent-yellow"
              />
            </div>
            <div>
              <label className="block mb-2">Prénom</label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent-yellow"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Téléphone</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent-yellow"
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent-yellow"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent-yellow"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
