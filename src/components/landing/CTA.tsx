import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { ChatWidget } from "./ChatWidget";

export const CTA = () => {
  const [open, setOpen] = useState(false);
  return (
  <section id="contact" className="py-24">
    <div className="container">
      <div className="relative rounded-[2.5rem] bg-card border border-border/60 shadow-elevated p-10 sm:p-16 text-center overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[140%] bg-primary-soft/60 rounded-full blur-3xl" />
        <div className="relative">
          <span className="inline-grid place-items-center h-14 w-14 rounded-2xl bg-gradient-primary text-primary-foreground shadow-elevated mx-auto mb-6">
            <MessageCircle className="h-6 w-6" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto">
            Stop losing leads to <span className="italic font-serif text-primary">missed messages.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Every customer that messages you and doesn't get a reply instantly is a lead your competitor is closing. Quicksales makes sure that never happens again.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Button
              size="lg"
              onClick={() => setOpen(true)}
              className="bg-gradient-primary hover:opacity-90 shadow-soft rounded-full px-7 h-12"
            >
              Try out our AI Agent <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            Join businesses already growing on Quicksales · Free 14-day trial · No credit card required
          </p>
        </div>
      </div>
    </div>
    <ChatWidget open={open} onOpenChange={setOpen} />
  </section>
  );
};
