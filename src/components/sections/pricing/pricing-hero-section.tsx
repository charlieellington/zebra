"use client";

/**
 * Pricing hero section - One Monthly Fee, All-Inclusive Build
 * Hemingway-tight, first-person, British English
 */

import React from "react";
import { ScrollView } from "@/components/scroll-view";
import { ColoredHighlight } from "@/components/ui/colored-highlight";

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
          From <ColoredHighlight color="green">€5,000/month</ColoredHighlight> for all design and development.
          <br />
          <ColoredHighlight color="yellow">Month-to-month. Cancel anytime.</ColoredHighlight> No long contracts.
          <br />
          <span className="text-sm">
            I handle one task at a time with full focus. Need more speed? Add a second subscription for parallel work.
          </span>
        </p>
      </ScrollView>
    </section>
  );
} 