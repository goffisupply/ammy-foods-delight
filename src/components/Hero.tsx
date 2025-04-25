import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b10_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Delicious Food For Your <span className="text-primary">Special Moments</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Abuja's premier catering service for events, small chops, express cakes, and daily cravings.
          </p>
          <div className="space-x-4 animate-fade-in">
            <Button size="lg">
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
