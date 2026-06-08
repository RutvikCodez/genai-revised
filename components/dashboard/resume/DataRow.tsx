import { cn } from "@/lib/utils";

export const DataRow = ({
  label,
  icon: Icon,
  children,
  justify,
}: DataRowProps) => {
  return (
    <div
      className={cn(
        "flex items-start gap-2 text-sm",
        justify && "w-full justify-between"
      )}
    >
      {/* Icon */}
      {Icon && (
        <span className="flex h-5 w-5 items-center justify-center text-muted-foreground">
          <Icon className="h-4 w-4" />
        </span>
      )}

      {/* Label + Value */}
      <div
        className={cn(
          "flex min-w-0 flex-1 gap-1",
          justify && "justify-between"
        )}
      >
        {label && (
          <span className="shrink-0 text-muted-foreground">
            {label}:
          </span>
        )}

        <span className="min-w-0 wrap-break-word text-foreground">
          {children}
        </span>
      </div>
    </div>
  );
};