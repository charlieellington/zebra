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
              Solo Focus, Augmented by AI (The Future)
            </h2>
          </ScrollView>

          <ScrollView>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground">
              <p>
                Today, I'm a <strong className="text-foreground">solo designer</strong> with a twist: I've augmented my workflow by learning to code with the help of AI tools. 
                In the past, not knowing how to code kept me strictly on the design side. But recently I realized that <em>I could overcome my lack of coding skills by leveraging modern no-code tools and a bit of help from ChatGPT</em>. 
                So I dove in and started coding. Now, using AI-assisted development, I can rapidly prototype and even build out the designs I create — bringing ideas to life faster and more seamlessly than ever.
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
                    You get <strong className="text-foreground">10 years of design expertise</strong> plus modern AI-powered development. 
                    Your vision won't get lost in translation — I design it, I build it, I ship it. Fast.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedGroup>
          
          <ScrollView>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground">
              <p>
                This fusion of my <strong className="text-foreground">years of design experience</strong> with new AI-powered coding abilities has unlocked a better process. 
                Instead of throwing designs over the fence and hoping for the best, I can iterate on both design and implementation in tandem. 
                It ensures the final product remains true to the original vision and user experience.
              </p>
              
              <p>
                I genuinely believe this hybrid skill set is part of the <strong className="text-foreground">future of design</strong>: creatives who can both design and build, 
                working side-by-side with AI to amplify our productivity and precision. It's an exciting time, and I'm continuously learning and experimenting with these tools to deliver even more value.
              </p>
            </div>
          </ScrollView>

          <ScrollView>
            <div className="mt-16 text-center space-y-6">
              <p className="text-lg italic text-muted-foreground">
                Thanks for reading. I'm excited about the projects yet to come. 
                If you have a bold idea and need someone who can ship it fast, let's talk.
              </p>
              
              <Button asChild size="lg">
                <Link href="https://cal.com/charlieellington/zebra-call" target="_blank" rel="noopener noreferrer">
                  Book Free Intro Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <div className="pt-2">
                <Link href="/#launch-process" className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4">
                  See how I work →
                </Link>
              </div>
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  );
} 