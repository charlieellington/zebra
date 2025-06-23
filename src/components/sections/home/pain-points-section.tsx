"use client"

import { useEffect, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function PainPointsSection() {
  const [defaultOpen, setDefaultOpen] = useState<string[] | undefined>(undefined)

  // Open all items on desktop by default (matching Launch Process behavior)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 768) {
        setDefaultOpen(["pain1", "pain2", "pain3", "pain4"])
      } else {
        setDefaultOpen([])
      }
    }
  }, [])

  return (
    <section id="pain-points" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 md:mb-8 text-center md:text-left">
          How we overcome your typical product issues without hiring in house:
        </h2>

        {/* Accordion */}
        {defaultOpen !== undefined && (
          <Accordion
            type="multiple"
            defaultValue={defaultOpen}
            className="w-full"
          >
            <AccordionItem value="pain1">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                "12-month nightmare dev timelines"
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground">
                <strong className="text-foreground">Designers that code with AI</strong> — I avoid this
                entirely. Using AI and Cursor, I build user-centric MVPs in
                weeks, not months. I've spent all of 2025 using these new tools
                and iterating on processes to be confident to offer my design
                first AI coding skills as a service.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pain2">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                "Design vs dev mismatch"
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground">
                <strong className="text-foreground">
                  I have over a decade of experience launching early-stage
                  products
                </strong>{" "}
                — (as a freelancer and as founder of Deep Work) means I know
                how to tightly integrate design with development. Ramp Network
                raised $120 million on a product I designed, Ethereum launched
                its Eth 2.0 staking through an interface I crafted, and Nexus
                Mutual—now a leader in web3 insurance—runs on a platform I
                designed before web3 experiences were a thing. These are all
                examples of seamless design-to-development execution.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pain3">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                "Freelancers without priorities"
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground">
                <strong className="text-foreground">I understand your needs as a startup founder</strong> —
                I've been a startup founder myself, launching three different
                companies. I understand your needs and what actually matters
                when bringing a product to market—speed and continuous user
                feedback. You'll never have to worry about misaligned priorities
                or a freelancer dragging out chargeable days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pain4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                "Burning cash without users or validation"
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground">
                <strong className="text-foreground">
                  Process based on Google Venture's Design Sprints and seven
                  years of working with early stage tech teams.
                </strong>{" "}
                — At Deep Work Studio (my last design agency), we perfected an
                early prototype testing model. This scientific, rapid design
                process delivers validated designs in weeks instead of months,
                so you won't waste time or money on unproven ideas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </section>
  )
} 