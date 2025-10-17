"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plane, Menu, X, Phone, MessageCircle } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/9686611250?text=Hi! I'd like to book a flight with Skybound Travels.",
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:9686611250";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? "bg-blue-600 shadow-lg"
                    : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <Plane className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-2xl font-bold transition-colors ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  Skybound
                </span>
                <span
                  className={`text-xs font-semibold transition-colors ${
                    isScrolled ? "text-blue-600" : "text-blue-200"
                  }`}
                >
                  Travels
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <a
                href="#home"
                className={`text-lg font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Home
              </a>
              <a
                href="#services"
                className={`text-lg font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Services
              </a>
              <a
                href="#why-us"
                className={`text-lg font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Why Us
              </a>
              <a
                href="#contact"
                className={`text-lg font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Contact
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                onClick={handleCall}
                variant="ghost"
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white hover:text-blue-200 hover:bg-white/10"
                }`}
              >
                <Phone className="h-5 w-5 mr-2" />
                <span
                  className="hidden xl:inline cursor-pointer"
                  onClick={handleCall}
                >
                  +91-9686611250
                </span>
              </Button>
              <Button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-xl shadow-xl hover:shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 font-semibold"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white/98 backdrop-blur-lg lg:hidden pt-20">
          <div className="flex flex-col items-center justify-start space-y-8 p-8 text-center">
            <a
              href="#home"
              className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col space-y-4 mt-8 w-full max-w-xs">
              <Button
                onClick={handleCall}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-lg font-semibold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
