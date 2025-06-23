"use client";

import { ScrollView } from "@/components/scroll-view";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Bot, Camera, Building2, Briefcase, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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
    description: "Web3's leading product design studio.",
    icon: Building2,
    iconColor: "#B8D4E3", // Light blue (complementary)
    image: "/images/builds/Deep Work Studio (2).png",
  },
  {
    company: "Ethereum Foundation",
    description: "Designed the transition to eth2.0 staking.",
    icon: Building2,
    iconColor: "#D4C5F9", // Lavender (variation of purple)
    image: "/images/builds/Ethereum Foundation.png",
  },
  {
    company: "Ramp Network",
    description: "Raised $120M off the product I designed.",
    icon: Briefcase,
    iconColor: "#FDBCB4", // Peach (variation of coral)
    image: "/images/builds/Ramp (1).png",
  },
  {
    company: "Nexus Mutual",
    description: "Web3 insurance UI before web3 patterns existed.",
    icon: Building2,
    iconColor: "#F2C6DE", // Soft pink (variation)
    image: "/images/builds/Nexus Mutual.png",
  },
];

export default function RecentBuildsSection() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isLargeDesktop, setIsLargeDesktop] = useState(false);
  const [expandedIntro, setExpandedIntro] = useState(false);
  const [expandedOutro, setExpandedOutro] = useState(false);

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
    <section className="py-16 md:py-32" id="recent-builds">
      <div className="mx-auto max-w-5xl space-y-12 px-6 md:space-y-16">
        {/* Section Intro with Expandable Text */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollView>
            <div 
              className="space-y-4 cursor-pointer"
              onMouseEnter={() => !isMobile && setExpandedIntro(true)}
              onMouseLeave={() => !isMobile && setExpandedIntro(false)}
              onClick={() => isMobile && setExpandedIntro(!expandedIntro)}
            >
              <p className="text-lg font-semibold md:text-xl">
                <span className="block">Founder-led. Design-centric. Outcome-driven.</span>
              </p>
              <p className="text-muted-foreground">
                {expandedIntro ? (
                  <>
                    I founded Zebra Design after ten years of launching early-stage products. 
                    After co-founding Deep Work Studio (a design agency that delivered successful UX for Web3 innovators like Ethereum, MakerDAO and others), 
                    I saw how traditional design handoffs often slowed development to a crawl. 
                    In 2025 I embraced AI-assisted coding and discovered a better way to build products: <span className="font-semibold text-foreground">design and development unified from the start</span> for ultra-fast results.
                  </>
                ) : (
                  <>I founded Zebra Design after ten years of launching early-stage products ...</>
                )}
              </p>
            </div>
          </ScrollView>
        </div>

        {/* Two-column layout for desktop */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
          {/* Built with AI Subsection */}
          <div className="space-y-6">
            <ScrollView>
              <h3 className="text-xl font-semibold">Built with AI</h3>
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
                      <Card className="bg-white dark:bg-card border hover:border-foreground/20 dark:hover:border-foreground/30 transition-all duration-200 hover:scale-[1.02] rounded-lg relative overflow-hidden group-hover:cursor-alias">
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
            </ScrollView>
            
            <div className="space-y-3">
              {designRoles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <ScrollView key={index} delay={0.1 * (index + 1)}>
                    <Link 
                      href="https://www.energyflow.studio/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block group"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => handleMouseEnter(role.image)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Card className="bg-white dark:bg-card border hover:border-foreground/20 dark:hover:border-foreground/30 transition-all duration-200 hover:scale-[1.02] rounded-lg relative overflow-hidden group-hover:cursor-alias">
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
              className="space-y-4 cursor-pointer"
              onMouseEnter={() => !isMobile && setExpandedOutro(true)}
              onMouseLeave={() => !isMobile && setExpandedOutro(false)}
              onClick={() => isMobile && setExpandedOutro(!expandedOutro)}
            >
              <p className="text-lg font-semibold md:text-xl">
                I'm your hands-on partner with skin in the game – when you succeed, I succeed.
              </p>
              {expandedOutro && (
                <p className="text-muted-foreground">
                  Today, Zebra Design is my solo practice where I blend design thinking with AI-powered development. 
                  I'm obsessed with making product development <span className="font-semibold text-foreground">faster and more user-centric</span>. 
                  My mission is simple: help innovators launch sooner and learn faster. 
                  Yes, I love beautiful design, but I love real-world results even more.
                </p>
              )}
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