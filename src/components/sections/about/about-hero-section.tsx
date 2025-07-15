import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ExternalLink, Youtube, BookOpen } from "lucide-react";
import { ScrollView } from "@/components/scroll-view";
import { Button } from "@/components/ui/button";
import { ColoredHighlight } from "@/components/ui/colored-highlight";

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
                  <em>Hi, I'm Charlie Ellington.</em> I'm a former startup founder turned designer–developer who loves nothing more than <strong className="text-foreground">building products</strong> that solve real problems. For years, I was a product designer working in Figma, always handing off my designs to developers or collaborating with engineering teams. But in 2024, after returning from a sabbatical, something clicked – I started coding with AI and rapidly discovered an incredible workflow. I became addicted to iterating and reviewing my processes every week, and I realized something profound: <strong className="text-foreground">what I truly love about design is creating</strong>. Now that I can both design AND code, I'm finally able to see my ideas come to life completely. I really am creating.
                </p>
                <p>
                  After a decade in the startup world wearing every hat from marketing to CEO, this newfound ability to create end-to-end has transformed how I work. I've had some wild adventures along the way: I taught sailing in my early 20s, co-founded a yoga retreat business (that unexpectedly grew to over €1M in revenue), and even led a 40-person design team in the Web3 space. Not everything was smooth sailing (I definitely hit my share of storms and failures along the way!), but through it all one thing stayed constant: <strong className="text-foreground">I love crafting bold, user-centered designs that make a difference</strong>. The difference now? I don't just design them – I build them too.
                </p>
                <p>
                  In 2023, after burning the candle at both ends, I took a step back – a complete break. I built a campervan and spent months living off-grid, surfing at sunrise, with my computer gathering dust. No Discord, no deadlines, just waves and freedom. That sabbatical was a game-changer – it helped me rediscover my core values: <strong className="text-foreground">freedom, craft, and doing work that truly serves people</strong>. When I returned to work in early 2024, I knew I wanted something different. I launched <em>Zebra Design</em> as a solo venture and discovered coding with AI. Now I get to choose projects I believe in, partner directly with fellow founders, and pour all my experience into <strong className="text-foreground">creating complete products</strong> – from the first sketch to the final line of code. No handoffs, no translation issues, just pure creation.
                </p>
                <p className="italic">
                  (In short: I've been in your shoes as a founder, and I bring that perspective to everything I create. No hype – just honest collaboration and the joy of bringing ideas to life, completely.)
                </p>
              </div>
            </div>
            
            {/* Proof points logos */}
            <div className="mt-12 space-y-6">
              <p className="text-center text-base text-muted-foreground max-w-2xl mx-auto">
                I've been lucky to design products for startups that went on to raise over <strong className="text-foreground">$120M</strong> – a journey that taught me a ton about what makes products (and teams) succeed. 
                Here are some of the companies I've had the privilege to work with:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/images/logos/ramp.png"
                    alt="Ramp Network"
                    width={100}
                    height={40}
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                  <p className="text-xs text-muted-foreground text-center">$120M raised</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/images/logos/ethereum.png"
                    alt="Ethereum Foundation"
                    width={100}
                    height={40}
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                  <p className="text-xs text-muted-foreground text-center">Staking UI</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/images/logos/nexus%20mutual.png"
                    alt="Nexus Mutual"
                    width={100}
                    height={40}
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                  <p className="text-xs text-muted-foreground text-center">$200M+ coverage</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/images/logos/MAKER-DAO-LOGO.png"
                    alt="MakerDAO"
                    width={100}
                    height={40}
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                  <p className="text-xs text-muted-foreground text-center">DeFi pioneer</p>
                </div>
                <div className="flex flex-col items-center gap-2 col-span-2 md:col-span-1">
                  <Image
                    src="/images/logos/Consensys_logo_2023.svg.png"
                    alt="ConsenSys"
                    width={120}
                    height={40}
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                  <p className="text-xs text-muted-foreground text-center">Web3 leader</p>
                </div>
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