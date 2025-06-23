import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollView } from "@/components/scroll-view"

const faqs = [
  {
    id: "pricing",
    question: "How does your pricing work?",
    answer: "I offer a flat monthly subscription starting at €5,000. Standard engagement is one year, but you can cancel anytime. I price at roughly 20% of the value I expect to add in the first two years. For example, if the work should bring €500k value, your cost is about €8k a month."
  },

  {
    id: "cancellation",
    question: "What if I want to cancel?",
    answer: "You can cancel anytime during our one-year engagement. You pay only 20% of the unused balance as a wrap-up fee. Example: on €5k/month for a year, if you cancel after 3 months (paid €15k), with €45k remaining, your wrap-up fee is €9k. Total: €24k instead of €60k. You keep every asset, I'm fairly compensated."
  },
  {
    id: "pause",
    question: "Can I pause my subscription?",
    answer: "Yes! You may park the project twice, up to one month each time, at no cost. Your subscription clock simply stops and restarts. This gives you breathing space if priorities shift or budgets need reallocating."
  },
  {
    id: "speed",
    question: "How can you deliver so fast?",
    answer: "We work in month-long sprints focused on highest-value outcomes. I leverage AI coding assistants, pre-built components, and build in code immediately (no throwaway mockups). By focusing only on what matters for the user and your business metrics, we compress timelines dramatically."
  },
  {
    id: "parallel",
    question: "What if I need to move faster?",
    answer: "Add another lane! A second subscription lets me run two tasks in parallel. Many clients start with one lane, then add a second when they see the velocity. You can scale up or down as needed."
  },
  {
    id: "workshops",
    question: "What's included vs. add-on services?",
    answer: "Month one includes up to 5 workshop days, on me. After that: Extra workshop days are €400/day, ad-hoc calls you request are €150/hour, and user-testing rounds (5-6 users with report) are €1,000. I'll suggest these only when they speed us up."
  },
  {
    id: "commitment",
    question: "Is there a long-term commitment?",
    answer: "Our standard engagement is one year, but you can cancel anytime with the 'Money for Nothing' model - you pay only 20% of the unused balance. Many clients start with a one-month trial to see the value first-hand. This model means I stay hungry to deliver; you never fund dead weight."
  },
  {
    id: "team",
    question: "Can you work with our existing team?",
    answer: "Absolutely. Think of me as an extension of your team — a special forces unit that plugs right in. I'll collaborate with your developers, sync with your PM or designer, and work with any stack. My goal is to enhance your capabilities, not duplicate them."
  },
  {
    id: "design-only",
    question: "What if I just need design or just development?",
    answer: "That's fine! For design-only, I offer design-in-code where I craft your UX/UI in live code. For dev-only, I'll turn your existing designs into a working product. The subscription adapts to what you need — you're hiring me to achieve outcomes, not fill a timesheet."
  },
  {
    id: "websites-branding",
    question: "Do you do websites and branding?",
    answer: "Yes. The approach depends on your needs. Sometimes it's a simple task in your product roadmap. Other times it's the main project. For bigger branding work, we dive deep: content strategy, hierarchy, stakeholder alignment, internal brand development, and user testing on visuals and messaging. I tailor the process to fit your scope."
  },
  {
    id: "custom-designs",
    question: "Do you create custom designs?",
    answer: "I believe in beautiful design — but shipping beats custom Figma files. I code with proven component libraries like shadcn/ui that have excellent UX built in and look great. This approach is faster and gets you to your goals sooner. Why spend weeks on mockups when we can build the real thing?"
  }
];

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
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline py-3 md:py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollView>
      </div>
    </section>
  )
} 