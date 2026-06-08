import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const SectionCard = ({
  icon: Icon,
  title,
  children,
  className,
}: SectionCardProps) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-200",
        "hover:shadow-sm hover:border-border/80",
        className,
      )}
    >
      <CardHeader className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          {Icon && (
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border/50 bg-muted/30 transition-colors group-hover:bg-muted">
              <Icon className="h-4 w-4" />
            </span>
          )}

          <CardTitle className="text-base font-semibold tracking-tight">
            {title}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">{children}</CardContent>
    </Card>
  );
};
