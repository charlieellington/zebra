"use client";

/**
 * Advantage Section – Why Zebra's integrated design+dev process beats dev-only teams or traditional agencies.
 */

import React from "react";
import { ScrollView } from "@/components/scroll-view";
import { PenTool, Users, FlaskConical, Rocket } from "lucide-react";

const items = [
  {
    icon: PenTool,
    title: "Design & Code, Unified",
    description:
      "One person designs and builds – no handovers, no mismatched specs, maximum efficiency.",
    color: "#CDCBFF",
  },
  {
    icon: Users,
    title: "Your Expertise, Baked In",
    description:
      "We co-create with you, the domain expert, so feedback happens live, not in slow email threads.",
    color: "#E7BDD7",
  },
  {
    icon: FlaskConical,
    title: "Rapid User Testing",
    description:
      "Prototype → test → iterate in days. We validate early so we only build what users need.",
    color: "#FDA7A0",
  },
  {
    icon: Rocket,
    title: "Value Upfront, No Bloat",
    description:
      "Incentives are aligned to ship the highest-impact features first, not pad billable hours.",
    color: "#B8D4E3",
  },
];

export default function AdvantageSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FCF8F4]/30">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollView>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Why Our Process Is Faster & Smarter
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Integrated design, development, and real-time collaboration slash weeks of back-and-forth.
            </p>
          </div>
        </ScrollView>

        <ScrollView delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-black/10 p-6 space-y-4 transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollView>
      </div>
    </section>
  );
} 