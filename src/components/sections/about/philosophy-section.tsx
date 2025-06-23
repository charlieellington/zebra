import React from "react";
import { ScrollView } from "@/components/scroll-view";
import { Heart, Eye, Sparkles, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const coreValues = [
  {
    title: "User-Centered & Impact-Driven",
    description: "I design with the end-user in mind and strive to build products that are genuinely valuable to people — and by extension, beneficial to our communities and planet. If a product will improve lives or make a positive impact, I'm all in.",
    icon: Heart,
  },
  {
    title: "Authenticity & Transparency",
    description: "After leading a large team, I learned the importance of honesty about capabilities and teamwork. I don't believe in overselling or ego-driven design. I'll tell you what's feasible, and I credit collaboration where it's due (no lone-wolf pretenses here). This authentic approach means you know exactly who you're working with and what to expect.",
    icon: Eye,
  },
  {
    title: "Flow & Balance",
    description: "My best work happens in a state of flow — those moments when I'm so engaged in designing that it doesn't even feel like work. Achieving this consistently means structuring work in a healthy way. I prioritize routines and processes that sustain creativity (like focus blocks and even morning surf sessions) so I can bring fresh, energetic focus to my projects. I've seen firsthand that maintaining work/life balance isn't just good for me — it leads to more creative, high-quality results for my clients too.",
    icon: Sparkles,
  },
];

export default function PhilosophySection() {
  return (
    <section className="py-16 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollView>
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              Philosophy & Approach
            </h2>
          </ScrollView>
          <ScrollView>
            <p className="mt-6 text-lg text-muted-foreground">
              I believe great design lives at the intersection of <strong className="text-foreground">empathy and bold creativity</strong>. 
              My approach is to unite a deep understanding of users with daring visual and product ideas — a combination that not only delights users 
              but also drives tangible results like product-market fit and business growth.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              I've always been <strong className="text-foreground">collaborative</strong> in my process, working closely with founders, engineers, 
              and other stakeholders. By facilitating workshops and listening closely, I make sure we're solving the right problems and that everyone 
              is invested in the solution.
            </p>
          </ScrollView>
        </div>

        <div className="mt-16">
          <ScrollView>
            <h3 className="text-center text-xl font-semibold mb-8">
              Core values that guide my work:
            </h3>
          </ScrollView>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <ScrollView key={index}>
                <Card className="h-full p-6 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div 
                        className="inline-flex p-3 rounded-lg"
                        style={{ backgroundColor: '#CDCBFF30' }}
                      >
                        <value.icon className="w-6 h-6" style={{ color: '#CDCBFF' }} />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </ScrollView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 