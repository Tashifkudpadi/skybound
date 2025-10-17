"use client"

import { useState, useEffect, useRef } from "react"
import { Shield, Award, CheckCircle, Star } from "lucide-react"

export function TrustBadges() {
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

  const badges = [
    {
      icon: Shield,
      title: "IATA Certified",
      description: "Licensed and regulated airline ticketing agent",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Best Travel Agency 2023 & 2024",
    },
    {
      icon: CheckCircle,
      title: "Verified Safe",
      description: "100% secure transactions with SSL encryption",
    },
    {
      icon: Star,
      title: "Highly Rated",
      description: "4.9/5 stars from 10,000+ verified customers",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-white via-blue-50 to-white relative overflow-hidden border-y border-gray-200"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg group hover:scale-110 transition-transform duration-300">
                <badge.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-gray-600 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
