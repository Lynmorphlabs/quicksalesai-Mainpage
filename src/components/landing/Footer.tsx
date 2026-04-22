const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#product" },
      { label: "Platform", href: "#platform" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [{ label: "Contact", href: "#contact" }],
  },
];

export const Footer = () => (
  <footer className="border-t border-border/40 bg-card/40 pt-16 pb-10">
    <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
      {cols.map((c) => (
        <div key={c.title}>
          <h4 className="text-sm font-bold mb-3">{c.title}</h4>
          <ul className="space-y-2">
            {c.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {l.label}
                </a>
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
