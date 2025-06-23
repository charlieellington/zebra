import Link from "next/link"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { ScrollView } from "@/components/scroll-view"

export default function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      className="py-16 md:py-24 lg:py-32 bg-[#FCF8F4]/20 relative overflow-hidden"
    >
      {/* Abstract image accent - responsive positioning */}
      <div className="absolute bottom-0 left-0 w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 opacity-30 md:opacity-40">
        <OptimizedImage
          src="/images/abstract-5.png"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-xl px-4 md:px-6 text-center relative z-10">
        <ScrollView>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6">
            Ready to launch in weeks?
          </h2>
        </ScrollView>

        <ScrollView delay={0.1}>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-muted-foreground leading-relaxed">
            Let&apos;s chat, see if we&apos;re the right fit for your project. In that
            call, we&apos;ll discuss your idea, brainstorm solutions, and sketch out
            a quick action plan – whether or not you decide to work with us.
            It&apos;s a risk-free way to get expert insight and a roadmap for turning
            your concept into a live product. Time-to-market is critical, so
            don&apos;t wait months to get started – <strong className="text-foreground">grab a slot now</strong>{" "}
            and let&apos;s get your product moving!
          </p>
        </ScrollView>

        <ScrollView delay={0.2}>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            {/* Primary CTA */}
            <Link
              href="https://cal.com/charlieellington/zebra-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 md:px-6 py-3 text-sm md:text-base font-semibold text-white bg-foreground rounded-lg hover:bg-foreground/90 transition-colors shadow-sm"
            >
              Book a call with Charlie
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#recent-builds"
              className="inline-flex items-center justify-center px-5 md:px-6 py-3 text-sm md:text-base font-semibold text-foreground bg-white border-2 border-foreground rounded-lg hover:bg-foreground hover:text-white transition-all shadow-sm"
            >
              See live examples
            </Link>
          </div>
        </ScrollView>
      </div>
    </section>
  )
} 