"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import parisImg from "@/src/images/paris.jpeg";
import tokyoImg from "@/src/images/tokyo.jpeg";
import newYorkImg from "@/src/images/newyork.jpeg";
import londonImg from "@/src/images/london.jpeg";
import dubaiImg from "@/src/images/dubai.jpeg";
import baliImg from "@/src/images/bali.jpeg";

export function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    "IATA licensed and certified travel agency",
    "Direct partnerships with major airlines",
    "Real-time availability and pricing",
    "Instant e-ticket delivery",
    "Flexible cancellation and modification",
    "Competitive group discounts",
    "Expert visa & documentation assistance",
    "Multi-city and round-trip specialization",
  ];

  const handleCall = () => {
    window.location.href = "tel:9686611250";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/9686611250?text=Hi! I want to know more about your services.",
      "_blank"
    );
  };

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-x-48 -translate-y-48 opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-100 to-indigo-100 rounded-full translate-x-48 translate-y-48 opacity-40"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Why Choose
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Skybound?
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              With over 15 years of experience in airline booking, we've
              established ourselves as a trusted partner for travelers
              worldwide. Our commitment to excellence and customer satisfaction
              sets us apart.
            </p>

            <div className="space-y-4 mb-10">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 transition-all duration-500 transform ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-5"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 animate-pulse animation-delay-${index}" />
                  <span className="text-gray-700 font-medium text-lg">
                    {reason}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center -space-x-3 mb-8">
              {[parisImg.src, tokyoImg.src, newYorkImg.src, londonImg.src, dubaiImg.src, baliImg.src].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Happy customer"
                  className="h-12 w-12 rounded-full ring-2 ring-white object-cover"
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCall}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 h-auto rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold text-lg"
              >
                <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Call Our Experts
              </Button>

              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="group border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 h-auto rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold text-lg bg-transparent"
              >
                <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl transform rotate-3 opacity-20 scale-105"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src={parisImg.src}
                  alt="Travel experts helping customers"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xl font-bold mb-2">
                    Expert Travel Consultants
                  </p>
                  <p className="text-sm opacity-90">
                    Dedicated to making your journey unforgettable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @for $i from 0 to 7 {
          .animation-delay-#{$i} {
            animation-delay: #{$i * 100}ms;
          }
        }
      `}</style>
    </section>
  );
}
