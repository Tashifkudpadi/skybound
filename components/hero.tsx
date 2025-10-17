"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import airlineImg from "@/src/images/airline.jpeg";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/9686611250?text=Hi! I'd like to book a flight with Skybound Airlines.",
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:9686611250";
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={airlineImg.src}
          alt="Airplane flying over clouds"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/60 to-blue-900/70" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-400/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div
          className={`transition-all duration-1500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-200">
              Your Journey Starts Here
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Discover the World</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              One Flight at a Time
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Premium airline bookings to over 500 destinations worldwide.
            <br />
            <span className="text-white font-medium">
              Competitive prices. Expert service. Hassle-free booking.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 max-w-3xl mx-auto">
            <Button
              onClick={handleCall}
              size="default"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-base px-6 py-3 h-auto rounded-lg shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Call Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={handleWhatsApp}
              size="default"
              className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-base px-6 py-3 h-auto rounded-lg shadow-xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              WhatsApp Chat
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              size="default"
              variant="outline"
              className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 text-base px-6 py-3 h-auto rounded-lg backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
            >
              Get More Info
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group text-center">
              <div className="text-5xl md:text-6xl font-bold text-white bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-3 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-lg opacity-90 group-hover:opacity-100 transition-opacity">
                Destinations
              </div>
            </div>
            <div className="group text-center">
              <div className="text-5xl md:text-6xl font-bold text-white bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-3 group-hover:scale-110 transition-transform duration-300">
                50K+
              </div>
              <div className="text-lg opacity-90 group-hover:opacity-100 transition-opacity">
                Happy Customers
              </div>
            </div>
            <div className="group text-center">
              <div className="text-5xl md:text-6xl font-bold text-white bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300 mb-3 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-lg opacity-90 group-hover:opacity-100 transition-opacity">
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
