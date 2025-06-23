"use client";

import { ScrollView } from "@/components/scroll-view";
import { Zap, Target, Code2, Star, Euro, Scissors } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { useEffect, useState } from "react";

const benefits = [
  { 
    icon: Target, 
    label: "Validated results at speed", 
    description: "User testing in every cycle",
    fullDescription: "Every cycle includes user testing, so you know each iteration hits the mark before doubling down. It's built-in validation to de-risk your big ideas.",
    bg: "#E7BDD7",
    textColor: "#C054A0",
    gradient: "from-[#E7BDD7]/20 to-[#E7BDD7]/5"
  },
  { 
    icon: Code2, 
    label: "Design & dev in one", 
    description: "No handoff delays",
    fullDescription: "Need a backend or integrations? No problem. I handle front-end and back-end development as needed to deliver a complete, working product – not just a pretty prototype.",
    bg: "#FDA7A0",
    textColor: "#E85D75",
    gradient: "from-[#FDA7A0]/20 to-[#FDA7A0]/5"
  },
  { 
    icon: Star, 
    label: "Quality Design", 
    description: "Beautiful, consistent UI",
    fullDescription: "Enjoy beautiful, consistent UI using proven libraries and design systems. I prioritise a great user experience and fast delivery over any ego-driven from-scratch designs that slow you down.",
    bg: "#FFE4B5",
    textColor: "#D4A574",
    gradient: "from-[#FFE4B5]/20 to-[#FFE4B5]/5"
  },
];

export default function BenefitsBridgeSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="pt-12 md:pt-20 pb-8 md:pb-12 bg-gradient-to-b from-muted/20 to-white border-t">
      <div className="mx-auto max-w-5xl px-6 space-y-8">
        <ScrollView delay={0.05}>
          <p className="text-center max-w-4xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed md:leading-loose">
            With Zebra Design, you can{" "}
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:scale-105 align-middle cursor-pointer" 
                      style={{ backgroundColor: "#CDCBFF30" }}>
                  <span className="p-1.5 rounded-md flex items-center justify-center" style={{ backgroundColor: "#CDCBFF40" }}>
                    <Zap className="w-4 h-4" style={{ color: "#6B68FF" }} />
                  </span>
                  <span className="font-medium" style={{ color: "#6B68FF" }}>launch in 2-4 weeks</span>
                </span>
              </TooltipTrigger>
              <TooltipPrimitive.Portal>
                <TooltipPrimitive.Content
                  className="max-w-xs border-0 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-5 py-3 text-xs text-balance"
                  style={{ 
                    backgroundColor: "#E8E7FF",
                    color: '#1a1a1a',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
                  }}
                  sideOffset={5}
                >
                  <p className="text-xs leading-relaxed font-medium">
                    <strong>Launch in 2-4 weeks:</strong> Go from idea to a clickable, working product in 2–4 weeks. I move at breakneck speed to get a usable app in front of your users ASAP.
                  </p>
                  <TooltipPrimitive.Arrow 
                    className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" 
                    style={{ 
                      backgroundColor: "#E8E7FF",
                      fill: "#E8E7FF" 
                    }}
                  />
                </TooltipPrimitive.Content>
              </TooltipPrimitive.Portal>
            </Tooltip>
            {" "}instead of waiting months to hire a team, dealing with unreliable freelancers, or paying expensive agencies. All for a{" "}
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:scale-105 align-middle cursor-pointer" 
                      style={{ backgroundColor: "#B8E8D430" }}>
                  <span className="p-1.5 rounded-md flex items-center justify-center" style={{ backgroundColor: "#B8E8D440" }}>
                    <Euro className="w-4 h-4" style={{ color: "#4A9B7F" }} />
                  </span>
                  <span className="font-medium" style={{ color: "#4A9B7F" }}>monthly flat fee from €5,000</span>
                </span>
              </TooltipTrigger>
              <TooltipPrimitive.Portal>
                <TooltipPrimitive.Content
                  className="max-w-xs border-0 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-5 py-3 text-xs text-balance"
                  style={{ 
                    backgroundColor: "#E2F2EC",
                    color: '#1a1a1a',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
                  }}
                  sideOffset={5}
                >
                  <p className="text-xs leading-relaxed font-medium">
                    <strong>Clear Pricing:</strong> One flat monthly fee covers <strong>all</strong> design and development – no hourly rates or surprise change orders. Unlimited requests (handled one at a time for quality). Plus, you can pause or cancel whenever you need.
                  </p>
                  <TooltipPrimitive.Arrow 
                    className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" 
                    style={{ 
                      backgroundColor: "#E2F2EC",
                      fill: "#E2F2EC" 
                    }}
                  />
                </TooltipPrimitive.Content>
              </TooltipPrimitive.Portal>
            </Tooltip>
            {" "}that you can{" "}
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:scale-105 align-middle cursor-pointer" 
                      style={{ backgroundColor: "#FFDAB930" }}>
                  <span className="p-1.5 rounded-md flex items-center justify-center" style={{ backgroundColor: "#FFDAB940" }}>
                    <Scissors className="w-4 h-4" style={{ color: "#C09456" }} />
                  </span>
                  <span className="font-medium" style={{ color: "#C09456" }}>cancel anytime</span>
                </span>
              </TooltipTrigger>
              <TooltipPrimitive.Portal>
                <TooltipPrimitive.Content
                  className="max-w-xs border-0 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-5 py-3 text-xs text-balance"
                  style={{ 
                    backgroundColor: "#FFF0E5",
                    color: '#1a1a1a',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
                  }}
                  sideOffset={5}
                >
                  <p className="text-xs leading-relaxed font-medium">
                    <strong>Cancel anytime:</strong> When I deliver the value you need based on the Agile 'Money for Nothing' Principle.
                  </p>
                  <TooltipPrimitive.Arrow 
                    className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" 
                    style={{ 
                      backgroundColor: "#FFF0E5",
                      fill: "#FFF0E5" 
                    }}
                  />
                </TooltipPrimitive.Content>
              </TooltipPrimitive.Portal>
            </Tooltip>
            .
          </p>
        </ScrollView>

        {/* Benefits strip */}
        <ScrollView delay={0.1}>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div 
                  key={idx} 
                  className={`bg-gradient-to-br ${b.gradient} backdrop-blur-sm rounded-xl p-6 text-center`}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 rounded-xl" style={{ backgroundColor: `${b.bg}30` }}>
                      <Icon className="w-8 h-8" style={{ color: b.bg }} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold" style={{ color: b.textColor }}>
                        {b.label}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {b.fullDescription}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollView>
      </div>
    </section>
  );
} 