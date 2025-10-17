"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MessageCircle, Send, Clock } from "lucide-react"
import { submitContactForm } from "@/app/actions"

export function ContactSection() {
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

  const handleWhatsApp = () => {
    window.open("https://wa.me/15551234567?text=Hi! I need help with flight booking.", "_blank")
  }

  const handleCall = () => {
    window.location.href = "tel:+15551234567"
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='1' fillRule='evenodd'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Fly?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get in touch with our travel experts and let us plan your perfect journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Quick Contact Options */}
          <div className="lg:col-span-1 space-y-6">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Us Instantly</h3>

              {/* WhatsApp */}
              <Card
                onClick={handleWhatsApp}
                className="group cursor-pointer bg-green-600 hover:bg-green-700 border-0 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:animate-bounce">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">WhatsApp</h4>
                      <p className="text-green-100">Instant response guaranteed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card
                onClick={handleCall}
                className="group cursor-pointer bg-blue-600 hover:bg-blue-700 border-0 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:animate-pulse">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Call Now</h4>
                      <p className="text-blue-100">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Email</h4>
                      <p className="text-gray-300">skyboundtravels@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Available 24/7</h4>
                      <p className="text-gray-300">Always here to help</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card
              className={`border-0 shadow-2xl bg-white/95 backdrop-blur-sm transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-gray-900">Send us a Message</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Tell us about your travel plans and we'll get back to you within 2 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form action={submitContactForm} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700 font-semibold text-lg">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-12 text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700 font-semibold text-lg">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-12 text-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-semibold text-lg">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-12 text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-semibold text-lg">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-12 text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="travelType" className="text-gray-700 font-semibold text-lg">
                      Travel Type
                    </Label>
                    <Select name="travelType" required>
                      <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-12 text-lg">
                        <SelectValue placeholder="What type of travel are you planning?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="leisure">Leisure Travel</SelectItem>
                        <SelectItem value="business">Business Travel</SelectItem>
                        <SelectItem value="group">Group Travel</SelectItem>
                        <SelectItem value="honeymoon">Honeymoon</SelectItem>
                        <SelectItem value="family">Family Vacation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-semibold text-lg">
                      Tell us about your travel plans
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Where would you like to go? When are you planning to travel? Any specific requirements?"
                      className="min-h-[150px] border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-14 text-xl font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Send className="mr-3 h-6 w-6" />
                    Send My Travel Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
