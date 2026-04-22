const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#product", disabled: false },
      { label: "Platform", href: "#platform", disabled: false },
      { label: "Pricing", href: "#pricing", disabled: false },
    ],
  },
  {
    title: "Company",
    links: [{ label: "Contact", href: "#contact", disabled: false }],
  },
  {
    title: "Resources",
    links: [
      { label: "Testimonials", href: "#", disabled: true },
      { label: "FAQ", href: "#", disabled: true },
    ],
  },
];

export const Footer = () => (
  <footer className="border-t border-border/40 bg-card/40 pt-16 pb-10">
    <div className="container flex flex-wrap justify-around gap-10 text-center sm:text-left">
      {cols.map((c) => (
        <div key={c.title} className="min-w-[140px]">
          <h4 className="text-sm font-bold mb-3">{c.title}</h4>
          <ul className="space-y-2">
            {c.links.map((l) => (
              <li key={l.label}>
                {l.disabled ? (
                  <span
                    aria-disabled="true"
                    className="text-sm text-muted-foreground/50 cursor-not-allowed select-none"
                  >
                    {l.label}
                  </span>
                ) : (
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="container mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-3">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Quicksales.ai · All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground">Made with 💚 for growing businesses</p>
    </div>
  </footer>
);
