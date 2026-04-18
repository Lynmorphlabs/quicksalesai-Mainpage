import { MessageCircle } from "lucide-react";

const cols = [
  { title: "Product", links: ["Features", "Platform", "Pricing", "Integrations", "Changelog"] },
  { title: "Company", links: ["About", "Customers", "Careers", "Contact", "Press"] },
  { title: "Resources", links: ["Docs", "API Reference", "Help Center", "Blog", "Status"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA", "Cookies"] },
];

export const Footer = () => (
  <footer className="border-t border-border/40 bg-card/40 pt-16 pb-10">
    <div className="container grid lg:grid-cols-6 gap-10">
      <div className="lg:col-span-2">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <span className="grid place-items-center h-8 w-8 rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
          </span>
          Quicksales<span className="text-primary">.ai</span>
        </a>
        <p className="mt-4 text-sm text-muted-foreground max-w-xs">
          The trusted WhatsApp marketing platform for growing businesses.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">+91 98798 78789</p>
        <p className="text-sm text-muted-foreground">support@quicksalesai.com</p>
      </div>
      {cols.map((c) => (
        <div key={c.title}>
          <h4 className="text-sm font-bold mb-3">{c.title}</h4>
          <ul className="space-y-2">
            {c.links.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="container mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-3">
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Quicksales.ai · All rights reserved.</p>
      <p className="text-xs text-muted-foreground">Made with 💚 for growing businesses</p>
    </div>
  </footer>
);
