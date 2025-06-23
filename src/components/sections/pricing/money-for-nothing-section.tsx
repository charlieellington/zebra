/**
 * Money-for-Nothing, Change-for-Free section
 * Tight explanation of the cancellation policy
 */

import { ScrollView } from "@/components/scroll-view";
import Link from "next/link";

export default function MoneyForNothingSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-4xl px-6 space-y-8">
        {/* Heading */}
        <ScrollView>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center">
            Money-for-Nothing, Change-for-Free
          </h2>
        </ScrollView>

        {/* Subtitle */}
        <ScrollView delay={0.05}>
          <p className="text-center italic text-muted-foreground text-base md:text-lg">
            Why my contracts stay light, fair, and agile
          </p>
        </ScrollView>

        {/* 4-point list */}
        <ScrollView delay={0.1}>
          <ol className="space-y-6 list-decimal pl-6 text-base md:text-lg">
            <li>
              <strong>Short, outcome-driven cycles</strong>
              <br />
              I work in month-long sprints. At the start of each cycle we pick the next, highest-value goal—launch a feature, lift conversions, cut churn. Then I build that first.
            </li>
            <li>
              <strong>Change course any time</strong>
              <br />
              Your priorities shift? Fine. At the next cycle we pivot, swap features, or narrow scope. There is no penalty for changing your mind.
            </li>
            <li>
              <strong>Cancel when you're satisfied</strong>
              <br />
              Our standard engagement is one year. If the product is "good enough" before the year is up, stop the engagement on the spot. You pay only <strong>20 % of the unused balance</strong>—my wrap-up fee for handing over code, designs, and docs. For example: 3 months in with 9 months remaining, you pay 20% of the remaining 9 months.
            </li>
            <li>
              <strong>Built-in breathing space</strong>
              <br />
              Need to pause? You may park the project twice, up to one month each time, at no cost. Your subscription clock simply stops and restarts.
            </li>
          </ol>
        </ScrollView>

        {/* Example block */}
        <ScrollView delay={0.15}>
          <blockquote className="border-l-4 border-primary pl-4 space-y-2 bg-card/50 p-4 rounded-md">
            <p className="font-semibold text-foreground">Example</p>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Plan: €5 k / month for 12 months → €60 k total</li>
              <li>You stop after 3 months (paid €15 k)</li>
              <li>Remaining commitment: €45 k</li>
              <li>Wrap-up fee: 20 % × €45 k = <strong className="text-foreground">€9 k</strong></li>
            </ul>
            <p className="text-foreground font-medium">Total paid: €24 k instead of €60 k. You keep every asset, I'm fairly compensated, no money is wasted.</p>
          </blockquote>
        </ScrollView>

        {/* Why this model works */}
        <ScrollView delay={0.2}>
          <h3 className="text-lg font-medium text-foreground mb-2">Why this model works</h3>
          <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-muted-foreground">
            <li><strong>Incentive alignment</strong> – I deliver the highest-value work first, because shipping early lets you cancel early.</li>
            <li><strong>Risk control</strong> – You avoid long lock-ins and bloated backlogs.</li>
            <li><strong>Cash-flow friendly</strong> – You fund only what moves the needle, not idle burn.</li>
          </ul>
        </ScrollView>

        {/* Agile reference */}
        <ScrollView delay={0.25}>
          <p className="text-sm text-center text-muted-foreground">
            Inspired by the agile{" "}
            <Link 
              href="https://www.agilealliance.org/change-for-nothing-money-for-nothing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              "Money for Nothing, Change for Free"
            </Link>{" "}
            clause, this setup rewards speed and value, not head-count or hours.
          </p>
        </ScrollView>
      </div>
    </section>
  );
} 