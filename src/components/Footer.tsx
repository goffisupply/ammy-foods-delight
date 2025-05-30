
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img src="/lovable-uploads/5c7895b3-5f45-44fd-a51b-1d0e73c60474.png" alt="Ammy Foods" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-gray-400 max-w-sm">
              Abuja-based food and catering service specializing in event catering, small chops, express cakes, and daily cravings.
            </p>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/ammy_smallchops" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <Instagram />
              </a>
              <a href="https://facebook.com/NanahuwaIshaq" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ammy Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
