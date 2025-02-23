import { Facebook, Instagram, Mail, Phone, X } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-dark-green text-white py-12 mt-[100px] xl:mt-[200px]">
      <div className="absolute inset-0 flex flex-col justify-center -top-[420px] md:-top-[300px]">
        <div className="bg-white w-fit mx-auto p-1 rounded-full">
        <div className="bg-black w-fit mx-auto rounded-full">
          <Image
            src="/imgGnb/GNB PROTECT LOGO BLANC SANS FOND.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-[120px] md:w-[150px] xl:w-[250px]"
          />
        </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          <div className="place-items-center">
            
            <p className="mb-4 xl:text-xl">Votre sécurité au quotidien</p>
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
                <a href="tel:+33628716282">06 28 71 62 82</a>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" size={18} />
                <a href="mailto:gnb.protect@gmail.com">
                  gnb.protect@gmail.com
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
