
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
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we provide exceptional food services tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-playfair">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
