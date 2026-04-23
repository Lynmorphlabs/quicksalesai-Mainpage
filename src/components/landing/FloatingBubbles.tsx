import { Check, ShoppingBag, Bot, Zap } from "lucide-react";

type Bubble = {
  name: string;
  msg: string;
  color: string; // hsl var
  pos: string; // tailwind position classes
  anim: string;
  delay: string;
  icon?: React.ReactNode;
  avatar?: string;
};

const bubbles: Bubble[] = [
  {
    name: "Paul",
    msg: "Appointment Booked 📅",
    color: "hsl(var(--bubble-pink))",
    pos: "left-[2%] top-[44%]",
    anim: "animate-float-slow",
    delay: "[animation-delay:0ms]",
    avatar: "PS",
  },
  {
    name: "Adam",
    msg: "Reply sent ✓✓",
    color: "hsl(var(--bubble-blue))",
    pos: "left-[4%] top-[74%] hidden md:block",
    anim: "animate-float-medium",
    delay: "[animation-delay:400ms]",
    avatar: "AK",
  },
  {
    name: "Sara",
    msg: "New enquiry",
    color: "hsl(var(--bubble-amber))",
    pos: "right-[2%] top-[48%]",
    anim: "animate-float-medium",
    delay: "[animation-delay:200ms]",
    icon: <ShoppingBag className="h-3 w-3" />,
    avatar: "SM",
  },
  {
    name: "Bot",
    msg: "Auto-reply ⚡",
    color: "hsl(var(--bubble-violet))",
    pos: "right-[4%] top-[76%] hidden md:block",
    anim: "animate-float-slow",
    delay: "[animation-delay:600ms]",
    icon: <Bot className="h-3 w-3" />,
  },
  {
    name: "Campaign",
    msg: "1283 Leads Found",
    color: "hsl(var(--bubble-teal))",
    pos: "left-[8%] top-[8%] hidden lg:block",
    anim: "animate-drift",
    delay: "[animation-delay:300ms]",
    icon: <Zap className="h-3 w-3" />,
  },
  {
    name: "Lead",
    msg: "New Leads 🎉",
    color: "hsl(var(--primary))",
    pos: "right-[8%] top-[6%] hidden lg:block",
    anim: "animate-float-fast",
    delay: "[animation-delay:500ms]",
    icon: <Check className="h-3 w-3" />,
  },
];

export const FloatingBubbles = () => (
  <div className="absolute inset-0 pointer-events-none">
    {bubbles.map((b, i) => (
      <div key={i} className={`absolute ${b.pos} ${b.anim} ${b.delay}`}>
        {/* avatar circle with name tag */}
        <div className="relative flex items-center gap-2">
          {b.avatar && (
            <div
              className="h-10 w-10 rounded-full grid place-items-center text-white text-xs font-bold shadow-bubble border-2 border-white"
              style={{ background: b.color }}
            >
              {b.avatar}
              <span
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-semibold text-white whitespace-nowrap shadow-bubble"
                style={{ background: b.color }}
              >
                {b.name}
              </span>
            </div>
          )}
          {!b.avatar && b.icon && (
            <div
              className="px-3 py-1.5 rounded-full text-white text-xs font-semibold shadow-bubble flex items-center gap-1.5 border-2 border-white"
              style={{ background: b.color }}
            >
              {b.icon}
              {b.msg}
            </div>
          )}
          {b.avatar && (
            <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-1.5 shadow-bubble text-xs font-medium text-foreground border border-border/40 hidden sm:block">
              {b.msg}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);
