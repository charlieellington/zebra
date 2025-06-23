import { ScrollView } from "@/components/scroll-view";
import Image from "next/image";
import { TrendingUp, DollarSign, Shield } from "lucide-react";

const results = [
  {
    icon: DollarSign,
    metric: "$120M",
    logo: "/images/logos/ramp.png",
    description: "raised on product I designed",
    bg: "#CDCBFF",
  },
  {
    icon: Shield,
    metric: "$200M+",
    logo: "/images/logos/nexus%20mutual.png",
    description: "coverage on platform I built",
    bg: "#E7BDD7",
  },
  {
    icon: TrendingUp,
    metric: "Billions",
    logo: "/images/logos/ethereum.png",
    description: "transitioned via interface I crafted",
    bg: "#FDA7A0",
  },
];

export default function ProvenResultsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/20" id="proven-results">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <ScrollView key={index} delay={0.1 * (index + 1)}>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="inline-flex p-2.5 rounded-lg" style={{ backgroundColor: `${result.bg}40` }}>
                    <Icon className="w-5 h-5" style={{ color: result.bg }} />
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-xl md:text-2xl font-bold text-foreground">
                      {result.metric}
                    </p>
                    <Image src={result.logo} alt="logo" width={50} height={20} className="object-contain opacity-60" />
                  </div>
                </div>
              </ScrollView>
            );
          })}
        </div>
      </div>
    </section>
  );
} 