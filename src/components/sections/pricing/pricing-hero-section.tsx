/**
 * Pricing hero section - One Monthly Fee, All-Inclusive Build
 * Hemingway-tight, first-person, British English
 */

import { ScrollView } from "@/components/scroll-view";

export default function PricingHeroSection() {
  return (
    <section className="mx-auto max-w-3xl space-y-6 text-center">
      <ScrollView>
        <h1 className="text-4xl font-medium lg:text-5xl text-foreground">
          One Monthly Fee, All-Inclusive Build
        </h1>
      </ScrollView>
      
      <ScrollView delay={0.1}>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I offer a flat <span className="font-semibold text-foreground">monthly subscription, starting at €5,000.</span>
          Standard engagement is one year, but you can cancel anytime with just a 20% wrap-up fee.
          <br />
          That covers every design or code task, one at a time, with the focus only a solo founder can give. 
          Need to move faster? Add another lane (a second subscription) and I'll run two tasks in parallel.
        </p>
      </ScrollView>
    </section>
  );
} 