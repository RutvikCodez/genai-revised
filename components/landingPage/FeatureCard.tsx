import { cn } from "@/lib/utils";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const FeatureCard = ({
  description,
  icon,
  title,
  gradient = "from-cyan-400 to-blue-600",
  className = "",
}: FeatureCardProps) => {
  return (
    <Card
      className={cn(
        "group relative rounded-xl border border-border/50 bg-muted/30 p-5 hover:border-border hover:bg-muted/50 transition-all duration-300",
        className,
      )}
    >
      {/* Gradient Background */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 bg-linear-to-br transition-opacity duration-300",
          gradient,
        )}
      />

      {/* Content */}
      <CardHeader className="flex flex-col gap-4">
        <div
          className={cn(
            "size-12 rounded-lg bg-linear-to-br flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300",
            gradient,
          )}
        >
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;
