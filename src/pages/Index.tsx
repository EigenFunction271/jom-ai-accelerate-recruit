
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Testimonials from "@/components/Testimonials";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ValueProposition />
      <Testimonials />
      <Products />
      <HowItWorks />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
