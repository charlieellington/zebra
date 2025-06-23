/**
 * Pay for Results, Not Hours section
 * Tight copy about outcome-focused pricing
 */

import { ScrollView } from "@/components/scroll-view";

export default function ValueBasedSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollView>
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground">
              Pay for Results, Not Hours
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We pick the outcomes that matter—launch date, conversion lift, churn drop—and your fee 
              covers whatever it takes. No timesheets, no surprise invoices. Progress is the only metric.
            </p>
          </div>
        </ScrollView>
      </div>
    </section>
  );
} 