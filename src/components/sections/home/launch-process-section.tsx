"use client"

import { useEffect, useState } from "react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollView } from "@/components/scroll-view"
import { Users, Code2, CheckCircle, RefreshCw } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

// Enhanced step metadata with icons, colors, and titles
const stepMetadata = [
  {
    id: "step1",
    title: "Workshops",
    image: "/images/abstract-1.png",
    icon: Users,
    bgColor: "#CDCBFF",
    textColor: "#6B68FF",
    altText: "Abstract background for Workshops step"
  },
  {
    id: "step2", 
    title: "Prototype",
    image: "/images/abstract-2.png",
    icon: Code2,
    bgColor: "#FDA7A0",
    textColor: "#E85D75",
    altText: "Abstract background for Prototype step"
  },
  {
    id: "step3",
    title: "User Testing",
    image: "/images/abstract-3.png",
    icon: CheckCircle,
    bgColor: "#E7BDD7",
    textColor: "#C054A0",
    altText: "Abstract background for User Testing step"
  },
  {
    id: "step4",
    title: "Continuous Build",
    image: "/images/abstract-4.png",
    icon: RefreshCw,
    bgColor: "#B8E8D4",
    textColor: "#4A9B7F",
    altText: "Abstract background for Continuous Build step"
  }
]

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

  // Get current step metadata based on hover/active state
  const getCurrentStepMeta = () => {
    // Priority: hover > first active step > default
    let currentId = "step1"
    if (hoveredStep) {
      currentId = hoveredStep
    } else if (activeSteps.length > 0) {
      currentId = activeSteps[0]
    }
    
    return stepMetadata.find(step => step.id === currentId) || stepMetadata[0]
  }

  const currentStep = getCurrentStepMeta()

  return (
    <section
      id="launch-process"
      className="py-12 md:py-24 lg:py-32 border-t border-black/5"
    >
      <div className="mx-auto max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 md:px-6">
        <ScrollView>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8 text-center md:text-left">
            The Zebra Process: How I Launch Your Product
          </h2>
        </ScrollView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image with overlay - hidden on mobile */}
          <div className="hidden md:block relative h-[400px] rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <OptimizedImage
                  src={currentStep.image}
                  alt={currentStep.altText}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Color overlay */}
                <div 
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ backgroundColor: `${currentStep.bgColor}40` }}
                />
                
                {/* Icon and title overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                    <currentStep.icon 
                      className="w-16 h-16 mb-4 mx-auto" 
                      style={{ color: currentStep.textColor }}
                      aria-hidden="true"
                    />
                    <h3 
                      className="text-2xl font-semibold text-center"
                      style={{ color: currentStep.textColor }}
                    >
                      {currentStep.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
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
                  High-fidelity UI coded in days, not months. It&apos;s the first
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