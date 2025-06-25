"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollView } from "@/components/scroll-view";

export default function PricingCtaSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24" id="pricing-cta">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollView>
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Ready to see the pricing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Monthly subscription, cancel anytime.
            </p>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                variant="default"
                className="rounded-xl px-8 text-base bg-black text-white hover:bg-black/90"
              >
                <Link href="/pricing">
                  <span>View Pricing Details</span>
                </Link>
              </Button>
            </div>
          </div>
        </ScrollView>
      </div>
    </section>
  );
} 