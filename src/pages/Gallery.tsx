
import { Card, CardContent } from "@/components/ui/card";
import { Image as ImageIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const images = [
    { url: "/lovable-uploads/5c7895b3-5f45-44fd-a51b-1d0e73c60474.png", title: "Event Catering" },
    { url: "/lovable-uploads/5c7895b3-5f45-44fd-a51b-1d0e73c60474.png", title: "Small Chops" },
    { url: "/lovable-uploads/5c7895b3-5f45-44fd-a51b-1d0e73c60474.png", title: "Express Cakes" },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 bg-gradient-to-r from-orange-500/20 to-orange-600/20">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-center">
            Our Food Gallery
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={image.url} alt={image.title} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-playfair font-semibold">{image.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
