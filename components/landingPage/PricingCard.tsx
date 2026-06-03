import { cn } from "@/lib/utils";
import { Check, Sparkles } from "lucide-react";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import AppButton from "./AppButton";

const PricingCard = ({
  name,
  price,
  description,
  features,
  cta,
  highlighted = false,
  className = "",
}: PricingCardProps) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500",
        "hover:-translate-y-3 hover:shadow-2xl",
        highlighted
          ? "border-border bg-background/80 shadow-xl"
          : "border-border/50 bg-background/50 hover:border-border hover:bg-background/80",
        className,
      )}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Glow */}
        {highlighted && (
          <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        )}

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.05)_1px,transparent_1px)] bg-size-[28px_28px]" />
      </div>

      {/* Popular Badge */}
      {highlighted && (
        <div className="absolute right-5 top-5 z-20">
          <div className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur-md">
            <Sparkles className="h-3 w-3" />
            Popular
          </div>
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <CardHeader className="flex flex-col gap-5 p-8">
          <div className="flex flex-col gap-2">
            <CardTitle className="text-2xl font-semibold tracking-tight">
              {name}
            </CardTitle>

            <CardDescription className="text-base leading-relaxed text-muted-foreground">
              {description}
            </CardDescription>
          </div>

          {/* Pricing */}
          <div className="flex items-end gap-2">
            <span className="text-5xl font-bold tracking-tight">{price}</span>

            <span className="text-sm text-muted-foreground">/ month</span>
          </div>
        </CardHeader>

        {/* Content */}
        <CardContent className="flex flex-1 flex-col justify-between gap-8 px-8 pb-8">
          {/* CTA */}
          <AppButton
            href="/signup"
            variant="pricing"
            className={cn(
              "h-12 rounded-xl text-sm font-semibold transition-all duration-300",
              highlighted
                ? "shadow-lg hover:scale-[1.02]"
                : "border-border/60 bg-background/60 backdrop-blur-md hover:bg-muted",
            )}
          >
            {cta}
          </AppButton>

          {/* Features */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Icon */}
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border/50 bg-background/70 backdrop-blur-sm">
                  <Check className="h-3.5 w-3.5" />
                </div>

                {/* Text */}
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </CardContent>

        {/* Bottom Accent */}
        <div
          className={cn(
            "h-1 w-full transition-all duration-500",
            highlighted
              ? "bg-primary"
              : "bg-border group-hover:bg-muted-foreground/30",
          )}
        />
      </div>
    </Card>
  );
};

export default PricingCard;
