import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollView } from "@/components/scroll-view"

export default function FaqSection() {
  return (
    <section id="faqs" className="py-12 md:py-24 lg:py-32 border-t border-black/5">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <ScrollView>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-center">
            FAQs
          </h2>
        </ScrollView>

        <ScrollView delay={0.1}>
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            <AccordionItem value="faq1">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline py-3 md:py-4">
                How can you deliver so fast?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4 md:pb-6">
                We've honed an ultra-streamlined process. From day one we
                leverage your team's existing knowledge (instead of weeks of
                slow "discovery"), then we use efficient tools like AI coding
                assistants and pre-built components. By focusing only on what
                matters for the user and building in code immediately (no
                throwaway mockups), we compress the timeline dramatically
                without cutting corners. The result is high-quality output at
                breakneck speed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq2">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline py-3 md:py-4">
                What does "unlimited requests" really mean?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4 md:pb-6">
                Exactly what it sounds like – you can request as many features,
                design tweaks, or tasks as you want each month. We'll handle
                them one at a time with laser focus to maintain quality. You can
                continually prioritise your backlog, and we'll keep delivering
                tasks in order of importance. There's effectively no cap on the
                amount of work; we just make sure each item is done right before
                moving to the next.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq3">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline py-3 md:py-4">
                Can you work with our existing team?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4 md:pb-6">
                Absolutely. Think of us as an extension of your team – a special
                forces unit that plugs right in. If you have in-house
                developers, we'll collaborate with them (for example, we can
                consume your existing API or work alongside your back-end
                engineers). If you have a product manager or designer, we'll
                sync up to ensure our work complements yours. We play nice with
                any stack or team; our goal is to enhance your capabilities, not
                duplicate or disrupt them.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq4">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline py-3 md:py-4">
                What if I just need design or just development?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4 md:pb-6">
                That's fine too! We're flexible. If you only need design, we
                offer a <strong className="text-foreground">design-in-code</strong> plan where we craft
                your UX/UI in live code and deliver an interactive front-end for
                your developers to plug into. Conversely, if you already have
                designs and just need them built out, we can go into{" "}
                <strong className="text-foreground">dev-only mode</strong> – turning your existing design
                files into a working product. Our subscription adapts to what
                you need: you're hiring us to achieve outcomes (finished
                designs, coded features), not to fill a timesheet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq5">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline py-3 md:py-4">
                Is there a commitment?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4 md:pb-6">
                No long-term commitment required. Our standard engagement is
                month-to-month — use us for as long (or as short) as you need.
                You can cancel anytime. If you're on a multi-month plan or
                decide to stop mid-project, you're free to do so; we'd just
                charge a 20% wrap-up fee on the remaining work as a courtesy
                (this follows agile's "cancel anytime" ethos with a fair
                compensation for unused time). Many clients start with a
                one-month pilot to see the value first-hand. If you love the
                results, you can simply continue; if not, you can stop with no
                hard feelings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollView>
      </div>
    </section>
  )
} 