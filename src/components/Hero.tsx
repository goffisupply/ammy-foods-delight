
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b10_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-20 -left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-20 -right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl opacity-10 font-bold text-orange-500 rotate-12">
              DELICIOUS
            </span>
            <h1 className="font-playfair text-4xl md:text-7xl font-bold mb-6 animate-fade-in relative z-10">
              Delicious Food For Your{" "}
              <span className="text-primary relative">
                Special Moments
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 40" fill="none">
                  <path d="M3 37C151.5 37 280.5 37 355 37" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Abuja's premier catering service for events, small chops, express cakes, and daily cravings.
          </p>
          <div className="space-x-4 animate-fade-in">
            <Button size="lg" className="bg-black text-white hover:bg-black/90">
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
