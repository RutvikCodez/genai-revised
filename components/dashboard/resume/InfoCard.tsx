import { DataRow } from "./DataRow";
import { SectionCard } from "./SectionCard";

export const InfoCard = ({
  icon,
  title,
  fields,
}: InfoCardProps) => {
  const hasFields = fields?.length > 0;

  return (
    <SectionCard icon={icon} title={title}>
      {hasFields ? (
        fields.map(({ label, value }, index) => (
          <DataRow
            key={`${label}-${index}`}
            label={label}
            justify
          >
            <span className="text-sm text-foreground">
              {value ?? (
                <span className="text-muted-foreground">
                  Not provided
                </span>
              )}
            </span>
          </DataRow>
        ))
      ) : (
        <div className="rounded-md border border-border/50 bg-muted/20 p-4 text-sm text-muted-foreground">
          No information available
        </div>
      )}
    </SectionCard>
  );
};