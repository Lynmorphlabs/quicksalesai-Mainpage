import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroDashboard } from "./HeroDashboard";
import { FloatingBubbles } from "./FloatingBubbles";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero pt-12 pb-24 sm:pt-20 sm:pb-32">
      {/* Floating chat bubbles */}
      <FloatingBubbles />

      <div className="container relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-soft border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-8 animate-fade-in-up shadow-soft">
          <Sparkles className="h-3.5 w-3.5" />
          Powering Business Sales on WhatsApp
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.4] tracking-tight animate-fade-in-up [animation-delay:120ms]">
          The #1 Trusted{" "}
          <span className="italic font-serif text-primary">WhatsApp</span>{" "}
          AI Sales Platform
          <br className="hidden sm:block" />
          {" "}for{" "}
          <span className="italic font-serif text-primary">Growing</span> Businesses
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:240ms]">
          Everything you need to sell, support, and grow customers on WhatsApp in one place.
        </p>

        <div className="mt-9 flex items-center justify-center gap-3 animate-fade-in-up [animation-delay:360ms]">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-elevated rounded-full px-7 text-base h-12 group">
            Get Started
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-7 text-base h-12 border-border/80">
            <a
              href="https://api.whatsapp.com/send/?phone=6580225588&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Demo
            </a>
          </Button>
        </div>

        <div className="mt-4 text-xs text-muted-foreground animate-fade-in-up [animation-delay:480ms]">
          No credit card required · Free 14-day trial · Live in under 60 seconds
        </div>
      </div>

      {/* Animated dashboard mockup */}
      <div className="container relative z-10 mt-16 max-w-5xl animate-fade-in-up [animation-delay:600ms]">
        <HeroDashboard />
      </div>
    </section>
  );
};
