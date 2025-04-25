
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            <img src="/lovable-uploads/5c7895b3-5f45-44fd-a51b-1d0e73c60474.png" alt="Ammy Foods" className="h-12" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            <Button>
              <a href="https://wa.me/09127882483" target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Contact</a>
              <Button className="w-full mt-4">
                <a href="https://wa.me/09127882483" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
