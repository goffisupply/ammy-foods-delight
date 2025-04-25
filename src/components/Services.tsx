
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Calendar, ShoppingBag, UtensilsCrossed } from "lucide-react";

const services = [
  {
    title: "Event Catering",
    description: "Full-service catering for all your special occasions",
    icon: Calendar
  },
  {
    title: "Small Chops",
    description: "Delicious bite-sized appetizers perfect for any gathering",
    icon: Utensils
  },
  {
    title: "Express Cakes",
    description: "Custom cakes made fresh for your celebrations",
    icon: ShoppingBag
  },
  {
    title: "Daily Cravings",
    description: "Satisfy your daily food desires with our delicious offerings",
    icon: UtensilsCrossed
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-orange-100/50 to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI2Y1OWUwYiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] [background-size:20px_20px]" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Our Services
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From intimate gatherings to grand celebrations, we provide exceptional food services tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
