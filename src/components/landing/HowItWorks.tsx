import { ScanLine, Settings, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Connect",
    subtitle: "Scan. Done.",
    desc: "Open Quicksales, scan the QR code, and your WhatsApp is connected instantly. No forms, no waiting, no IT support needed.",
    icon: ScanLine,
  },
  {
    num: "02",
    title: "Configure",
    subtitle: "Pick a template. Add your business info.",
    desc: "Choose an AI agent template that fits your business, upload your catalogue or menu, and your AI learns everything it needs to know in seconds.",
    icon: Settings,
  },
  {
    num: "03",
    title: "Go Live",
    subtitle: "Your AI is now open for business.",
    desc: "From this moment, your AI replies to every customer, captures every lead, and works toward every sale — while you focus on everything else.",
    icon: Rocket,
  },
];

export const HowItWorks = () => (
  <section id="how-it-works" className="py-24 sm:py-32 bg-background">
    <div className="container">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">Setup</span>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Setup & Running in <span className="italic font-serif text-primary">1 Minute.</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Seriously. Three steps and your AI is live, selling, and never missing a message again.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative rounded-3xl bg-card border border-border/60 p-8 shadow-soft hover:shadow-elevated transition-smooth group"
          >
            {/* Step number badge */}
            <div className="absolute -top-3 left-8">
              <span className="inline-flex items-center justify-center h-7 px-3 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold shadow-soft">
                Step {step.num}
              </span>
            </div>

            {/* Icon */}
            <div className="mt-4 mb-5">
              <div className="h-12 w-12 rounded-2xl bg-primary-soft grid place-items-center text-primary group-hover:scale-105 transition-transform">
                <step.icon className="h-6 w-6" />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold tracking-tight mb-1">{step.title}</h3>
            <p className="text-sm font-semibold text-primary mb-3">{step.subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-12 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
        Most businesses are fully live within a minute on our platform. The hardest part is deciding which leads to follow up on first.
      </p>
    </div>
  </section>
);
