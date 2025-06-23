"use client";

import { ScrollView, ScrollViewStaggerWrapper } from "@/components/scroll-view";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  Zap, 
  Target, 
  Euro, 
  Star, 
  Monitor, 
  Scissors 
} from "lucide-react";
import { useEffect, useState } from "react";

const benefits = [
  {
    label: "Speed",
    icon: Zap,
    description: "Go from idea to a working, tested product in weeks, not months.",
  },
  {
    label: "Validation",
    icon: Target,
    description: "Every iteration includes user testing to de-risk your ideas.",
  },
  {
    label: "Flat Price",
    icon: Euro,
    description: "One flat monthly fee, no surprise hours or change orders.",
  },
  {
    label: "Quality Design",
    icon: Star,
    description: "Quality design in every iteration — no shortcuts.",
  },
  {
    label: "Full-Stack",
    icon: Monitor,
    description: "Front-end and back-end development as needed — not just design.",
  },
  {
    label: "Cancel Anytime",
    icon: Scissors,
    description: "Month-to-month engagement. Pause or stop with a 20% wrap-up fee.",
  },
];

export default function QuickWinsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-16 md:py-24" id="quick-wins">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollView stagger delay={0.1}>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 md:gap-4 lg:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <ScrollViewStaggerWrapper key={index}>
                  {isMobile ? (
                    // Mobile view - always show descriptions
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-3 rounded-lg bg-muted/50">
                        <Icon className="w-6 h-6 text-foreground/80" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-sm">
                          {benefit.label}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Desktop/tablet view - with tooltips
                    <Tooltip delayDuration={200}>
                      <TooltipTrigger asChild>
                        <div className="flex flex-col items-center space-y-3 cursor-pointer group transition-transform hover:scale-105">
                          <div className="p-3 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors">
                            <Icon className="w-5 h-5 text-foreground/80 group-hover:text-foreground transition-colors" />
                          </div>
                          <span className="font-medium text-sm text-center">
                            {benefit.label}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p className="text-xs leading-relaxed">{benefit.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </ScrollViewStaggerWrapper>
              );
            })}
          </div>
        </ScrollView>
      </div>
    </section>
  );
} 