"use client";

/**
 * Pricing hero section - One Monthly Fee, All-Inclusive Build
 * Hemingway-tight, first-person, British English
 */

import React from "react";
import { ScrollView } from "@/components/scroll-view";

export default function PricingHeroSection() {
  return (
    <section className="mx-auto max-w-3xl space-y-6 text-center px-6">
      {/* Content */}
      <ScrollView>
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-semibold lg:text-5xl text-foreground">
            Simple, Transparent Pricing
          </h1>
        </div>
      </ScrollView>
      
      <ScrollView delay={0.1}>
        <p className="text-lg text-muted-foreground leading-relaxed">
          From <span className="font-semibold text-foreground">€5,000/month</span> for all design and development.
          <br />
          <strong className="text-foreground">Month-to-month. Cancel anytime.</strong> No long contracts.
          <br />
          <span className="text-sm">
            I handle one task at a time with full focus. Need more speed? Add a second subscription for parallel work.
          </span>
        </p>
      </ScrollView>
    </section>
  );
} 