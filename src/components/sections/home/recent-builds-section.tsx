"use client";

import { ScrollView } from "@/components/scroll-view";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Bot, Camera, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ColoredHighlight } from "@/components/ui/colored-highlight";

const aiProjects = [
  {
    title: "Therapist AI Tool",
    description: "I built a real-time therapy assistant: client talks, bot transcribes, AI generates hints for therapist.",
    buildTime: "Built in 1 week",
    icon: Bot,
    iconColor: "#CDCBFF", // Purple
    image: "/images/builds/IFS Application (1).png",
  },
  {
    title: "Waitlist Platform",
    description: "I created a simple tool to capture early adopters for any product launch.",
    buildTime: "Built in 2 days",
    icon: Sparkles,
    iconColor: "#E7BDD7", // Pink
    image: "/images/builds/Waitlist.png",
  },
  {
    title: "Sunni Photo Concept",
    description: "My first AI project where I learned databases and experimented with AI-powered processes.",
    buildTime: "Built in two weeks",
    icon: Camera,
    iconColor: "#FDA7A0", // Coral
    image: "/images/builds/Sunni (1).png",
  },
];

const designRoles = [
  {
    company: "Deep Work Studio",
    description: "I co-founded Web3's leading product design studio. We delivered UX for Ethereum, MakerDAO, and other innovators.",
    iconColor: "#B8D4E3", // Light blue (complementary)
    image: "/images/builds/Deep Work Studio (2).png",
    url: "https://www.deepwork.network/case-studies",
  },
  {
    company: "Ethereum Foundation",
    description: "I designed the Eth2.0 staking interface that helped transition billions in value to proof-of-stake.",
    iconColor: "#D4C5F9", // Lavender (variation of purple)
    image: "/images/builds/Ethereum Foundation.png",
    url: "https://www.investopedia.com/ethereum-2-0-6455959",
    metric: "$Billions Transacted",
    metricColor: "#E85D75", // Coral text color
    metricBg: "#FDA7A0", // Coral background
    logo: "/images/logos/ethereum.png",
  },
  {
    company: "Ramp Network",
          description: "The product I designed helped them raise $120M. It now processes millions in web3-to-fiat transactions.",
    iconColor: "#FDBCB4", // Peach (variation of coral)
    image: "/images/builds/Ramp (1).png",
    url: "https://ramp.network/blog/ramp-network-closes-70m-series-b-round",
    metric: "$120M Raised",
    metricColor: "#4A9B7F", // Green text color
    metricBg: "#B8E8D4", // Green background
    logo: "/images/logos/ramp.png",
  },
  {
    company: "Nexus Mutual",
    description: "I built their web3 insurance UI before design patterns existed. They're now a category leader with $200M+ coverage.",
    iconColor: "#F2C6DE", // Soft pink (variation)
    image: "/images/builds/Nexus Mutual.png",
    url: "https://nexusmutual.io/",
    metric: "$200M+ Insurance Coverage",
    metricColor: "#C054A0", // Pink text color
    metricBg: "#E7BDD7", // Pink background
    logo: "/images/logos/nexus%20mutual.png",
  },
];

const metrics = [
  {
    metric: "$120M",
    logo: "/images/logos/ramp.png",
    logoAlt: "Ramp Network",
    description: "Ramp raised $120M on the product I designed",
    bg: "#B8E8D4", // Changed to green to match
    textColor: "#4A9B7F", // Green text color
  },
  {
    metric: "$200M+",
    logo: "/images/logos/nexus%20mutual.png",
    logoAlt: "Nexus Mutual",
    description: "Nexus Mutual manages $200M+ coverage on the platform I built",
    bg: "#E7BDD7",
    textColor: "#C054A0", // Pink text color
  },
  {
    metric: "Billions",
    logo: "/images/logos/ethereum.png",
    logoAlt: "Ethereum Foundation",
    description: "Ethereum transitioned billions via the interface I crafted",
    bg: "#FDA7A0",
    textColor: "#E85D75", // Coral text color
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
        {/* Two-column layout for desktop */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
          {/* Built with AI Subsection */}
          <div className="space-y-6">
            <ScrollView>
              <h3 className="text-xl font-semibold">Projects I Built with AI</h3>
              <p className="text-muted-foreground text-sm sm:text-base max-w-md mt-2">
                I designed, coded, and shipped every project below using an AI-first workflow.
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
              <h3 className="text-xl font-semibold">My Design Background</h3>
              <p className="text-muted-foreground text-sm sm:text-base max-w-md mt-2">
                Years perfecting design to launch processes for early stage teams.
              </p>
            </ScrollView>
            
            <div className="space-y-3">
              {designRoles.map((role, index) => {
                return (
                  <ScrollView key={index} delay={0.1 * (index + 1)}>
                    <Link 
                      href={role.url || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block group"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => role.image && handleMouseEnter(role.image)}
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
                            {role.metric && (
                              <div className="mb-4">
                                <div 
                                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg font-bold text-2xl"
                                  style={{ 
                                    backgroundColor: `${role.metricBg}30`,
                                    color: role.metricColor 
                                  }}
                                >
                                  {role.metric}
                                </div>
                              </div>
                            )}
                            {role.logo && (
                              <Image 
                                src={role.logo} 
                                alt={role.company}
                                width={100} 
                                height={40} 
                                className="object-contain opacity-80" 
                              />
                            )}
                            {!role.logo && (
                              <CardTitle className="text-base font-semibold">{role.company}</CardTitle>
                            )}
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