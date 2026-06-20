import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

export const stories = [
  {
    slug: "foody-asia",
    company: "Foody Asia",
    industry: "F&B · Multi-brand delivery",
    region: "Singapore & Malaysia",
    headline: "Foody Asia cut response time by 82% across 14 outlets with Quicksales.ai",
    summary:
      "By unifying WhatsApp, Instagram and webchat under one AI inbox, Foody Asia handles 6× more orders without adding headcount.",
    metrics: [
      { value: "82%", label: "Faster first response" },
      { value: "6×", label: "Order volume handled" },
      { value: "$0", label: "Extra hires needed" },
    ],
    color: "from-amber-500/20 to-rose-500/10",
  },
  {
    slug: "hilton-concierge",
    company: "Hilton Concierge APAC",
    industry: "Hospitality · Guest services",
    region: "Asia Pacific",
    headline: "Hilton's APAC concierge runs 24/7 in 8 languages on Quicksales.ai",
    summary:
      "An AI concierge handles bookings, room service and FAQs around the clock, escalating to human staff only when guests need a personal touch.",
    metrics: [
      { value: "24/7", label: "Multilingual coverage" },
      { value: "73%", label: "Auto-resolved chats" },
      { value: "+18 NPS", label: "Guest satisfaction lift" },
    ],
    color: "from-sky-500/20 to-indigo-500/10",
  },
];

const Customers = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <section className="container pt-20 pb-12 text-center">
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Customer stories
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Teams growing faster with Quicksales.ai
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">
          See how customer-facing teams use one AI-powered inbox to convert more conversations into revenue.
        </p>
      </section>

      <section className="container pb-24 grid gap-6 md:grid-cols-2">
        {stories.map((s) => (
          <Link
            key={s.slug}
            to={`/customers/${s.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-8 hover:border-primary/40 hover:shadow-soft transition-smooth"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.color} opacity-60`}
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {s.industry} · {s.region}
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug">
                {s.headline}
              </h2>
              <p className="mt-4 text-muted-foreground">{s.summary}</p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {s.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-2xl font-bold">{m.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 inline-flex items-center text-sm font-medium text-primary">
                Read the {s.company} story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="container pb-24">
        <div className="rounded-2xl border border-border/60 bg-card/50 p-10 text-center">
          <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto">
            "Quicksales.ai replaced four separate tools and gave our team back hours every day."
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            — Operations leaders across F&B, hospitality and retail
          </p>
          <Button asChild className="mt-8 bg-gradient-primary hover:opacity-90 rounded-full px-6">
            <a href="/#pricing">Start your story</a>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Customers;