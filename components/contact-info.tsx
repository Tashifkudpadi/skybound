"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, MapPin, Clock, Globe } from "lucide-react";

export function ContactInfo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCall = () => (window.location.href = "tel:9686611250");
  const handleWhatsApp = () =>
    window.open(
      "https://wa.me/9686611250?text=Hi! I'd like to book a flight with Skybound Travels.",
      "_blank"
    );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* ✈️ Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ffffff' fill-opacity='0.8' d='M21 16v-2l-8-5V3.5a1.5 1.5 0 1 0-3 0V9l-8 5v2l8-2.5V20l-2 1v1l3.5-1 3.5 1v-1l-2-1v-6.5z'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {" "}
              Touch
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Ready to book your next flight? Contact us through any of these
            channels
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Phone */}
          <Card
            onClick={handleCall}
            className="group cursor-pointer bg-white/10 hover:bg-blue-600/50 border-white/20 hover:border-blue-400 text-white transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
          >
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-blue-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-all duration-300 group-hover:scale-110">
                <Phone className="h-8 w-8 text-blue-300 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Call Us</h3>
              <p className="text-gray-300 mb-4">
                Speak directly with our travel experts
              </p>
              <p className="text-2xl font-bold text-blue-300 group-hover:text-white transition-colors">
                +91-9686611250
              </p>
            </CardContent>
          </Card>

          {/* WhatsApp */}
          <Card
            onClick={handleWhatsApp}
            className="group cursor-pointer bg-white/10 hover:bg-green-600/50 border-white/20 hover:border-green-400 text-white transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 hover:scale-105"
          >
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-110">
                <MessageCircle className="h-8 w-8 text-green-300 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">WhatsApp</h3>
              <p className="text-gray-300 mb-4">
                Get instant responses on WhatsApp
              </p>
              <p className="text-2xl font-bold text-green-300 group-hover:text-white transition-colors">
                Chat Now
              </p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="group bg-white/10 border-white/20 text-white hover:bg-purple-600/50 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-purple-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-all duration-300 group-hover:scale-110">
                <Mail className="h-8 w-8 text-purple-300 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Email</h3>
              <p className="text-gray-300 mb-4">
                Send us your detailed inquiry
              </p>
              <p className="text-lg font-bold text-purple-300 group-hover:text-white transition-colors break-all">
                <a href="mailto:skyboundtravels@gmail.com">
                  skyboundtravels@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Service Area</h3>
              <p className="text-gray-300">
                Worldwide coverage for all destinations
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Availability</h3>
              <p className="text-gray-300">24/7 support available always</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-red-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Location</h3>
              <p className="text-gray-300">International service provider</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
