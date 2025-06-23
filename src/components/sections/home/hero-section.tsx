"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, Code2, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import LogoCloud from "@/components/sections/home/logo-cloud";
import Script from "next/script";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  const [vantaEffect, setVantaEffect] = React.useState<any>(null);
  const vantaRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!vantaEffect && vantaRef.current && (window as any).VANTA) {
      setVantaEffect(
        (window as any).VANTA.FOG({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xe7bdd7,
          midtoneColor: 0xcdcbff,
          lowlightColor: 0xfda7a0,
          baseColor: 0xffffff,
          blurFactor: 0.48,
          speed: 0.9,
          zoom: 0.7,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Trigger effect initialization after script loads
          if (vantaRef.current && (window as any).VANTA) {
            setVantaEffect(
              (window as any).VANTA.FOG({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                highlightColor: 0xe7bdd7,
                midtoneColor: 0xcdcbff,
                lowlightColor: 0xfda7a0,
                baseColor: 0xffffff,
                blurFactor: 0.48,
                speed: 0.9,
                zoom: 0.7,
              })
            );
          }
        }}
      />
      <div className="overflow-hidden">
        <section className="pb-16 md:pb-20 lg:pb-24">
          <div className="relative pt-8 md:pt-12 lg:pt-16">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <div className="h-screen xl:h-auto absolute inset-2 -z-10 overflow-hidden rounded-xl border border-black/10 lg:aspect-video dark:border-white/5">
                <div
                  ref={vantaRef}
                  className="size-full object-cover opacity-90 dark:opacity-35"
                />
              </div>
            </AnimatedGroup>

            <div className="absolute inset-0 -z-10 size-full "></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 text-balance text-5xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-semibold"
                >
                  Design & Code, On-Demand
                </TextEffect>
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.3}
                  as="p"
                  className="mt-4 text-xl md:text-2xl lg:text-3xl text-muted-foreground"
                >
                  From designers that code with AI
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                >
                  Get from idea to a tested product in weeks, not months. 
                  I design and build your digital product through an AI-powered, user-focused partnership.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      variant="default"
                      className="rounded-xl px-5 text-base bg-black text-white hover:bg-black/90"
                    >
                      <Link href="https://cal.com/charlieellington/zebra-call" target="_blank" rel="noopener noreferrer">
                        <span className="text-nowrap">Book Free Intro Call</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5"
                  >
                    <Link href="#recent-builds">
                      <span className="text-nowrap">See Recent Work</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
                <p className="mt-2 text-xs text-muted-foreground">Intro call · 30&nbsp;min · zero sales pressure</p>

                {/* Audience identifier */}
                <p className="mt-8 text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
                  Built for startup founders, SMEs, and teams racing the runway—or simply ready to grow.
                </p>
              </div>
            </div>
          </div>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.85,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative -mr-56 mt-12 overflow-hidden px-2 sm:mr-0 sm:mt-16 md:mt-24 lg:mt-20">
              <LogoCloud />
            </div>
          </AnimatedGroup>
        </section>
      </div>
    </>
  );
}
