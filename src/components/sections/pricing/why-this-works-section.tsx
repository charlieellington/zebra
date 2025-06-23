"use client";

/**
 * Why This Model Works - Three key benefits of the pricing structure
 * Explains incentive alignment, risk control, and cash-flow friendliness
 */

import React from "react";
import { ScrollView } from "@/components/scroll-view";
import { TrendingUp, Shield, Wallet } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Incentive alignment",
    description: "I deliver the highest-value work first, because shipping early lets you cancel early.",
    color: "#CDCBFF", // purple
  },
  {
    icon: Shield,
    title: "Risk control",
    description: "You avoid long lock-ins and bloated backlogs.",
    color: "#E7BDD7", // pink
  },
  {
    icon: Wallet,
    title: "Cash-flow friendly",
    description: "You fund only what moves the needle, not idle burn.",
    color: "#FDA7A0", // coral
  },
];

export default function WhyThisWorksSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollView>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Why This Model Works
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Built to align our incentives and protect your runway
            </p>
          </div>
        </ScrollView>

        <ScrollView delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-black/10 p-6 space-y-4 transition-all"
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${benefit.color}20` }}
                  >
                    <Icon 
                      className="w-6 h-6" 
                      style={{ color: benefit.color }}
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
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