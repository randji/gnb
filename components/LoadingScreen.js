import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function LoadingScreen({ onLoadingComplete }) {
  const loadingRef = useRef(null);
  const logoRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Masquer l'écran de loading après l'animation
        gsap.to(loadingRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            onLoadingComplete();
          },
        });
      },
    });

    // Animation du logo
    tl.fromTo(
      logoRef.current,
      {
        scale: 0,
        rotation: -180,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
      }
    );

    // Animation de la barre de progression
    tl.to(
      progressRef.current,
      {
        width: "100%",
        duration: 2,
        ease: "power2.out",
      },
      "-=0.5"
    );

    // Animation de disparition
    tl.to([logoRef.current, progressRef.current], {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  }, [onLoadingComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex flex-col items-center justify-center z-50"
    >
      <div className="text-center">
        <div ref={logoRef} className="mb-8">
          <Image
            src="/imgGnb/GNB PROTECT LOGO BLANC SANS FOND.png"
            alt="GNB Protect"
            width={200}
            height={200}
            className="w-32 h-32 md:w-40 md:h-40"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          GNB PROTECT
        </h1>

        <p className="text-blue-200 mb-8 text-lg">
          Votre sécurité au quotidien
        </p>

        <div className="w-64 h-2 bg-blue-600 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-white rounded-full"
            style={{ width: "0%" }}
          />
        </div>

        <p className="text-blue-300 mt-4 text-sm">Chargement en cours...</p>
      </div>
    </div>
  );
}
