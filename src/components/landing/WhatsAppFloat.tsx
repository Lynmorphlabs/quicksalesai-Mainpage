import { useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=6580225588&text&type=phone_number&app_absent=0";

export const WhatsAppFloat = () => {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-fade-in">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 rounded-full bg-foreground text-background pl-5 pr-14 py-3 shadow-elevated hover:shadow-bubble transition-smooth hover:-translate-y-0.5"
        aria-label="Chat with our expert on WhatsApp"
      >
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold tracking-wide">CHAT WITH OUR EXPERT</span>
          <span className="text-[10px] uppercase tracking-widest opacity-70">
            Mon–Fri 9am–6pm SGT
          </span>
        </div>
        <span className="absolute -right-1 top-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-[#25D366] text-white shadow-elevated transition-transform group-hover:scale-110">
          <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden="true">
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.78 3.41 4.74 4.323.473.215.99.4 1.504.557.486.144 1.012.244 1.526.244.873 0 1.97-.443 2.34-1.245.187-.4.302-.83.302-1.26 0-.114-.03-.243-.057-.347-.114-.4-.486-.717-.916-.917-.43-.213-.83-.343-1.146-.486-.16-.058-.358-.058-.5-.058z" />
            <path d="M16.001 0C7.164 0 0 7.164 0 16c0 2.728.687 5.388 2.005 7.748L.097 31.06a.75.75 0 0 0 .914.927l7.46-2.005A15.99 15.99 0 0 0 16 32c8.836 0 16-7.164 16-16S24.837 0 16.001 0zm.001 29.355a13.34 13.34 0 0 1-6.81-1.853.75.75 0 0 0-.575-.07l-5.64 1.516 1.514-5.64a.75.75 0 0 0-.07-.575A13.32 13.32 0 0 1 2.645 16c0-7.367 5.99-13.355 13.357-13.355S29.358 8.633 29.358 16s-5.99 13.355-13.357 13.355z" />
          </svg>
        </span>
      </a>
      <button
        onClick={() => setClosed(true)}
        aria-label="Dismiss"
        className="absolute -top-2 -right-2 grid place-items-center h-6 w-6 rounded-full bg-background border border-border text-muted-foreground hover:text-foreground shadow-soft"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
};