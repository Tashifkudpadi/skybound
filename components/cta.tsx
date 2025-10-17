"use client";

import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import ctaPattern from "@/src/images/ctaBg.avif";

export function CTA() {
  const handleCall = () => {
    window.location.href = "tel:9686611250";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/9686611250?text=Hi! I'd like to book a flight with Skybound Travels.",
      "_blank"
    );
  };

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${ctaPattern.src})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✨ Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/60 to-blue-900/70" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Your Next Adventure
            <span className="block text-blue-200">Starts Here</span>
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            Book your flights today and get ready to explore the world with
            Skybound Travels.
            <br />
            <span className="font-semibold text-white">
              Contact us now for the best deals!
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={handleCall}
              size="lg"
              className="group bg-white text-blue-600 hover:bg-blue-50 text-lg px-10 py-4 h-auto rounded-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 font-bold"
            >
              <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Call +91-9686611250
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="group bg-green-500 text-white hover:bg-green-600 text-lg px-10 py-4 h-auto rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 font-bold"
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Chat on WhatsApp
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-blue-100 mt-10 text-lg">
            ✓ Instant confirmation • ✓ Best prices • ✓ 24/7 Support
          </p>
        </div>
      </div>
    </section>
  );
}
