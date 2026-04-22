import { useEffect, useState } from "react";
import { Search, Send, Phone, Video, MoreVertical, CheckCheck, Smile, Paperclip, Users, BarChart3, MessageSquare, TrendingUp } from "lucide-react";

const contacts = [
  { name: "Priya Sharma", msg: "Thanks! Order confirmed 🙌", time: "2m", unread: 2, color: "hsl(var(--bubble-pink))", initial: "PS", active: true },
  { name: "Ahmed Khan", msg: "Can you share the catalog?", time: "8m", unread: 0, color: "hsl(var(--bubble-blue))", initial: "AK" },
  { name: "Sara Mehta", msg: "Looks great, send invoice", time: "12m", unread: 1, color: "hsl(var(--bubble-amber))", initial: "SM" },
  { name: "Rohan Das", msg: "Typing…", time: "now", unread: 0, color: "hsl(var(--bubble-violet))", initial: "RD" },
  { name: "Lina Wu", msg: "Perfect, thank you!", time: "1h", unread: 0, color: "hsl(var(--bubble-teal))", initial: "LW" },
];

export const HeroDashboard = () => {
  const [count, setCount] = useState(12480);
  useEffect(() => {
    const i = setInterval(() => setCount((c) => c + Math.floor(Math.random() * 4) + 1), 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative rounded-[2rem] bg-card/90 backdrop-blur-xl border border-border/60 shadow-elevated overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-border/50 bg-secondary/40">
        <span className="h-3 w-3 rounded-full bg-destructive/70" />
        <span className="h-3 w-3 rounded-full bg-[hsl(var(--bubble-amber))]" />
        <span className="h-3 w-3 rounded-full bg-primary" />
        <div className="ml-4 flex-1 max-w-xs mx-auto bg-background/80 rounded-md px-3 py-1 text-xs text-muted-foreground border border-border/60">
          app.quicksales.ai/inbox
        </div>
      </div>

      <div className="grid grid-cols-12 min-h-[480px]">
        {/* Sidebar */}
        <aside className="col-span-12 sm:col-span-4 lg:col-span-3 border-r border-border/50 bg-secondary/30">
          <div className="p-4 border-b border-border/50">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input className="w-full bg-background rounded-full pl-9 pr-3 py-2 text-sm border border-border/60 outline-none" placeholder="Search chats" readOnly />
            </div>
          </div>
          <ul className="divide-y divide-border/40 max-h-[420px] overflow-hidden">
            {contacts.map((c, i) => (
              <li key={i} className={`p-3 flex items-center gap-3 cursor-pointer ${c.active ? "bg-primary-soft/60" : "hover:bg-secondary/60"} transition-smooth`}>
                <div className="h-10 w-10 rounded-full grid place-items-center text-white text-xs font-bold shrink-0" style={{ background: c.color }}>
                  {c.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold truncate">{c.name}</p>
                    <span className="text-[10px] text-muted-foreground">{c.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{c.msg}</p>
                </div>
                {c.unread > 0 && (
                  <span className="h-5 w-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold grid place-items-center">{c.unread}</span>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Chat */}
        <section className="col-span-12 sm:col-span-8 lg:col-span-6 flex flex-col bg-[hsl(60_30%_97%)]">
          <header className="flex items-center justify-between px-5 py-3 border-b border-border/50 bg-card">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full grid place-items-center text-white text-xs font-bold" style={{ background: "hsl(var(--bubble-pink))" }}>PS</div>
              <div>
                <p className="text-sm font-semibold">Priya Sharma</p>
                <p className="text-[11px] text-primary flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> online
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-4 w-4" /> <Video className="h-4 w-4" /> <MoreVertical className="h-4 w-4" />
            </div>
          </header>

          <div className="flex-1 p-5 space-y-3 overflow-hidden">
            <div className="flex">
              <div className="bg-card rounded-2xl rounded-bl-sm px-3.5 py-2 text-sm shadow-soft max-w-[75%] border border-border/40">
                Hi! Is the green tee back in stock? 👕
                <span className="block text-[10px] text-muted-foreground mt-1">10:24 AM</span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-3.5 py-2 text-sm shadow-soft max-w-[75%]">
                Yes! Restocked this morning. Want me to send the catalog?
                <span className="block text-[10px] opacity-80 mt-1 flex items-center gap-1 justify-end">10:25 AM <CheckCheck className="h-3 w-3" /></span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-3.5 py-2 text-sm shadow-soft max-w-[75%]">
                🛍️ Catalog · Summer Collection
                <span className="block text-[10px] opacity-80 mt-1 flex items-center gap-1 justify-end">10:25 AM <CheckCheck className="h-3 w-3" /></span>
              </div>
            </div>
            <div className="flex">
              <div className="bg-card rounded-2xl rounded-bl-sm px-3.5 py-2 text-sm shadow-soft border border-border/40">
                <span className="inline-flex gap-1 items-end h-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing-1" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing-2" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing-3" />
                </span>
              </div>
            </div>
          </div>

          <footer className="p-3 border-t border-border/50 bg-card flex items-center gap-2">
            <Smile className="h-4 w-4 text-muted-foreground" />
            <Paperclip className="h-4 w-4 text-muted-foreground" />
            <input className="flex-1 bg-secondary/60 rounded-full px-4 py-2 text-sm outline-none" placeholder="Type a message" readOnly />
            <button className="h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center shadow-soft">
              <Send className="h-4 w-4" />
            </button>
          </footer>
        </section>

        {/* Stats panel */}
        <aside className="hidden lg:flex col-span-3 flex-col gap-3 p-4 bg-card border-l border-border/50">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Today</p>

          <StatCard
            icon={<MessageSquare className="h-4 w-4" />}
            label="Messages sent"
            value={count.toLocaleString()}
            trend="+18%"
            color="hsl(var(--primary))"
          />
          <StatCard
            icon={<Users className="h-4 w-4" />}
            label="New Leads"
            value="248"
            trend="+9%"
            color="hsl(var(--bubble-blue))"
          />
          <StatCard
            icon={<TrendingUp className="h-4 w-4" />}
            label="Response rate"
            value="94%"
            trend="+3%"
            color="hsl(var(--bubble-violet))"
          />

          <div className="mt-2 rounded-2xl bg-secondary/50 border border-border/50 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold">Last 7 days</span>
              <BarChart3 className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <div className="flex items-end gap-1.5 h-20">
              {[40, 65, 55, 80, 70, 90, 100].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-md bg-gradient-primary opacity-80" style={{ height: `${h}%`, animation: `fade-in-up 0.6s ${i * 80}ms both` }} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, trend, color }: { icon: React.ReactNode; label: string; value: string; trend: string; color: string; }) => (
  <div className="rounded-2xl bg-secondary/50 border border-border/50 p-3">
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className="h-6 w-6 rounded-md grid place-items-center text-white" style={{ background: color }}>{icon}</span>
      {label}
    </div>
    <div className="mt-1.5 flex items-baseline justify-between">
      <span className="text-xl font-bold tabular-nums">{value}</span>
      <span className="text-[10px] font-semibold text-primary">{trend}</span>
    </div>
  </div>
);
