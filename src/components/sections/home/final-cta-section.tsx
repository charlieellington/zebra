"use client";

import Link from "next/link"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { ScrollView } from "@/components/scroll-view"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Cal from "@calcom/embed-react";
import { Mail, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FinalCtaSection() {
  // Compute next project slot – four weeks ahead
  const nextSlotDate = new Date();
  nextSlotDate.setDate(nextSlotDate.getDate() + 28);
  const monthName = nextSlotDate.toLocaleString('default', { month: 'long' });
  const slotText = `Next project slot opens in late ${monthName}.`;

  const [isExpanded, setIsExpanded] = useState(false);

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

      <div className="mx-auto max-w-5xl px-4 md:px-6 relative z-10">
        <ScrollView>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-3 text-center">
            Ready to launch faster? Let's talk.
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-center">{slotText}</p>
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

          <p className="text-base md:text-lg mb-8 md:mb-10 text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            Book a free intro call. We'll discuss your idea, brainstorm solutions, 
            and sketch out an action plan. You'll get expert insight and a clear roadmap 
            – whether or not we work together. <strong className="text-foreground">No obligation, just valuable advice.</strong>
          </p>
        </ScrollView>

        <ScrollView delay={0.2}>
          {/* Cal.com Embed with expand/collapse */}
          <div className="mb-8 w-full max-w-3xl mx-auto">
            {!isExpanded ? (
              /* Compact view */
              <div 
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setIsExpanded(true)}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Check my availability</h3>
                </div>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Click to view available time slots for your intro call
                </p>
                <div className="flex justify-center">
                  <ChevronDown className="h-5 w-5 text-muted-foreground animate-bounce" />
                </div>
              </div>
            ) : (
              /* Expanded view */
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b bg-gray-50">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Select a time for your intro call</h3>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Minimize
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <Cal 
                    calLink="charlieellington/zebra-call"
                    style={{ width: "100%", height: "600px", overflow: "scroll" }}
                    config={{
                      layout: "month_view",
                      theme: "light",
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Alternative booking options */}
          <div className="text-center mb-6">
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://cal.com/charlieellington/zebra-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Cal.com →
              </Link>
            </Button>
          </div>

          {/* Email contact option */}
          <div className="text-center mb-8">
            <p className="text-base text-muted-foreground mb-3">
              Capacity is high right now. You can always reach me by email – I love replying to mail.
            </p>
            <a 
              href="mailto:charliee+zebra@gmail.com"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:underline"
            >
              <Mail className="h-4 w-4" />
              charliee+zebra@gmail.com
            </a>
          </div>

          {/* Alternative CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-6">
            <p className="text-sm text-muted-foreground">
              Prefer to explore first?
            </p>
            <Button asChild size="sm" variant="ghost">
              <Link href="/pricing">
                See Pricing Details →
              </Link>
            </Button>
          </div>
        </ScrollView>
      </div>
    </section>
  )
} 