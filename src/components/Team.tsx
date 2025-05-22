
const teamMembers = [
  {
    name: "Song Wei",
    role: "Co-Founder & AI Lead",
    bio: "Previously led AI development at Europe's largest job board, with expertise in machine learning and NLP. Specialized in CV processing algorithms.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "How Jern",
    role: "Co-Founder & CTO",
    bio: "Former tech lead at Asia's leading recruitment platform. Expert in building scalable AI systems and automation solutions for HR tech.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Team = () => {
  return (
    <section className="bg-white section-padding" id="about">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-jom-blue-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-jom-gray-600 text-lg">
            Experienced team from leading AI companies globally
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-soft border border-jom-gray-100">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-jom-blue-800 mb-2">{member.name}</h3>
                  <p className="text-jom-accent font-medium mb-4">{member.role}</p>
                  <p className="text-jom-gray-600">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-jom-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-jom-blue-800 mb-3">Join the JOM AI Team</h3>
          <p className="text-jom-gray-600 max-w-2xl mx-auto">
            We're a team of AI specialists, engineers, and recruitment experts on a mission to transform how organizations find and hire talent. 
          </p>
          <div className="mt-6">
            <a 
              href="#contact" 
              className="inline-block border border-jom-blue-600 text-jom-blue-600 hover:bg-jom-blue-600 hover:text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
