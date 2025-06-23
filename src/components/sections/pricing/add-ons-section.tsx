/**
 * Usage Add-Ons section
 * Shows included workshop days and table of additional services
 */

import { ScrollView } from "@/components/scroll-view";

const addOns = [
  {
    service: "Extra Workshop Day",
    why: "Deep-dive with your team",
    cost: "€400 / day",
  },
  {
    service: "Ad-hoc Calls",
    why: "Extra Zooms you request",
    cost: "€150 / hour",
  },
  {
    service: "User-Testing Round",
    why: "5-6 users, report + results workshop",
    cost: "€1,000 / round",
  },
];

export default function AddOnsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollView>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground">
              Usage Add-Ons
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Month one includes up to <span className="font-semibold text-foreground">five workshop days</span>, on me. After that:
            </p>
          </div>
        </ScrollView>

        <ScrollView delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-foreground">Service</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Why</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Cost</th>
                </tr>
              </thead>
              <tbody>
                {addOns.map((addon, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-3 px-4">
                      <span className="font-semibold text-foreground">{addon.service}</span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{addon.why}</td>
                    <td className="py-3 px-4">
                      <span className="font-semibold text-foreground">{addon.cost}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollView>

        <ScrollView delay={0.2}>
          <p className="mt-8 text-sm text-muted-foreground text-center">
            I'll suggest these only when they speed us up. If they do, I pay; if you ask, you pay.
          </p>
        </ScrollView>
      </div>
    </section>
  );
} 