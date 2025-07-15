import React from "react";
import { ScrollView } from "@/components/scroll-view";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Cpu, Code2, Rocket } from "lucide-react";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";

export default function SoloFocusSection() {
  return (
    <section id="solo-focus" className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <ScrollView>
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl text-center">
              Solo Focus, Augmented by AI
            </h2>
          </ScrollView>

          <ScrollView>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground">
              <p>
                Today I'm a <strong className="text-foreground">solo designer/developer</strong> with a twist: I've supercharged my workflow by incorporating AI and code. For years, I was stuck in the traditional model – designing beautiful interfaces in Figma, then handing them off to developers and hoping they'd come to life as I envisioned. But after returning from my sabbatical in 2024, everything changed. I started experimenting with AI for coding, and within weeks I was hooked. I found myself iterating constantly, reviewing and refining my processes every single week. Why? Because I discovered what I'd been missing all along: <strong className="text-foreground">the pure joy of creating</strong>.
              </p>
              <p>
                You see, what I truly love about design isn't just making things look good – it's <strong className="text-foreground">bringing ideas to life</strong>. And when you can both design AND code, you unlock a whole new level of creation. There's something magical about sketching an idea, designing it in Figma, then immediately building it with code. No handoffs, no compromises, no "that's not quite what I had in mind" moments. Just pure, unfiltered creation from concept to reality.
              </p>
            </div>
          </ScrollView>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
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
                    duration: 1.5,
                  },
                },
              },
            }}
            className="mt-8"
          >
            <div className="rounded-xl border bg-[#FCF8F4] p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[#CDCBFF30] flex-shrink-0">
                  <Rocket className="w-6 h-6" style={{ color: '#CDCBFF' }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">What this means for you:</h3>
                  <p className="text-muted-foreground">
                    You get someone who's obsessed with <strong className="text-foreground">creating</strong>, not just designing. My 10+ years of design experience combined with AI-powered development means your vision goes from concept to reality in one seamless flow. I'm not just your designer or your developer – I'm your creator, seeing every detail through from the first sketch to the final deploy.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedGroup>
          
          <ScrollView>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground">
              <p>
                This fusion of design and code has fundamentally changed how I work. Every week, I refine my process, discovering new ways to create faster and better. It's become an addiction – the good kind. I wake up excited to build, to experiment, to see what's possible when you remove the barriers between design and development. The result? Products that are exactly as envisioned, built with the passion of someone who loves every aspect of creation.
              </p>
              
              <p>
                I genuinely believe this is the <strong className="text-foreground">future of product creation</strong> – designers who don't just hand off static mockups, but who bring their visions to life completely. It's not about replacing developers; it's about becoming a more complete creator. Every project I take on feeds this addiction to create, to build, to see ideas transform into reality. And honestly? I can't imagine working any other way now.
              </p>
            </div>
          </ScrollView>

          <ScrollView>
            <div className="mt-16 text-center space-y-6">
              <p className="text-lg italic text-muted-foreground">
                Thanks for reading my story. I'm incredibly <strong className="text-foreground">excited for the projects yet to come</strong>, and maybe that includes yours. If you're a founder with an idea brewing and you want someone who's as addicted to creating as you are – someone who can take your vision from Figma to fully-functioning product – then <strong className="text-foreground">let's create something amazing together</strong>! I'd love to hear what you're working on.
              </p>
              
              <Button asChild size="lg">
                <Link href="https://cal.com/charlieellington/zebra-call" target="_blank" rel="noopener noreferrer">
                  Book Free Intro Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <div className="pt-2">
                <Link href="/#launch-process" className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4">
                  See how I create →
                </Link>
              </div>
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  );
} 