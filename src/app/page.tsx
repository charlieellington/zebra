import HeroSection from "@/components/sections/home/hero-section";
import CredoSection from "@/components/sections/home/credo-section";
import SectionDivider from "@/components/section-divider";
import RecentBuildsSection from "@/components/sections/home/recent-builds-section";
import LaunchProcessSection from "@/components/sections/home/launch-process-section";
import WhoIHelpSection from "@/components/sections/home/who-i-help-section";
import PricingSection from "@/components/sections/home/pricing-section";
import PainPointsSection from "@/components/sections/home/pain-points-section";
import FaqSection from "@/components/sections/home/faq-section";
import FinalCtaSection from "@/components/sections/home/final-cta-section";
import FooterSection from "@/components/footer";
import BenefitsBridgeSection from "@/components/sections/home/benefits-bridge-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CredoSection />
      <BenefitsBridgeSection />
      <RecentBuildsSection />
      <LaunchProcessSection />
      <WhoIHelpSection />
      <PricingSection />
      <PainPointsSection />
      <FinalCtaSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
