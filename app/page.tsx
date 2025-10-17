"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { LoadingScreen } from "@/components/loading-screen";
import { Hero } from "@/components/hero";
import { TrustBadges } from "@/components/trust-badges";
import { Services } from "@/components/services";
import { DestinationsSection } from "@/components/destinations-section";
import { WhyUs } from "@/components/why-us";
import { Testimonials } from "@/components/testimonials";
import { ContactInfo } from "@/components/contact-info";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <Services />
      <DestinationsSection />
      <WhyUs />
      <Testimonials />
      <CTA />
      <ContactInfo />
      <Footer />
    </main>
  );
}
