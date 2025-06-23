import AboutUsSection from "@/components/sections/home/about-section";
import HeroSection from "@/components/sections/home/hero-section";
import CredoSection from "@/components/sections/home/credo-section";
import QuickWinsSection from "@/components/sections/home/quick-wins-section";
import RecentBuildsSection from "@/components/sections/home/recent-builds-section";
import ServicesSection2 from "@/components/sections/home/services-2";
import StatsSection from "@/components/sections/home/stats";
import FooterSection from "@/components/footer";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CredoSection />
      <QuickWinsSection />
      <SectionDivider />
      <RecentBuildsSection />
      <AboutUsSection />
      {/* <ServicesSection /> */}
      <ServicesSection2 />
      <StatsSection />
      <FooterSection />
    </main>
  );
}
