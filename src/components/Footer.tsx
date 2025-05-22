
const Footer = () => {
  return (
    <footer className="bg-jom-blue-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="#" className="text-white font-bold text-2xl">
              JOM<span className="text-jom-accent ml-1">AI</span>
            </a>
            <p className="mt-4 text-jom-blue-100 text-sm">
              AI-powered CV screening and candidate matching solutions for medium-sized 
              enterprises and recruitment agencies.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Products</h5>
            <ul className="space-y-2">
              <li><a href="#products" className="text-jom-blue-200 hover:text-white transition text-sm">AI CV Extraction</a></li>
              <li><a href="#products" className="text-jom-blue-200 hover:text-white transition text-sm">AI Candidate Matching</a></li>
              <li><a href="#how-it-works" className="text-jom-blue-200 hover:text-white transition text-sm">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li><a href="#about" className="text-jom-blue-200 hover:text-white transition text-sm">About Us</a></li>
              <li><a href="#testimonials" className="text-jom-blue-200 hover:text-white transition text-sm">Testimonials</a></li>
              <li><a href="#contact" className="text-jom-blue-200 hover:text-white transition text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li className="text-jom-blue-200">
                <a href="mailto:info@jomai.com" className="hover:text-white transition">info@jomai.com</a>
              </li>
              <li className="text-jom-blue-200">
                <a href="tel:+441234567890" className="hover:text-white transition">+44 123 456 7890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-jom-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-jom-blue-200 text-sm">
            &copy; {new Date().getFullYear()} JOM AI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-jom-blue-200 hover:text-white transition text-sm">Privacy Policy</a>
            <a href="#" className="text-jom-blue-200 hover:text-white transition text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
