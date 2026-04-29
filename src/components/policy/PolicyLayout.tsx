import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

interface PolicyLayoutProps {
  eyebrow: string;
  title: string;
  version: string;
  effective: string;
  jurisdictions: string;
  children: ReactNode;
}

export const PolicyLayout = ({ eyebrow, title, version, effective, jurisdictions, children }: PolicyLayoutProps) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* Hero band */}
    <section className="relative overflow-hidden bg-hero border-b border-border/40">
      <div className="container py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth mb-4"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <span className="block text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
          {eyebrow}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
          {title}
        </h1>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span><strong className="text-foreground">Version:</strong> {version}</span>
          <span><strong className="text-foreground">Effective:</strong> {effective}</span>
          <span><strong className="text-foreground">Jurisdictions:</strong> {jurisdictions}</span>
        </div>
      </div>
    </section>

    {/* Body */}
    <main className="container py-12 md:py-16">
      <article
        className="
          mx-auto max-w-4xl
          rounded-2xl border border-border/60 bg-card shadow-soft
          px-6 md:px-12 py-10 md:py-14
          prose prose-slate max-w-none
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
          prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border/60
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-foreground
          prose-h4:text-base prose-h4:uppercase prose-h4:tracking-wider prose-h4:text-primary prose-h4:mt-6 prose-h4:mb-2
          prose-p:text-foreground/80 prose-p:leading-relaxed
          prose-li:text-foreground/80 prose-li:my-1
          prose-strong:text-foreground
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-table:my-6 prose-table:text-sm prose-table:border prose-table:border-border/60 prose-table:rounded-lg prose-table:overflow-hidden
          prose-th:bg-secondary prose-th:text-foreground prose-th:font-semibold prose-th:text-left prose-th:px-4 prose-th:py-3
          prose-td:px-4 prose-td:py-3 prose-td:align-top prose-td:border-t prose-td:border-border/60
        "
      >
        {children}
      </article>

      <div className="mx-auto max-w-4xl mt-10 flex flex-wrap justify-center gap-3">
        <Link to="/privacy" className="text-sm px-4 py-2 rounded-full border border-border bg-card hover:bg-secondary transition-smooth">Privacy Policy</Link>
        <Link to="/terms" className="text-sm px-4 py-2 rounded-full border border-border bg-card hover:bg-secondary transition-smooth">Terms &amp; Conditions</Link>
        <Link to="/acceptable-use" className="text-sm px-4 py-2 rounded-full border border-border bg-card hover:bg-secondary transition-smooth">Acceptable Use Policy</Link>
      </div>
    </main>
    <Footer />
  </div>
);

/* Reusable callout block for important highlighted notices in policies */
export const PolicyCallout = ({ tone = "warning", title, children }: { tone?: "warning" | "info" | "danger"; title?: string; children: ReactNode }) => {
  const styles =
    tone === "danger"
      ? "bg-destructive/5 border-destructive/30 text-foreground"
      : tone === "info"
        ? "bg-primary/5 border-primary/30 text-foreground"
        : "bg-accent/40 border-accent text-foreground";
  return (
    <div className={`not-prose my-6 rounded-xl border-l-4 ${styles} px-5 py-4`}>
      {title && <p className="font-semibold mb-1">{title}</p>}
      <div className="text-sm leading-relaxed text-foreground/85 space-y-2">{children}</div>
    </div>
  );
};
