// components/form/FieldArrayCard.tsx
export function FieldArrayCard({
  index,
  label,
  subtitle,
  onRemove,
  children,
}: FieldArrayCardProps) {
  return (
    <div className="relative rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">
            {label} #{index + 1}
          </h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        {index > 0 && (
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Remove
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
