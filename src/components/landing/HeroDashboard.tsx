import { Send, Phone, Video, MoreVertical, CheckCheck, Smile, Paperclip, FileText, Download, MessageCircle, Instagram, Facebook, Music2 } from "lucide-react";
import listingAsset from "../../assets/media-listing.jpg.asset.json";
import floorplanAsset from "../../assets/media-floorplan.jpg.asset.json";
import brochureAsset from "../../assets/media-brochure.jpg.asset.json";
import livingAsset from "../../assets/media-living.jpg.asset.json";
import balconyAsset from "../../assets/media-balcony.jpg.asset.json";

const channels = [
  { Icon: MessageCircle, bg: "#25D366", active: true, label: "WhatsApp" },
  { Icon: Facebook, bg: "#0084FF", label: "Messenger" },
  { Icon: Instagram, bg: "linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)", label: "Instagram" },
  { Icon: Music2, bg: "#000000", label: "TikTok" },
];

const contacts = [
  { name: "Jason Tan", msg: "Is the Bukit Timah unit still…", time: "2m", unread: 3, color: "hsl(var(--bubble-pink))", initial: "JT", active: true, channel: "wa" },
  { name: "Priya Lakshmanan", msg: "Can you schedule a viewing?", time: "9m", unread: 1, color: "hsl(var(--bubble-violet))", initial: "PL", channel: "ig" },
  { name: "Marcus Ho", msg: "What's the PSF for the 3BR?", time: "15m", unread: 2, color: "hsl(var(--bubble-amber))", initial: "MH", channel: "wa" },
  { name: "Sarah Fong", msg: "Send me the floor plan pls", time: "32m", unread: 0, color: "hsl(var(--bubble-teal))", initial: "SF", channel: "wa" },
  { name: "Rajan Kumar", msg: "Thanks, send me the floor plan", time: "1h", unread: 0, color: "hsl(var(--bubble-blue))", initial: "RK", channel: "tt" },
];

const channelDot: Record<string, { bg: string; Icon: typeof MessageCircle }> = {
  wa: { bg: "#25D366", Icon: MessageCircle },
  ig: { bg: "#d62976", Icon: Instagram },
  fb: { bg: "#0084FF", Icon: Facebook },
  tt: { bg: "#000000", Icon: Music2 },
};

export const HeroDashboard = () => {
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

      <div className="grid grid-cols-12 min-h-[520px]">
        {/* Channel rail */}
        <div className="hidden sm:flex col-span-1 lg:col-span-1 flex-col items-center gap-3 py-4 bg-secondary/50 border-r border-border/50">
          {channels.map(({ Icon, bg, active, label }, i) => (
            <div
              key={i}
              title={label}
              className={`h-10 w-10 rounded-xl grid place-items-center text-white shadow-soft transition-smooth ${active ? "ring-2 ring-primary ring-offset-2 ring-offset-secondary scale-105" : "opacity-70 hover:opacity-100"}`}
              style={{ background: bg }}
            >
              <Icon className="h-5 w-5" strokeWidth={2.2} />
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="col-span-12 sm:col-span-4 lg:col-span-3 border-r border-border/50 bg-secondary/30">
          <div className="p-4 border-b border-border/50">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Search chats</p>
          </div>
          <ul className="divide-y divide-border/40 max-h-[460px] overflow-hidden">
            {contacts.map((c, i) => (
              <li key={i} className={`p-3 flex items-center gap-3 cursor-pointer ${c.active ? "bg-primary-soft/60" : "hover:bg-secondary/60"} transition-smooth`}>
                <div className="relative shrink-0">
                  <div className="h-10 w-10 rounded-full grid place-items-center text-white text-xs font-bold" style={{ background: c.color }}>
                    {c.initial}
                  </div>
                  <span
                    className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full grid place-items-center ring-2 ring-secondary text-white"
                    style={{ background: channelDot[c.channel].bg }}
                  >
                    {(() => { const Ico = channelDot[c.channel].Icon; return <Ico className="h-2.5 w-2.5" strokeWidth={2.5} />; })()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold truncate">{c.name}</p>
                    <span className="text-[10px] text-muted-foreground">{c.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{c.msg}</p>
                </div>
                {c.unread > 0 && (
                  <span className="h-5 w-5 rounded-full text-white text-[10px] font-bold grid place-items-center" style={{ background: channelDot[c.channel].bg }}>{c.unread}</span>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Chat */}
        <section className="col-span-12 sm:col-span-7 lg:col-span-5 flex flex-col bg-[hsl(60_30%_97%)]">
          <header className="flex items-center justify-between px-5 py-3 border-b border-border/50 bg-card">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full grid place-items-center text-white text-xs font-bold" style={{ background: "hsl(var(--bubble-pink))" }}>JT</div>
              <div>
                <p className="text-sm font-semibold">Jason Tan</p>
                <p className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  online · via WhatsApp
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-4 w-4" /> <Video className="h-4 w-4" /> <MoreVertical className="h-4 w-4" />
            </div>
          </header>

          <div className="flex-1 p-5 space-y-2.5 overflow-hidden text-sm">
            <div className="flex">
              <div className="bg-card rounded-2xl rounded-bl-sm px-3.5 py-2 shadow-soft max-w-[80%] border border-border/40">
                Hi! Is the Bukit Timah condo unit still available? I saw your listing on PropertyGuru.
                <span className="block text-[10px] text-muted-foreground mt-1">10:24 AM</span>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-3.5 py-2 shadow-soft max-w-[82%]">
                Yes it is! 3-bedroom, 1,200 sqft at $3.2M. Fully renovated, TOP 2021. Want me to send the listing + floor plan?
                <span className="block text-[10px] opacity-80 mt-1 flex items-center gap-1 justify-end">10:25 AM <CheckCheck className="h-3 w-3" /></span>
              </div>
            </div>

            {/* PDF: Listing */}
            <div className="flex justify-end">
              <div className="bg-primary/95 text-primary-foreground rounded-2xl rounded-br-sm p-2.5 shadow-soft max-w-[82%] w-72">
                <div className="flex items-center gap-3 bg-primary-foreground/10 rounded-xl p-2.5">
                  <div className="h-10 w-10 rounded-lg bg-primary-foreground/20 grid place-items-center shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate">Bukit-Timah-Residences.pdf</p>
                    <p className="text-[10px] opacity-80">3 pages · 1.4 MB</p>
                  </div>
                  <Download className="h-4 w-4 opacity-90" />
                </div>
                <span className="block text-[10px] opacity-80 mt-1.5 flex items-center gap-1 justify-end">10:25 AM <CheckCheck className="h-3 w-3" /></span>
              </div>
            </div>

            {/* PDF: Floor plan */}
            <div className="flex justify-end">
              <div className="bg-primary/95 text-primary-foreground rounded-2xl rounded-br-sm p-2.5 shadow-soft max-w-[82%] w-72">
                <div className="flex items-center gap-3 bg-primary-foreground/10 rounded-xl p-2.5">
                  <div className="h-10 w-10 rounded-lg bg-primary-foreground/20 grid place-items-center shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate">Floor-Plan-12-08.pdf</p>
                    <p className="text-[10px] opacity-80">1 page · 480 KB</p>
                  </div>
                  <Download className="h-4 w-4 opacity-90" />
                </div>
                <span className="block text-[10px] opacity-80 mt-1.5 flex items-center gap-1 justify-end">10:25 AM <CheckCheck className="h-3 w-3" /></span>
              </div>
            </div>

            <div className="flex">
              <div className="bg-card rounded-2xl rounded-bl-sm px-3.5 py-2 shadow-soft border border-border/40">
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

          <Metric label="Leads handled" value="84" trend="+22%" />
          <Metric label="Viewings booked" value="17" trend="+14%" />
          <Metric label="Avg response" value="<30s" />

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-2">Media shared</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Listing", sub: "PDF" },
              { label: "Floor plan", sub: "PDF" },
              { label: "Brochure", sub: "PDF" },
              { label: "Living rm", sub: "JPG" },
              { label: "Balcony", sub: "JPG" },
              { label: "+12 more", sub: "" },
            ].map((m, i) => (
              <div key={i} className="aspect-square rounded-lg bg-secondary/60 border border-border/50 p-1.5 flex flex-col justify-end">
                {m.sub === "PDF" && <FileText className="h-3.5 w-3.5 text-primary mb-auto" />}
                <span className="text-[9px] font-semibold leading-tight truncate">{m.label}</span>
                {m.sub && <span className="text-[8px] text-muted-foreground">{m.sub}</span>}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

const Metric = ({ label, value, trend }: { label: string; value: string; trend?: string }) => (
  <div>
    <p className="text-xs text-muted-foreground">{label}</p>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-bold tabular-nums">{value}</span>
      {trend && <span className="text-[11px] font-semibold text-primary">{trend}</span>}
    </div>
  </div>
);
