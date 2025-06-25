"use client";

import React from "react";
import Script from "next/script";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import LogoCloud from "@/components/sections/home/logo-cloud";

export default function VantaHeaderSection() {
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
          highlightColor: 0xffffff,
          midtoneColor: 0xffc5bc,
          lowlightColor: 0xd2c8ff,
          baseColor: 0xf0f6ff,
          blurFactor: 0.65,
          speed: 0.9,
          zoom: 0.70,
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
          if (vantaRef.current && (window as any).VANTA) {
            setVantaEffect(
              (window as any).VANTA.FOG({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                highlightColor: 0xffffff,
                midtoneColor: 0xffc5bc,
                lowlightColor: 0xd2c8ff,
                baseColor: 0xf0f6ff,
                blurFactor: 0.65,
                speed: 0.9,
                zoom: 0.70,
              })
            );
          }
        }}
      />
      <div className="overflow-hidden">
        <section className="pb-0">
          <div className="relative pt-4 md:pt-6">
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
              <div className="h-[200px] md:h-[250px] absolute inset-2 -z-10 overflow-hidden rounded-xl border border-black/10 dark:border-white/5">
                <div
                  ref={vantaRef}
                  className="size-full object-cover opacity-90 dark:opacity-35"
                />
              </div>
            </AnimatedGroup>

            <div className="absolute inset-0 -z-10 size-full"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="relative py-8 md:py-10">
                <LogoCloud />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 