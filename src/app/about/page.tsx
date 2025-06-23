import type { Metadata } from "next";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import AboutHeroSection from "@/components/sections/about/about-hero-section";
import JourneySection from "@/components/sections/about/journey-section";
import PhilosophySection from "@/components/sections/about/philosophy-section";
import SoloFocusSection from "@/components/sections/about/solo-focus-section";

export const metadata: Metadata = {
  title: "About — Zebra Design",
  description: "Why a founder-turned-designer-developer is the fastest way to ship your product. Charlie Ellington's $120M track record now powers your next launch.",
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