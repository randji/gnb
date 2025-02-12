import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { id: 1, src: '/gallery/IMG-20240605-WA0008.jpg' },
  { id: 2, src: '/gallery/IMG-20240605-WA0010.png' },
  { id: 3, src: '/gallery/IMG-20240605-WA0021.jpg' },
  { id: 4, src: '/gallery/IMG-20240605-WA0023.png' },
  { id: 5, src: '/gallery/IMG-20240605-WA0032.jpg' }
];

export default function GallerySection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Nos Réalisations</h2>
        <div className="relative h-[500px] overflow-hidden rounded-lg shadow-lg">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                alt={`Réalisation ${image.id}`}
                fill
                className="object-contain rounded-2xl shadow-lg"
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 