"use client";

import Link from "next/link"
import { ScrollView } from "@/components/scroll-view"
import { Button } from "@/components/ui/button"
import Cal from "@calcom/embed-react";
import { Mail, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

export default function PersonalCtaSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-[#FCF8F4]/20"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6 relative z-10">
        <ScrollView>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
            Let's chat about what you're building
          </h2>
        </ScrollView>

        <ScrollView delay={0.1}>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-8 md:mb-10">
            Book a call with me, Charlie Ellington — Solo designer-developer · 
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="underline decoration-dotted underline-offset-2 cursor-help"> One launch client at a time</span>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs text-sm">
                <p>Right now I take on one launch client at a time so every build gets my full focus. I'll scale with hand-picked collaborators only when it improves outcomes.</p>
              </TooltipContent>
            </Tooltip>
            {" "}· No middle managers — you work directly with me.
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
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">
              I'm at high capacity, for a faster connection, send me an email at{" "}
              <a 
                href="mailto:charliee@gmail.com"
                className="text-foreground font-medium hover:underline inline-flex items-center gap-1"
              >
                <Mail className="h-3 w-3" />
                charliee@gmail.com
              </a>
              {" "}because I love getting mail!
            </p>
          </div>
        </ScrollView>
      </div>
    </section>
  )
} 