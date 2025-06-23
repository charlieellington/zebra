"use client";

import { ScrollView } from "@/components/scroll-view";
import VantaTrunk from "@/components/vanta-trunk";
import { useEffect, useState } from "react";

export default function CredoSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-32" id="credo">
      <div className="mx-auto max-w-5xl px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text content - left column on desktop */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <ScrollView>
              <blockquote className="space-y-6">
                <p className="text-2xl md:text-3xl lg:text-4xl italic leading-relaxed text-balance">
                  "Only hire people who either write code or go out and get users."
                </p>
                <cite className="block text-lg not-italic text-muted-foreground">
                  — Paul Graham, <span className="italic">The 18 Mistakes That Kill Startups</span>
                </cite>
              </blockquote>
            </ScrollView>
            
            <ScrollView delay={0.1}>
              <div className="mt-8 space-y-4">
                <p className="text-lg font-medium text-balance">
                  That's the lens I use for every project: ship working code, talk to users, skip the fluff.
                </p>
                <p className="text-lg text-muted-foreground">
                  Zebra Design is my solo practice. No middle managers — you work directly with me.
                </p>
              </div>
            </ScrollView>
          </div>

          {/* Vanta animation - responsive sizing */}
          {isMounted && (
            <>
              {/* Tablet view - smaller animation below text */}
              <div className="hidden sm:flex lg:hidden justify-center mt-12">
                <div className="w-[250px] h-[250px] opacity-70">
                  <VantaTrunk 
                    chaos={0.8}
                    spacing={12}
                    color={0x111111}
                    backgroundColor={0xFCF8F4}
                    width={250}
                    height={250}
                  />
                </div>
              </div>

              {/* Desktop view - full size animation in right column */}
              <div className="hidden lg:flex justify-center items-center">
                <div className="w-[350px] h-[350px] xl:w-[400px] xl:h-[400px]">
                  <VantaTrunk 
                    chaos={1.0}
                    spacing={10}
                    color={0x111111}
                    backgroundColor={0xFCF8F4}
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
} 