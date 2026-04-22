const links = [
  { label: "Features", href: "#product" },
  { label: "Platform", href: "#platform" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => (
  <footer className="border-t border-border/40 bg-card/40 pt-12 pb-10">
    <div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
        >
          {l.label}
        </a>
      ))}
    </div>
    <div className="container mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-3">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Quicksales.ai · All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground">Made with 💚 for growing businesses</p>
    </div>
  </footer>
);
