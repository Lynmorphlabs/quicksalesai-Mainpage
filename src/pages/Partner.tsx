import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BadgeCheck, Handshake, Rocket, TrendingUp, Users } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "6580225588";

const perks = [
  {
    icon: TrendingUp,
    title: "Up to 30% recurring commission",
    body: "Earn on every paying customer for the lifetime of their subscription.",
  },
  {
    icon: Rocket,
    title: "Co-marketing & enablement",
    body: "Sales decks, demo accounts, training and a dedicated partner manager.",
  },
  {
    icon: Users,
    title: "Deal registration",
    body: "Protect your pipeline. Register opportunities and get full margin support.",
  },
  {
    icon: BadgeCheck,
    title: "Certified partner badge",
    body: "Showcase your status with an official Quicksales.ai partner badge.",
  },
];

const Partner = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    country: "",
    type: "",
    audience: "",
    experience: "",
    motivation: "",
    agree: false,
  });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) {
      toast({
        title: "Please confirm the agreement",
        description: "Tick the consent box before submitting your application.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    const lines = [
      "Hi Quicksales.ai team, I'd like to apply to the Partner Program.",
      "",
      `• Name: ${form.fullName}`,
      `• Email: ${form.email}`,
      `• Phone: ${form.phone}`,
      `• Company: ${form.company}`,
      `• Website: ${form.website || "—"}`,
      `• Country: ${form.country}`,
      `• Partner type: ${form.type}`,
      `• Audience / customer base: ${form.audience}`,
      `• Experience: ${form.experience || "—"}`,
      `• Why partner with us: ${form.motivation || "—"}`,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${text}&type=phone_number&app_absent=0`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast({
      title: "Application ready",
      description: "We've opened WhatsApp with your application. Hit send to reach our partnerships team.",
    });
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero border-b border-border/40">
        <div className="container py-16 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth mb-4"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            <Handshake className="h-4 w-4" /> Partner Program
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4 max-w-3xl">
            Become our Partner
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Resell, refer or build with the AI sales platform trusted by global teams. Grow recurring
            revenue while helping businesses ship AI-powered WhatsApp agents in minutes.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="container py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {perks.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application form */}
      <main className="container pb-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-card shadow-soft px-6 md:px-10 py-10 md:py-12">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-2">
              Apply to the program
            </h2>
            <p className="text-sm text-muted-foreground">
              Tell us about you and your business. Our partnerships team typically responds within 2
              business days.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name *</Label>
                <Input id="fullName" required value={form.fullName} onChange={update("fullName")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work email *</Label>
                <Input id="email" type="email" required value={form.email} onChange={update("email")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp / phone *</Label>
                <Input id="phone" required value={form.phone} onChange={update("phone")} placeholder="+65 ..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country / region *</Label>
                <Input id="country" required value={form.country} onChange={update("country")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input id="company" required value={form.company} onChange={update("company")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" value={form.website} onChange={update("website")} placeholder="https://" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="type">Partner type *</Label>
                <Select
                  value={form.type}
                  onValueChange={(v) => setForm((f) => ({ ...f, type: v }))}
                >
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select a partner type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Reseller">Reseller</SelectItem>
                    <SelectItem value="Affiliate">Affiliate</SelectItem>
                    <SelectItem value="Agency / Implementation">Agency / Implementation</SelectItem>
                    <SelectItem value="Technology / Integration">Technology / Integration</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="audience">Audience / customer base *</Label>
                <Input
                  id="audience"
                  required
                  value={form.audience}
                  onChange={update("audience")}
                  placeholder="e.g. SMBs in real estate, F&B chains, agencies..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Relevant experience</Label>
              <Textarea
                id="experience"
                rows={3}
                value={form.experience}
                onChange={update("experience")}
                placeholder="Briefly describe your sales channels, existing SaaS partnerships, or implementation expertise."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="motivation">Why partner with Quicksales.ai?</Label>
              <Textarea
                id="motivation"
                rows={3}
                value={form.motivation}
                onChange={update("motivation")}
                placeholder="What's the opportunity you see, and how would you go to market?"
              />
            </div>

            <label className="flex items-start gap-3 rounded-xl border border-border/60 bg-secondary/40 p-4 cursor-pointer">
              <Checkbox
                checked={form.agree}
                onCheckedChange={(v) => setForm((f) => ({ ...f, agree: v === true }))}
                className="mt-0.5"
              />
              <span className="text-sm text-muted-foreground">
                I agree to be contacted by the Quicksales.ai partnerships team and have read the{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms
                </Link>
                .
              </span>
            </label>

            <div className="pt-2">
              <Button type="submit" size="lg" disabled={submitting} className="bg-gradient-primary">
                {submitting ? "Submitting..." : "Submit application"}
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Partner;