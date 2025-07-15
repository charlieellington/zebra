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
    period: "1989–2007",
    title: "Ocean roots",
    description:
      "I've been sailing since I was a kid (and started kitesurfing at 11). Growing up on the water taught me to love adventure and challenge – a mindset that's shaped everything I do.",
    icon: Wind,
    color: "#B8D4E3",
    image: "/images/about/Kitesurfing%202.jpg",
  },
  {
    period: "2008–2012",
    title: "Sailing-instructor summers",
    description:
      "Spent my summers teaching sailing. Working with crews of all ages taught me teamwork and leadership. I was *obsessed* with time on the water – so much that I realized I'd rather chart my own course in life than take a typical office job.",
    icon: Anchor,
    color: "#CDCBFF",
    image: "/images/about/Kitesurfing%201.jpg",
  },
  {
    period: "2013–2017",
    title: "Yoga retreats in Ibiza & the Alps",
    description:
      "Co-founded a yoga holiday startup with friends, from scratch. We bootstrapped it to €1.2M in revenue within two years – an insane ride! (Picture me answering customer calls on a mountain, arranging yoga instructors and villa rentals.) It was my first taste of building a business, and it taught me a ton about growth and customer experience.",
    icon: Plane,
    color: "#E7BDD7",
    image: "/images/about/Founder%20yoga%20retreat%20company.jpg",
  },
  {
    period: "2018",
    title: "Electric yacht conversion",
    description:
      "When the diesel engine on my old sailboat died, I literally taught myself electronics via YouTube and converted the boat to electric. Ripped out the fumes, wired up solar panels and batteries, and installed a silent motor. It was my first hardware hack – and it worked! This project gave me a huge confidence boost in my self-taught engineering skills (and a much quieter ride at sea).",
    icon: Ship,
    color: "#FDA7A0",
    image: "/images/about/Electric%20sailing%20yacht%20conversion.jpg",
  },
  {
    period: "2017–2019",
    title: "Freelance design beginnings",
    description:
      "Discovered product design by accident. I volunteered to redesign a dashboard for Nexus Mutual (a crypto project) just for fun. That one open-source pull request snowballed into paid freelance gigs, and before I knew it I had leapt full-time into product design. I realized I'd found my passion.",
    icon: Briefcase,
    color: "#B8D4E3",
    image: "/images/builds/Nexus%20Mutual.png",
  },
  {
    period: "2019–2023",
    title: "Deep Work Studio",
    description:
      "I founded and grew a Web3 design studio to 40 people, working on projects for Ethereum, MakerDAO, and more. It was exciting building a team and working at scale. I learned about leadership, managing growth, and also about knowing when to step back. Eventually, I decided to step away from the big studio to return to a more hands-on, personal way of working (and to reclaim some work–life balance!).",
    icon: Building2,
    color: "#CDCBFF",
    image: "/images/builds/Deep%20Work%20Studio%20(2).png",
  },
  {
    period: "2023",
    title: "Remote-work campervan",
    description:
      "After leaving the studio, I took a real sabbatical – a complete break from tech. Built a new campervan from scratch and lived off-grid for months. No computer, no Discord, no deadlines. Just sunrise surf sessions and the freedom to do absolutely nothing productive. It was exactly what I needed to reset and remember why I create in the first place.",
    icon: Car,
    color: "#E7BDD7",
    image: "/images/about/Remote%20work%20campervan.jpg",
  },
  {
    period: "2023",
    title: "Surfing & values reset",
    description:
      "Months of dawn patrol with my computer gathering dust. No work, just waves. This complete disconnection from tech gave me space to reflect on what really matters: freedom (living on my own terms), craft (creating things I'm proud of), and service (building things that genuinely help people). By stepping away completely, I found clarity on how I wanted to return.",
    icon: Camera,
    color: "#FDA7A0",
    image: "/images/about/Surfing.jpg",
  },
  {
    period: "2023",
    title: "Meeting Bene",
    description:
      "In the midst of that reset, I met my partner, Bene. She taught me a lot about balance – how to flow rather than fixate. Life's a lot richer when you leave space for serendipity (both in relationships and in work).",
    icon: Heart,
    color: "#B8D4E3",
    image: "/images/about/Bene-1.jpg",
  },
  {
    period: "2025 (planned)",
    title: "Growing family",
    description:
      "We're expecting our first daughter in Dec 2025. 😊 As my family grows, so does my commitment to designing a life (and career) that we love. (Yes, we're still chasing waves – just with a baby on board soon!)",
    icon: Heart,
    color: "#CDCBFF",
    image: "/images/about/Bene.jpg",
  },
  {
    period: "Early 2024",
    title: "Return to work & finding flow",
    description:
      "After months away, I slowly returned to work with a new perspective. I realized that design puts me in a flow state like nothing else – that feeling of complete absorption where hours disappear. This insight, combined with discovering AI coding tools, transformed how I approach creation. I wasn't just returning to work; I was evolving into something new.",
    icon: Briefcase,
    color: "#FDA7A0",
  },
  {
    period: "2024–Present",
    title: "Zebra Design (solo venture)",
    description:
      "Returned from sabbatical with clarity and launched Zebra Design. The game-changer? I discovered coding with AI and found my true calling – creating. No more handoffs to developers, no more lost-in-translation moments. Now I design in Figma AND build in code, seeing my ideas come to life completely. It's addictive. I'm having more fun than ever because I'm finally doing what I love most: creating products from start to finish.",
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
            {timelineItems.slice().reverse().map((item, index) => (
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