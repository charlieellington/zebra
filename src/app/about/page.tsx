import type { Metadata } from "next";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import AboutHeroSection from "@/components/sections/about/about-hero-section";
import JourneySection from "@/components/sections/about/journey-section";
import PhilosophySection from "@/components/sections/about/philosophy-section";
import SoloFocusSection from "@/components/sections/about/solo-focus-section";

export const metadata: Metadata = {
  title: "About — Zebra Design",
  description: "Learn about Charlie Ellington's journey from digital marketer and sailing instructor to leading a 40-person design team, and now running a solo design-as-a-service practice augmented by AI.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <div className="pt-16 pb-8 md:pt-24 md:pb-16">
        <AboutHeroSection />
      </div>

      {/* Journey Timeline */}
      <JourneySection />

      {/* Philosophy & Approach */}
      <PhilosophySection />

      {/* Solo Focus, Augmented by AI */}
      <SoloFocusSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
} 