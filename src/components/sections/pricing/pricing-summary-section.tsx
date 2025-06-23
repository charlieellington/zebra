/**
 * Bottom Line section - final summary with CTA
 * Tight closing message with booking button
 */

import { Button } from "@/components/ui/button";
import { ScrollView } from "@/components/scroll-view";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PricingSummarySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollView>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-medium text-foreground">
                Bottom Line
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Try me for a month. If the work isn't paying for itself, walk away—with every asset 
                delivered and only a fair wrap-up fee (20% of the remaining balance on our one-year engagement). 
                No lock-in, just results.
                <br />
                <strong className="text-foreground">Bottom line:</strong> I stay hungry to deliver; you never fund dead weight.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-lg font-semibold text-foreground mb-6">
                Ready? Let's chat.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="https://cal.com/charlieellington/zebra-call" target="_blank" rel="noopener noreferrer">
                  Book a call with Charlie
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </ScrollView>
      </div>
    </section>
  );
} 