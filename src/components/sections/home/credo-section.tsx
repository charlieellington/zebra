"use client";

import { ScrollView } from "@/components/scroll-view";
import VantaTrunk from "@/components/vanta-trunk";

export default function CredoSection() {
  return (
    <section className="py-16 md:py-32" id="credo">
      <div className="mx-auto max-w-5xl px-6">
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          {/* Text content - left column on desktop */}
          <div className="max-w-xl mx-auto md:mx-0">
            <ScrollView>
              <blockquote className="space-y-6">
                <p className="text-2xl md:text-3xl italic leading-relaxed">
                  "Only hire people who either write code or go out and get users."
                </p>
                <cite className="block text-lg not-italic">
                  — Paul Graham, <span className="italic">The 18 Mistakes That Kill Startups</span>
                </cite>
              </blockquote>
            </ScrollView>
            
            <ScrollView delay={0.1}>
              <div className="mt-8 space-y-4">
                <p className="text-lg font-medium">
                  That's the lens I use for every project: ship working code, talk to users, skip the fluff.
                </p>
                <p className="text-lg">
                  Zebra Design is my solo practice. No middle managers — you work directly with me.
                </p>
              </div>
            </ScrollView>
          </div>

          {/* Vanta animation - right column on desktop, hidden on mobile */}
          <div className="hidden md:flex justify-center items-center mt-12 md:mt-0">
            <div className="w-[300px] h-[300px]">
              <VantaTrunk 
                chaos={1.0}
                spacing={10}
                color={0x111111}
                backgroundColor={0xFCF8F4}
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 