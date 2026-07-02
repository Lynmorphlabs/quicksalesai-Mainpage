import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-full.png";

const links: { label: string; hash: string }[] = [
  { label: "Home", hash: "/landing#top" },
  { label: "Product", hash: "/landing#product" },
  { label: "Platform", hash: "/landing#platform" },
  { label: "Pricing", hash: "/landing#pricing" },
  { label: "Customer Stories", hash: "/landing/customers" },
  { label: "Contact", hash: "/landing#contact" },
];

export const Navbar = () => (
  <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/40">
    <nav className="container flex items-center justify-between h-16">
      <a href="/landing#top" className="relative flex items-center h-16 w-32 md:w-64 shrink-0">
        <img src={logo} alt="Quicksales.ai logo" className="pointer-events-none absolute left-0 top-1/2 h-24 md:h-40 w-auto max-w-none [transform:translateY(calc(-50%+0.5rem))] md:[transform:translateY(calc(-50%+0.75rem))]" />
      </a>
      <ul className="hidden md:flex items-center gap-1 bg-card/60 border border-border/60 rounded-full px-2 py-1 shadow-soft">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.hash}
              className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-smooth"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <Button asChild size="sm" className="bg-gradient-primary hover:opacity-90 shadow-soft rounded-full px-5">
          <a href="https://quicksales.ai/auth/login" target="_blank" rel="noopener noreferrer">
            Get Started
          </a>
        </Button>
      </div>
    </nav>
  </header>
);
