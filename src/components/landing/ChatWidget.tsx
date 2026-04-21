import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "agent"; content: string };

interface ChatWidgetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const initialMessages: Message[] = [
  {
    role: "agent",
    content:
      "Hi! 👋 I'm the Quicksales AI Agent. Ask me anything — pricing, features, or how to get started.",
  },
];

const cannedReply = (text: string) => {
  const t = text.toLowerCase();
  if (t.includes("price") || t.includes("pricing") || t.includes("cost"))
    return "Our plans start free for 14 days — no credit card required. Want me to walk you through what's included?";
  if (t.includes("setup") || t.includes("start") || t.includes("install"))
    return "Setup takes under a minute: scan a QR code, pick a template, and you're live. Want a quick demo?";
  if (t.includes("whatsapp"))
    return "Yes! Quicksales connects directly to WhatsApp so your AI replies to every customer instantly, 24/7.";
  return "Great question! A teammate can follow up with details. In the meantime, try asking about pricing, setup, or features.";
};

export const ChatWidget = ({ open, onOpenChange }: ChatWidgetProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "agent", content: cannedReply(text) }]);
      setTyping(false);
    }, 900);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[min(22rem,calc(100vw-2rem))] animate-fade-in-up">
      <div className="rounded-3xl bg-card border border-border/60 shadow-elevated overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-primary text-primary-foreground px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-9 w-9 rounded-full bg-primary-foreground/20">
              <MessageCircle className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight">Quicksales AI Agent</p>
              <p className="text-xs opacity-90 leading-tight">Online · replies instantly</p>
            </div>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            aria-label="Close chat"
            className="rounded-full p-1 hover:bg-primary-foreground/20 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="bg-secondary/40 px-4 py-4 h-80 overflow-y-auto space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
            >
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-3.5 py-2 text-sm shadow-soft",
                  m.role === "user"
                    ? "bg-gradient-primary text-primary-foreground rounded-br-sm"
                    : "bg-card text-foreground rounded-bl-sm border border-border/60",
                )}
              >
                {m.content}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="bg-card border border-border/60 rounded-2xl rounded-bl-sm px-3.5 py-2.5 shadow-soft">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
          className="bg-card border-t border-border/60 p-3 flex items-center gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message…"
            className="rounded-full border-border/60 bg-secondary/50 focus-visible:ring-primary"
          />
          <Button
            type="submit"
            size="icon"
            className="rounded-full bg-gradient-primary hover:opacity-90 shrink-0"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};