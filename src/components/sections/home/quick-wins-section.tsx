"use client";

import { ScrollView, ScrollViewStaggerWrapper } from "@/components/scroll-view";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
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
    color: "#CDCBFF", // Light purple/lavender
  },
  {
    label: "Validation",
    icon: Target,
    description: "Every iteration includes user testing to de-risk your ideas.",
    color: "#E7BDD7", // Light pink
  },
  {
    label: "Flat Price",
    icon: Euro,
    description: "One flat monthly fee, no surprise hours or change orders.",
    color: "#FDA7A0", // Light coral/salmon
  },
  {
    label: "Quality Design",
    icon: Star,
    description: "Quality design in every iteration — no shortcuts.",
    color: "#FFE4B5", // Light peach
  },
  {
    label: "Full-Stack",
    icon: Monitor,
    description: "Front-end and back-end development as needed — not just design.",
    color: "#B8E8D4", // Light mint green
  },
  {
    label: "Cancel Anytime",
    icon: Scissors,
    description: "Month-to-month engagement. Pause or stop with a 20% wrap-up fee.",
    color: "#FFDAB9", // Light apricot
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
                      <div 
                        className="p-3 rounded-lg transition-colors"
                        style={{ backgroundColor: `${benefit.color}40` }} // 40 = 25% opacity in hex
                      >
                        <Icon className="w-6 h-6" style={{ color: benefit.color }} />
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
                        <div className="flex flex-col items-center space-y-3 cursor-pointer group transition-transform hover:scale-110">
                          <div 
                            className="p-3 rounded-lg transition-all group-hover:shadow-md group-hover:scale-110"
                            style={{ 
                              backgroundColor: `${benefit.color}40`, // 40 = 25% opacity in hex
                              boxShadow: 'none',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            <Icon 
                              className="w-5 h-5 transition-all group-hover:w-6 group-hover:h-6" 
                              style={{ color: benefit.color }}
                            />
                          </div>
                          <span className="font-medium text-sm text-center">
                            {benefit.label}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipPrimitive.Portal>
                        <TooltipPrimitive.Content
                          className="max-w-xs border-0 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-5 py-3 text-xs text-balance"
                          style={{ 
                            backgroundColor: `${benefit.color}40`, // Match icon background
                            color: '#1a1a1a', // Dark text for better contrast on light backgrounds
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
                          }}
                          sideOffset={5}
                        >
                          <p className="text-xs leading-relaxed font-medium">{benefit.description}</p>
                          <TooltipPrimitive.Arrow 
                            className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" 
                            style={{ 
                              backgroundColor: benefit.color,
                              fill: benefit.color 
                            }}
                          />
                        </TooltipPrimitive.Content>
                      </TooltipPrimitive.Portal>
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