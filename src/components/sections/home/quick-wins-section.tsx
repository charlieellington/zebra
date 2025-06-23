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
  return (
    <section className="py-16" id="quick-wins">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollView stagger delay={0.1}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 md:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <ScrollViewStaggerWrapper key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-col items-center space-y-2 cursor-pointer group">
                        <Icon className="w-5 h-5 text-foreground/80 group-hover:text-foreground transition-colors" />
                        <span className="font-medium text-base text-center">
                          {benefit.label}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p className="text-xs">{benefit.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </ScrollViewStaggerWrapper>
              );
            })}
          </div>
        </ScrollView>
      </div>
    </section>
  );
} 