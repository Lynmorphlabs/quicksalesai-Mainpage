import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  Languages,
  Mic,
  BookOpen,
  CalendarCheck,
  Sparkles,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const baseline = [
  { icon: Languages, label: "Multilingual AI Agent" },
  { icon: Mic, label: "Reads Voice Messages & Images" },
  { icon: BookOpen, label: "FAQ & Knowledge Base" },
  { icon: CalendarCheck, label: "Appointment Scheduling" },
];

type Plan = {
  name: string;
  price: string;
  priceSuffix?: string;
  desc: string;
  inheritsFrom?: string;
  features: { label: string; hasInfo?: boolean }[];
  cta: string;
  featured?: boolean;
  setupTag?: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "S$99",
    priceSuffix: "/month",
    desc: "Launch your first AI Agent and start qualifying leads on WhatsApp.",
    features: [
      { label: "100 Monthly Active Contacts", hasInfo: true },
      { label: "1 User Account" },
      { label: "1 AI Agent" },
      { label: "Usage & Analytics Dashboard" },
    ],
    cta: "Get Started",
    setupTag: "Free Setup & Priority Support",
  },
  {
    name: "Growth",
    price: "S$149",
    priceSuffix: "/month",
    desc: "Scale outreach with broadcast, templates and automated follow-ups.",
    inheritsFrom: "Starter",
    features: [
      { label: "300 Monthly Active Contacts", hasInfo: true },
      { label: "3 User Accounts" },
      { label: "2 AI Agents" },
      { label: "Broadcast Messaging" },
      { label: "WABA Templates" },
      { label: "Automated Follow-ups" },
    ],
    cta: "Get Started",
    featured: true,
    setupTag: "Free Setup & Priority Support",
  },
  {
    name: "Pro",
    price: "S$299",
    priceSuffix: "/month",
    desc: "Multi-workspace, automation and lead intelligence for growing teams.",
    inheritsFrom: "Growth",
    features: [
      { label: "1,000 Monthly Active Contacts", hasInfo: true },
      { label: "5 User Accounts" },
      { label: "3 AI Agents" },
      { label: "Multiple Workspaces" },
      { label: "Workflow Automation" },
      { label: "Lead Finder" },
      { label: "WhatsApp Number Checker" },
    ],
    cta: "Get Started",
    setupTag: "Free Setup & Priority Support",
  },
  {
    name: "Custom",
    price: "Let's talk",
    desc: "Bespoke scale, integrations and dedicated support for enterprise.",
    inheritsFrom: "Pro",
    features: [
      { label: "Custom Monthly Active Contacts" },
      { label: "Custom User Accounts & AI Agents" },
      { label: "Custom Integrations" },
      { label: "Webhooks & API Access" },
      { label: "Dedicated Customer Success Manager" },
    ],
    cta: "Contact Us",
    setupTag: "One-time Setup Fee",
  },
];

const MacDialog = ({ children }: { children: React.ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="max-w-4xl p-0 gap-0 overflow-hidden rounded-3xl border-border/60">
      <DialogHeader className="px-8 pt-8">
        <DialogTitle className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          Store Unlimited Contacts, Only Pay for Those Who Engage
        </DialogTitle>
        <DialogDescription className="text-base">
          You can store all your contacts for free. You only pay for contacts you actively engage with each billing month.
        </DialogDescription>
      </DialogHeader>
      <div className="grid md:grid-cols-2 gap-6 p-8">
        <div>
          <h4 className="font-bold mb-3">What counts as an Active Contact</h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              { ok: true, t: "A contact who sends any message to you." },
              { ok: true, t: "A contact who receives a message from you via Inbox, AI Agent, API or WhatsApp." },
              { ok: false, t: "A contact who receives a one-way broadcast but does not reply." },
              { ok: false, t: "A contact only stored in your database (imported or synced from a CRM)." },
            ].map((it, i) => (
              <div key={i} className="rounded-2xl border border-border/60 bg-muted/40 p-4 text-xs">
                <div className={`inline-flex items-center justify-center h-6 w-6 rounded-full mb-2 ${it.ok ? "bg-emerald-500/15 text-emerald-600" : "bg-rose-500/15 text-rose-600"}`}>
                  {it.ok ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : <X className="h-3.5 w-3.5" strokeWidth={3} />}
                </div>
                <p className="leading-snug text-foreground/80">{it.t}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-3">How to estimate your MAC</h4>
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 to-muted/40 p-5 space-y-2.5">
            {[
              { d: "1 Jun", who: "Amily messaged You", tag: "+1 MAC", on: true },
              { d: "10 Jun", who: "Jason messaged You", tag: "+1 MAC", on: true },
              { d: "18 Jun", who: "You messaged Amily", tag: "+0 MAC", on: false },
            ].map((r, i) => (
              <div key={i} className="flex items-center justify-between bg-background/80 rounded-xl px-3 py-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground w-12">{r.d}</span>
                  <span className="font-medium">{r.who}</span>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${r.on ? "bg-emerald-500 text-white" : "bg-foreground/70 text-background"}`}>{r.tag}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            Each customer is counted once per month, no matter how many conversations you have. Need more? You can purchase add-ons or upgrade your plan anytime.
          </p>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">Plans</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            One AI Agent base. <span className="italic font-serif text-primary">Scale</span> when you're ready.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every paid plan ships with the same powerful AI Agent. Pick a tier based on capacity and team size.
          </p>
        </div>

        {/* Shared baseline strip */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-primary/5 via-background to-background p-6 sm:p-8 shadow-soft">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
              <div>
                <div className="text-[11px] font-bold tracking-widest text-primary uppercase">Included in every paid plan</div>
                <h3 className="text-xl font-bold mt-1">The Core AI Agent</h3>
              </div>
              <span className="self-start md:self-auto inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                <Check className="h-3.5 w-3.5" strokeWidth={3} /> Free Setup · No Setup Fee
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {baseline.map((b) => (
                <div key={b.label} className="flex items-center gap-3 rounded-2xl bg-background border border-border/60 px-4 py-3">
                  <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <b.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium leading-tight">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tier cards — only what changes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border transition-smooth flex flex-col ${
                p.featured
                  ? "bg-card border-primary shadow-elevated lg:-mt-4 lg:mb-0"
                  : "bg-card border-border/60 shadow-soft hover:shadow-elevated hover:-translate-y-0.5"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 min-h-[48px]">
                  <h3 className="text-xl font-bold leading-tight pt-1">{p.name}</h3>
                  {p.setupTag && (
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full text-center leading-[1.3] inline-flex items-center justify-center min-h-[34px] ${
                      p.setupTag?.startsWith("Free Setup")
                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20"
                    }`}>
                      {p.setupTag === "Free Setup & Priority Support" ? (
                        <>Free Setup &<br />Priority Support</>
                      ) : (
                        p.setupTag
                      )}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-6 min-h-[60px]">{p.desc}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">{p.price}</span>
                  {p.priceSuffix && <span className="text-sm text-muted-foreground">{p.priceSuffix}</span>}
                </div>

                <Button asChild
                  size="lg"
                  className={`mt-5 rounded-full w-full ${
                    p.featured
                      ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                      : "bg-foreground text-background hover:opacity-90"
                  }`}
                >
                  <a href="https://quicksales.ai/auth/login" target="_blank" rel="noopener noreferrer">
                    {p.cta}
                  </a>
                </Button>

                <div className="mt-6 pt-6 border-t border-border/60 flex-1">
                  {p.inheritsFrom ? (
                    <p className="text-xs font-semibold text-foreground mb-3">
                      Everything in <span className="text-primary">{p.inheritsFrom}</span>, plus:
                    </p>
                  ) : (
                    <p className="text-xs font-semibold text-foreground mb-3">What's included:</p>
                  )}
                  <ul className="space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" strokeWidth={3} />
                        {f.hasInfo ? (
                          <span className="leading-snug">
                            {f.label.replace(/Monthly Active Contacts?/, "").trim()}{" "}
                            <MacDialog>
                              <button
                                type="button"
                                className="text-primary font-medium underline underline-offset-2 decoration-dotted hover:decoration-solid"
                              >
                                Monthly Active Contact{f.label.includes("Contacts") ? "s" : ""}
                              </button>
                            </MacDialog>
                          </span>
                        ) : (
                          <span className="leading-snug">{f.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent leading-snug">
            Get hands-on onboarding from a dedicated Customer Success Specialist,
            <br className="hidden sm:block" />
            {" "}supporting your setup and business success from day one.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Need a tailored setup? <a href="#contact" className="text-primary font-semibold hover:underline">Talk to our team</a> for a custom solution.
          </p>
        </div>
      </div>
    </section>
  );
};
