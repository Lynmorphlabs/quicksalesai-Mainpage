import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { stories } from "./Customers";

const details: Record<string, {
  challenge: string;
  solution: string[];
  results: string[];
  quote: { text: string; author: string; role: string };
}> = {
  "greystone": {
    challenge:
      "Loan enquiries are complex and time-sensitive. Customers may not know which loan category applies — secured business loan, refinancing with cash-out, bridging, second charge or personal financing. Greystone's team had to repeatedly ask the same qualification questions, while loan packages, rates and document requirements kept changing across multiple internal documents.",
    solution: [
      "WhatsApp AI Agent that identifies loan category: Business, Property or Personal",
      "Structured conversation flows per loan type (e.g. new purchase, refinancing, 2nd charge, bridging)",
      "Google Drive synced knowledge base — update a doc, sync from dashboard, AI reflects the latest packages",
      "Lead dashboard for advisors with customer details, loan type, documents collected and assignment",
      "Clear next steps at handoff: Upload Documents, Speak to Advisor, Request Callback",
    ],
    results: [
      "Faster loan enquiry qualification on WhatsApp",
      "More complete lead information before advisor review",
      "Less repetitive manual work for the team",
      "Easier loan package updates via Google Drive sync",
      "Cleaner advisor handoff with documents collected upfront",
      "More consistent customer replies across loan products",
    ],
    quote: {
      text: "Our advisors no longer restart conversations from zero. By the time a lead reaches them, the loan type, purpose and documents are already captured.",
      author: "Greystone Operations",
      role: "Loan Brokerage Team",
    },
  },
  "foody-asia": {
    challenge:
      "Foody Asia's 14 delivery brands juggled WhatsApp, Instagram DMs and webchat in separate apps. Order confirmations slipped through, peak-hour wait times stretched past 12 minutes and weekend staff burnout was rising.",
    solution: [
      "Unified every channel into a single AI-powered inbox",
      "Trained an AI agent on menus, modifiers and store hours per outlet",
      "Auto-routed delivery, refund and reservation intents to the right team",
      "Connected to existing POS for live order status replies",
    ],
    results: [
      "First-response time dropped from 11m to under 2m",
      "AI now handles 71% of inbound chats end-to-end",
      "Saturday order volume grew 6× without new hires",
      "CSAT for chat support climbed from 4.1 to 4.8 / 5",
    ],
    quote: {
      text: "We used to lose orders every Friday night. Now Quicksales.ai answers in seconds and our staff focus on the cases that actually need them.",
      author: "Marcus Tan",
      role: "Head of Operations, Foody Asia",
    },
  },
};

const CustomerStory = () => {
  const { slug } = useParams();
  const story = stories.find((s) => s.slug === slug);
  const detail = slug ? details[slug] : undefined;

  if (!story || !detail) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container py-24 text-center">
          <h1 className="text-3xl font-bold">Story not found</h1>
          <Button asChild className="mt-6 rounded-full">
            <Link to="/customers">View all customer stories</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className={`relative overflow-hidden border-b border-border/40 bg-gradient-to-br ${story.color}`}>
          <div className="container py-16 md:py-20">
            <Link
              to="/customers"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> All customer stories
            </Link>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {story.industry} · {story.region}
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
              {story.headline}
            </h1>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-2xl">
              {story.metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-3xl md:text-4xl font-bold">{m.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16 grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-3">The challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{detail.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">The solution</h2>
              <ul className="space-y-3">
                {detail.solution.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">The results</h2>
              <ul className="space-y-3">
                {detail.results.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="md:col-span-1">
            <div className="rounded-2xl border border-border/60 bg-card/50 p-6 sticky top-24">
              <p className="text-base leading-relaxed">"{detail.quote.text}"</p>
              <div className="mt-4 pt-4 border-t border-border/40">
                <p className="text-sm font-semibold">{detail.quote.author}</p>
                <p className="text-xs text-muted-foreground">{detail.quote.role}</p>
              </div>
              <Button asChild className="mt-6 w-full bg-gradient-primary hover:opacity-90 rounded-full">
                <a href="/#pricing">Get the same results</a>
              </Button>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerStory;