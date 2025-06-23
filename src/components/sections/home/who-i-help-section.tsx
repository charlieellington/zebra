import { ScrollView } from "@/components/scroll-view"

export default function WhoIHelpSection() {
  return (
    <section id="who-i-help" className="py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <ScrollView>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-center md:text-left">
            Who I Help
          </h2>
        </ScrollView>

        <ScrollView delay={0.1}>
          <ul className="list-disc list-outside pl-6 md:pl-8 space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg">
            <li>
              <strong className="font-semibold" style={{ color: "#CDCBFF" }}>
                Startup founders
              </strong>{" "}
              <span className="text-muted-foreground">
                who need to test a new app idea <em>ASAP</em> to find
                product–market fit before the runway runs out. (We provide the
                speed and lean iteration to do exactly that.)
              </span>
            </li>

            <li>
              <strong className="font-semibold" style={{ color: "#E7BDD7" }}>
                Product teams with developers
              </strong>{" "}
              <span className="text-muted-foreground">
                who have engineering talent but lack UX/UI bandwidth. We'll
                slot in as your design & front-end experts, rapidly shaping your
                product's interface and even integrating with your backend.
              </span>
            </li>

            <li>
              <strong className="font-semibold" style={{ color: "#CDCBFF" }}>
                SMEs and non-tech businesses
              </strong>{" "}
              <span className="text-muted-foreground">
                that need a custom internal tool or app built from scratch (and
                don't have an in-house design or dev team). We design and build
                your solution end-to-end, fast.
              </span>
            </li>

            <li>
              <strong className="font-semibold" style={{ color: "#E7BDD7" }}>
                Teams with an MVP
              </strong>{" "}
              <span className="text-muted-foreground">
                who have a bare-bones product that users find clunky or
                limited. We can overhaul your UX/UI and quickly add the features
                users are asking for to level up your product.
              </span>
            </li>

            <li>
              <strong className="font-semibold" style={{ color: "#CDCBFF" }}>
                Companies stuck in limbo
              </strong>{" "}
              <span className="text-muted-foreground">
                after freelancers or agencies have let you down with delays,
                miscommunication, or lack of accountability. Our integrated
                approach gets your product moving forward again with weekly
                visible progress.
              </span>
            </li>
          </ul>
        </ScrollView>
      </div>
    </section>
  )
} 