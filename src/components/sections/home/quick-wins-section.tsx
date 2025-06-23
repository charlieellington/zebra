"use client";

import { ScrollView, ScrollViewStaggerWrapper } from "@/components/scroll-view";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Zap,
  Target,
  Euro,
  Brush,
  Monitor,
  Scissors,
} from "lucide-react";
import { useEffect, useState } from "react";

const benefits = [
  {
    icon: Zap,
    label: "Speed",
    description: "Go from idea to a working, tested product in weeks, not months.",
  },
  {
    icon: Target,
    label: "Validation",
    description: "Every iteration includes user testing to de-risk your ideas.",
  },
  {
    icon: Euro,
    label: "Flat Price",
    description: "One flat monthly fee, no surprise hours or change orders.",
  },
  {
    icon: Brush,
    label: "Quality Design",
    description: "Quality design in every iteration -- no shortcuts.",
  },
  {
    icon: Monitor,
    label: "Full-stack",
    description: "Front-end and back-end development as needed -- not just design.",
  },
  {
    icon: Scissors,
    label: "Cancel Anytime",
    description: "Month-to-month engagement. Pause or stop with a 20% wrap-up fee.",
  },
];

export default function QuickWinsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-16 md:py-32" id="benefits">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-5xl">
          <TooltipProvider>
            <ScrollView stagger delay={0.02}>
              <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3 lg:grid-cols-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <ScrollViewStaggerWrapper key={benefit.label}>
                      {isMobile ? (
                        // Mobile: Always show description
                        <div className="space-y-2 p-4 rounded-lg bg-card border border-border">
                          <div className="flex items-center space-x-2">
                            <Icon className="h-5 w-5 text-foreground flex-shrink-0" />
                            <span className="text-sm font-medium">
                              {benefit.label}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      ) : (
                        // Desktop: Tooltip on hover
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="group flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-muted transition-all duration-200 cursor-pointer">
                              <Icon className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform" />
                              <span className="text-sm font-medium">
                                {benefit.label}
                              </span>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs text-sm">
                              {benefit.description}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </ScrollViewStaggerWrapper>
                  );
                })}
              </div>
            </ScrollView>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
} 