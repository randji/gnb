import Image from 'next/image';
import { useEffect, useRef } from 'react';

const materiels = [

  {
    id: 1,
    name: "Ajax",
    image: "/materiel/ajax-650x468.png",
  },
  {
    id: 2,
    name: "Dahua",
    image: "/materiel/Dahua-LOGO_black_with_red_D.png",
  },
  {
    id: 3,
    name: "hikvision",
    image: "/materiel/Hikvision_logo_shadow.webp",
  },
  {
    id: 4,
    name: "Risco",
    image: "/materiel/166.png"
  }
];

export default function MaterielSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.materiel-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Nos Partenaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {materiels.map((materiel) => (
            <div
              key={materiel.id}
              className="materiel-item opacity-0 translate-y-4 transition-all duration-300 ease-out"
            >
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src={materiel.image}
                  alt={materiel.name}
                  width={200}
                  height={200}
                  className="object-contain w-full h-10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 