import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    tagline: "Launch your first AI Sales Agent on WhatsApp",
    price: "99",
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    tagline: "Automate conversations & scale your outreach",
    price: "149",
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Pro",
    tagline: "Run multiple AI agents & generate new leads",
    price: "249",
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Scale",
    tagline: "Connect your entire business with AI automation",
    price: "399",
    cta: "Get Started",
    featured: false,
  },
];

export const Pricing = () => (
  <section id="pricing" className="py-24 sm:py-32">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">Plans</span>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Plans built for <span className="italic font-serif text-primary">every</span> business
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose a plan that fits your needs and start scaling your WhatsApp marketing.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto pt-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-3xl p-7 border transition-smooth flex flex-col text-center ${
              p.featured
                ? "bg-card border-primary shadow-elevated ring-2 ring-primary/30"
                : "bg-card border-border/60 shadow-soft hover:shadow-elevated"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1 rounded-full shadow-soft whitespace-nowrap">
                Most Popular
              </span>
            )}

            {/* Plan name pill */}
            <span className="self-center inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider mb-6 mt-2 shadow-soft">
              {p.name}
            </span>

            {/* Tagline */}
            <p className="text-base font-semibold text-foreground leading-snug min-h-[4.5rem] flex items-center justify-center px-2">
              {p.tagline}
            </p>

            {/* Divider */}
            <div className="my-6 border-t border-border/60" />

            {/* Price */}
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-2xl font-bold text-primary">$</span>
              <span className="text-5xl font-extrabold tracking-tight text-primary">{p.price}</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>

            <Button
              size="lg"
              className={`mt-7 rounded-full w-full ${
                p.featured
                  ? "bg-gradient-primary hover:opacity-90 shadow-soft"
                  : "bg-foreground text-background hover:opacity-90"
              }`}
            >
              {p.cta}
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Please contact us for customised solution.
      </p>
    </div>
  </section>
);
