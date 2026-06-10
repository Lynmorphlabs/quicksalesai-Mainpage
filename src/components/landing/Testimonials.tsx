import { Quote } from "lucide-react";
import asiatokenfundLogo from "@/assets/logos/asiatokenfund.jpeg";
import ascentisLogo from "@/assets/logos/ascentis.png";
import pestwerkzLogo from "@/assets/logos/pestwerkz.jpg";
import lckLogo from "@/assets/logos/lck.jpg";
import pengemsLogo from "@/assets/logos/pengems.jpg";
import glasshouseLogo from "@/assets/logos/glasshouse.jpg";

const testimonials = [
  {
    name: "Ken Nizam",
    role: "CEO, AsiaTokenFund Group & 1M Technology",
    initials: "KN",
    logo: asiatokenfundLogo,
    quote:
      "We thought QuickSales was a tool. It turned out to be a sales team, handling replies, qualifying leads, and booking meetings automatically.",
  },
  {
    name: "Johnson Tan",
    role: "Deputy CEO, Ascentis",
    initials: "JT",
    logo: ascentisLogo,
    quote:
      "QuickSales can replace multiple tools and roles. It qualifies, follows up, and books, without human effort.",
  },
  {
    name: "Verena Wirasaputra",
    role: "Zagora Music School",
    initials: "VW",
    quote:
      "I used to spend my whole monday morning replying to parents about trial slots and reschedules. Now I just check what the AI already handled. Took me 5 min to set up.",
  },
  {
    name: "Javier Ang",
    role: "Pestwerkz Control",
    initials: "JA",
    logo: pestwerkzLogo,
    quote:
      "I tried the lead scraper feature and within the first week I already had more than 20 new enquiries coming in that I didn't go and find myself, and impressive AI customer support!",
  },
  {
    name: "Brian Lee",
    role: "LCK Aluminum",
    initials: "BL",
    logo: lckLogo,
    quote:
      "I had a client drop off because I took too long to confirm a site visit. After I started using this, I haven't had that problem since. Same day confirmation every time. AI Agent is smart too!",
  },
  {
    name: "Varat",
    role: "PenGems Jewelry Retailer",
    initials: "VA",
    logo: pengemsLogo,
    quote:
      "I lost quite a few customers over the weekend because I can't reply fast enough. After I set this up, everything gets answered and booked automatically. I'm so free now~",
  },
  {
    name: "Wang Wei Zhong",
    role: "Property Agent",
    initials: "WZ",
    quote:
      "I was in a viewing once and missed 3 enquiries. Lost all of them. Now I never miss one because AI replies while I'm with another client. Wish I had this earlier!! Cheapest & smartest assistant!",
  },
  {
    name: "Toh Wee Leong",
    role: "Glasshouse Creamery",
    initials: "TL",
    logo: glasshouseLogo,
    logoFill: true,
    quote:
      "I used to manage all the party bookings myself on WhatsApp, very messy. Now I just check the confirmed reservations in the morning. The AI settle everything for me now. Worth it!!",
  },
];

export const Testimonials = () => (
  <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
    {/* Techy background accents */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[80%] bg-primary-soft/50 blur-3xl rounded-full" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 40%, black 30%, transparent 75%)",
        }}
      />
    </div>

    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
          WALL OF LOVE
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Loved by <span className="italic font-serif text-primary">operators</span> who ship
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Real words from leaders running real businesses on Quicksales.
        </p>
      </div>

      <div
        className="relative max-w-6xl mx-auto group/marquee"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee group-hover/marquee:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <figure
                key={`${t.name}-${i}`}
                className="group relative shrink-0 w-[88vw] sm:w-[480px] md:w-[560px] flex flex-col rounded-3xl p-8 sm:p-10 bg-card/70 backdrop-blur-xl border border-border/60 shadow-soft hover:shadow-elevated transition-smooth overflow-hidden"
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-smooth"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--primary) / 0.08), transparent 60%)",
                  }}
                />

                <Quote className="h-8 w-8 text-primary/70 mb-5" strokeWidth={2.5} />

                <blockquote className="flex-1 text-base sm:text-lg leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-4 pt-6 border-t border-border/60">
                  {t.logo ? (
                    <div className="h-12 w-12 rounded-2xl bg-white border border-border/60 shadow-soft shrink-0 overflow-hidden">
                      <img
                        src={t.logo}
                        alt={`${t.role} logo`}
                        className={
                          t.logoFill
                            ? "h-full w-full object-cover"
                            : "h-full w-full object-contain p-1.5"
                        }
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground font-bold text-sm shadow-soft shrink-0">
                      {t.initials}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-foreground leading-tight">{t.name}</div>
                    <div className="text-sm text-muted-foreground leading-tight mt-0.5">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);