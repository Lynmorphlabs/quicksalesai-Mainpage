import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Johnson",
    role: "Deputy CEO, Ascentis",
    initials: "JO",
    quote:
      "QuickSales is a straightforward solution. It's easy to get started, and the overall experience feels well thought through for day-to-day use.",
  },
  {
    name: "Ken Nizam",
    role: "CEO, AsiaTokenFund Group & 1M Technology",
    initials: "KN",
    quote:
      "What stood out about QuickSales is how naturally it fits into existing workflows. It helps streamline initial engagement and follow-ups without requiring heavy setup. The experience feels intuitive, and it's clear the product is built with real operational needs in mind.",
  },
];

export const Testimonials = () => (
  <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
    {/* Techy background accents */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[80%] bg-primary-soft/50 blur-3xl rounded-full" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 40%, black 30%, transparent 75%)",
        }}
      />
    </div>

    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
          Testimonials
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Loved by <span className="italic font-serif text-primary">operators</span> who ship
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Real words from leaders running real businesses on Quicksales.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="group relative rounded-3xl p-8 sm:p-10 bg-card/70 backdrop-blur-xl border border-border/60 shadow-soft hover:shadow-elevated transition-smooth overflow-hidden"
          >
            {/* Subtle gradient ring on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-smooth"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--primary) / 0.08), transparent 60%)",
              }}
            />

            <Quote className="h-8 w-8 text-primary/70 mb-5" strokeWidth={2.5} />

            <blockquote className="text-base sm:text-lg leading-relaxed text-foreground/90">
              "{t.quote}"
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-4 pt-6 border-t border-border/60">
              <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground font-bold text-sm shadow-soft">
                {t.initials}
              </div>
              <div>
                <div className="font-bold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);