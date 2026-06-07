import { FieldGroup } from "../ui/field";

export function FieldGrid({ cols = 2, children, className }: FieldGridProps) {
  return (
    <FieldGroup className={`grid grid-cols-${cols} w-full gap-10 ${className ?? ""}`}>
      {children}
    </FieldGroup>
  );
}