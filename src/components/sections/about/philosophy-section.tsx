import React from "react";
import { ScrollView } from "@/components/scroll-view";
import { Heart, Eye, Sparkles, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const coreValues = [
  {
    title: "User-Centered & Impact-Driven",
    description: "I design with the end user in mind, always. My goal is to build products that are genuinely useful to real people – which, in turn, means they benefit communities or even the planet in some small way. If a product idea has the potential to improve lives or solve a real problem, I'm all in. That's what motivates me.",
    icon: Heart,
  },
  {
    title: "Authenticity & Transparency",
    description: "No BS, no ego. After leading a large team, I learned how important it is to be honest about what's possible and to give credit where it's due. I don't believe in overselling or pretending to have all the answers. If something isn't my expertise or doesn't make sense, I'll say so. If I bring in collaborators or use existing frameworks, I'll be upfront. You'll always know exactly who you're working with and what I'm doing. I find that when everyone's on the same page and egos are checked at the door, the work is better – and relationships are stronger.",
    icon: Eye,
  },
  {
    title: "Flow & Balance",
    description: "My best work happens when I'm in a state of flow – those times when I get so deep into designing or coding that I lose track of hours (in a good way). Reaching flow consistently means taking care of balance. I've learned that sticking to healthy work habits actually leads to more creativity. That might mean I start my day with a surf or a run, or block off a morning for deep work with no calls. By keeping a good work/life balance, I stay energetic and inspired – which ultimately means higher-quality results for you. I'm a big believer that sustainable pace wins over crunch mode, every time.",
    icon: Sparkles,
  },
];

export default function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollView>
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              Philosophy & Approach
            </h2>
          </ScrollView>
          <ScrollView>
            <p className="mt-6 text-lg text-muted-foreground">
              I believe great design happens when <strong className="text-foreground">deep empathy</strong> for users meets <strong className="text-foreground">bold creativity</strong> in solutions. In other words, understanding people – really understanding their needs and pain points – combined with the courage to try something a little different is where magic happens. That's how you get delighted users <em>and</em> real results for the business. And now that I can both design and code, I can bring that magic to life completely – creating products that work exactly as intended.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              I've always been <strong className="text-foreground">collaborative</strong> in my approach, working closely with founders, engineers, and other stakeholders instead of designing in a vacuum. I love running workshops, asking a million questions, and really listening. By making sure we involve everyone and zero in on the real problems, we ensure we're building something that actually matters. (Plus, I've found that when everyone has a voice in the process, we're all more invested in the outcome.)
            </p>
          </ScrollView>
        </div>

        <div className="mt-16">
          <ScrollView>
            <h3 className="text-center text-xl font-semibold mb-2">
              Core values that guide my work:
            </h3>
            <p className="text-center text-base text-muted-foreground italic mb-8">
              (I've thought a lot about these – here's what you can always expect when we work together.)
            </p>
          </ScrollView>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <ScrollView key={index}>
                <Card className="h-full p-6 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div 
                        className="inline-flex p-3 rounded-lg"
                        style={{ backgroundColor: '#CDCBFF30' }}
                      >
                        <value.icon className="w-6 h-6" style={{ color: '#CDCBFF' }} />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </ScrollView>
            ))}
          </div>
          
          <ScrollView>
            <p className="mt-8 text-center text-base text-muted-foreground italic max-w-2xl mx-auto">
              (Together, these values mean you'll get a partner who truly cares about your users, communicates openly, and delivers great work without burning out or flaking. That's the ethos behind Zebra Design.)
            </p>
          </ScrollView>
        </div>
      </div>
    </section>
  );
} 