import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhySection from "../components/WhySection";
import HowItWorks from "../components/HowItWorks";
import FeaturesSection from "../components/FeaturesSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";
import ClientShopsSection from "../components/ClientShopsSection";
import PartnersSection from "../components/PartenersSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhySection />
      <HowItWorks />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <ClientShopsSection />
      <CtaSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
