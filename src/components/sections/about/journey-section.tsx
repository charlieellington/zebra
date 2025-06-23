"use client";

import React from "react";
import { ScrollView } from "@/components/scroll-view";
import { motion } from "motion/react";
import Image from "next/image";
import {
  Anchor,
  Briefcase,
  Building2,
  Camera,
  Plane,
  Calendar,
  Wind,
  Ship,
  Car,
  Heart,
  Baby,
} from "lucide-react";

const timelineItems = [
  {
    period: "1995–2007",
    title: "Ocean roots",
    description:
      "Kitesurfing since eleven and surfing even earlier. Salt water, wind and waves shaped my mindset long before pixels and code did.",
    icon: Wind,
    color: "#B8D4E3",
    image: "/images/about/Kitesurfing%202.jpg",
  },
  {
    period: "2008–2012",
    title: "Sailing-instructor summers",
    description:
      "Taught sailing by day, chased wind with a kite by evening. Forged self-reliance early, learning to hustle without a safety net.",
    icon: Anchor,
    color: "#CDCBFF",
    image: "/images/about/Kitesurfing%201.jpg",
  },
  {
    period: "2013–2017",
    title: "Yoga retreats in Ibiza & the Alps",
    description:
      "Bootstrapped a yoga-holiday company from zero to €1.2 M revenue in two years. Proof that storytelling, design and sweat can build real businesses.",
    icon: Plane,
    color: "#E7BDD7",
    image: "/images/about/Founder%20yoga%20retreat%20company.jpg",
  },
  {
    period: "2018",
    title: "Electric yacht conversion",
    description:
      "Diesel engine died, so I taught myself DC electronics on YouTube. Ripped out the fumes and wired in solar, batteries, and a silent motor. First taste of hardware hacking.",
    icon: Ship,
    color: "#FDA7A0",
    image: "/images/about/Electric%20sailing%20yacht%20conversion.jpg",
  },
  {
    period: "2017–2019",
    title: "Freelance design beginnings",
    description:
      "Volunteered a redesign for Nexus Mutual. One open-source pull request snowballed into paid work, then a full-time leap into product design.",
    icon: Briefcase,
    color: "#B8D4E3",
    image: "/images/builds/Nexus%20Mutual.png",
  },
  {
    period: "2019–2023",
    title: "Deep Work studio",
    description:
      "Founded and led a 40-person Web3 design studio. Projects for Ethereum, MakerDAO and others taught me scale, leadership, and when to step back.",
    icon: Building2,
    color: "#CDCBFF",
    image: "/images/builds/Deep%20Work%20Studio%20(2).png",
  },
  {
    period: "2023",
    title: "Remote-work campervan",
    description:
      "Took a sabbatical, gutted a van, and built a solar-powered rolling office. Coded by cliffs, wing-foiled at lunch, shipped side projects at sunset.",
    icon: Car,
    color: "#E7BDD7",
    image: "/images/about/Remote%20work%20campervan.jpg",
  },
  {
    period: "2023",
    title: "Surfing & values reset",
    description:
      "Months of dawn patrol and salt-water reflection distilled my core values: freedom, craft, and work that serves real people.",
    icon: Camera,
    color: "#FDA7A0",
    image: "/images/about/Surfing.jpg",
  },
  {
    period: "2023",
    title: "Meeting Bene",
    description:
      "Met my partner Bene, who taught me to flow rather than fixate. Life's richer when you leave space for serendipity.",
    icon: Heart,
    color: "#B8D4E3",
    image: "/images/about/Bene-1.jpg",
  },
  {
    period: "2025 (planned)",
    title: "Growing family",
    description:
      "Photo of Bene days before we learned we're expecting our first daughter. Baby arrives December 2025; we're still chasing waves and building a life we love.",
    icon: Heart,
    color: "#CDCBFF",
    image: "/images/about/Bene.jpg",
  },
  {
    period: "2024–Present",
    title: "Zebra Design — solo venture",
    description:
      "Launched a one-person design-as-a-service studio. Founders get my full focus; I get to craft products end-to-end. Win-win.",
    icon: Calendar,
    color: "#E7BDD7",
  },
];

export default function JourneySection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollView>
          <h2 className="text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
            My Journey
          </h2>
        </ScrollView>

        <div className="mt-16 relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, index) => (
              <ScrollView key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row md:items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-foreground rounded-full z-10" />

                  {/* Content card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-white rounded-xl p-6 transition-all">
                      <div className="flex items-start gap-4">
                        <div 
                          className="p-2 rounded-lg flex-shrink-0"
                          style={{ backgroundColor: `${item.color}30` }}
                        >
                          <item.icon 
                            className="w-6 h-6" 
                            style={{ color: item.color }}
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div 
                            className="text-sm font-semibold uppercase tracking-wide"
                            style={{ color: item.color }}
                          >
                            {item.period}
                          </div>
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                          {item.image && (
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={600}
                              height={400}
                              className="rounded-lg mt-4"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              </ScrollView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 