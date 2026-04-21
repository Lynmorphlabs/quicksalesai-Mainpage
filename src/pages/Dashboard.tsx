import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  MessageCircle,
  Image as ImageIcon,
  ChevronDown,
  ChevronLeft,
  Plug,
  Phone,
  FileText,
  Wrench,
  Tag,
  Network,
  Image,
  Users,
  UserCog,
  Workflow,
  Inbox,
  BookOpen,
  Bot,
  Search,
  Building2,
  ArrowLeftRight,
  Moon,
  Check,
  Rocket,
  Zap,
  ArrowRight,
  Play,
  X,
} from "lucide-react";
import logo from "@/assets/logo-full.png";

const mainItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "WA Chat", icon: MessageCircle },
  { label: "Chat Theme", icon: ImageIcon },
];

const integrationItems = [
  { label: "Connect WABA", icon: Plug },
  { label: "WABA Phone Numbers", icon: Phone },
  { label: "Templates", icon: FileText },
  { label: "Tools", icon: Wrench },
  { label: "Tags", icon: Tag },
  { label: "CRM Integration", icon: Network },
  { label: "Media", icon: Image },
  { label: "Teams", icon: Users },
  { label: "Human Agent", icon: UserCog },
];

const automationItems = [
  { label: "Flow Builder", icon: Workflow },
  { label: "Default Action", icon: Inbox },
  { label: "Reply Materials", icon: BookOpen },
  { label: "AI Agent", icon: Bot },
];

const checklist = [
  {
    title: "Create your workspace",
    desc: "Set up your workspace",
    done: true,
    highlight: true,
  },
  {
    title: "Connect your WhatsApp",
    desc: "Connect in seconds",
    done: false,
  },
  {
    title: "Set up your AI agent",
    desc: "Define how your AI talks and responds to customers",
    done: false,
  },
  {
    title: "Test your AI in chat",
    desc: "Send a message and see your AI reply instantly (24/7)",
    done: false,
  },
];

const SidebarItem = ({
  icon: Icon,
  label,
  active,
}: {
  icon: any;
  label: string;
  active?: boolean;
}) => (
  <button
    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      active
        ? "bg-primary-soft text-primary"
        : "text-foreground/70 hover:bg-secondary"
    }`}
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </button>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-between px-4 pt-5 pb-2 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
    <span>{children}</span>
    <ChevronDown className="h-3.5 w-3.5" />
  </div>
);

const Dashboard = () => {
  const completedSteps = checklist.filter((s) => s.done).length;
  const totalSteps = checklist.length;
  const progress = Math.round((completedSteps / totalSteps) * 100);
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen flex w-full bg-background">
      {/* Sidebar */}
      <aside className="w-72 shrink-0 border-r border-border/60 bg-card flex flex-col">
        <div className="h-16 flex items-center justify-between px-4 border-b border-border/60">
          <Link to="/" className="relative flex items-center h-16 flex-1 overflow-hidden">
            <img src={logo} alt="Quicksales.ai" className="absolute left-0 top-1/2 h-32 w-auto max-w-none -translate-y-1/2" />
          </Link>
          <button className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground">
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {mainItems.map((i) => (
            <SidebarItem key={i.label} {...i} />
          ))}
          <SectionLabel>Integrations</SectionLabel>
          {integrationItems.map((i) => (
            <SidebarItem key={i.label} {...i} />
          ))}
          <SectionLabel>Automations</SectionLabel>
          {automationItems.map((i) => (
            <SidebarItem key={i.label} {...i} />
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 border-b border-border/60 bg-card/60 backdrop-blur flex items-center gap-3 px-6">
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search menus..."
              className="w-full h-10 pl-10 pr-4 rounded-full bg-secondary/60 border border-border/60 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button className="hidden md:flex items-center gap-2 h-10 px-4 rounded-full border border-border/60 bg-card text-sm font-medium">
            <Building2 className="h-4 w-4 text-primary" />
            Quicksales
          </button>
          <button className="h-10 w-10 rounded-full border border-border/60 bg-card flex items-center justify-center text-muted-foreground">
            <ArrowLeftRight className="h-4 w-4" />
          </button>
          <button className="h-10 w-10 rounded-full border border-border/60 bg-card flex items-center justify-center text-muted-foreground">
            <Moon className="h-4 w-4" />
          </button>
          <button className="h-10 px-4 rounded-full border border-border/60 bg-card text-sm font-medium">
            EN
          </button>
          <button className="h-10 px-4 rounded-full border border-border/60 bg-card text-sm font-medium flex items-center gap-1">
            $ USD <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <div className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
            L
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-card/60 text-xs font-medium text-muted-foreground tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Workspace Overview
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
              Welcome to QuickSales AI
            </h1>
            <p className="mt-3 text-muted-foreground text-lg max-w-2xl">
              Set up your AI assistant in minutes and start replying to customers automatically.
            </p>

            {/* Top-level progress summary */}
            <div className="mt-6 flex items-center gap-4 p-4 rounded-2xl border border-border/60 bg-card/60">
              <div className="flex-1">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-semibold">
                    {completedSteps} of {totalSteps} steps completed
                  </span>
                  <span className="text-muted-foreground">{progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Essential setup card */}
            <div className="mt-8 rounded-3xl border border-border/60 bg-card p-6 md:p-8 shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-primary" />
                  <h2 className="text-xl md:text-2xl font-bold">
                    Essential setup{" "}
                    <span className="text-muted-foreground font-medium">
                      (Required)
                    </span>
                  </h2>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-primary-soft text-primary text-sm font-semibold whitespace-nowrap">
                  {progress}% complete
                </span>
              </div>

              <button className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group">
                <span className="h-6 w-6 rounded-full bg-primary-soft flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play className="h-3 w-3 text-primary fill-primary ml-0.5" />
                </span>
                Watch 2-min walkthrough
              </button>

              <div className="mt-4 h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full bg-gradient-primary rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <ol className="mt-6 relative">
                {checklist.map((step, idx) => (
                  <li key={step.title} className="relative mb-2">
                    {idx < checklist.length - 1 && !step.highlight && (
                      <span className="absolute left-[31px] top-[52px] bottom-[-8px] w-px bg-border" />
                    )}
                    <button
                      type="button"
                      className={`group w-full text-left flex items-start gap-4 p-4 rounded-2xl transition-colors ${
                        step.highlight
                          ? "bg-primary-soft/40 border border-primary/20 hover:bg-primary-soft/60"
                          : "hover:bg-secondary/60 border border-transparent"
                      }`}
                    >
                    <div
                      className={`relative z-10 mt-0.5 h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                        step.done
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary border border-border"
                      }`}
                    >
                      {step.done ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          {idx + 1}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{step.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {step.desc}
                      </div>
                    </div>
                    {step.done && (
                      <Check className="h-5 w-5 text-primary mt-1.5" />
                    )}
                    {!step.done && (
                      <ArrowRight className="h-4 w-4 text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    )}
                    </button>
                  </li>
                ))}
              </ol>

              <button className="mt-2 flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground px-4 py-2">
                <span className="h-5 w-5 rounded border border-border flex items-center justify-center">
                  <Check className="h-3 w-3" />
                </span>
                Explore more features <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Explore more features */}
            <div className="mt-6 rounded-3xl border border-border/60 bg-card p-6 md:p-8 shadow-soft">
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-bubble-amber" style={{ color: "hsl(var(--bubble-amber))" }} />
                <h2 className="text-xl md:text-2xl font-bold">Explore more features</h2>
              </div>

              <div className="mt-5 grid md:grid-cols-[1fr_auto] gap-6 items-end">
                <ul className="space-y-2.5 text-[15px]">
                  {[
                    ["Website Widget", "Add chat to your website"],
                    ["Lead Scraper", "Find new potential customers"],
                    ["Bulk Messaging", "Reach out to your leads"],
                    ["CRM Integration", "Connect booking tools"],
                    ["Flow Builder", "(Coming soon)"],
                    ["AI Call Agent", "(Coming soon)"],
                  ].map(([name, desc]) => (
                    <li key={name} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>
                        <span className="font-semibold">{name}</span>{" "}
                        <span className="text-muted-foreground">– {desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col items-end gap-2">
                  <button className="h-12 px-6 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-soft hover:opacity-90 transition-opacity flex items-center gap-2">
                    Start Setup <ArrowRight className="h-4 w-4" />
                  </button>
                  <div className="text-xs text-muted-foreground">
                    <button className="hover:text-foreground">Skip for now</button>
                    <span className="mx-1">–</span>
                    Takes less than 2 minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;