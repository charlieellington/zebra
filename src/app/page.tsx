import AboutUsSection from "@/components/sections/home/about-section";
import HeroSection from "@/components/sections/home/hero-section";
import ServicesSection2 from "@/components/sections/home/services-2";
import StatsSection from "@/components/sections/home/stats";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutUsSection />
      {/* <ServicesSection /> */}
      <ServicesSection2 />
      <StatsSection />
      <FooterSection />
    </main>
  );
}
