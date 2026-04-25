import templates from "@/assets/feature-templates.jpg";
import aiAgentVideo from "@/assets/platform-ai-agent.mp4";
import schedulingVideo from "@/assets/platform-onboard.mp4";
import multiAgentVideo from "@/assets/feature-multi-agent.mp4";
import knowledgeBaseVideo from "@/assets/feature-knowledge-base.mp4";
import chatWidgetVideo from "@/assets/feature-chat-widget.mp4";
import leadScraperVideo from "@/assets/feature-lead-scraper.mp4";
import callAgentVideo from "@/assets/feature-call-agent.mp4";
import broadcastVideo from "@/assets/feature-broadcast.mp4";
import groupAiVideo from "@/assets/feature-group-ai.mp4";
import workflowBuilderVideo from "@/assets/feature-workflow-builder.mp4";
import humanTakeoverVideo from "@/assets/feature-human-takeover.mp4";
import crmIntegrationVideo from "@/assets/feature-crm-integration.mp4";
import inbox from "@/assets/feature-inbox.jpg";
import ai from "@/assets/feature-ai.jpg";
import tasks from "@/assets/feature-tasks.jpg";
import contacts from "@/assets/feature-contacts.jpg";
import catalog from "@/assets/feature-catalog.jpg";
import analytics from "@/assets/feature-analytics.jpg";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { FeaturesComparisonDialog } from "./FeaturesComparisonDialog";

const features = [
  { img: aiAgentVideo, isVideo: true, title: "AI WhatsApp Agent (Text/Voice recognition)", subtitle: "Your 24/7 sales rep on WhatsApp", desc: "Replies to customers instantly, answers questions, qualifies leads, and closes deals — automatically, even while you sleep. Reads and shares files and documents too." },
  { img: callAgentVideo, isVideo: true, title: "AI Call Agent", subtitle: "Never miss a call, never lose a lead", desc: "An AI that answers, qualifies, and follows up on calls for you — so every enquiry gets a response, day or night." },
  { img: knowledgeBaseVideo, isVideo: true, title: "AI Knowledge Base", subtitle: "Simply train your AI in minutes", desc: "Just upload your menu, catalogue, or any document — your AI learns from it instantly and uses it to answer every customer question accurately." },
  { img: multiAgentVideo, isVideo: true, title: "Multi AI Agent", subtitle: "The right agent for every job", desc: "Run multiple specialised AI agents at once — one for sales, one for support, one for bookings — each focused and sharp." },
  { img: schedulingVideo, isVideo: true, title: "Automated Appointment Scheduling", subtitle: "From chat to calendar in seconds", desc: "Your AI suggests time slots, confirms bookings, and syncs to Google Calendar automatically — no back and forth needed." },
  { img: chatWidgetVideo, isVideo: true, title: "Website Chat Widget", subtitle: "Turn website visitors into WhatsApp conversations", desc: "Drop a chat widget on your site and instantly move visitors into WhatsApp — where deals actually get closed." },
  { img: broadcastVideo, isVideo: true, title: "Broadcast Messaging", subtitle: "Reach everyone. Miss no one.", desc: "Send targeted WhatsApp campaigns to your entire customer list in one go — promotions, updates, and follow-ups at scale." },
  { img: leadScraperVideo, isVideo: true, title: "Lead Scraper", subtitle: "Find your next customer before they find you", desc: "Automatically discover business leads from Google, Facebook, and LinkedIn — complete with verified WhatsApp numbers ready to contact." },
  { img: groupAiVideo, isVideo: true, title: "WhatsApp Group AI", subtitle: "Your AI works in groups too", desc: "Add your AI agent into any WhatsApp group — it knows who's who, answers questions, reads documents, and keeps every conversation moving." },
  { img: humanTakeoverVideo, isVideo: true, title: "Human Takeover", subtitle: "Step in whenever it matters", desc: "Seamlessly jump into any conversation when needed. Your team stays in control, handles sensitive cases, and takes over from AI without disrupting the flow." },
  { img: workflowBuilderVideo, isVideo: true, comingSoon: true, title: "AI Workflow Builder", subtitle: "Create workflows with simple prompts", desc: "Just describe what you want — your AI builds the workflow for you. Automate tasks, connect tools, and launch processes in minutes without touching code." },
  { img: crmIntegrationVideo, isVideo: true, title: "CRM Integration", subtitle: "Keep all your customer data in sync", desc: "Automatically capture leads, track conversations, and update your CRM in real time — so every interaction is recorded, organised, and ready for follow-up without manual work." },
];

export const Features = () => {
  const [open, setOpen] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const primeVideo = useCallback((video: HTMLVideoElement | null) => {
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");

    const tryPlay = () => {
      void video.play().catch(() => undefined);
    };

    if (video.readyState >= 2) {
      tryPlay();
      return;
    }

    video.load();
    video.addEventListener("loadeddata", tryPlay, { once: true });
    video.addEventListener("canplay", tryPlay, { once: true });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (!entry.isIntersecting) return;
          primeVideo(video);
        });
      },
      { threshold: 0.15, rootMargin: "160px 0px" }
    );

    videoRefs.current.forEach((video) => {
      if (!video) return;
      primeVideo(video);
      observer.observe(video);
    });

    const tryPlayAll = () => {
      videoRefs.current.forEach((video) => primeVideo(video));
    };

    document.addEventListener("visibilitychange", tryPlayAll);
    window.addEventListener("focus", tryPlayAll);
    window.addEventListener("touchstart", tryPlayAll, { once: true });
    window.addEventListener("click", tryPlayAll, { once: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", tryPlayAll);
      window.removeEventListener("focus", tryPlayAll);
      window.removeEventListener("touchstart", tryPlayAll);
      window.removeEventListener("click", tryPlayAll);
    };
  }, [primeVideo]);

  return (
  <section id="product" className="py-24 sm:py-32 relative">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">Features</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            One platform. <br /><span className="italic font-serif text-primary">Endless</span> ways to grow.
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
            <div className="aspect-[4/3] overflow-hidden bg-[#E8E5DE]">
              {f.isVideo && f.img ? (
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                    primeVideo(el);
                  }}
                  src={f.img as string}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  controls={false}
                  disablePictureInPicture
                  onLoadedData={(event) => {
                    primeVideo(event.currentTarget);
                  }}
                  onCanPlay={(event) => {
                    primeVideo(event.currentTarget);
                  }}
                  className="w-full h-full object-contain"
                />
              ) : f.comingSoon ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-muted" />
              ) : (
                <img
                  src={f.img as string}
                  alt={f.title}
                  loading="lazy"
                  width={896}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              )}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold tracking-tight flex items-center gap-2">
                {f.title}
                {f.comingSoon && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary border border-primary/30 bg-primary/10 px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                )}
              </h3>
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
