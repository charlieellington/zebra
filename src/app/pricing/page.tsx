import type { Metadata } from "next";
import FooterSection from "@/components/footer";
import PricingHeroSection from "@/components/sections/pricing/pricing-hero-section";
import ValueBasedSection from "@/components/sections/pricing/value-based-section";
import ValueExamplesSection from "@/components/sections/pricing/value-examples-section";
import AddOnsSection from "@/components/sections/pricing/add-ons-section";
import MoneyForNothingSection from "@/components/sections/pricing/money-for-nothing-section";
import PricingSummarySection from "@/components/sections/pricing/pricing-summary-section";
import FaqSection from "@/components/sections/home/faq-section";

export const metadata: Metadata = {
  title: "Pricing — Zebra Design",
  description: "Month-to-month subscription from €5,000. I price at 20% of value added. Cancel any time with just a fair wrap-up fee. No lock-in, just results.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Base Pricing */}
      <div className="pt-24 pb-16 md:pt-36 md:pb-24">
        <PricingHeroSection />
      </div>

      {/* Value-Based Pricing Explanation */}
      <ValueBasedSection />

      {/* Value Calculation Examples */}
      <ValueExamplesSection />

      {/* Usage-Based Add-Ons */}
      <AddOnsSection />

      {/* Money for Nothing Principle */}
      <MoneyForNothingSection />

      {/* Bottom Line & CTA */}
      <PricingSummarySection />

      {/* FAQs */}
      <FaqSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
} 