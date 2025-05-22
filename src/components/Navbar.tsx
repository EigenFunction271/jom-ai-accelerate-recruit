
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-soft py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-jom-blue-800 font-bold text-2xl">
            JOM<span className="text-jom-accent ml-1">AI</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-jom-gray-700 hover:text-jom-blue-600 font-medium transition">
            Products
          </a>
          <a href="#how-it-works" className="text-jom-gray-700 hover:text-jom-blue-600 font-medium transition">
            How It Works
          </a>
          <a href="#testimonials" className="text-jom-gray-700 hover:text-jom-blue-600 font-medium transition">
            Results
          </a>
          <a href="#about" className="text-jom-gray-700 hover:text-jom-blue-600 font-medium transition">
            Team
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button asChild variant="outline" className="hidden md:flex">
            <a href="#contact">
              <Calendar className="mr-2 h-4 w-4" />
              Book Demo
            </a>
          </Button>
          <Button asChild className="bg-jom-blue-600 hover:bg-jom-blue-700 transition text-white">
            <a href="#contact" className="flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
