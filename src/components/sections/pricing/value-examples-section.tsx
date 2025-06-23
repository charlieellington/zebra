/**
 * How the Value Adds Up section
 * Shows pricing at 20% of expected value with scenario table
 */

import { ScrollView } from "@/components/scroll-view";
import Link from "next/link";

const scenarios = [
  {
    value: "€300 k saved/earned",
    fee: "€60 k",
    monthly: "≈ €5 k / mo",
    roi: "Pays back in 3–4 mths",
  },
  {
    value: "€500 k",
    fee: "€100 k",
    monthly: "≈ €8 k / mo",
    roi: "2× return inside a year",
  },
  {
    value: "€750 k",
    fee: "€150 k",
    monthly: "≈ €12.5 k / mo",
    roi: "5×+ lifetime ROI",
  },
  {
    value: "€1 M",
    fee: "€200 k",
    monthly: "≈ €17 k / mo",
    roi: "Scales with your growth",
  },
];

export default function ValueExamplesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollView>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Value-Based Agile Pricing – Four Sample Scenarios
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              I price at roughly <span className="font-semibold text-foreground">20% of the value I expect to add</span> in the first two years.
              <br />
              <span className="text-sm">Minimum €5k/month.</span>
            </p>
          </div>
        </ScrollView>

        <ScrollView delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-foreground">2-Year Value Created</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">My Annual Fee (≈ 20 %)</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Monthly Subscription</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Typical ROI*</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((s, idx) => (
                  <tr key={idx} className="border-b border-border/50">
                    <td className="py-3 px-4 font-semibold text-foreground">{s.value}</td>
                    <td className="py-3 px-4 text-muted-foreground">{s.fee}</td>
                    <td className="py-3 px-4 text-muted-foreground">{s.monthly}</td>
                    <td className="py-3 px-4 text-muted-foreground">{s.roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollView>

        <ScrollView delay={0.15}>
          <p className="mt-4 text-sm text-muted-foreground">
            *ROI assumes the value continues beyond our one-year engagement.
          </p>
        </ScrollView>

        {/* Examples section */}
        <ScrollView delay={0.2}>
          <div className="mt-12 space-y-4">
            <h3 className="text-lg font-medium text-foreground">
              Examples of how I calculate the value
            </h3>
            
            <div className="space-y-4 text-base text-muted-foreground">
              <p>
                <strong className="text-foreground">Customer onboarding automation:</strong> I save your team costs by creating an application 
                for onboarding your customers: it frees up 10% of team time and increases revenue 
                by 20% — €300k value over two years.
              </p>
              
              <p>
                <strong className="text-foreground">Development team replacement:</strong> I take a workflow out of your development 
                team's hands (one PM, one designer and two developers) 
                <Link 
                  href="https://www.glassdoor.com/Salaries/london-product-manager-salary-SRCH_IL.0,6_IM1035_KO7,22.htm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline"
                >
                  costing €420k over a year
                </Link>.
              </p>
            </div>
          </div>
        </ScrollView>
      </div>
    </section>
  );
} 