import Link from "next/link"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { ScrollView } from "@/components/scroll-view"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FinalCtaSection() {
  // Compute next project slot – four weeks ahead
  const nextSlotDate = new Date();
  nextSlotDate.setDate(nextSlotDate.getDate() + 28);
  const monthName = nextSlotDate.toLocaleString('default', { month: 'long' });
  const slotText = `Next project slot opens in late ${monthName}.`;

  return (
    <section
      id="final-cta"
      className="py-16 md:py-24 lg:py-32 bg-[#FCF8F4]/20 relative overflow-hidden"
    >
      {/* Abstract image accent - responsive positioning */}
      <div className="absolute bottom-0 left-0 w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 opacity-30 md:opacity-40 pointer-events-none select-none hidden md:block">
        <OptimizedImage
          src="/images/abstract-5.png"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-2xl px-4 md:px-6 text-center relative z-10">
        <ScrollView>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-3 lg:whitespace-nowrap">
            Ready to launch faster? Let's talk.
          </h2>
          <p className="text-sm text-gray-500 mb-6">{slotText}</p>
        </ScrollView>

        <ScrollView delay={0.1}>
          {/* Personal introduction with image */}
          <div className="flex flex-col items-center mb-6 md:mb-8">
            <Image
              src="/images/other/charlie-ellington.jpg"
              alt="Charlie Ellington"
              width={80}
              height={80}
              className="rounded-full mb-4 ring-2 ring-foreground/10"
            />
            <p className="text-sm text-muted-foreground">
              Hi, I'm Charlie – let's build something great together
            </p>
          </div>

          <p className="text-base md:text-lg mb-6 md:mb-8 text-muted-foreground leading-relaxed">
            Book a free intro call. We'll discuss your idea, brainstorm solutions, 
            and sketch out an action plan. You'll get expert insight and a clear roadmap 
            – whether or not we work together. <strong className="text-foreground">No obligation, just valuable advice.</strong>
          </p>
        </ScrollView>

        <ScrollView delay={0.2}>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            {/* Primary CTA */}
            <Button asChild size="lg">
              <Link
                href="https://cal.com/charlieellington/zebra-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Intro Call with Charlie
              </Link>
            </Button>

            {/* Secondary CTA */}
            <Button asChild size="lg" variant="outline">
              <Link href="/pricing">
                See Pricing First
              </Link>
            </Button>
          </div>
        </ScrollView>
      </div>
    </section>
  )
} 