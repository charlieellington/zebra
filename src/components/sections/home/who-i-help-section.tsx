"use client"

import { useEffect, useState } from "react"
import { ScrollView } from "@/components/scroll-view"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  Rocket, 
  Code2, 
  Building2, 
  Package, 
  RefreshCw 
} from "lucide-react"

const audiences = [
  {
    id: "startup",
    icon: Rocket,
    title: "Startup founders racing against the runway?",
    content: "Need to test your app idea ASAP before funding runs out? I'll get you from concept to tested product in weeks, not months. You focus on fundraising and growth while I handle the entire design and build.",
    color: "#CDCBFF"
  },
  {
    id: "product-teams",
    icon: Code2,
    title: "Product teams with no design bandwidth?",
    content: "Your developers are solid but UX is suffering? I'll slot in as your design & front-end expert, rapidly shaping your product's interface and integrating seamlessly with your backend team.",
    color: "#E7BDD7"
  },
  {
    id: "sme-business",
    icon: Building2,
    title: "SMEs with no in-house dev team?",
    content: "Need a custom internal tool built from scratch? I'll design and build your solution end-to-end, fast. No need to hire, manage, or coordinate multiple freelancers.",
    color: "#CDCBFF"
  },
  {
    id: "mvp-teams",
    icon: Package,
    title: "Teams with a clunky MVP?",
    content: "Users complaining about your bare-bones product? I'll overhaul your UX/UI and quickly add the features they're asking for – turning your MVP into a product people actually want to use.",
    color: "#E7BDD7"
  },
  {
    id: "stuck-companies",
    icon: RefreshCw,
    title: "Companies stuck after bad experiences?",
    content: "Tired of delays, miscommunication, and expensive agencies? I deliver weekly visible progress with my integrated approach. One person handling both design and dev means no more finger-pointing.",
    color: "#CDCBFF"
  }
]

export default function WhoIHelpSection() {
  const [defaultOpen, setDefaultOpen] = useState<string[] | undefined>(undefined)

  // Only open first item by default
  useEffect(() => {
    setDefaultOpen(["startup"])
  }, [])

  return (
    <section id="who-i-help" className="py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8 text-center md:text-left">
          Who Is This For?
        </h2>

        <ScrollView>
          {defaultOpen !== undefined && (
            <Accordion
              type="multiple"
              defaultValue={defaultOpen}
              className="w-full"
            >
              {audiences.map((audience) => {
                const Icon = audience.icon
                return (
                  <AccordionItem key={audience.id} value={audience.id}>
                    <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Icon 
                          className="h-5 w-5 flex-shrink-0" 
                          style={{ color: audience.color }}
                        />
                        <span>{audience.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground pl-8">
                      {audience.content}
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          )}
        </ScrollView>
      </div>
    </section>
  )
} 