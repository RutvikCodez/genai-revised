import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";

const SectionWrapper = ({
  id,
  description,
  subtitle,
  tagline,
  title,
  children,
  sparkles = false,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-border/50 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-muted opacity-40 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-6 justify-center items-center">
          <Badge variant={"outline"} className="p-4 text-sm font-medium flex gap-2 items-center">
            {sparkles && <Sparkles className="h-4 w-4" />}
            {tagline}
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
            <br />
            <span className="text-muted-foreground">{subtitle}</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>

        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
