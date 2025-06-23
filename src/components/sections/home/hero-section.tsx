import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, Code2, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import LogoCloud from "@/components/sections/home/logo-cloud";

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
  return (
    <>
      <div className="overflow-hidden min-h-screen">
        <section>
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
                <video
                  autoPlay
                  loop
                  muted
                  preload="auto"
                  className="size-full -scale-x-100 object-cover opacity-50 invert-0 dark:opacity-35 dark:invert "
                >
                  <source src="/hero-light.mp4" type="video/mp4" />
                </video>
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
                  Designers That Code with AI
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                >
                  I help you launch your digital product faster — design and coded — 
                  through a user-focused partnership.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.65,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-8 flex justify-center"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-full">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white">
                      <Zap className="text-muted-foreground mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm text-left">Idea → tested product in weeks, not months</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white">
                      <Code2 className="text-muted-foreground mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm text-left">I handle both design and development</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white">
                      <Users className="text-muted-foreground mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm text-left">Made for startup founders, SMEs, and product teams</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white">
                      <Rocket className="text-muted-foreground mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm text-left">A design-as-a-service model to design and develop your app lightning-fast</span>
                    </div>
                  </div>
                </AnimatedGroup>

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
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="https://cal.com/charlieellington/zebra-call" target="_blank">
                        <span className="text-nowrap">Book intro call</span>
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
                    <Link href="#services">
                      <span className="text-nowrap">View examples</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
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
