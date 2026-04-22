import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-full.png";

const links = ["Home", "Product", "Platform", "Pricing", "Contact"];

export const Navbar = () => (
  <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/40">
    <nav className="container flex items-center justify-between h-16">
      <a href="#" className="relative flex items-center h-16 w-32 md:w-64 shrink-0">
        <img src={logo} alt="Quicksales.ai logo" className="absolute left-0 top-1/2 h-24 md:h-40 w-auto max-w-none [transform:translateY(calc(-50%+0.5rem))] md:[transform:translateY(calc(-50%+0.75rem))]" />
      </a>
      <ul className="hidden md:flex items-center gap-1 bg-card/60 border border-border/60 rounded-full px-2 py-1 shadow-soft">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-smooth">
              {l}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <Button size="sm" className="bg-gradient-primary hover:opacity-90 shadow-soft rounded-full px-5">
          Get Started
        </Button>
      </div>
    </nav>
  </header>
);
