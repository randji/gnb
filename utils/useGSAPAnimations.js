import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  scaleIn,
  rotateIn,
  staggerCards,
  parallaxEffect,
  textReveal,
  progressiveLoad,
  cleanupAnimations,
} from "./animations";

// Enregistrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAPAnimations = () => {
  const animationsRef = useRef([]);

  // Fonction pour ajouter une animation à la liste
  const addAnimation = (animation) => {
    if (animation) {
      animationsRef.current.push(animation);
    }
  };

  // Fonction pour animer un élément avec fadeInUp
  const animateFadeInUp = (element, delay = 0) => {
    if (element) {
      const animation = fadeInUp(element, delay);
      addAnimation(animation);
      return animation;
    }
  };

  // Fonction pour animer un élément avec slideInLeft
  const animateSlideInLeft = (element, delay = 0) => {
    if (element) {
      const animation = slideInLeft(element, delay);
      addAnimation(animation);
      return animation;
    }
  };

  // Fonction pour animer un élément avec slideInRight
  const animateSlideInRight = (element, delay = 0) => {
    if (element) {
      const animation = slideInRight(element, delay);
      addAnimation(animation);
      return animation;
    }
  };

  // Fonction pour animer un élément avec scaleIn
  const animateScaleIn = (element, delay = 0) => {
    if (element) {
      const animation = scaleIn(element, delay);
      addAnimation(animation);
      return animation;
    }
  };

  // Fonction pour animer un élément avec rotateIn
  const animateRotateIn = (element, delay = 0) => {
    if (element) {
      const animation = rotateIn(element, delay);
      addAnimation(animation);
      return animation;
    }
  };

  // Fonction pour animer des cartes avec stagger
  const animateStaggerCards = (elements, stagger = 0.2) => {
    if (elements && elements.length > 0) {
      const animation = staggerCards(elements, stagger);
      addAnimation(animation);
      return animation;
    }
  };

  // Fonction pour effet parallaxe
  const animateParallax = (element, speed = 0.5) => {
    if (element) {
      const animation = parallaxEffect(element, speed);
      addAnimation(animation);
      return animation;
    }
  };

  // Fonction pour révélation de texte
  const animateTextReveal = (element, delay = 0) => {
    if (element) {
      const animation = textReveal(element, delay);
      addAnimation(animation);
      return animation;
    }
  };

  // Fonction pour chargement progressif
  const animateProgressiveLoad = (elements, stagger = 0.1) => {
    if (elements && elements.length > 0) {
      const animation = progressiveLoad(elements, stagger);
      addAnimation(animation);
      return animation;
    }
  };

  // Nettoyer toutes les animations
  const cleanup = () => {
    animationsRef.current.forEach((animation) => {
      if (animation && animation.kill) {
        animation.kill();
      }
    });
    animationsRef.current = [];
    cleanupAnimations();
  };

  // Nettoyer les animations au démontage du composant
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, []);

  return {
    animateFadeInUp,
    animateSlideInLeft,
    animateSlideInRight,
    animateScaleIn,
    animateRotateIn,
    animateStaggerCards,
    animateParallax,
    animateTextReveal,
    animateProgressiveLoad,
    cleanup,
  };
};
