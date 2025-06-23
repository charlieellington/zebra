"use client";

import { ScrollView } from "@/components/scroll-view";
import Image from "next/image";

export default function CredoSection() {
  return (
    <section className="py-16 md:py-20" id="credo">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl">
          <ScrollView>
            <blockquote className="space-y-4 text-center">
              <p className="text-base md:text-lg italic leading-relaxed text-balance">
                "Only hire people who either write code or go out and get users."
              </p>
              <cite className="flex flex-wrap items-center justify-center gap-2 text-sm not-italic text-muted-foreground">
                <Image
                  src="/images/other/bio-12.jpeg"
                  alt="Paul Graham"
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
                <span>— Paul Graham,</span>
                <span className="flex items-center gap-1">
                  Founder of
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36"
                    className="inline-block h-4 w-4"
                    aria-label="Y Combinator"
                  >
                    <rect width="36" height="36" fill="#F26625" />
                    <path d="M12 8h5l3.5 7 3.5-7h5l-6.5 11v9h-4v-9L12 8z" fill="white" />
                  </svg>
                </span>
                <a 
                  href="https://paulgraham.com/startupmistakes.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="italic hover:underline underline-offset-2"
                >
                  The 18 Mistakes That Kill Startups
                </a>
              </cite>
            </blockquote>
          </ScrollView>
          
          <ScrollView delay={0.1}>
            <div className="mt-16 space-y-4 text-center">
              <p className="text-lg md:text-xl italic leading-relaxed text-balance">
                "This is the principle I've based Zebra Design on: ship working code, talk to users, design, code more and results"
              </p>
              <cite className="flex items-center justify-center gap-2 text-sm md:text-base not-italic text-muted-foreground whitespace-nowrap">
                <Image
                  src="/images/other/charlie-ellington.jpg"
                  alt="Charlie Ellington"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <span>— Charlie Ellington · Zebra Design is my solo practice — no middle managers, you work directly with me.</span>
              </cite>
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  );
} 