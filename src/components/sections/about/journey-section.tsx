"use client";

import React from "react";
import { ScrollView } from "@/components/scroll-view";
import { motion } from "motion/react";
import { Anchor, Briefcase, Building2, Camera, Plane, Calendar } from "lucide-react";

const timelineItems = [
  {
    period: "2008–2015",
    title: "Finding my footing",
    description: "I began in digital marketing while pursuing my passion for the outdoors as a sailing instructor. These years taught me the importance of discipline, communication, and guiding others — skills that still inform my work today.",
    icon: Anchor,
    color: "#B8D4E3",
  },
  {
    period: "2013–2017",
    title: "Entrepreneurial ventures",
    description: "I founded a yoga retreat business in Ibiza (summers) and ran ski holiday tours in winters. Building these experiences from the ground up honed my entrepreneurial spirit and showed me how design and storytelling can create memorable customer experiences.",
    icon: Plane,
    color: "#CDCBFF",
  },
  {
    period: "2017–2018",
    title: "Freelance design beginnings",
    description: "Eager to pivot into tech, I started taking on freelance product design projects for early-stage startups. One of my first big breaks was designing for a Web3 startup (Nexus Mutual) — I volunteered to redesign their site to up-skill, which led to paid work on their app and opened the door to many more projects. I discovered that when I'm designing digital products, I often find myself in a flow state — hours can pass by effortlessly because I'm doing what I love.",
    icon: Briefcase,
    color: "#E7BDD7",
  },
  {
    period: "2018–2023",
    title: "Studio leadership",
    description: "I founded Deep Work, a product design studio focused on Web3. As founder and Head of Design, I led a team of over 40 designers and worked on 40+ projects in blockchain and fintech. Our team collaborated with founders and engineers to create bold, user‑centred interfaces that drove product-market fit and growth for clients. We tackled projects for notable platforms like Ethereum 2.0, MakerDAO, and many others in the decentralized tech space. While this period was exciting and full of impact, it was also intense — running a fast-growing studio taught me about scaling, leadership, and the importance of balance.",
    icon: Building2,
    color: "#FDA7A0",
  },
  {
    period: "2023",
    title: "Sabbatical and refocus",
    description: "After years of pushing hard, I stepped away for a sabbatical. I traveled in a self-built campervan (yes, I even got obsessed with designing and building campervans as a side project!) and spent months surfing, kiteboarding, and reflecting on what mattered most. This time off was transformative. I realized that true \"energy flow\" in work comes from a sweet spot: doing challenging, skill-building work that genuinely benefits people and the planet, while still leaving room for family, health and community. In other words, I needed to balance meaningful work with a healthy life. I also came to terms with the fact that I'm happiest when I'm creating (designing solutions), not managing large teams or chasing endless business growth. This insight set the stage for my next chapter.",
    icon: Camera,
    color: "#B8D4E3",
  },
  {
    period: "2024–Present",
    title: "Zebra Design — my solo venture",
    description: "Refreshed and refocused, I launched Zebra Design as a one-man design-as-a-service studio. Now I collaborate directly with founders and technical teams to design bold, user-focused products on demand — without the overhead of a big agency. Going solo means clients get my personal attention and expertise at every step, and I get to ensure each project aligns with my values and love for the craft. This chapter is about staying in flow: doing work I excel at and enjoy, while maintaining the balance I gained on sabbatical.",
    icon: Calendar,
    color: "#CDCBFF",
  },
];

export default function JourneySection() {
  return (
    <section className="py-16 md:py-32">
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
                    <div className="bg-white rounded-lg p-6 transition-all">
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