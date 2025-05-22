
const steps = [
  {
    number: "01",
    title: "Upload CVs or connect your ATS",
    description: "Easily upload bulk CVs or connect directly to your existing Applicant Tracking System to start processing candidates.",
    icon: (
      <svg className="h-8 w-8 text-jom-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
      </svg>
    )
  },
  {
    number: "02",
    title: "AI extracts and analyzes candidate data",
    description: "Our AI technology automatically extracts key information from CVs with high accuracy, including skills, experience, education, and more.",
    icon: (
      <svg className="h-8 w-8 text-jom-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
      </svg>
    )
  },
  {
    number: "03",
    title: "Get ranked shortlists with match scores",
    description: "Receive an automatically ranked shortlist of candidates with detailed match scores and insights to make better hiring decisions faster.",
    icon: (
      <svg className="h-8 w-8 text-jom-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-jom-gray-50 section-padding" id="how-it-works">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-jom-blue-800 mb-4">
            How It Works
          </h2>
          <p className="text-jom-gray-600 text-lg">
            A simple 3-step process to transform your recruitment workflow
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-[40px] lg:left-1/2 top-0 bottom-0 w-0.5 bg-jom-blue-100 hidden md:block"></div>
          
          <div className="space-y-16 lg:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-16 items-center lg:mb-24`}
              >
                <div className="lg:w-1/2 relative">
                  <div className={`
                    bg-white p-6 rounded-lg shadow-soft border border-jom-blue-100
                    ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}
                  `}>
                    <div className="flex items-center mb-4">
                      {step.icon}
                      <span className="ml-3 text-jom-blue-600 text-lg font-bold">{step.number}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-jom-gray-800 mb-3">{step.title}</h3>
                    <p className="text-jom-gray-600">{step.description}</p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute top-8 left-0 lg:left-auto lg:right-0 transform translate-x-0 lg:translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="h-5 w-5 rounded-full bg-jom-blue-600 border-4 border-white shadow-sm"></div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  {/* Empty div for layout */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 lg:mt-0 text-center">
          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-card border border-jom-blue-100">
            <h3 className="text-xl font-bold text-jom-gray-800 mb-4">
              Ready to transform your recruitment process?
            </h3>
            <p className="text-jom-gray-600 mb-6">
              Book a personalized demo to see how JOM AI can work for your specific needs
            </p>
            <div className="inline-flex bg-jom-blue-50 text-jom-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Free consultation always provided before any project
            </div>
            <div>
              <a 
                href="#contact" 
                className="inline-block bg-jom-blue-600 hover:bg-jom-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Schedule Your Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
