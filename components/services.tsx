"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Plane, Globe, Users, TrendingDown, Headphones, Lock } from "lucide-react"

export function Services() {
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

  const services = [
    {
      icon: Plane,
      title: "Worldwide Airlines",
      description: "Access to 500+ airlines including major carriers and budget airlines worldwide.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "500+ Destinations",
      description: "Book flights to any airport globally with our extensive network coverage.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Group Bookings",
      description: "Special discounts for group travel with dedicated support for large parties.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingDown,
      title: "Best Price Match",
      description: "Competitive rates guaranteed. We match any legitimate lower price found.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service via phone, email, and WhatsApp.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Lock,
      title: "Secure Booking",
      description: "Bank-level security for all transactions with instant confirmation.",
      color: "from-rose-500 to-pink-500",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive airline booking solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-3 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${service.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                >
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow text-lg">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
