import Link from "next/link";
import Image from "next/image";

export default function CompanySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="company-content">
            <h2 className="company-title text-3xl font-bold mb-6 text-gray-800">
              Notre Expertise en Sécurité
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              Notre entreprise se distingue par son professionnalisme, sa
              rapidité d'intervention et la qualité de ses équipements.
            </p>
            <p className="mb-8 text-lg text-gray-600">
              La sécurité de votre établissement est primordiale. Nos alarmes, à
              des prix compétitifs, préviennent les vols et les dégradations en
              protégeant efficacement vos employés, vos biens et votre commerce,
              tout en vous assurant une tranquillité d'esprit.
            </p>
            <Link
              href="#contact"
              className="btn btn-primary inline-block bg-dark-green text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors"
            >
              CONTACTEZ NOUS
            </Link>
          </div>
          <div className="company-image">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/imgGnb/securite.jpeg"
                alt="Sécurité professionnelle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
