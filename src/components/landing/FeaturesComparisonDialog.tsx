import { Check, Minus, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const plans = ["Starter", "Growth", "Pro", "Scale"] as const;
type Plan = (typeof plans)[number];

const rows: { feature: string; included: Plan[] }[] = [
  { feature: "AI WhatsApp Agent", included: ["Starter", "Growth", "Pro", "Scale"] },
  { feature: "Smart FAQ Handling", included: ["Starter", "Growth", "Pro", "Scale"] },
  { feature: "AI Content Replies", included: ["Starter", "Growth", "Pro", "Scale"] },
  { feature: "E-SIM Setup", included: ["Starter", "Growth", "Pro", "Scale"] },
  { feature: "AI Knowledge Base", included: ["Starter", "Growth", "Pro", "Scale"] },
  { feature: "Workflow Automation", included: ["Growth", "Pro", "Scale"] },
  { feature: "WhatsApp Templates", included: ["Growth", "Pro", "Scale"] },
  { feature: "Bulk Messaging", included: ["Growth", "Pro", "Scale"] },
  { feature: "Lead Engagement", included: ["Growth", "Pro", "Scale"] },
  { feature: "Multi AI Agents", included: ["Pro", "Scale"] },
  { feature: "WhatsApp Detection", included: ["Pro", "Scale"] },
  { feature: "Lead Finder & Qualification", included: ["Pro", "Scale"] },
  { feature: "CRM Integration", included: ["Pro", "Scale"] },
  { feature: "Webhooks", included: ["Scale"] },
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FeaturesComparisonDialog = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 gap-0 overflow-hidden rounded-3xl border-border/60">
        {/* Header */}
        <DialogHeader className="px-8 pt-8 pb-6 bg-gradient-to-br from-primary-soft/60 via-background to-background border-b border-border/60">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Plan comparison
          </div>
          <DialogTitle className="text-3xl font-extrabold tracking-tight">
            Every feature, every plan.
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Compare what's included so you can pick the plan that fits your business.
          </DialogDescription>
        </DialogHeader>

        {/* Table */}
        <div className="max-h-[65vh] overflow-y-auto px-4 sm:px-8 py-6 bg-background">
          <div className="rounded-2xl border border-border/60 overflow-hidden">
            {/* Column headers */}
            <div className="grid grid-cols-[1.5fr_repeat(4,1fr)] bg-secondary/60 border-b border-border/60">
              <div className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Features
              </div>
              {plans.map((plan) => (
                <div
                  key={plan}
                  className={cn(
                    "px-3 py-4 text-center text-sm font-bold",
                    plan === "Pro" && "bg-primary-soft/60 text-primary",
                  )}
                >
                  {plan}
                  {plan === "Pro" && (
                    <div className="text-[10px] font-semibold uppercase tracking-wider mt-0.5">
                      Popular
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className={cn(
                  "grid grid-cols-[1.5fr_repeat(4,1fr)] items-center transition-colors hover:bg-secondary/40",
                  i % 2 === 1 && "bg-secondary/20",
                  i !== rows.length - 1 && "border-b border-border/40",
                )}
              >
                <div className="px-5 py-3.5 text-sm font-medium text-foreground">
                  {row.feature}
                </div>
                {plans.map((plan) => {
                  const has = row.included.includes(plan);
                  return (
                    <div
                      key={plan}
                      className={cn(
                        "px-3 py-3.5 grid place-items-center",
                        plan === "Pro" && "bg-primary-soft/30",
                      )}
                    >
                      {has ? (
                        <span className="grid place-items-center h-7 w-7 rounded-full bg-primary/10 text-primary">
                          <Check className="h-4 w-4" strokeWidth={3} />
                        </span>
                      ) : (
                        <Minus className="h-4 w-4 text-muted-foreground/40" />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-center text-muted-foreground">
            Please contact us for customised solution.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};