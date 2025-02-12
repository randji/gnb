import Link from 'next/link';

export default function CompanySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-6 text-lg">
            Notre entreprise se distingue par son professionnalisme, sa rapidité d'intervention et la qualité de ses équipements.
          </p>
          <p className="mb-8 text-lg">
            La sécurité de votre établissement est primordiale. Nos alarmes, à des prix compétitifs, préviennent les vols et les dégradations en protégeant efficacement vos employés, vos biens et votre commerce, tout en vous assurant une tranquillité d'esprit.
          </p>
          <Link 
            href="#contact"
            className="btn btn-primary inline-block"
          >
            CONTACTEZ NOUS
          </Link>
        </div>
      </div>
    </section>
  );
} 