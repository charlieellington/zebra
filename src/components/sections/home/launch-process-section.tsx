"use client"

import { useEffect, useState } from "react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Map each accordion step to an abstract image
const stepImages: Record<string, string> = {
  step1: "/images/abstract-1.png",
  step2: "/images/abstract-2.png",
  step3: "/images/abstract-3.png",
  step4: "/images/abstract-4.png",
}

export default function LaunchProcessSection() {
  const [defaultOpen, setDefaultOpen] = useState<string[] | undefined>(undefined)
  const [hoveredStep, setHoveredStep] = useState<string | null>(null)
  const [activeSteps, setActiveSteps] = useState<string[]>([])

  // Open all items on desktop by default
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 768) {
        const allSteps = ["step1", "step2", "step3", "step4"]
        setDefaultOpen(allSteps)
        setActiveSteps(allSteps)
      } else {
        setDefaultOpen([])
        setActiveSteps([])
      }
    }
  }, [])

  // Determine which image to show
  const getCurrentImage = () => {
    // Priority: hover > first active step > default
    if (hoveredStep) {
      return stepImages[hoveredStep]
    }
    if (activeSteps.length > 0) {
      return stepImages[activeSteps[0]]
    }
    return stepImages.step1
  }

  return (
    <section
      id="launch-process"
      className="py-12 md:py-24 lg:py-32 border-t border-black/5"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-center md:text-left">
          Launch in weeks, not months.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image - hidden on mobile */}
          <div className="hidden md:block relative h-[400px] rounded-lg overflow-hidden">
            <OptimizedImage
              src={getCurrentImage()}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            />
          </div>

          {/* Accordion */}
          {defaultOpen !== undefined && (
            <Accordion
              type="multiple"
              value={activeSteps}
              onValueChange={setActiveSteps}
              className="w-full"
            >
              <AccordionItem 
                value="step1"
                onMouseEnter={() => setHoveredStep("step1")}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <AccordionTrigger className="text-base md:text-lg hover:no-underline">
                  1. Workshops with domain experts
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  Rapid workshops get your whole team aligned—no endless feedback
                  loops. I run as many as needed to capture knowledge and map
                  user goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="step2"
                onMouseEnter={() => setHoveredStep("step2")}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <AccordionTrigger className="text-base md:text-lg hover:no-underline">
                  2. Prototype in real code
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  High-fidelity UI coded in days, not months. It's the first
                  working version, not a mock-up.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="step3"
                onMouseEnter={() => setHoveredStep("step3")}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <AccordionTrigger className="text-base md:text-lg hover:no-underline">
                  3. User testing built-in
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  I test the MVP with real users, so we learn before we burn
                  budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="step4"
                onMouseEnter={() => setHoveredStep("step4")}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <AccordionTrigger className="text-base md:text-lg hover:no-underline">
                  4. Continuous build: Request → Receive
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  With real feedback in hand, we iterate and build out your
                  product continuously. Through our monthly subscription, we act
                  as your on-call product team – refining the UX, adding
                  features, and hooking up the back-end as needed to evolve your
                  product.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      </div>
    </section>
  )
} 