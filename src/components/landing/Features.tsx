import templates from "@/assets/feature-templates.jpg";
import inbox from "@/assets/feature-inbox.jpg";
import ai from "@/assets/feature-ai.jpg";
import tasks from "@/assets/feature-tasks.jpg";
import contacts from "@/assets/feature-contacts.jpg";
import catalog from "@/assets/feature-catalog.jpg";
import analytics from "@/assets/feature-analytics.jpg";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const features = [
  { img: templates, title: "AI WhatsApp Agent", subtitle: "Your 24/7 sales rep on WhatsApp", desc: "Replies to customers instantly, answers questions, qualifies leads, and closes deals — automatically, even while you sleep. Reads and shares files and documents too." },
  { img: inbox, title: "AI Call Agent", subtitle: "Never miss a call, never lose a lead", desc: "An AI that answers, qualifies, and follows up on calls for you — so every enquiry gets a response, day or night." },
  { img: ai, title: "AI Knowledge Base", subtitle: "Simply train your AI in minutes", desc: "Just upload your menu, catalogue, or any document — your AI learns from it instantly and uses it to answer every customer question accurately." },
  { img: tasks, title: "Agent Task Management", desc: "Assign, track, and manage team conversations." },
  { img: contacts, title: "Contact Import", desc: "Bulk upload and organize customer contacts." },
  { img: catalog, title: "WABA Catalog", desc: "Showcase products directly inside WhatsApp chats." },
  { img: templates, title: "Sync from Meta", desc: "Auto-sync approved templates from your Meta account." },
  { img: inbox, title: "E-commerce Webhooks", desc: "Automate messages from store events instantly." },
  { img: analytics, title: "Performance Analytics", desc: "Track messages, campaigns, and engagement live." },
];

export const Features = () => (
  <section id="product" className="py-24 sm:py-32 relative">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">Features</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Tools that turn <span className="italic font-serif text-primary">chats</span> into customers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From automation to analytics, explore tools designed to simplify communication and boost conversions on WhatsApp.
          </p>
        </div>
        <Button variant="outline" className="rounded-full self-start md:self-end">
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
              <img
                src={f.img}
                alt={f.title}
                loading="lazy"
                width={896}
                height={640}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold tracking-tight">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
