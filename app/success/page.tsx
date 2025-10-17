"use client"

import { useEffect, useState } from "react"
import { CheckCircle, Plane, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SuccessPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="floating-plane success-plane-1">
          <Plane className="h-8 w-8 text-blue-300" />
        </div>
        <div className="floating-plane success-plane-2">
          <Plane className="h-6 w-6 text-purple-300" />
        </div>
      </div>

      <div
        className={`text-center max-w-md mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        <div className="relative mb-8">
          <div className="success-checkmark">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully! ✈️</h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Thank you for contacting Skybound Travel! We've received your message and our travel experts will get back to
          you within 24 hours with personalized assistance.
        </p>

        <div className="space-y-4">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>

          <p className="text-sm text-gray-500">Check your email for a confirmation message</p>
        </div>
      </div>

      <style jsx>{`
        .floating-plane {
          position: absolute;
          animation: float-success 8s ease-in-out infinite;
        }

        .success-plane-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .success-plane-2 {
          bottom: 20%;
          right: 10%;
          animation-delay: 2s;
        }

        @keyframes float-success {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .success-checkmark {
          animation: checkmark-bounce 0.6s ease-out;
        }

        @keyframes checkmark-bounce {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
