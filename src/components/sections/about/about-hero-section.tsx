import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ExternalLink, Youtube, BookOpen } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <TextEffect
            per="word"
            preset="fade-in-blur"
            as="h1"
            className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl mb-12"
          >
            About Me
          </TextEffect>
          
          {/* Photo and intro text container */}
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
            {/* Photo and text side by side on desktop, stacked on mobile */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Photo */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/other/charlie-ellington.jpg"
                  alt="Charlie Ellington"
                  width={200}
                  height={200}
                  className="rounded-xl"
                />
              </div>
              
              {/* Intro text */}
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Hello! I'm <strong className="text-foreground">Charlie Ellington</strong> — a product designer, creative entrepreneur, and lifelong learner. 
                  Over the past decade I've worn many hats, from digital marketer and sailing instructor to startup founder and design lead. 
                  Through it all, one thing has remained constant: I love crafting bold, user-centered designs that solve real problems.
                </p>
                <p>
                  My journey has taken me from teaching sailing in my early career to leading a 40-person design team in the Web3 tech world, 
                  and now to running my own solo design practice.
                </p>
              </div>
            </div>
            
            {/* Link cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Energy Flow Studio Card */}
              <Link href="https://www.energyflow.studio" target="_blank" rel="noopener noreferrer">
                <Card className="p-5 transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#CDCBFF30]">
                        <BookOpen className="h-5 w-5" style={{ color: '#CDCBFF' }} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Energy Flow Studio</h3>
                        <p className="text-sm text-muted-foreground">My knowledge base & writing</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                </Card>
              </Link>
              
              {/* YouTube Channel Card */}
              <Link href="https://www.youtube.com/@charlieflowenergy" target="_blank" rel="noopener noreferrer">
                <Card className="p-5 transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#E7BDD730]">
                        <Youtube className="h-5 w-5" style={{ color: '#E7BDD7' }} />
                      </div>
                      <div>
                        <h3 className="font-semibold">YouTube Channel</h3>
                        <p className="text-sm text-muted-foreground">Video blog & tutorials</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                </Card>
              </Link>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
} 