import { useState } from "react";
import aiAgent from "@/assets/platform-ai-agent.jpg";
import onboard from "@/assets/platform-onboard.jpg";
import followup from "@/assets/platform-followup.jpg";
import broadcast from "@/assets/platform-broadcast-new.jpg";
import leadscraper from "@/assets/platform-leadscraper.jpg";
import { Check } from "lucide-react";

const slides = [
  {
    tag: "Never miss a lead",
    title: "AI Agent That Sells While You Sleep",
    desc: "Your AI replies, qualifies, and converts customers on WhatsApp 24/7 — no human needed.",
    points: ["Instant replies to every message", "Qualifies leads automatically", "Handles FAQs, pricing, and bookings", "Works outside business hours"],
    img: aiAgent,
  },
  {
    tag: "Onboard",
    title: "Up and Running in Under 10 Minutes",
    desc: "Connect your WhatsApp, add your business details, and your AI agent is live — no coding, no IT guy, no stress.",
    points: ["One-click WhatsApp connection", "Simple setup walkthrough", "No technical skills required", "Live before your next customer messages"],
    img: onboard,
  },
  {
    tag: "Automation",
    title: "Follow Ups That Never Fall Through",
    desc: "Your AI remembers every lead and follows up automatically — so no customer slips through the cracks.",
    points: ["Automated reminders and check-ins", "Smart follow-up sequences", "Stops when customer replies", "Re-engages cold leads on its own"],
    img: followup,
  },
  {
    tag: "Convert & scale",
    title: "Broadcast to Everyone. Convert the Right Ones.",
    desc: "Send targeted WhatsApp campaigns to hundreds or thousands of contacts in one click — and let AI handle the replies.",
    points: ["Bulk messaging with personalisation", "AI responds to every reply instantly", "Track opens, clicks, and conversions", "Schedule campaigns in advance"],
    img: broadcast,
  },
  {
    tag: "Grow faster",
    title: "Find New Customers on Our Lead Scraper",
    desc: "Stop waiting for leads to come to you. Discover verified businesses straight from Google Business — complete with contact details and active WhatsApp numbers ready to reach out to.",
    points: ["Pulls verified business listings from Google Business", "Detects active WhatsApp numbers", "Export or push directly into your campaigns", "Build your outreach list in minutes"],
    img: leadscraper,
  },
];

export const Platform = () => {
  const [active, setActive] = useState(0);
  const s = slides[active];
  return (
    <section id="platform" className="py-24 sm:py-32 bg-secondary/40 border-y border-border/40">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">Platform</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            One platform. <br /><span className="italic font-serif text-primary">Infinite</span> possibilities.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Tabs */}
          <ol className="lg:col-span-4 space-y-2">
            {slides.map((sl, i) => (
              <li key={i}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-2xl p-4 border transition-smooth flex gap-4 ${
                    i === active
                      ? "bg-card border-primary/40 shadow-elevated"
                      : "bg-card/40 border-border/50 hover:bg-card hover:border-border"
                  }`}
                >
                  <span className={`h-9 w-9 rounded-xl grid place-items-center font-bold text-sm shrink-0 ${i === active ? "bg-gradient-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-primary">{sl.tag}</p>
                    <p className="font-semibold mt-0.5">{sl.title}</p>
                  </div>
                </button>
              </li>
            ))}
          </ol>

          {/* Detail */}
          <div className="lg:col-span-8 rounded-3xl bg-card border border-border/60 shadow-elevated overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 sm:p-10 flex flex-col justify-center order-2 md:order-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{s.tag}</p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-primary-soft grid place-items-center text-primary shrink-0">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/40 order-1 md:order-2 grid place-items-center p-6">
                <img src={s.img} alt={s.title} loading="lazy" width={896} height={640} className="rounded-2xl shadow-bubble animate-scale-in w-full h-auto" key={active} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
