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
    title: "Startup founders",
    content: "who need to test a new app idea ASAP to find product–market fit before the runway runs out. (We provide the speed and lean iteration to do exactly that.)",
    color: "#CDCBFF"
  },
  {
    id: "product-teams",
    icon: Code2,
    title: "Product teams with developers",
    content: "who have engineering talent but lack UX/UI bandwidth. We'll slot in as your design & front-end experts, rapidly shaping your product's interface and even integrating with your backend.",
    color: "#E7BDD7"
  },
  {
    id: "sme-business",
    icon: Building2,
    title: "SMEs and non-tech businesses",
    content: "that need a custom internal tool or app built from scratch (and don't have an in-house design or dev team). We design and build your solution end-to-end, fast.",
    color: "#CDCBFF"
  },
  {
    id: "mvp-teams",
    icon: Package,
    title: "Teams with an MVP",
    content: "who have a bare-bones product that users find clunky or limited. We can overhaul your UX/UI and quickly add the features users are asking for to level up your product.",
    color: "#E7BDD7"
  },
  {
    id: "stuck-companies",
    icon: RefreshCw,
    title: "Companies stuck in limbo",
    content: "after freelancers or agencies have let you down with delays, miscommunication, or lack of accountability. Our integrated approach gets your product moving forward again with weekly visible progress.",
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
        <ScrollView>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-center md:text-left">
            Who I Help
          </h2>
        </ScrollView>

        <ScrollView delay={0.1}>
          {defaultOpen !== undefined && (
            <Accordion
              type="multiple"
              defaultValue={defaultOpen}
              className="w-full space-y-2"
            >
              {audiences.map((audience) => {
                const Icon = audience.icon
                return (
                  <AccordionItem key={audience.id} value={audience.id} className="border rounded-lg">
                    <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline px-4">
                      <div className="flex items-center gap-3">
                        <Icon 
                          className="h-5 w-5 flex-shrink-0" 
                          style={{ color: audience.color }}
                        />
                        <span>{audience.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground px-4 pl-12">
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