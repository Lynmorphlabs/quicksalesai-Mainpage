import { Send, Phone, Video, MoreVertical, CheckCheck, Smile, Paperclip, FileText, Download, Instagram, Facebook, MessageSquare, CalendarCheck, Clock } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

const WhatsAppIcon: ComponentType<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.72 1.46h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TikTokIcon: ComponentType<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.89 2.89 2.89 0 012.88-2.89c.3 0 .58.06.84.13v-3.5a6.36 6.36 0 00-.84-.06A6.34 6.34 0 005.07 15.5a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.43a8.16 8.16 0 004.77 1.52v-3.5a4.85 4.85 0 01-.59-.76z" />
  </svg>
);

import listingAsset from "../../assets/media-listing.jpg.asset.json";
import floorplanAsset from "../../assets/media-floorplan.jpg.asset.json";
import brochureAsset from "../../assets/media-brochure.jpg.asset.json";
import livingAsset from "../../assets/media-living.jpg.asset.json";
import balconyAsset from "../../assets/media-balcony.jpg.asset.json";
import tiktokBrand from "../../assets/logos/tiktok-brand.png.asset.json";
import instagramBrand from "../../assets/logos/instagram-brand.png.asset.json";
import facebookBrand from "../../assets/logos/facebook-brand.png.asset.json";
import whatsappBrand from "../../assets/logos/whatsapp-brand.png.asset.json";
import wechatBrand from "../../assets/logos/wechat-brand.svg.asset.json";
import jasonAvatar from "../../assets/avatars/jason.jpg.asset.json";
import priyaAvatar from "../../assets/avatars/priya.jpg.asset.json";
import sarahAvatar from "../../assets/avatars/sarah.jpg.asset.json";

const BrandImg = (src: string): ComponentType<{ className?: string }> => ({ className }) => (
  <img src={src} alt="" className={className} />
);
const InstagramBrand = BrandImg(instagramBrand.url);
const FacebookBrand = BrandImg(facebookBrand.url);
const TikTokBrand = BrandImg(tiktokBrand.url);
const WhatsAppBrand = BrandImg(whatsappBrand.url);
const WeChatBrand = BrandImg(wechatBrand.url);

const channels = [
  { Icon: WhatsAppBrand, bg: "transparent", active: true, label: "WhatsApp", bare: true },
  { Icon: WeChatBrand, bg: "transparent", label: "WeChat", bare: true },
  { Icon: FacebookBrand, bg: "transparent", label: "Facebook", bare: true },
  { Icon: InstagramBrand, bg: "transparent", label: "Instagram", bare: true },
  { Icon: TikTokBrand, bg: "transparent", label: "TikTok", bare: true },
];

type Contact = { name: string; msg: string; time: string; unread: number; color: string; initial: string; channel: string; active?: boolean; avatar?: string };
const contacts: Contact[] = [
  { name: "Jason Tan", msg: "Is the Bukit Timah unit still…", time: "2m", unread: 3, color: "hsl(var(--bubble-pink))", initial: "JT", active: true, channel: "wa", avatar: jasonAvatar.url },
  { name: "Priya Lakshmanan", msg: "Can you schedule a viewing?", time: "9m", unread: 1, color: "hsl(var(--bubble-violet))", initial: "PL", channel: "ig", avatar: priyaAvatar.url },
  { name: "Marcus Ho", msg: "What's the PSF for the 3BR?", time: "15m", unread: 2, color: "hsl(var(--bubble-amber))", initial: "MH", channel: "wa" },
  { name: "Sarah Fong", msg: "Send me the floor plan pls", time: "32m", unread: 0, color: "hsl(var(--bubble-teal))", initial: "SF", channel: "wc", avatar: sarahAvatar.url },
  { name: "Rajan Kumar", msg: "Thanks, send me the floor plan", time: "1h", unread: 0, color: "hsl(var(--bubble-blue))", initial: "RK", channel: "tt" },
];

const moreContacts: Contact[] = [
  { name: "Aisha Rahman", msg: "Is the unit pet-friendly?", time: "2h", unread: 0, color: "hsl(var(--bubble-pink))", initial: "AR", channel: "fb", avatar: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&h=120&fit=crop" },
  { name: "Daniel Lim", msg: "Can we negotiate the price?", time: "3h", unread: 0, color: "hsl(var(--bubble-amber))", initial: "DL", channel: "wa" },
  { name: "Wei Ling", msg: "Sent over the docs, thanks!", time: "5h", unread: 0, color: "hsl(var(--bubble-violet))", initial: "WL", channel: "wc", avatar: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=120&h=120&fit=crop" },
  { name: "Kenny Chua", msg: "Looking for a 2BR under $1.8M", time: "1d", unread: 0, color: "hsl(var(--bubble-teal))", initial: "KC", channel: "tt" },
  { name: "Mei Ling Tan", msg: "Can I view this weekend?", time: "1d", unread: 0, color: "hsl(var(--bubble-blue))", initial: "ML", channel: "ig", avatar: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=120&h=120&fit=crop" },
  { name: "Ravi Subramaniam", msg: "Is parking included?", time: "2d", unread: 0, color: "hsl(var(--bubble-amber))", initial: "RS", channel: "fb", avatar: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=120&h=120&fit=crop" },
];

const allContacts = [...contacts, ...moreContacts];

const channelDot: Record<string, { bg: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }> = {
  wa: { bg: "#25D366", Icon: WhatsAppIcon },
  ig: { bg: "#d62976", Icon: Instagram as unknown as ComponentType<SVGProps<SVGSVGElement>> },
  fb: { bg: "#0084FF", Icon: Facebook as unknown as ComponentType<SVGProps<SVGSVGElement>> },
  tt: { bg: "#000000", Icon: TikTokIcon },
  wc: { bg: "#2DC100", Icon: MessageSquare as unknown as ComponentType<SVGProps<SVGSVGElement>> },
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
        {/* Sidebar */}
        <aside className="col-span-12 sm:col-span-5 lg:col-span-4 border-r border-border/50 bg-secondary/30">
          {/* Channels on top */}
          <div className="flex items-center gap-2 px-3 py-3 border-b border-border/50">
            {channels.map(({ Icon, bg, active, label, bare }: any, i) => (
              <div
                key={i}
                title={label}
                className={`h-9 w-9 rounded-xl overflow-hidden grid place-items-center text-white transition-smooth ${bare ? "" : "shadow-soft"} ${active ? "ring-2 ring-primary ring-offset-2 ring-offset-secondary scale-105" : "opacity-90 hover:opacity-100"}`}
                style={{ background: bg }}
              >
                <Icon className={bare ? "h-9 w-9 object-cover" : "h-4 w-4"} />
              </div>
            ))}
          </div>
          <div className="p-3 border-b border-border/50">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Search chats</p>
          </div>
          <ul className="divide-y divide-border/40">
            {allContacts.map((c, i) => (
              <li key={i} className={`p-3 flex items-center gap-3 cursor-pointer ${c.active ? "bg-primary-soft/60" : "hover:bg-secondary/60"} transition-smooth`}>
                <div className="relative shrink-0">
                  {c.avatar ? (
                    <img src={c.avatar} alt={c.name} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
                  ) : (
                    <div className="h-10 w-10 rounded-full grid place-items-center text-white text-xs font-bold" style={{ background: c.color }}>
                      {c.initial}
                    </div>
                  )}
                  <span
                    className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full grid place-items-center ring-2 ring-secondary text-white"
                    style={{ background: channelDot[c.channel].bg }}
                  >
                    {(() => { const Ico = channelDot[c.channel].Icon; return <Ico className="h-2.5 w-2.5" />; })()}
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

          <Metric label="Leads handled" value="84" trend="+22%" Icon={MessageSquare} iconColor="hsl(var(--bubble-teal))" />
          <Metric label="Viewings booked" value="17" trend="+14%" Icon={CalendarCheck} iconColor="hsl(var(--bubble-blue))" />
          <Metric label="Avg response" value="<30s" Icon={Clock} iconColor="hsl(var(--bubble-amber))" />

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-2">Media shared</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { sub: "PDF", img: listingAsset.url },
              { sub: "PDF", img: floorplanAsset.url },
              { sub: "PDF", img: brochureAsset.url },
              { sub: "JPG", img: livingAsset.url },
              { sub: "JPG", img: balconyAsset.url },
              { label: "+12 more", sub: "" },
            ].map((m, i) => (
              <div key={i} className="aspect-square rounded-lg bg-secondary/60 border border-border/50 overflow-hidden relative group">
                {m.img ? (
                  <>
                    <img src={m.img} alt={m.sub} loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 grid place-items-center bg-black/25">
                      <span className="text-sm font-extrabold text-white tracking-wide drop-shadow">{m.sub}</span>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <span className="text-[10px] font-bold text-muted-foreground">{m.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

const Metric = ({ label, value, trend, Icon, iconColor }: { label: string; value: string; trend?: string; Icon: ComponentType<SVGProps<SVGSVGElement>>; iconColor: string }) => (
  <div className="rounded-xl border border-border/60 bg-secondary/40 p-3">
    <div className="flex items-center gap-2 mb-1">
      <span className="h-7 w-7 rounded-lg grid place-items-center text-white shrink-0" style={{ background: iconColor }}>
        <Icon className="h-4 w-4" strokeWidth={2.4} />
      </span>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-bold tabular-nums">{value}</span>
      {trend && <span className="text-[11px] font-semibold text-primary">{trend}</span>}
    </div>
  </div>
);
