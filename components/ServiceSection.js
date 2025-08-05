import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Enregistrement du plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "VIDEOSURVEILLANCE",
    description: "Solutions de surveillance vidéo professionnelles",
    image: "/imgGnb/videosurveillance.jpeg",
    icon: "/icon/icon1.png",
  },
  {
    title: "SECURITE",
    description: "Systèmes de sécurité avancés",
    image: "/imgGnb/securite1.jpeg",
    icon: "/icon/icon2.png",
  },
  {
    title: "INSTALLATION",
    description: "Installation et maintenance professionnelle",
    image: "/imgGnb/hero3.jpeg",
    icon: "/icon/icon3.png",
  },
];

export default function ServiceSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // Réinitialiser les références lors du rendu
  cardsRef.current = [];

  // Ajouter les éléments à la liste des refs
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      cardsRef.current.forEach((card, index) => {
        // Configuration initiale des cartes
        gsap.set(card, {
          opacity: 0,
          y: 100,
        });

        // Animation au scroll
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "linear",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none none",
            markers: false,
          },
        });
      });
    },
    { scope: sectionRef }
  ); // scope permet de limiter les animations à cette section

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="service-card group p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 relative w-20 h-20">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={100}
                  height={100}
                  className="object-contain w-20 h-20"
                />
              </div>
              <h3 className="service-title text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="service-description text-gray-600">
                {service.description}
              </p>
              <div className="mt-4 h-48 relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
