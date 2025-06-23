import { ScrollView } from "@/components/scroll-view";
import { Check } from "lucide-react";

const comparisons = [
  {
    option: "Zebra Design",
    cost: "~€5k/month",
    what: "Designer + Developer in one",
    benefits: ["Fast iterations", "Cancel anytime", "No hiring hassle", "Weekly progress"],
    highlighted: true,
  },
  {
    option: "Hire In-House",
    cost: "€15-20k/month",
    what: "Designer + Developer + overhead",
    benefits: ["Full-time dedication", "Long-term commitment", "Training required", "Management overhead"],
    highlighted: false,
  },
  {
    option: "Traditional Agency",
    cost: "€20k-€40k/mo retainer",
    what: "Headline fee balloons with change-orders and slower turn-around",
    benefits: ["Large team", "Fixed timeline", "Communication layers", "Change order costs"],
    highlighted: false,
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FCF8F4]/30">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollView>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Compare Your Options
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              For context, €5k per month is roughly the cost of a single junior developer's salary – 
              yet here it covers an entire design <strong className="text-foreground">and</strong> development service.
            </p>
          </div>
        </ScrollView>

        <ScrollView delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl border p-6 space-y-4 ${
                  item.highlighted
                    ? "bg-white border-2 border-black"
                    : "bg-white/60 border-black/10 text-muted-foreground opacity-70 hover:opacity-90 transition-opacity"
                }`}
              >
                <div>
                  <h3 className="font-semibold text-lg">{item.option}</h3>
                  <p className="text-2xl font-bold mt-2">{item.cost}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.what}</p>
                </div>
                
                <ul className="space-y-2">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check 
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          item.highlighted ? "text-green-600" : "text-muted-foreground"
                        }`}
                      />
                      <span className={item.highlighted && i < 2 ? "font-medium" : ""}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollView>

        <ScrollView delay={0.2}>
          <p className="text-center mt-8 text-sm text-muted-foreground">
            <strong className="text-foreground">The math is simple:</strong> You get a full product team's output 
            for a quarter of the cost, with none of the overhead.
          </p>
        </ScrollView>
      </div>
    </section>
  );
} 