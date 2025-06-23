"use client"

import { useEffect, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { X } from "lucide-react"

export default function PainPointsSection() {
  const [defaultOpen, setDefaultOpen] = useState<string[] | undefined>(undefined)

  // All items closed by default on all devices
  useEffect(() => {
    setDefaultOpen([])
  }, [])

  return (
    <section id="pain-points" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 md:mb-8 text-center md:text-left">
          Your Common Problems, Solved:
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
                <div className="flex items-center gap-3">
                  <X className="h-4 w-4 flex-shrink-0 text-red-500" />
                  <span>Tired of 12-month dev timelines?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pl-7">
                <strong className="text-foreground">I use AI-assisted coding to deliver in a fraction of the time.</strong> I've spent all of 2024 perfecting AI-powered development with tools like Cursor. Your MVP ships in weeks, not months. No more watching competitors launch while you're still in development.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pain2">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                <div className="flex items-center gap-3">
                  <X className="h-4 w-4 flex-shrink-0 text-red-500" />
                  <span>Design and dev feel disconnected?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pl-7">
                <strong className="text-foreground">I've spent 10+ years launching products as both designer and developer.</strong> Ramp Network raised $120M on a product I designed. Ethereum launched staking through my interface. Nexus Mutual became a web3 leader with my platform. One person, seamless execution.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pain3">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                <div className="flex items-center gap-3">
                  <X className="h-4 w-4 flex-shrink-0 text-red-500" />
                  <span>Freelancers treating you like a side project?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pl-7">
                <strong className="text-foreground">I've been a startup founder myself.</strong> I know speed and user feedback are everything. You'll never deal with misaligned priorities or someone dragging out billable hours. Your success is my success.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pain4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                <div className="flex items-center gap-3">
                  <X className="h-4 w-4 flex-shrink-0 text-red-500" />
                  <span>Burning cash without validation?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pl-7">
                <strong className="text-foreground">My process is based on Google Venture's Design Sprints.</strong> At Deep Work Studio, we perfected rapid prototype testing. Get validated designs in weeks, not months. Don't waste money on unproven ideas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pain5">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                <div className="flex items-center gap-3">
                  <X className="h-4 w-4 flex-shrink-0 text-red-500" />
                  <span>Traditional business drowning in manual processes?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pl-7">
                <strong className="text-foreground">I build simple tools that transform how your business runs.</strong> Whether it's a client onboarding system for your accountancy firm or an appointment scheduler for your clinic — I turn your Excel spreadsheets and paper forms into sleek digital tools. No technical jargon, just solutions that work.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </section>
  )
} 