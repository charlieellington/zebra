import { ScrollView } from "@/components/scroll-view";
import Image from "next/image";
import { TrendingUp, DollarSign, Shield } from "lucide-react";

const results = [
  {
    icon: DollarSign,
    metric: "$120M",
    logo: "/images/logos/ramp.png",
    description: "raised on product I designed",
    bg: "#B8E8D4",
    textColor: "#4A9B7F",
  },
  {
    icon: Shield,
    metric: "$200M+",
    logo: "/images/logos/nexus%20mutual.png",
    description: "coverage on platform I built",
    bg: "#E7BDD7",
    textColor: "#C054A0",
  },
  {
    icon: TrendingUp,
    metric: "Billions",
    logo: "/images/logos/ethereum.png",
    description: "transitioned via interface I crafted",
    bg: "#FDA7A0",
    textColor: "#E85D75",
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
                <div className="flex flex-col items-center md:items-start gap-2">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex p-3 rounded-lg" style={{ backgroundColor: `${result.bg}30` }}>
                      <Icon className="w-6 h-6" style={{ color: result.textColor }} />
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-3xl md:text-4xl font-bold" style={{ color: result.textColor }}>
                        {result.metric}
                      </p>
                      <Image src={result.logo} alt="logo" width={70} height={28} className="object-contain opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center md:text-left pl-0 md:pl-[60px]">
                    {result.description}
                  </p>
                </div>
              </ScrollView>
            );
          })}
        </div>
      </div>
    </section>
  );
} 