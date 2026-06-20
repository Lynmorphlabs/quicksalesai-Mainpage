import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import storyGreystone from "@/assets/story-greystone.jpg";
import storyFoody from "@/assets/story-foody.jpg";

export const stories = [
  {
    slug: "greystone",
    company: "Greystone",
    industry: "Financial Services",
    region: "Loan Brokerage",
    headline:
      "Greystone Qualifies Loan Enquiries Faster with WhatsApp AI, Google Drive Sync and a Lead Dashboard",
    summary:
      "A WhatsApp AI Agent guides customers to the right loan category, collects documents earlier and hands cleaner leads to advisors — all from one dashboard.",
    image: storyGreystone,
    metrics: [
      { value: "3×", label: "Faster lead qualification" },
      { value: "100%", label: "Structured lead capture" },
      { value: "1", label: "Source of truth (Drive)" },
    ],
    color: "from-sky-500/20 to-indigo-500/10",
  },
  {
    slug: "foody-asia",
    company: "Foody Asia",
    industry: "F&B · Multi-brand delivery",
    region: "Singapore & Malaysia",
    headline: "Foody Asia cut response time by 82% across 14 outlets with Quicksales.ai",
    summary:
      "By unifying WhatsApp, Instagram and webchat under one AI inbox, Foody Asia handles 6× more orders without adding headcount.",
    image: storyFoody,
    metrics: [
      { value: "82%", label: "Faster first response" },
      { value: "6×", label: "Order volume handled" },
      { value: "$0", label: "Extra hires needed" },
    ],
    color: "from-amber-500/20 to-rose-500/10",
  },
];

const Customers = () => {
  const featured = stories[0];
  const rest = stories.slice(1);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Dark hero */}
        <section className="bg-black text-white">
          <div className="container py-20 md:py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              🎉 Customer stories
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-white/70 text-lg">
              Hear from our customers about their experiences using Quicksales.ai
              and the impact it has had on their business.
            </p>
          </div>
        </section>

        {/* Featured story */}
        <section className="container py-16 md:py-20">
          <Link
            to={`/customers/${featured.slug}`}
            className="group grid gap-10 md:grid-cols-2 md:items-center"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={featured.image}
                alt={featured.company}
                width={1024}
                height={1024}
                className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">
                {featured.industry}
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                {featured.headline}
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                {featured.summary}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                Read the story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </section>

        {/* KPI strip */}
        <section className="bg-muted/40 border-y border-border/40">
          <div className="container py-10 grid gap-8 md:grid-cols-4 items-center">
            <h3 className="text-xl font-semibold">
              Why teams choose Quicksales.ai
            </h3>
            {[
              { v: "80k+", l: "Channels Connected" },
              { v: "622m+", l: "Messages Sent" },
              { v: "18m+", l: "Conversations Closed" },
            ].map((k) => (
              <div key={k.l} className="border-l border-border/60 pl-6">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {k.v}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{k.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* All stories grid */}
        <section className="container py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {rest.map((s) => (
              <Link
                key={s.slug}
                to={`/customers/${s.slug}`}
                className="group flex flex-col"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={s.image}
                    alt={s.company}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-sm font-semibold text-primary">
                  {s.industry}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-snug">
                  {s.headline}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Customers;