"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import parisImg from "@/src/images/paris.jpeg";
import tokyoImg from "@/src/images/tokyo.jpeg";
import dubaiImg from "@/src/images/dubai.jpeg";
import londonImg from "@/src/images/london.jpeg";
import newYorkImg from "@/src/images/newyork.jpeg";
import baliImg from "@/src/images/bali.jpeg";

export function Destinations() {
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

  const destinations = [
    {
      name: "Paris, France",
      image: parisImg.src,
      price: "From $599",
      rating: 4.9,
      description: "City of Light and Love",
    },
    {
      name: "Tokyo, Japan",
      image: tokyoImg.src,
      price: "From $899",
      rating: 4.8,
      description: "Modern meets Traditional",
    },
    {
      name: "New York, USA",
      image: newYorkImg.src,
      price: "From $399",
      rating: 4.7,
      description: "The City That Never Sleeps",
    },
    {
      name: "Dubai, UAE",
      image: dubaiImg.src,
      price: "From $799",
      rating: 4.9,
      description: "Luxury in the Desert",
    },
    {
      name: "London, UK",
      image: londonImg.src,
      price: "From $499",
      rating: 4.6,
      description: "Royal Heritage & Culture",
    },
    {
      name: "Bali, Indonesia",
      image: baliImg.src,
      price: "From $699",
      rating: 4.8,
      description: "Tropical Paradise",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Popular
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Destinations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing places around the world with unbeatable flight
            deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">
                      {destination.name}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm">{destination.rating}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {destination.price}
                  </span>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
