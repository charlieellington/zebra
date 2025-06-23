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
                <em>Value‑based, month‑to‑month. Starts €5k.</em>
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                &ldquo;I price at ~20% of the value I create over two years. 
                Cancel or change priorities anytime.&rdquo;
              </p>

              <div className="text-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 text-sm font-semibold text-white bg-foreground rounded-lg hover:bg-foreground/90 transition-colors"
                >
                  See Full Pricing
                </Link>
              </div>
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  )
} 