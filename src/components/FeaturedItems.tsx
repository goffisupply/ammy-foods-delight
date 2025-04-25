
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
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-gradient">Featured Menu Items</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Popular choices loved by our customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-white">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <p className="text-2xl font-bold text-primary mb-2">{item.price}</p>
                <p className="text-sm text-gray-400 mb-4">{item.serves}</p>
                <Button className="w-full bg-primary hover:bg-primary/90">
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
