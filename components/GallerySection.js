import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  { id: 1, src: "/gallery/IMG-20240605-WA0008.jpg" },
  { id: 2, src: "/gallery/IMG-20240605-WA0010.png" },
  { id: 3, src: "/gallery/IMG-20240605-WA0021.jpg" },
  { id: 4, src: "/gallery/IMG-20240605-WA0023.png" },
  { id: 5, src: "/gallery/IMG-20240605-WA0032.jpg" },
];

export default function GallerySection() {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef(null);

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="gallery-title text-center mb-12 text-3xl font-bold text-gray-800">
          Nos Réalisations
        </h2>

        <div className="relative overflow-hidden rounded-lg shadow-lg group max-w-4xl mx-auto">
          {/* Images */}
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-image transition-opacity duration-700 ease-in-out ${
                index === currentImage
                  ? "opacity-100"
                  : "opacity-0 absolute inset-0"
              }`}
            >
              <Image
                src={image.src}
                alt={`Réalisation ${image.id}`}
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl shadow-lg"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Contrôles de navigation */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Image précédente"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Image suivante"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicateurs de position */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? "bg-white scale-125"
                    : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
