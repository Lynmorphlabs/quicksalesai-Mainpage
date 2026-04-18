const logos = ["Shopify", "WooCommerce", "Zoho", "HubSpot", "Stripe", "Razorpay", "Meta", "Zapier"];

export const LogoCloud = () => (
  <section className="py-14 border-y border-border/40 bg-card/40">
    <div className="container">
      <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">
        Trusted by 1,500+ growing businesses · Integrates with your stack
      </p>
      <div className="relative overflow-hidden">
        <div className="flex gap-12 animate-marquee w-max">
          {[...logos, ...logos].map((l, i) => (
            <span key={i} className="text-2xl sm:text-3xl font-extrabold text-muted-foreground/50 tracking-tight whitespace-nowrap hover:text-foreground transition-smooth">
              {l}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card/80 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-card/80 to-transparent" />
      </div>
    </div>
  </section>
);
