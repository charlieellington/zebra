import VantaHeaderSection from "@/components/sections/home/vanta-header-section";
import BenefitsBridgeSection from "@/components/sections/home/benefits-bridge-section";
import LaunchProcessSection from "@/components/sections/home/launch-process-section";
import WhoIHelpSection from "@/components/sections/home/who-i-help-section";
import PainPointsSection from "@/components/sections/home/pain-points-section";
import ProvenResultsSection from "@/components/sections/home/proven-results-section";
import PricingSection from "@/components/sections/home/pricing-section";
import FaqSection from "@/components/sections/home/faq-section";
import PricingCtaSection from "@/components/sections/home/pricing-cta-section";
import FooterSection from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HowIWorkPage() {
  return (
    <main className="min-h-screen">
      {/* Vanta Header with Logo Cloud */}
      <VantaHeaderSection />

      {/* Benefits Cards Section */}
      <BenefitsBridgeSection />

      {/* Process Section */}
      <LaunchProcessSection />

      {/* Who Is This For Section */}
      <WhoIHelpSection />

      {/* Common Problems Section */}
      <PainPointsSection />

      {/* Stats Section with link to projects */}
      <ProvenResultsSection />
      
      <div className="py-8 md:py-12 bg-muted/20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-base md:text-lg text-muted-foreground mb-4">
            Over the past decade, I've built products for companies that went on to raise millions and serve thousands of users.
            Now I'm using AI to deliver that same level of quality even faster.
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-xl"
          >
            <Link href="/#recent-builds">
              <span>View Recent Projects →</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Pricing CTA */}
      <PricingCtaSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
} 