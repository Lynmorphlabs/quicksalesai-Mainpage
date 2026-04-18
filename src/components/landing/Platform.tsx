import { useState } from "react";
import chatbot from "@/assets/platform-chatbot.jpg";
import broadcast from "@/assets/platform-broadcast.jpg";
import analytics from "@/assets/feature-analytics.jpg";
import catalog from "@/assets/feature-catalog.jpg";
import inbox from "@/assets/feature-inbox.jpg";
import { Check } from "lucide-react";

const slides = [
  {
    tag: "Never miss a lead",
    title: "No-Code Chatbot Builder",
    desc: "Create automated WhatsApp conversations using visual flows. Respond instantly, guide users, and capture leads — without writing a line of code.",
    points: ["Drag-and-drop flow builder", "Keyword & button triggers", "Multi-step conversation logic", "AI fallback responses"],
    img: chatbot,
  },
  {
    tag: "Onboard in minutes",
    title: "One-Click WhatsApp Business Onboarding",
    desc: "Connect your WhatsApp Business account and start sending in under five minutes — fully Meta-approved.",
    points: ["Embedded Meta signup", "Auto green-tick application", "Number verification", "Multi-number management"],
    img: inbox,
  },
  {
    tag: "Automate everything",
    title: "Send Automatic Order Updates",
    desc: "Trigger personalized order confirmations, shipping, and feedback messages — synced live from your store.",
    points: ["Shopify, WooCommerce native", "Custom webhook events", "Variables & personalization", "Delivery analytics"],
    img: broadcast,
  },
  {
    tag: "Convert at scale",
    title: "Broadcast Campaigns That Convert",
    desc: "Segment your audience and broadcast rich media campaigns with up to 70% open rates.",
    points: ["Audience segmentation", "Rich media (images, video, PDF)", "A/B testing", "Smart send-time"],
    img: catalog,
  },
  {
    tag: "Build anything",
    title: "Powerful APIs for Custom Integrations",
    desc: "Robust REST APIs and webhooks let your engineering team build exactly what you need on top of Quicksales.",
    points: ["Full REST + Webhooks", "Sandbox environment", "99.99% uptime SLA", "SOC 2 compliant"],
    img: analytics,
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
            One platform. <span className="italic font-serif text-primary">Infinite</span> possibilities.
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
