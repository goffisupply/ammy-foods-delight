
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-center">
              Our Story
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              At Ammy Foods, we believe in creating memorable experiences through exceptional food. 
              Our journey began with a simple passion for cooking and has evolved into Abuja's 
              premier catering service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-playfair font-semibold text-primary">Our Mission</h3>
                <p className="text-gray-300">
                  To provide exceptional food services that exceed expectations and create lasting memories 
                  for our clients and their guests.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-playfair font-semibold text-primary">Our Values</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Quality ingredients and preparation</li>
                  <li>Exceptional customer service</li>
                  <li>Timely delivery</li>
                  <li>Attention to detail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
