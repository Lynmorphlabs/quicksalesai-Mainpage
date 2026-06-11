import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$99",
    desc: "Get your first AI agent live and start converting leads 24/7.",
    features: [
      "1 WhatsApp number",
      "24/7 AI Sales Agent",
      "Multilingual AI Agent",
      "FAQ & Knowledge Base",
      "Reads voice messages & images",
      "Appointment scheduling",
      "Basic analytics",
      "Guided onboarding",
    ],
    footnote: "Go live today. Start closing leads tonight, automatically.",
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "$149",
    desc: "Scale your outreach and never miss a lead again.",
    features: [
      "3 WhatsApp numbers",
      "Everything in Starter",
      "Broadcast messaging",
      "WhatsApp templates",
      "Automated follow-ups",
      "Priority support & onboarding",
    ],
    footnote: "Most businesses see returns within their first week.",
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Pro",
    price: "$199",
    desc: "Automate your entire sales process, end to end.",
    features: [
      "Everything in Growth",
      "Multiple AI agents",
      "Workflow automation",
      "Lead Finder",
      "Priority support & onboarding",
    ],
    footnote: "Businesses on Pro close 3x more leads with the same headcount.",
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Scale",
    price: "$399",
    desc: "The full stack for high-volume sales operations.",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Webhooks & API access",
      "Dedicated CSM",
      "Hands-on onboarding & setup",
    ],
    footnote: "For businesses running sales across multiple locations or product lines.",
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
              <span className={`text-sm ${p.featured ? "opacity-80" : "text-muted-foreground"}`}>/mo</span>
            </div>
            <ul className="mt-6 space-y-2.5 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "" : "text-primary"}`} strokeWidth={3} />
                  {f}
                </li>
              ))}
            </ul>
            {p.footnote && (
              <p className={`mt-5 text-xs italic ${p.featured ? "opacity-90" : "text-muted-foreground"}`}>
                {p.footnote}
              </p>
            )}
            <Button
              asChild
              size="lg"
              className={`mt-5 rounded-full w-full ${
                p.featured
                  ? "bg-white text-primary hover:bg-white/90"
                  : "bg-foreground text-background hover:opacity-90"
              }`}
            >
              <a href="https://quicksales.ai/dashboard" target="_blank" rel="noopener noreferrer">
                {p.cta}
              </a>
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
