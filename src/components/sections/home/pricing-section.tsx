import Link from "next/link"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { ScrollView } from "@/components/scroll-view"
import { Button } from "@/components/ui/button"
import { ColoredHighlight } from "@/components/ui/colored-highlight"

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
            <div className="bg-[#FCF8F4] rounded-lg md:rounded-xl p-5 md:p-6 lg:p-8 max-w-2xl mx-auto relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">
                Monthly subscription, starting <ColoredHighlight color="green">~€5k</ColoredHighlight>
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                <ColoredHighlight color="yellow">Cancel anytime.</ColoredHighlight> No long-term contracts.
              </p>
              
              <p className="text-sm text-muted-foreground mb-6">
                Fair pricing at ~20% of the value I deliver to your business over 2 years. 
                If our work adds €500k to your bottom line, you pay about €8k/month.
              </p>
              
              <p className="text-xs text-muted-foreground italic mb-4">
                (That's 1/4 the cost of a typical team – and you'll ship 4× faster.)
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-6 list-disc pl-5">
                <li>Hire in-house team: €20k/mo + 3 months recruiting</li>
                <li>Traditional agency: €20k–€40k/mo retainer — headline fee balloons with change-orders and slower turn-around</li>
              </ul>

              <div className="text-center">
                <Button asChild size="default">
                  <Link
                    href="/pricing"
                  >
                    View full pricing details
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  )
} 