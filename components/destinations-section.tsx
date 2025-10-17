"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import parisImg from "@/src/images/paris.jpeg"
import tokyoImg from "@/src/images/tokyo.jpeg"
import dubaiImg from "@/src/images/dubai.jpeg"
import londonImg from "@/src/images/london.jpeg"
import newYorkImg from "@/src/images/newyork.jpeg"
import baliImg from "@/src/images/bali.jpeg"

export function DestinationsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      description: "Romantic getaways & cultural tours",
      image: parisImg.src,
      isPopular: false,
      span: "lg:col-span-2 lg:row-span-2",
    },
    {
      id: 2,
      name: "Tokyo",
      country: "Japan",
      description: "Traditional meets modern",
      image: tokyoImg.src,
      isPopular: true,
      span: "lg:col-span-1 lg:row-span-1",
    },
    {
      id: 3,
      name: "Dubai",
      country: "UAE",
      description: "Luxury & adventure combined",
      image: dubaiImg.src,
      isPopular: true,
      span: "lg:col-span-1 lg:row-span-1",
    },
    {
      id: 4,
      name: "London",
      country: "UK",
      description: "History & modern culture",
      image: londonImg.src,
      isPopular: false,
      span: "lg:col-span-2 lg:row-span-2",
    },
    {
      id: 5,
      name: "New York",
      country: "USA",
      description: "The city that never sleeps",
      image: newYorkImg.src,
      isPopular: true,
      span: "lg:col-span-1 lg:row-span-1",
    },
    {
      id: 6,
      name: "Bali",
      country: "Indonesia",
      description: "Paradise on earth",
      image: baliImg.src,
      isPopular: true,
      span: "lg:col-span-1 lg:row-span-1",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1.5 text-sm font-semibold"
            >
              We Book Worldwide
            </Badge>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Popular Destinations We Serve</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From business trips to dream vacations, we handle all your flight bookings
            <br />
            with care and expertise
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[280px]">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer ${
                destination.span
              } ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Popular Badge */}
              {destination.isPopular && (
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 text-xs font-bold flex items-center gap-1 shadow-lg">
                    <span className="text-lg">✈️</span>
                    Popular
                  </Badge>
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white">
                {/* Location */}
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-blue-300" />
                  <span className="text-sm font-medium text-blue-200">{destination.country}</span>
                </div>

                {/* Name */}
                <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                  {destination.name}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {destination.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
