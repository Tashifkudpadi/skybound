"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, MessageCircle } from "lucide-react"

export function WhyChooseUs() {
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

  const benefits = [
    "IATA certified travel agency",
    "Exclusive deals and discounts",
    "Flexible booking options",
    "Group booking specialists",
    "Corporate travel solutions",
    "Travel insurance assistance",
    "Visa and documentation help",
    "Multi-city trip planning",
  ]

  const handleWhatsApp = () => {
    window.open("https://wa.me/15551234567?text=Hi! I'd like to know more about your travel services.", "_blank")
  }

  const handleCall = () => {
    window.location.href = "tel:+15551234567"
  }

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-x-36 -translate-y-36 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-100 to-indigo-100 rounded-full translate-x-48 translate-y-48 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Your Travel Dreams,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Our Expertise
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With years of experience in the travel industry, we've helped thousands of travelers explore the world.
              From business trips to dream vacations, we make every journey memorable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCall}
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 h-auto rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Call Our Experts
              </Button>

              <Button
                onClick={handleWhatsApp}
                size="lg"
                variant="outline"
                className="group border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 h-auto rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                WhatsApp Chat
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=500&text=Happy+Travelers+Airport+Departure"
                  alt="Happy travelers at airport"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">Ready for your next adventure?</p>
                  <p className="text-sm opacity-90">Let us make it happen!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
