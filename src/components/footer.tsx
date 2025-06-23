"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Placeholder background - responsive visibility */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute inset-0 bg-[#FCF8F4] flex items-center justify-center">
          <span className="text-muted-foreground/30 text-4xl">Placeholder</span>
        </div>
      </div>

      <div className="relative z-10 bg-background py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Zebra Design</h3>
              <p className="text-sm text-muted-foreground">
                Full-stack development for ambitious startups
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/#recent-builds"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Recent Builds
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Apps I've Built</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://nobadpartscollective.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-semibold transition-colors hover:text-primary"
                  >
                    No Bad Parts Collective
                  </a>
                </li>
                <li>
                  <a
                    href="https://sunni.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-semibold transition-colors hover:text-primary"
                  >
                    Sunni.be
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/charlieellington/waitlist-kit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-semibold transition-colors hover:text-primary"
                  >
                    Waitlist Kit
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/charlieellington/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/charlie-ellington/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t pt-8">
            <div className="mb-4 text-center">
              <a
                href="https://www.energyflow.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-semibold transition-colors hover:text-primary"
              >
                Energy Flow Studio
              </a>
              <p className="mt-1 text-xs text-muted-foreground">
                My living knowledge hub—an ever-evolving collection of notes, plans and guiding principles
              </p>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              © {currentYear} Zebra Design. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
