"use client";

import { Plane } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center text-white">
        <div className="relative mb-8">
          <div className="airplane-animation">
            <Plane className="h-16 w-16 text-blue-300" />
          </div>
        </div>

        <div className="flex items-center justify-center mb-6">
          <Plane className="h-8 w-8 mr-3 text-blue-300" />
          <h1 className="text-4xl font-bold">Skybound Travels</h1>
        </div>

        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <p className="text-lg mt-6 opacity-80">Loading your journey...</p>
      </div>

      <style jsx>{`
        .airplane-animation {
          animation: fly 3s ease-in-out infinite;
        }

        @keyframes fly {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(-5deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
          75% {
            transform: translateY(-30px) rotate(-3deg);
          }
        }

        .loading-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .loading-dots span {
          width: 8px;
          height: 8px;
          background: #60a5fa;
          border-radius: 50%;
          animation: bounce 1.4s ease-in-out infinite both;
        }

        .loading-dots span:nth-child(1) {
          animation-delay: -0.32s;
        }
        .loading-dots span:nth-child(2) {
          animation-delay: -0.16s;
        }

        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
