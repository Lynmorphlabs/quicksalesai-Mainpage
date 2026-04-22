import templates from "@/assets/feature-templates.jpg";
import aiAgentVideo from "@/assets/platform-ai-agent.mp4";
import schedulingVideo from "@/assets/platform-onboard.mp4";
import inbox from "@/assets/feature-inbox.jpg";
import ai from "@/assets/feature-ai.jpg";
import tasks from "@/assets/feature-tasks.jpg";
import contacts from "@/assets/feature-contacts.jpg";
import catalog from "@/assets/feature-catalog.jpg";
import analytics from "@/assets/feature-analytics.jpg";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { FeaturesComparisonDialog } from "./FeaturesComparisonDialog";

const features = [
  { img: aiAgentVideo, isVideo: true, title: "AI WhatsApp Agent", subtitle: "Your 24/7 sales rep on WhatsApp", desc: "Replies to customers instantly, answers questions, qualifies leads, and closes deals — automatically, even while you sleep. Reads and shares files and documents too." },
  { img: inbox, title: "AI Call Agent", subtitle: "Never miss a call, never lose a lead", desc: "An AI that answers, qualifies, and follows up on calls for you — so every enquiry gets a response, day or night." },
  { img: ai, title: "AI Knowledge Base", subtitle: "Simply train your AI in minutes", desc: "Just upload your menu, catalogue, or any document — your AI learns from it instantly and uses it to answer every customer question accurately." },
  { img: tasks, title: "Multi AI Agent", subtitle: "The right agent for every job", desc: "Run multiple specialised AI agents at once — one for sales, one for support, one for bookings — each focused and sharp." },
  { img: schedulingVideo, isVideo: true, title: "Appointment Scheduling", subtitle: "From chat to calendar in seconds", desc: "Your AI suggests time slots, confirms bookings, and syncs to Google Calendar automatically — no back and forth needed." },
  { img: catalog, title: "Website Chat Widget", subtitle: "Turn website visitors into WhatsApp conversations", desc: "Drop a chat widget on your site and instantly move visitors into WhatsApp — where deals actually get closed." },
  { img: templates, title: "Broadcast Messaging", subtitle: "Reach everyone. Miss no one.", desc: "Send targeted WhatsApp campaigns to your entire customer list in one go — promotions, updates, and follow-ups at scale." },
  { img: inbox, title: "Lead Scraper", subtitle: "Find your next customer before they find you", desc: "Automatically discover business leads from Google, Facebook, and LinkedIn — complete with verified WhatsApp numbers ready to contact." },
  { img: analytics, title: "WhatsApp Group AI", subtitle: "Your AI works in groups too", desc: "Add your AI agent into any WhatsApp group — it knows who's who, answers questions, reads documents, and keeps every conversation moving." },
];

export const Features = () => {
  const [open, setOpen] = useState(false);
  return (
  <section id="product" className="py-24 sm:py-32 relative">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">Features</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            One platform. <span className="italic font-serif text-primary">Infinite</span> possibilities.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No tech team needed. No complicated setup. Just plug in, train your AI, and let it sell for you.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          className="rounded-full self-start md:self-end"
        >
          Explore Features <ArrowUpRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <article
            key={i}
            className="group rounded-3xl bg-card border border-border/60 overflow-hidden shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-smooth"
          >
            <div className="aspect-[4/3] overflow-hidden bg-secondary/40">
              {f.isVideo ? (
                <video
                  src={f.img}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              ) : (
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  width={896}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              )}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold tracking-tight">{f.title}</h3>
              {f.subtitle && (
                <p className="mt-1 text-sm font-medium text-primary">{f.subtitle}</p>
              )}
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
    <FeaturesComparisonDialog open={open} onOpenChange={setOpen} />
  </section>
  );
};
