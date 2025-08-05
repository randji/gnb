import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function HeroSlider() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const logoRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation du background
    tl.fromTo(
      backgroundRef.current,
      {
        scale: 1.2,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      }
    );

    // Animation du titre
    tl.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=1"
    );

    // Animation du sous-titre
    tl.fromTo(
      subtitleRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );

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
        duration: 1.5,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );

    // Animation continue du logo
    gsap.to(logoRef.current, {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-[450px] sm:h-[650px] lg:h-[700px] xl:h-[1200px] w-full overflow-hidden"
    >
      <div ref={backgroundRef} className="absolute inset-0 w-full">
        <Image
          src="/imgGnb/camHero.jpeg"
          alt="Hero"
          priority
          width={1000}
          height={1000}
          className="object-center h-[300px] sm:h-[450px] lg:h-[600px] xl:h-[800px] w-full"
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col text-white pl-2 sm:pl-8 top-[25%] sm:top-[25%]">
        <h1
          ref={titleRef}
          className="mb-2 text-3xl sm:text-5xl lg:text-[85px] font-bold drop-shadow-lg"
        >
          GNB-PROTECT
        </h1>
        <h2
          ref={subtitleRef}
          className="text-base sm:text-2xl lg:text-4xl drop-shadow-lg"
        >
          Votre sécurité au quotidien
        </h2>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center top-60 sm:top-[250px] lg:top-[550px] xl:top-[550px]">
        <div
          ref={logoRef}
          className="bg-white w-fit mx-auto p-2 rounded-full shadow-2xl"
        >
          <div className="bg-black w-fit mx-auto rounded-full">
            <Image
              src="/imgGnb/GNB PROTECT LOGO BLANC SANS FOND.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-[170px] sm:w-[190px] md:w-[190px] lg:w-[300px] xl:w-[350px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
