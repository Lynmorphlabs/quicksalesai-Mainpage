import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    desc: "For small teams getting started on WhatsApp.",
    features: ["1 WhatsApp number", "2 team members", "Template library", "Basic analytics"],
    cta: "Start free trial",
    featured: false,
  },
  {
    name: "Growth",
    price: "$79",
    desc: "Most popular for growing D2C and SaaS brands.",
    features: ["3 WhatsApp numbers", "10 team members", "AI template generator", "Chatbot builder", "E-commerce webhooks", "Advanced analytics"],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Volume pricing, SSO, and dedicated support.",
    features: ["Unlimited numbers", "Unlimited seats", "Custom APIs", "Dedicated CSM", "99.99% SLA", "SOC 2 reports"],
    cta: "Talk to sales",
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

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-3xl p-8 border transition-smooth flex flex-col ${
              p.featured
                ? "bg-gradient-primary text-primary-foreground border-transparent shadow-elevated md:scale-105"
                : "bg-card border-border/60 shadow-soft hover:shadow-elevated"
            }`}
          >
            {p.featured && (
              <span className="self-start text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded-full mb-4">
                Most popular
              </span>
            )}
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className={`text-sm mt-1 ${p.featured ? "opacity-90" : "text-muted-foreground"}`}>{p.desc}</p>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold tracking-tight">{p.price}</span>
              {p.price !== "Custom" && <span className={`text-sm ${p.featured ? "opacity-80" : "text-muted-foreground"}`}>/mo</span>}
            </div>
            <ul className="mt-6 space-y-2.5 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "" : "text-primary"}`} strokeWidth={3} />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className={`mt-7 rounded-full w-full ${
                p.featured
                  ? "bg-white text-primary hover:bg-white/90"
                  : "bg-foreground text-background hover:opacity-90"
              }`}
            >
              {p.cta}
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);
