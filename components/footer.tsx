import {
  Plane,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  const handleCall = () => (window.location.href = "tel:9686611250");

  return (
    <footer className="bg-white text-black relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 bg-blue-600 rounded-xl">
                <Plane className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Skybound</h3>
                <p className="text-xs text-blue-600 font-medium">Travels</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your trusted partner for worldwide airline bookings and travel
              solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: "blue" },
                { icon: Twitter, color: "sky" },
                { icon: Instagram, color: "pink" },
                { icon: Linkedin, color: "blue" },
              ].map(({ icon: Icon, color }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-10 h-10 border border-gray-300 hover:bg-${color}-600 hover:border-${color}-600 rounded-lg flex items-center justify-center transition-colors`}
                >
                  <Icon
                    className={`h-5 w-5 text-gray-600 hover:text-white transition-colors`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-700">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors hover:translate-x-1 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-600 transition-colors hover:translate-x-1 inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="hover:text-blue-600 transition-colors hover:translate-x-1 inline-block"
                >
                  Why Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-600 transition-colors hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-700">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors hover:translate-x-1 inline-block"
                >
                  Airline Bookings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors hover:translate-x-1 inline-block"
                >
                  Group Travel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors hover:translate-x-1 inline-block"
                >
                  Corporate Travel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors hover:translate-x-1 inline-block"
                >
                  Travel Insurance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-700">
              <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={handleCall}
              >
                <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span>+91-9686611250</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>
                  {" "}
                  <a href="mailto:skyboundtravels@gmail.com">
                    skyboundtravels@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600">
                &copy; 2025 Skybound Airlines. All rights reserved. IATA
                Certified Travel Agency.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-8 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
