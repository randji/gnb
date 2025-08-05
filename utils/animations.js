import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation d'apparition par le bas avec fade
export const fadeInUp = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Animation d'apparition par la gauche
export const slideInLeft = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      x: -100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Animation d'apparition par la droite
export const slideInRight = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Animation de scale avec fade
export const scaleIn = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Animation de rotation avec fade
export const rotateIn = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      rotation: -15,
      opacity: 0,
    },
    {
      rotation: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Animation pour les cartes avec stagger
export const staggerCards = (elements, stagger = 0.2) => {
  return gsap.fromTo(
    elements,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: elements[0],
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Animation de parallaxe
export const parallaxEffect = (element, speed = 0.5) => {
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

// Animation de texte lettre par lettre
export const textReveal = (element, delay = 0) => {
  const text = element.textContent;
  element.textContent = "";

  const chars = text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.opacity = "0";
    span.style.display = "inline-block";
    element.appendChild(span);
    return span;
  });

  return gsap.to(chars, {
    opacity: 1,
    duration: 0.05,
    stagger: 0.02,
    delay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play none none reverse",
    },
  });
};

// Animation de loading progressif
export const progressiveLoad = (elements, stagger = 0.1) => {
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elements[0],
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Nettoyer les animations ScrollTrigger
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
