import { cn } from "@/lib/utils";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const FeatureCard = ({
  description,
  icon,
  title,
  className = "",
}: FeatureCardProps) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/50 bg-background/50 p-0 backdrop-blur-xl transition-all duration-500",
        "hover:-translate-y-2 hover:border-border hover:bg-background/80 hover:shadow-2xl",
        className
      )}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Hover Glow */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -top-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.06)_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>

      {/* Content */}
      <CardHeader className="relative z-10 flex h-full flex-col gap-6 p-8">
        {/* Icon */}
        <div className="relative flex items-center">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-border/50 bg-background/70 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            {/* Icon Glow */}
            <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative text-foreground">
              {icon}
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-3">
          <CardTitle className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-foreground">
            {title}
          </CardTitle>

          <CardDescription className="text-base leading-relaxed text-muted-foreground">
            {description}
          </CardDescription>
        </div>

        {/* Bottom Line */}
        <div className="mt-auto flex items-center gap-2 pt-4">
          <div className="h-px w-10 bg-border transition-all duration-500 group-hover:w-20" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            AI Powered
          </span>
        </div>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;