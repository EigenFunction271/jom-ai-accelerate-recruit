
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, useCase: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your inquiry and will contact you shortly.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        useCase: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section className="bg-jom-gray-50 section-padding" id="contact">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-jom-blue-800 mb-4">
                Ready to transform your recruitment workflow?
              </h2>
              
              <p className="text-jom-gray-600 text-lg mb-8">
                Book a personalized demo or consultation to see how JOM AI can work for your specific needs.
              </p>

              <div className="bg-white rounded-lg shadow-soft p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-jom-blue-600 mr-3" />
                  <h3 className="font-semibold text-jom-gray-800">Book a Demo</h3>
                </div>
                <p className="text-jom-gray-600 mb-4">
                  Schedule a 30-minute personalized demo with one of our product specialists.
                </p>
                <Button asChild className="w-full bg-jom-blue-600 hover:bg-jom-blue-700">
                  <a href="#calendar" className="flex items-center justify-center">
                    Book Calendar Slot
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-soft p-6">
                <h3 className="font-semibold text-jom-gray-800 mb-4">Other Ways to Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-jom-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-5 w-5 text-jom-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-jom-gray-500">Email us at</p>
                      <a href="mailto:info@jomai.com" className="text-jom-blue-600 hover:underline">info@jomai.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-jom-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-5 w-5 text-jom-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"></path>
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54.999c-.565.273-1.045.742-1.574 1.115a.5.5 0 00-.163.679c1.452 2.902 3.317 5.42 5.647 7.687 2.329 2.268 4.849 4.134 7.75 5.587a.5.5 0 00.68-.164c.373-.529.842-1.008 1.115-1.573a1 1 0 01.999-.54l4.435.74a1 1 0 01.836.986V22a1 1 0 01-1 1h-1C12.179 23 2 12.821 2 3z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-jom-gray-500">Call us at</p>
                      <a href="tel:+441234567890" className="text-jom-blue-600 hover:underline">+44 123 456 7890</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-jom-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-5 w-5 text-jom-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.416 1.416 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 00-.403.004z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-jom-gray-500">WhatsApp</p>
                      <a href="https://wa.me/441234567890" className="text-jom-blue-600 hover:underline">Contact via WhatsApp</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-card rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold text-jom-blue-800 mb-6">Get in Touch</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-jom-gray-700 mb-1">Your Name*</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-jom-gray-700 mb-1">Email Address*</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-jom-gray-700 mb-1">Company Name*</label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="useCase" className="block text-jom-gray-700 mb-1">Use Case*</label>
                    <Select value={formData.useCase} onValueChange={handleSelectChange} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your use case" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recruitment-agency">Recruitment Agency</SelectItem>
                        <SelectItem value="enterprise-hr">Enterprise HR</SelectItem>
                        <SelectItem value="integration">ATS Integration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-jom-gray-700 mb-1">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-jom-blue-600 hover:bg-jom-blue-700 h-12"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-jom-gray-500 text-sm">
                  Free consultation always provided before any project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
