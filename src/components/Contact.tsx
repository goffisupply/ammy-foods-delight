
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to serve you. Reach out to us for orders and inquiries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-playfair">Phone Numbers</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p className="mb-2">09127882483</p>
                <p>09049818881</p>
                <Button className="mt-4 w-full">
                  <a href="https://wa.me/09127882483" target="_blank" rel="noopener noreferrer">
                    Message on WhatsApp
                  </a>
                </Button>
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-playfair">Operating Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p className="mb-2">Monday - Saturday</p>
                <p className="font-medium">8:00 AM – 7:00 PM</p>
                <p className="mt-4">Sunday</p>
                <p className="font-medium">From 9:00 AM</p>
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-playfair">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                11 Konoko Crescent,<br />
                Wuse 2, Abuja,<br />
                Nigeria 900108
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
