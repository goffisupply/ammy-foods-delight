
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/5c7895b3-5f45-44fd-a51b-1d0e73c60474.png" alt="Ammy Foods" className="h-12" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a key={item.href} href={item.href} className="text-gray-700 hover:text-primary transition-colors">
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} to={item.href} className="text-gray-700 hover:text-primary transition-colors">
                  {item.label}
                </Link>
              )
            ))}
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
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
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
