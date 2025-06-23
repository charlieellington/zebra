"use client";

import { ScrollView } from "@/components/scroll-view";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamic imports to avoid SSR issues
const VantaTrunk = dynamic(() => import("@/components/vanta-trunk"), {
  ssr: false,
});

const CSSTreePattern = dynamic(() => import("@/components/css-tree-pattern"), {
  ssr: false,
});

// Set this to true to use CSS pattern instead of Vanta
const USE_CSS_PATTERN = true;

export default function CredoSection() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Check if we're on desktop and not on a low-powered device
    const isDesktop = window.innerWidth >= 768;
    const hasGoodPerformance = !navigator.hardwareConcurrency || navigator.hardwareConcurrency >= 4;
    
    setShowAnimation(isDesktop && hasGoodPerformance);
  }, []);

  return (
    <section className="py-16 md:py-32" id="credo">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 md:gap-8 items-center">
          {/* Text content */}
          <div className="text-center md:text-left">
            <ScrollView>
              <blockquote className="space-y-6">
                <p className="text-2xl md:text-3xl italic font-light leading-relaxed">
                  "Only hire people who either write code or go out and get users."
                </p>
                <cite className="block text-base md:text-lg not-italic">
                  — Paul Graham,{" "}
                  <span className="text-muted-foreground">
                    The 18 Mistakes That Kill Startups
                  </span>
                </cite>
              </blockquote>
            </ScrollView>

            <ScrollView delay={0.2}>
              <div className="mt-8 space-y-4">
                <p className="text-lg md:text-xl">
                  That's the lens I use for every project:{" "}
                  <span className="font-medium">ship working code</span>,{" "}
                  <span className="font-medium">talk to users</span>,{" "}
                  skip the fluff.
                </p>
                <p className="text-base md:text-lg">
                  Zebra Design is my solo practice. No middle managers — you work
                  directly with me.
                </p>
              </div>
            </ScrollView>
          </div>

          {/* Animation - CSS Pattern or Vanta */}
          {showAnimation && (
            <ScrollView delay={0.3}>
              <div className="mt-8 md:mt-0 flex justify-center">
                {USE_CSS_PATTERN ? (
                  <CSSTreePattern
                    width={300}
                    height={300}
                    className="rounded-lg shadow-sm"
                  />
                ) : (
                  <VantaTrunk
                    width={300}
                    height={300}
                    chaos={1.0}
                    className="rounded-lg"
                  />
                )}
              </div>
            </ScrollView>
          )}
        </div>
      </div>
    </section>
  );
} 