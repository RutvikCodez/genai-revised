import { cn } from "@/lib/utils";
import { Quote, Star } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  rating = 5,
  className = "",
}: TestimonialCardProps) => {
  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/50 bg-background/50 backdrop-blur-xl transition-all duration-500",
        "hover:-translate-y-2 hover:border-border hover:bg-background/80 hover:shadow-2xl",
        className
      )}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.05)_1px,transparent_1px)] bg-size-[28px_28px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <CardHeader className="space-y-5 p-8 pb-4">
          {/* Top */}
          <div className="flex items-center justify-between">
            {/* Stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: rating }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-background/60 backdrop-blur-sm"
                >
                  <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
                </div>
              ))}
            </div>

            {/* Quote Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-background/70 backdrop-blur-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
              <Quote className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </CardHeader>

        {/* Quote */}
        <CardContent className="flex-1 px-8 pb-8">
          <blockquote className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            “{quote}”
          </blockquote>
        </CardContent>

        {/* Footer */}
        <CardFooter className="relative flex flex-col items-start gap-3 border-t border-border/50 px-8 py-6">
          {/* Accent Line */}
          <div className="absolute left-8 top-0 h-px w-12 bg-border transition-all duration-500 group-hover:w-24" />

          {/* Author */}
          <div className="flex flex-col gap-1">
            <CardTitle className="text-lg font-semibold tracking-tight">
              {author}
            </CardTitle>

            <CardDescription className="text-sm text-muted-foreground">
              {role} • {company}
            </CardDescription>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default TestimonialCard;