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
          
          <TextEffect
            preset="fade-in-blur"
            delay={0.3}
            as="p"
            className="text-xl md:text-2xl text-muted-foreground text-center mb-12"
          >
            Why a founder-turned-designer-developer is the fastest way to ship your product
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
                  I'm <strong className="text-foreground">Charlie Ellington</strong> — a designer-developer who's launched products that raised <ColoredHighlight color="green">$120M</ColoredHighlight> and secured <strong className="text-foreground">billions in web3 applications</strong>. 
                  Experience I now pour into shipping <em>your</em> product in <ColoredHighlight color="purple">weeks, not months</ColoredHighlight>.
                </p>
                <p>
                  Over the past decade I've worn many hats. From digital marketer and sailing instructor to startup founder and design lead — including founding a yoga retreat holiday company that grew to €1.2&nbsp;million in revenue in just two years. 
                  Through it all, one thing remained constant: I love crafting bold, user-centered designs that solve real problems.
                </p>
                <p>
                  My journey took me from teaching sailing to leading a 40-person design team in Web3, 
                  and now to running my own solo design practice powered by AI.
                </p>
              </div>
            </div>
            
            {/* Proof points logos */}
            <div className="mt-12 space-y-6">
              <p className="text-center text-base text-muted-foreground max-w-2xl mx-auto">
                I've designed products for leading Web3 companies that collectively raised <strong className="text-foreground">$120M+</strong> and manage <strong className="text-foreground">billions in value</strong>. 
                This experience now powers my AI-driven approach to ship your product faster.
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

            {/* AI-Augmented Summary */}
            <div className="mt-16 bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Solo Focus, Augmented by AI</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Today I'm a solo designer with a twist: I've learned to code with AI. 
                Ten years of design expertise, now turbocharged with AI-powered development. 
                I design it, I build it, I ship it. Fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link
                    href="https://cal.com/charlieellington/zebra-call"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Free Intro Call
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link
                    href="#solo-focus"
                  >
                    See how I work →
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
} 