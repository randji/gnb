import { useEffect, useRef } from "react";
import HeroSlider from "../components/HeroSlider";
import ServiceSection from "../components/ServiceSection";
import MaterielSection from "../components/MaterielSection";
import CompanySection from "../components/CompanySection";
import CustomerSection from "../components/CustomerSection";
import GallerySection from "../components/GallerySection";
import FormSection from "../components/FormSection";
import Footer from "../components/Footer";
import { useGSAPAnimations } from "../utils/useGSAPAnimations";

export default function Home() {
  const {
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
  } = useGSAPAnimations();

  // Références pour les éléments à animer
  const serviceSectionRef = useRef(null);
  const materielSectionRef = useRef(null);
  const companySectionRef = useRef(null);
  const customerSectionRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const formSectionRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Animation du HeroSlider (déjà animé dans le composant)

    // Animation de la section Services
    if (serviceSectionRef.current) {
      const serviceElements = serviceSectionRef.current.querySelectorAll(
        ".service-card, .service-title, .service-description"
      );
      animateProgressiveLoad(serviceElements, 0.15);
    }

    // Animation de la section Matériel
    if (materielSectionRef.current) {
      const title = materielSectionRef.current.querySelector(".materiel-title");
      const description = materielSectionRef.current.querySelector(
        ".materiel-description"
      );
      const cards =
        materielSectionRef.current.querySelectorAll(".materiel-card");

      if (title) animateSlideInLeft(title, 0.2);
      if (description) animateSlideInRight(description, 0.4);
      if (cards.length > 0) animateStaggerCards(cards, 0.2);
    }

    // Animation de la section Company
    if (companySectionRef.current) {
      const title = companySectionRef.current.querySelector(".company-title");
      const content =
        companySectionRef.current.querySelector(".company-content");
      const image = companySectionRef.current.querySelector(".company-image");

      if (title) animateFadeInUp(title, 0.2);
      if (content) animateSlideInLeft(content, 0.4);
      if (image) animateSlideInRight(image, 0.6);
    }

    // Animation de la section Customer
    if (customerSectionRef.current) {
      const title = customerSectionRef.current.querySelector(".customer-title");
      const testimonials =
        customerSectionRef.current.querySelectorAll(".testimonial");

      if (title) animateScaleIn(title, 0.2);
      if (testimonials.length > 0) animateStaggerCards(testimonials, 0.3);
    }

    // Animation de la section Gallery
    if (gallerySectionRef.current) {
      const title = gallerySectionRef.current.querySelector(".gallery-title");
      const images =
        gallerySectionRef.current.querySelectorAll(".gallery-image");

      if (title) animateFadeInUp(title, 0.2);
      if (images.length > 0) {
        images.forEach((image, index) => {
          animateScaleIn(image, 0.3 + index * 0.1);
        });
      }
    }

    // Animation de la section Form
    if (formSectionRef.current) {
      const title = formSectionRef.current.querySelector(".form-title");
      const form = formSectionRef.current.querySelector(".contact-form");
      const info = formSectionRef.current.querySelector(".contact-info");

      if (title) animateFadeInUp(title, 0.2);
      if (form) animateSlideInLeft(form, 0.4);
      if (info) animateSlideInRight(info, 0.6);
    }

    // Animation du Footer
    if (footerRef.current) {
      const footerContent = footerRef.current.querySelectorAll(
        ".footer-content > *"
      );
      animateProgressiveLoad(footerContent, 0.1);
    }

    // Nettoyer les animations au démontage
    return () => {
      cleanup();
    };
  }, [cleanup]);

  return (
    <main className="overflow-hidden">
      <HeroSlider />

      <div ref={serviceSectionRef}>
        <ServiceSection />
      </div>

      <div ref={materielSectionRef}>
        <MaterielSection />
      </div>

      <div ref={companySectionRef}>
        <CompanySection />
      </div>

      <div ref={customerSectionRef}>
        <CustomerSection />
      </div>

      <div ref={gallerySectionRef}>
        <GallerySection />
      </div>

      <div ref={formSectionRef}>
        <FormSection />
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </main>
  );
}
