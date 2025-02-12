import { Facebook, Instagram, Mail, Phone, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          <div className="place-items-center">
            <h3 className="text-xl font-semibold mb-4">GNB-PROTECT</h3>
            <p className="mb-4">Votre partenaire de confiance en sécurité</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-accent-yellow transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-accent-yellow transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-accent-yellow transition-colors"
              >
                <X size={24} />
              </a>
            </div>
          </div>

          <div className="place-items-center">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2 place-items-center">
              <p className="flex items-center">
                <Phone className="mr-2" size={18} />
                <a href="tel:+33123456789">01 23 45 67 89</a>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" size={18} />
                <a href="mailto:contact@gnb-protect.fr">
                  contact@gnb-protect.fr
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-rgba(255, 255, 255, 0.18) text-center">
          <p>
            &copy; {new Date().getFullYear()} GNB-PROTECT. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
