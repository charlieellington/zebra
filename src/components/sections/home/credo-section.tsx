"use client";

import { ScrollView } from "@/components/scroll-view";
import Image from "next/image";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

export default function CredoSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20" id="credo">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl">
          <ScrollView>
            <blockquote className="space-y-4 text-center">
              <p className="text-base md:text-lg italic leading-relaxed text-balance">
                &ldquo;Only hire people who either write code or go out and get users.&rdquo;
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
                &ldquo;Ship fast. Test with users. Iterate quickly. That&apos;s how I help you launch products that succeed.&rdquo;
              </p>
              <cite className="flex items-center justify-center gap-3 text-sm md:text-base not-italic text-muted-foreground">
                <Image
                  src="/images/other/charlie-ellington.jpg"
                  alt="Charlie Ellington"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="flex items-center gap-1 flex-wrap justify-center">
                  <span>—</span>
                  <span>Charlie Ellington</span>
                  <span>·</span>
                  <span>Solo designer-developer</span>
                  <span>·</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="underline decoration-dotted underline-offset-2 cursor-help">One launch client at a time</span>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs text-sm">
                      <p>Right now I take on one launch client at a time so every build gets my full focus. I'll scale with hand-picked collaborators only when it improves outcomes.</p>
                    </TooltipContent>
                  </Tooltip>
                  <span>·</span>
                  <span>No middle managers</span>
                  <span>—</span>
                  <span>you work directly with me.</span>
                </span>
              </cite>
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  );
} 