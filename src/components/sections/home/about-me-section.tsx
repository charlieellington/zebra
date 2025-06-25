"use client";

import { ScrollView } from "@/components/scroll-view";
import { ColoredHighlight } from "@/components/ui/colored-highlight";

export default function AboutMeSection() {
  return (
    <section className="py-12 md:py-16" id="about">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollView>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg md:text-xl leading-relaxed text-balance">
              I'm a <ColoredHighlight color="pink">product designer</ColoredHighlight> and <ColoredHighlight color="coral">founder</ColoredHighlight> with 14 years experience building products used by millions. 
              I now <ColoredHighlight color="blue">leverage AI tools</ColoredHighlight> to ship products lightning-fast.
            </p>
          </div>
        </ScrollView>
      </div>
    </section>
  );
} 