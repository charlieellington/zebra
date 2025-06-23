import type { Metadata } from "next";
import FooterSection from "@/components/footer";

export const metadata: Metadata = {
  title: "Pricing — Zebra Design",
  description: "Transparent pricing for Design-as-a-Service. Launch your digital product faster with our flexible pricing plans.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-24 pb-16 md:pt-36 md:pb-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-xl space-y-6 text-center">
            <h1 className="text-4xl font-medium lg:text-5xl text-foreground">
              Pricing
            </h1>
            <p className="text-muted-foreground text-lg">
              Our pricing plans will be listed here soon. Get in touch to discuss your project needs.
            </p>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
} 