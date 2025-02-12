import Image from "next/image";

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
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4 h-48 relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  // fill
                  width={400}
                  height={100}
                  className=" h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
