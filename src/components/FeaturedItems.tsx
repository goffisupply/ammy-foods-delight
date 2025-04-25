
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featuredItems = [
  {
    name: "Party Small Chops Pack",
    description: "A delightful mix of samosas, spring rolls, and puff puff",
    price: "₦15,000",
    serves: "Serves 15-20"
  },
  {
    name: "Express Celebration Cake",
    description: "Custom-designed cake ready in 24 hours",
    price: "₦25,000",
    serves: "Serves 20-25"
  },
  {
    name: "Premium Event Package",
    description: "Complete catering solution for your special occasion",
    price: "From ₦150,000",
    serves: "Minimum 50 guests"
  }
];

const FeaturedItems = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Featured Menu Items</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Popular choices loved by our customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-playfair text-xl">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-2xl font-bold text-primary mb-2">{item.price}</p>
                <p className="text-sm text-gray-500 mb-4">{item.serves}</p>
                <Button className="w-full">
                  <a href="https://wa.me/09127882483" target="_blank" rel="noopener noreferrer">
                    Order Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
