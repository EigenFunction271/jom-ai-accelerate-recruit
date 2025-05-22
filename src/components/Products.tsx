
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "cv-extraction",
    title: "AI CV Extraction",
    description: "Extract detailed candidate information automatically and accurately from any CV format.",
    benefits: [
      "Process 1,000+ CVs in minutes",
      "Extract 50+ data points with 99.8% accuracy",
      "Support for multiple languages and formats",
      "Direct integration with your ATS"
    ],
    cta: "See CV Extraction Demo",
    image: "https://images.unsplash.com/photo-1517777872612-9113f7cb865c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "candidate-matching",
    title: "AI Candidate Matching",
    description: "Match the best candidates to the best jobs automatically using advanced AI algorithms.",
    benefits: [
      "Instantly rank candidates by job fit",
      "Identify hidden talent in your database",
      "Reduce bias in candidate selection",
      "Detailed match scoring and insights"
    ],
    cta: "See Matching Demo",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];

const Products = () => {
  return (
    <section className="bg-white section-padding" id="products">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-jom-blue-800 mb-4">
            Core Products
          </h2>
          <p className="text-jom-gray-600 text-lg">
            Powerful AI solutions designed specifically for recruitment professionals
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
            >
              <div className="flex-1">
                <div className="rounded-xl overflow-hidden shadow-card">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full object-cover aspect-video"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-jom-blue-800 mb-4">
                  {product.title}
                </h3>
                
                <p className="text-jom-gray-600 text-lg mb-6">
                  {product.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-jom-blue-100 flex items-center justify-center mt-1">
                        <svg className="h-3 w-3 text-jom-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-jom-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-jom-blue-600 hover:bg-jom-blue-700">
                    <a href="#contact" className="flex items-center">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="#demo">
                      {product.cta}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
