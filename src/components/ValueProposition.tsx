
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ValueProposition = () => {
  return (
    <section className="bg-white section-padding" id="value-proposition">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Agency Value Proposition */}
          <div className="bg-gradient-to-br from-jom-blue-50 to-white p-8 rounded-xl shadow-soft">
            <div className="mb-6 flex items-center">
              <div className="bg-jom-blue-600 rounded-full p-3">
                <svg 
                  className="h-6 w-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-bold text-jom-gray-800">For Recruitment Agencies</h3>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-jom-blue-800 mb-4">
              Win more clients by delivering shortlists 3x faster than competitors
            </h2>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-jom-blue-100 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-jom-blue-600"></div>
                </div>
                <span className="ml-3 text-jom-gray-600">Process hundreds of applications in minutes</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-jom-blue-100 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-jom-blue-600"></div>
                </div>
                <span className="ml-3 text-jom-gray-600">Scale your team without adding headcount</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-jom-blue-100 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-jom-blue-600"></div>
                </div>
                <span className="ml-3 text-jom-gray-600">Deliver higher quality candidates consistently</span>
              </li>
            </ul>
            
            <Button asChild variant="outline" className="mt-2">
              <a href="#contact" className="flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          {/* Enterprise Value Proposition */}
          <div className="bg-gradient-to-br from-jom-blue-50 to-white p-8 rounded-xl shadow-soft">
            <div className="mb-6 flex items-center">
              <div className="bg-jom-blue-600 rounded-full p-3">
                <svg 
                  className="h-6 w-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-bold text-jom-gray-800">For Enterprise HR Teams</h3>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-jom-blue-800 mb-4">
              Fill critical roles faster while reducing per-hire recruiting costs by 60%
            </h2>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-jom-blue-100 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-jom-blue-600"></div>
                </div>
                <span className="ml-3 text-jom-gray-600">Reduce time-to-hire for critical positions</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-jom-blue-100 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-jom-blue-600"></div>
                </div>
                <span className="ml-3 text-jom-gray-600">Streamline recruitment workflow and reduce manual tasks</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-jom-blue-100 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-jom-blue-600"></div>
                </div>
                <span className="ml-3 text-jom-gray-600">Ensure compliance and eliminate bias in screening</span>
              </li>
            </ul>
            
            <Button asChild variant="outline" className="mt-2">
              <a href="#contact" className="flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
