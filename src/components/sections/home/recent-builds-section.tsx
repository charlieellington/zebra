"use client";

import { ScrollView } from "@/components/scroll-view";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Bot, Camera, Building2, Briefcase, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const aiProjects = [
  {
    title: "Therapist AI Tool",
    description: "Call room: client talks, bot transcribes, AI-generated hints for therapist.",
    buildTime: "Built in 1 week",
    icon: Bot,
    iconColor: "#CDCBFF", // Purple
    image: "/images/builds/IFS Application (1).png",
  },
  {
    title: "Waitlist Platform",
    description: "Capture early adopters for any product.",
    buildTime: "Built in 2 days",
    icon: Sparkles,
    iconColor: "#E7BDD7", // Pink
    image: "/images/builds/Waitlist.png",
  },
  {
    title: "Sunni Photo Concept",
    description: "My first AI project to learn databases and experiment with processes.",
    buildTime: "Built in two weeks",
    icon: Camera,
    iconColor: "#FDA7A0", // Coral
    image: "/images/builds/Sunni (1).png",
  },
];

const designRoles = [
  {
    company: "Deep Work Studio",
    description: "Co-founded Web3's leading product design studio. Delivered UX for Ethereum, MakerDAO, and other innovators.",
    icon: Building2,
    iconColor: "#B8D4E3", // Light blue (complementary)
    image: "/images/builds/Deep Work Studio (2).png",
    url: "https://www.deepwork.network/case-studies",
  },
  {
    company: "Ethereum Foundation",
    description: "Designed the Eth2.0 staking interface. Helped transition billions in value to proof-of-stake.",
    icon: Building2,
    iconColor: "#D4C5F9", // Lavender (variation of purple)
    image: "/images/builds/Ethereum Foundation.png",
    url: "https://www.investopedia.com/ethereum-2-0-6455959",
  },
  {
    company: "Ramp Network",
          description: "Product I designed helped raise $120M. Now processing millions in web3-to-fiat transactions.",
    icon: Briefcase,
    iconColor: "#FDBCB4", // Peach (variation of coral)
    image: "/images/builds/Ramp (1).png",
    url: "https://ramp.network/blog/ramp-network-closes-70m-series-b-round",
  },
  {
    company: "Nexus Mutual",
    description: "Built web3 insurance UI before patterns existed. Now a category leader with $200M+ coverage.",
    icon: Building2,
    iconColor: "#F2C6DE", // Soft pink (variation)
    image: "/images/builds/Nexus Mutual.png",
    url: "https://nexusmutual.io/",
  },
];

const metrics = [
  {
    metric: "$120M",
    logo: "/images/logos/ramp.png",
    logoAlt: "Ramp Network",
    description: "Ramp raised $120M on the product I designed",
    bg: "#CDCBFF",
  },
  {
    metric: "$200M+",
    logo: "/images/logos/nexus%20mutual.png",
    logoAlt: "Nexus Mutual",
    description: "Nexus Mutual manages $200M+ coverage on the platform I built",
    bg: "#E7BDD7",
  },
  {
    metric: "Billions",
    logo: "/images/logos/ethereum.png",
    logoAlt: "Ethereum Foundation",
    description: "Ethereum transitioned billions via the interface I crafted",
    bg: "#FDA7A0",
  },
];

export default function RecentBuildsSection() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isLargeDesktop, setIsLargeDesktop] = useState(false);
  const [expandedIntro, setExpandedIntro] = useState(false);
  const [expandedOutro, setExpandedOutro] = useState(true); // Permanently expanded

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    // Check if screen is large desktop (2xl breakpoint = 1536px)
    const checkLargeDesktop = () => {
      setIsLargeDesktop(window.innerWidth >= 1536);
    };
    
    checkMobile();
    checkLargeDesktop();
    
    window.addEventListener('resize', checkMobile);
    window.addEventListener('resize', checkLargeDesktop);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', checkLargeDesktop);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (image: string) => {
    if (!isMobile) {
      setHoveredImage(image);
    }
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  // Determine preview image width based on screen size
  const previewWidth = isLargeDesktop ? 600 : 300;

  return (
    <section className="pt-8 md:pt-16 pb-16 md:pb-32" id="recent-builds">
      <div className="mx-auto max-w-5xl space-y-12 px-6 md:space-y-16">
        {/* Section Intro with Expandable Text */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollView>
            <div className="space-y-2 mb-8 md:mb-12 relative">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Trusted By Startups That Raised $120M+
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Founder-led. Design-centric. Outcome-driven.
              </p>
              <div 
                className="mt-6 cursor-pointer"
                onMouseEnter={!isMobile ? () => setExpandedIntro(true) : undefined}
                onMouseLeave={!isMobile ? () => setExpandedIntro(false) : undefined}
                onClick={isMobile ? () => setExpandedIntro(!expandedIntro) : undefined}
              >
                <div className="text-muted-foreground">
                  <p>I founded Zebra Design after ten years of launching early-stage products.</p>
                  <div className="overflow-hidden relative">
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: expandedIntro ? "auto" : "0px",
                        opacity: expandedIntro ? 1 : 0,
                        marginTop: expandedIntro ? "1rem" : "0px"
                      }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.4, 0.0, 0.2, 1] // Custom easing for smooth animation
                      }}
                    >
                      <p>
                        After co-founding Deep Work Studio (a design agency that delivered successful UX for Web3 innovators like Ethereum, MakerDAO and others), 
                        I saw how traditional design handoffs often slowed development to a crawl. 
                        In 2025 I embraced AI-assisted coding and discovered a better way to build products: <span className="font-semibold text-foreground">design and development unified from the start</span> for ultra-fast results.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollView>
        </div>

        {/* Metrics banner */}
        <div className="bg-[#FBFBFB] rounded-xl px-6 py-8 md:py-10 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((result, index) => {
              return (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center px-3 py-2 rounded-lg flex-shrink-0 font-bold text-lg" style={{ backgroundColor: `${result.bg}40`, color: result.bg }}>
                      {result.metric}
                    </div>
                    <Image 
                      src={result.logo} 
                      alt={result.logoAlt} 
                      width={100} 
                      height={40} 
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity" 
                    />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {result.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Two-column layout for desktop */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
          {/* Built with AI Subsection */}
          <div className="space-y-6">
            <ScrollView>
              <h3 className="text-xl font-semibold">Built with AI</h3>
              <p className="text-muted-foreground text-sm sm:text-base max-w-md mt-2">
                I designed, coded, and shipped every build below using an AI-first workflow. They prove the process works—and that I can launch your product just as fast.
              </p>
            </ScrollView>
            
            <div className="space-y-3">
              {aiProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <ScrollView key={index} delay={0.1 * (index + 1)}>
                    <Link 
                      href="https://www.energyflow.studio/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block group"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => handleMouseEnter(project.image)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Card className="bg-white dark:bg-card border hover:border-foreground/20 dark:hover:border-foreground/30 transition-all duration-200 hover:scale-[1.02] relative overflow-hidden group-hover:cursor-alias">
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 text-xs text-muted-foreground">
                          <ExternalLink className="h-3 w-3" />
                          <span>external link for demo</span>
                        </div>
                        {/* Mobile external link icon */}
                        {isMobile && (
                          <div className="absolute top-3 right-3 text-muted-foreground">
                            <ExternalLink className="h-4 w-4" />
                          </div>
                        )}
                        <CardHeader className="pb-1 pt-3">
                          <div className="space-y-1">
                            <Icon className="h-6 w-6" style={{ color: project.iconColor }} />
                            <CardTitle className="text-base font-semibold">{project.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-1.5">
                          <CardDescription className="text-sm">{project.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="pb-3">
                          <span 
                            className="text-xs font-semibold px-2 py-1 rounded-full"
                            style={{ 
                              backgroundColor: `${project.iconColor}30`,
                              color: project.iconColor 
                            }}
                          >
                            {project.buildTime}
                          </span>
                        </CardFooter>
                      </Card>
                    </Link>
                  </ScrollView>
                );
              })}
            </div>
          </div>

          {/* Design Background Subsection */}
          <div className="space-y-6">
            <ScrollView>
              <h3 className="text-xl font-semibold">Design Background</h3>
              <p className="text-muted-foreground text-sm sm:text-base max-w-md mt-2">
                Years in product design taught me to spot real user pain and focus on what matters. I bring those skills into development so your build moves faster and delivers more impact than traditional agencies.
              </p>
            </ScrollView>
            
            <div className="space-y-3">
              {designRoles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <ScrollView key={index} delay={0.1 * (index + 1)}>
                    <Link 
                      href={role.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block group"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => handleMouseEnter(role.image)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Card className="bg-white dark:bg-card border hover:border-foreground/20 dark:hover:border-foreground/30 transition-all duration-200 hover:scale-[1.02] relative overflow-hidden group-hover:cursor-alias">
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 text-xs text-muted-foreground">
                          <ExternalLink className="h-3 w-3" />
                          <span>external link for demo</span>
                        </div>
                        {/* Mobile external link icon */}
                        {isMobile && (
                          <div className="absolute top-3 right-3 text-muted-foreground">
                            <ExternalLink className="h-4 w-4" />
                          </div>
                        )}
                        <CardHeader className="pb-1 pt-3">
                          <div className="space-y-1">
                            <Icon className="h-6 w-6" style={{ color: role.iconColor }} />
                            <CardTitle className="text-base font-semibold">{role.company}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-3">
                          <CardDescription className="text-sm">{role.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                  </ScrollView>
                );
              })}
              
              {/* And many more... note */}
              <ScrollView delay={0.5}>
                <p className="text-sm text-muted-foreground italic pl-3 mt-2">And many more...</p>
              </ScrollView>
            </div>
          </div>
        </div>

        {/* Outro with Expandable Text */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollView>
            <div 
              className="space-y-4"
            >
              <p className="text-lg font-semibold md:text-xl">
                I&apos;m your hands-on partner with skin in the game – when you succeed, I succeed.
              </p>
              <div className="text-muted-foreground overflow-hidden relative">
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedOutro ? "auto" : "0px",
                    opacity: expandedOutro ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.4, 0.0, 0.2, 1] // Custom easing for smooth animation
                  }}
                >
                  <p className="pt-4">
                    Today, Zebra Design is my solo practice where I blend design thinking with AI-powered development. 
                    I&apos;m obsessed with making product development <span className="font-semibold text-foreground">faster and more user-centric</span>. 
                    My mission is simple: help innovators launch sooner and learn faster. 
                    Yes, I love beautiful design, but I love real-world results even more.
                  </p>
                </motion.div>
              </div>
            </div>
          </ScrollView>
        </div>
      </div>

      {/* Floating Image Preview */}
      {hoveredImage && !isMobile && (
        <div
          className="fixed pointer-events-none transition-opacity duration-200 z-[9999]"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y + 20}px`,
            transform: 'translateX(-50%)',
          }}
        >
          <div 
            className="relative rounded-lg overflow-hidden border border-foreground/10"
            style={{ width: `${previewWidth}px` }}
          >
            <Image
              src={hoveredImage}
              alt="Project preview"
              width={previewWidth}
              height={Math.round(previewWidth * 0.67)} // Maintain aspect ratio
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
} 