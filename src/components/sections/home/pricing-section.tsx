import Link from "next/link"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { ScrollView } from "@/components/scroll-view"

export default function PricingSection() {
  return (
    <section id="pricing" className="py-12 md:py-24 lg:py-32 border-t border-black/5">
      <div className="mx-auto max-w-3xl px-4 md:px-6 relative">
        {/* Abstract image positioned in top-right corner */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20 hidden sm:block">
          <OptimizedImage
            src="/images/abstract-3.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative">
          {/* Card container */}
          <ScrollView>
            <div className="bg-[#FCF8F4] rounded-lg md:rounded-xl p-5 md:p-6 lg:p-8 max-w-2xl mx-auto relative z-10 border border-black/5">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">
                <em>Value‑based, month‑to‑month. Starts ~€5k.</em>
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                "You pay ~20% of the value I create over two years. Cancel
                anytime—only a 20% wrap‑up fee on the remaining balance (based
                on the Agile 'Money for Nothing' Principle)."
              </p>

              <p className="text-xs md:text-sm lg:text-base mb-6 text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Pricing & Terms:</strong> Plans start at approximately{" "}
                <strong className="text-foreground">€5k per month</strong>. We typically price at about{" "}
                <strong className="text-foreground">20% of the projected value</strong> we'll deliver to
                your business over 2 years. (For example, if our solution is
                estimated to save you around €500k in two years, the
                subscription would be roughly €8k per month.) All plans are{" "}
                <strong className="text-foreground">no long-term lock-in</strong> – you can cancel at any
                time. If you do choose to end the engagement early, we only
                charge a modest <strong className="text-foreground">20% wrap-up fee</strong> on the
                remaining contract value of the first year (following the agile
                "Money for Nothing" principle, to fairly cover the unused work).
                In short: we succeed when you succeed, and we're confident in
                delivering value far above our cost.
              </p>

              <div className="text-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 text-sm font-semibold text-white bg-foreground rounded-lg hover:bg-foreground/90 transition-colors"
                >
                  Pricing Calculations
                </Link>
              </div>
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  )
} 