import HeroSlider from "../components/HeroSlider";
import ServiceSection from "../components/ServiceSection";
import MaterielSection from "../components/MaterielSection";
import CompanySection from "../components/CompanySection";
import CustomerSection from "../components/CustomerSection";
import GallerySection from "../components/GallerySection";
import FormSection from "../components/FormSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ServiceSection />
      <MaterielSection />
      <CompanySection />
      <CustomerSection />
      <GallerySection />
      <FormSection />
      <Footer />
    </main>
  );
}
