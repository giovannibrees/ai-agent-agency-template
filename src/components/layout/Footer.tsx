
import { Link } from "react-router-dom";
import { useState } from "react";
import { ContactForm } from "@/components/ContactForm";

export const Footer = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  return (
    <footer className="w-full bg-black/50 backdrop-blur-sm py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60">
            © {new Date().getFullYear()} AI EMPIRE. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link>
            <a href="#" onClick={(e) => { e.preventDefault(); openContactForm(); }} className="text-white/60 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
        title="Contact Us"
      />
    </footer>
  );
};
