import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LogoCloud } from "@/components/landing/LogoCloud";
import { Features } from "@/components/landing/Features";
import { Platform } from "@/components/landing/Platform";
import { Stats } from "@/components/landing/Stats";
import { Pricing } from "@/components/landing/Pricing";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <h1 className="sr-only">Quicksales.ai — Trusted WhatsApp Sales Platform for Growing Businesses</h1>
    <Hero />
    <LogoCloud />
    <Features />
    <Platform />
    <Stats />
    <Pricing />
    <CTA />
    <Footer />
  </main>
);

export default Index;
