import { Link } from "react-router-dom";

// Router basename ("/landing") is prepended automatically — keep paths relative to it.
const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#product", disabled: false },
      { label: "Platform", href: "/#platform", disabled: false },
      { label: "Pricing", href: "/#pricing", disabled: false },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Contact",
        href: "https://api.whatsapp.com/send/?phone=6580225588&text&type=phone_number&app_absent=0",
        disabled: false,
        external: true,
      },
      { label: "Become a Partner", href: "/partner", disabled: false },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Testimonials", href: "/#testimonials", disabled: false },
      { label: "Customer Stories", href: "/customers", disabled: false },
      { label: "FAQ", href: "#", disabled: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy", disabled: false },
      { label: "Terms & Conditions", href: "/term-of-service", disabled: false },
      { label: "Acceptable Use", href: "/acceptable-use", disabled: false },
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
                ) : (l as { external?: boolean }).external ? (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    to={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {l.label}
                  </Link>
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
    </div>
  </footer>
);
