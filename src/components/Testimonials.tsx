
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Song Wei",
    role: "AI Lead",
    company: "Europe's largest job board",
    quote: "JOM AI has saved us over £5 million in operational costs by automating our data entry processes. The accuracy of their CV parsing is remarkable.",
    impact: "£5M+ cost savings",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "How Jern",
    role: "CTO",
    company: "Asia's largest job board",
    quote: "We reduced our manual processing time by 30% after integrating JOM AI into our workflow. Their candidate matching technology is unmatched in accuracy.",
    impact: "30% reduced processing time",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const stats = [
  { value: "1M+", label: "CVs processed monthly" },
  { value: "70%", label: "Reduced screening time" },
  { value: "£5M+", label: "Client cost savings" },
  { value: "99.8%", label: "Processing accuracy" }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gradient-to-b from-white to-jom-blue-50 section-padding" id="testimonials">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-jom-blue-800 mb-4">
            Trusted by leading companies worldwide
          </h2>
          <p className="text-jom-gray-600 text-lg">
            See how JOM AI is transforming recruitment operations for businesses like yours
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-testimonial p-8 transition-all duration-300 hover:shadow-lg ${
                index === activeIndex ? "ring-2 ring-jom-blue-200" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-jom-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-jom-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              <blockquote className="text-jom-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              <div className="bg-jom-blue-50 text-jom-blue-700 text-sm font-medium px-4 py-2 rounded-full inline-block">
                {testimonial.impact}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-jom-blue-800 rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10 lg:p-12">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Real results that drive business value
              </h3>
              <p className="text-jom-blue-100 mb-8">
                JOM AI delivers measurable improvements across your recruitment operations, saving time and money while improving candidate quality.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-jom-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-white text-jom-blue-800 hover:bg-jom-blue-50 transition">
                  <a href="#contact" className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="bg-jom-blue-700 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <h4 className="text-xl text-white font-bold mb-6">Before vs After JOM AI</h4>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-jom-blue-200">Before</span>
                    <span className="text-jom-blue-200">After</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-jom-blue-700 bg-jom-blue-200">
                          Processing Time
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-jom-blue-100">
                          70% Faster
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-jom-blue-200">
                      <div className="w-[30%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-jom-blue-500"></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-jom-blue-700 bg-jom-blue-200">
                          Operational Costs
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-jom-blue-100">
                          60% Reduction
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-jom-blue-200">
                      <div className="w-[40%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-jom-blue-500"></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-jom-blue-700 bg-jom-blue-200">
                          Candidate Quality
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-jom-blue-100">
                          85% Improvement
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-jom-blue-200">
                      <div className="w-[85%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-jom-blue-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
