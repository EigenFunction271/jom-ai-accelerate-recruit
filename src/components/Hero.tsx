
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-jom-blue-50 to-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-jom-blue-800 leading-tight animate-fade-in">
              Recruitment agencies and enterprise HR teams use JOM to screen 
              <span className="text-jom-accent"> 10x more candidates</span> in half the time
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-jom-gray-600 animate-fade-in animation-delay-500">
              Join companies processing millions of CVs who've cut screening time by 70% and saved millions in operational costs
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-700">
              <Button asChild className="text-white bg-jom-blue-600 hover:bg-jom-blue-700 h-12 px-6 text-base">
                <a href="#contact" className="flex items-center">
                  Get Free CV Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 px-6 text-base">
                <a href="#demo">Watch 2-Min Demo</a>
              </Button>
            </div>

            <div className="mt-10 animate-fade-in animation-delay-1000">
              <p className="text-sm text-jom-gray-500 mb-4">TRUSTED BY EUROPE'S LARGEST JOB BOARDS</p>
              <div className="flex flex-wrap items-center gap-8">
                {/* Placeholder for client logos */}
                {['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company, index) => (
                  <div key={index} className="bg-white/80 rounded-lg px-4 py-2 shadow-sm">
                    <div className="h-6 w-24 bg-jom-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <div className="bg-white rounded-lg shadow-card p-6 md:p-8 animate-slide-in">
              <div className="aspect-video w-full bg-jom-gray-100 rounded-md mb-6 flex items-center justify-center">
                <div className="text-jom-gray-400 text-sm">CV Analysis Demo</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-jom-blue-100 flex items-center justify-center text-jom-blue-600 font-bold">1</div>
                  <p className="ml-4 text-jom-gray-700">Upload your CV or job description</p>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-jom-blue-100 flex items-center justify-center text-jom-blue-600 font-bold">2</div>
                  <p className="ml-4 text-jom-gray-700">Our AI analyzes and extracts key information</p>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-jom-blue-100 flex items-center justify-center text-jom-blue-600 font-bold">3</div>
                  <p className="ml-4 text-jom-gray-700">Get instant insights and matching scores</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-jom-gray-100">
                <div className="flex flex-wrap gap-3">
                  <div className="px-3 py-1 bg-jom-blue-50 text-jom-blue-600 text-sm rounded-full">Processing 1M+ CVs monthly</div>
                  <div className="px-3 py-1 bg-jom-blue-50 text-jom-blue-600 text-sm rounded-full">£5M+ saved in costs</div>
                  <div className="px-3 py-1 bg-jom-blue-50 text-jom-blue-600 text-sm rounded-full">70% faster screening</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
