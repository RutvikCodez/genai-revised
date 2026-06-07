import { gridColsMap } from "@/constants";
import { FieldGroup } from "../ui/field";
import { cn } from "@/lib/utils";

export function FieldGrid({ cols = 2, children, className }: FieldGridProps) {
  return (
    <FieldGroup
      className={cn(
        "w-full grid gap-6 md:gap-8",
        gridColsMap[cols] ?? gridColsMap[2],
        className,
      )}
    >
      {children}
    </FieldGroup>
  );
}
