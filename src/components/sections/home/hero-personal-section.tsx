"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { ColoredHighlight } from "@/components/ui/colored-highlight";
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

export default function HeroPersonalSection() {
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

            <div className="absolute inset-0 -z-10 size-full"></div>
            <div className="mx-auto max-w-4xl px-6">
              <div className="py-16 md:py-24 lg:py-32">
                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.15,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Tagline */}
                    <TextEffect
                      preset="fade-in-blur"
                      speedSegment={0.3}
                      as="h1"
                      className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.2] md:leading-[1.1] lg:leading-[0.5] mb-12 md:mb-16"
                      style={{ color: '#121212' }}
                    >
                      Design and AI Code
                    </TextEffect>

                    {/* Profile and greeting section */}
                    <AnimatedGroup
                      variants={{
                        container: {
                          visible: {
                            transition: {
                              delayChildren: 0.3,
                              staggerChildren: 0.1,
                            },
                          },
                        },
                        ...transitionVariants,
                      }}
                      className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8"
                    >
                      {/* Profile Photo with glow effect */}
                      <div className="relative">
                        <div 
                          className="w-[72px] h-[72px] rounded-full relative overflow-hidden"
                          style={{
                            boxShadow: '0px 0px 4px 4px #FFF, 0px 0px 8px 8px #FFF'
                          }}
                        >
                          <Image
                            src="/images/other/charlie-ellington.jpg"
                            alt="Charlie Ellington"
                            width={72}
                            height={72}
                            className="w-full h-full object-cover"
                            priority
                          />
                          {/* Radial gradient overlay */}
                          <div 
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.00) 92.31%, #FFF 100%)'
                            }}
                          />
                        </div>
                      </div>

                      {/* Text group */}
                      <div className="text-center md:text-left">
                        {/* Greeting text */}
                        <h2 
                          className="text-[18px] md:text-[20px] font-semibold leading-[24px]"
                          style={{ color: '#121212' }}
                        >
                          Hi, I'm Charlie — I'm a <ColoredHighlight color="pink">designer</ColoredHighlight> <ColoredHighlight color="coral">building</ColoredHighlight> custom apps using <ColoredHighlight color="blue">AI</ColoredHighlight>.
                        </h2>
                        
                        {/* Sub-line */}
                        <p 
                          className="text-[16px] md:text-[18px] font-normal leading-[26px] md:leading-[28px] mt-2"
                          style={{ color: '#494868' }}
                        >
                          Helping you go from <ColoredHighlight color="purple">idea to user-focused product</ColoredHighlight> in weeks, not months.
                        </p>
                      </div>
                    </AnimatedGroup>

                    {/* CTA */}
                    <AnimatedGroup
                      variants={{
                        container: {
                          visible: {
                            transition: {
                              delayChildren: 0.6,
                              staggerChildren: 0.1,
                            },
                          },
                        },
                        ...transitionVariants,
                      }}
                      className="flex flex-col items-center"
                    >
                      <Button
                        asChild
                        size="lg"
                        variant="default"
                        className="rounded-xl px-6 text-base bg-black text-white hover:bg-black/90"
                      >
                        <Link href="#contact">
                          <span>Book an Intro Call</span>
                        </Link>
                      </Button>
                      <p className="mt-3 text-sm" style={{ color: '#494868' }}>30 minutes · No sales pressure · Free Advice</p>
                    </AnimatedGroup>
                  </div>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 