import { SectionCard } from "./SectionCard";
import { DataRow } from "./DataRow";

export const dateRange = ({
  startDate,
  endDate,
  currentlyWorking,
}: DateRangeProps) => {
  if (!startDate) return "";

  const start = new Date(startDate).toLocaleDateString();
  const end = currentlyWorking
    ? "Present"
    : endDate
      ? new Date(endDate).toLocaleDateString()
      : "";

  return `${start} — ${end}`;
};

export const HistoryCard = ({
  icon,
  heading,
  items,
  className,
}: HistoryCardProps) => {
  const hasItems = items!.length > 0;

  return (
    <SectionCard icon={icon} title={heading} className={className}>
      {hasItems ? (
        <div className="flex flex-col gap-6">
          {items!.map(({ title, meta, description }, i) => (
            <div
              key={`${title}-${i}`}
              className="flex flex-col gap-2 border-b border-border/40 pb-4 last:border-0"
            >
              {/* Title */}
              <span className="text-sm font-medium text-foreground">
                {title}
              </span>

              {/* Meta */}
              {meta?.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {meta.map(({ icon: Icon, value }, j) => (
                    <DataRow key={j} icon={Icon}>
                      <span className="text-sm text-muted-foreground">
                        {value}
                      </span>
                    </DataRow>
                  ))}
                </div>
              )}

              {/* Description */}
              {description && (
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-md border border-border/50 bg-muted/20 p-4 text-sm text-muted-foreground">
          No records available
        </div>
      )}
    </SectionCard>
  );
};
