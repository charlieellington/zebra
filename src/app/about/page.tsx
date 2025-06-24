import type { Metadata } from "next";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import AboutHeroSection from "@/components/sections/about/about-hero-section";
import JourneySection from "@/components/sections/about/journey-section";
import PhilosophySection from "@/components/sections/about/philosophy-section";
import SoloFocusSection from "@/components/sections/about/solo-focus-section";

export const metadata: Metadata = {
  title: "About Charlie Ellington | Zebra Design - Founder & Designer-Developer",
  description: "From founding Deep Work Studio to designing products that raised $120M+. Learn why a founder-turned-designer-developer is your fastest path to launch. 10 years of startup experience, now building your product.",
  openGraph: {
    title: "About Charlie Ellington | Zebra Design",
    description: "Founder-turned-designer-developer with $120M+ track record. Get your product launched in weeks with someone who's been in your shoes.",
    url: 'https://zebradesign.studio/about',
    type: 'profile',
  },
  twitter: {
    title: "About Charlie Ellington | Zebra Design",
    description: "Founder-turned-designer-developer with $120M+ track record. Launch in weeks, not months.",
  },
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