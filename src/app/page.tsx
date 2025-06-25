import HeroPersonalSection from "@/components/sections/home/hero-personal-section";
import CredoSection from "@/components/sections/home/credo-section";
import AboutMeSection from "@/components/sections/home/about-me-section";
import RecentBuildsSection from "@/components/sections/home/recent-builds-section";
import PersonalCtaSection from "@/components/sections/home/personal-cta-section";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroPersonalSection />
      <CredoSection />
      <AboutMeSection />
      <RecentBuildsSection />
      <PersonalCtaSection />
      <FooterSection />
    </main>
  );
}
