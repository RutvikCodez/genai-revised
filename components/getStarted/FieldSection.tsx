import { FormSection } from "./FormSection";
import { FieldGrid } from "./FieldGrid";
import { FormField } from "./FormField";
import { Control, FieldValues, Path } from "react-hook-form";

interface FieldDef<T> {
  name: Path<T>;
  label: string;
  type?: string;
}

interface FieldSectionProps<T extends FieldValues> {
  title: string;
  description: string;
  fields: FieldDef<T>[];
  control: Control<T>;
  cols?: 1 | 2;
}

export function FieldSection<T extends FieldValues>({
  title,
  description,
  fields,
  control,
  cols = 2,
}: FieldSectionProps<T>) {
  return (
    <div className="flex flex-col gap-5">
      <FormSection title={title} description={description} />
      <FieldGrid cols={cols}>
        {fields.map(({ name, label, type }) => (
          <FormField
            key={name}
            name={name}
            label={label}
            control={control}
            inputProps={{ type, placeholder: label }}
          />
        ))}
      </FieldGrid>
    </div>
  );
}
