import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import storyGreystone from "@/assets/story-greystone.jpg";
import storyAsiaCeo from "@/assets/story-asiaceo.jpg";
import toapingBanner from "@/assets/toaping-banner.png.asset.json";
import soqAsset from "@/assets/soq-graphic.png.asset.json";

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
    slug: "toaping",
    company: "TOAPING",
    industry: "Learning & Skills Validation",
    region: "Korea · Asia",
    headline:
      "How TOAPING Uses a KakaoTalk AI Assistant to Automate Onboarding, Sales and Customer Engagement",
    summary:
      "A KakaoTalk AI assistant onboards learners, recommends memberships, books consultants, sends Smart Reconnect™ reminders and supports English, Korean and voice messages.",
    image: toapingBanner.url,
    metrics: [
      { value: "KakaoTalk", label: "Primary engagement channel" },
      { value: "EN · KO", label: "Multilingual + voice input" },
      { value: "Smart", label: "Reconnect™ for abandoned signups" },
    ],
    color: "from-amber-400/25 to-sky-400/10",
  },
  {
    slug: "foody-asia",
    company: "Asia CEO Community",
    industry: "Business Network · CEOs & Founders",
    region: "Asia",
    headline:
      "Asia CEO Community Connects Members, Manages Events and Captures Membership Interest with a WhatsApp AI Concierge",
    summary:
      "A WhatsApp AI Concierge helps members search for connections, request introductions, RSVP for events and explore membership — directly in chat.",
    image: storyAsiaCeo,
    metrics: [
      { value: "24/7", label: "Concierge availability" },
      { value: "1", label: "Channel for connect, events & membership" },
      { value: "↑", label: "Qualified membership leads" },
    ],
    color: "from-emerald-500/20 to-sky-500/10",
  },
  {
    slug: "soq",
    company: "SOQ Training Centre",
    industry: "Training & Education",
    region: "Malaysia",
    headline:
      "How SOQ Uses a WhatsApp AI Course Advisor to Match Learners With the Right AI Courses and Book Consultations",
    summary:
      "A WhatsApp AI Course Advisor helps learners explore AI courses, narrow down their goals and book consultations with SOQ consultants — all from one chat.",
    image: soqAsset.url,
    metrics: [
      { value: "WhatsApp", label: "Primary enquiry channel" },
      { value: "24/7", label: "Course guidance" },
      { value: "Faster", label: "Qualified consultations" },
    ],
    color: "from-emerald-500/20 to-amber-400/10",
  },
];

const Customers = () => {
  const featured = stories[0];
  const rest = stories.slice(1);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-hero pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="container relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-soft border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-8 animate-fade-in-up shadow-soft">
              <Sparkles className="h-3.5 w-3.5" />
              Customer Stories
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground animate-fade-in-up [animation-delay:120ms]">
              See How Teams Win with Quicksales.ai
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg animate-fade-in-up [animation-delay:240ms]">
              Hear from our customers about their experiences using Quicksales.ai
              and the impact it has had on their business.
            </p>
          </div>
        </section>

        {/* Featured story */}
        <section className="container py-16 md:py-20">
          <Link
            to={`/customers/${featured.slug}`}
            className="group grid gap-10 md:grid-cols-2 md:items-center bg-card rounded-3xl border border-border/60 shadow-soft overflow-hidden p-6 md:p-10 transition-smooth hover:shadow-elevated"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={featured.image}
                alt={featured.company}
                width={1024}
                height={1024}
                className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105 object-center"
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
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-8 sm:p-12 shadow-elevated relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
              <div className="relative grid gap-8 md:grid-cols-4 items-center">
                <h3 className="text-xl font-semibold">
                  Why teams choose Quicksales.ai
                </h3>
                {[
                  { v: "80k+", l: "Channels Connected" },
                  { v: "622m+", l: "Messages Sent" },
                  { v: "18m+", l: "Conversations Closed" },
                ].map((k) => (
                  <div key={k.l} className="border-l border-white/20 pl-6">
                    <div className="text-3xl md:text-4xl font-extrabold tracking-tight">
                      {k.v}
                    </div>
                    <div className="text-sm opacity-90 mt-1">{k.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All stories grid */}
        <section className="container py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((s) => (
              <Link
                key={s.slug}
                to={`/customers/${s.slug}`}
                className="group flex flex-col bg-card rounded-2xl border border-border/60 shadow-soft overflow-hidden transition-smooth hover:shadow-elevated"
              >
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.company}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105 object-center"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm font-semibold text-primary">
                    {s.industry}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug">
                    {s.headline}
                  </h3>
                </div>
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