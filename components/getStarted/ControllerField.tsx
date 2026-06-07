import { Control, Controller, ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";

// ControllerField.tsx
export function ControllerField<T extends FieldValues>({
  name, control, label, children,
}: {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  children: (field: ControllerRenderProps<T>, invalid: boolean) => React.ReactNode;
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const invalid = !!fieldState.error;
        return (
          <Field data-invalid={invalid} className="flex flex-col gap-3">
            {label && (
              <FieldLabel htmlFor={String(name)} className="text-sm font-medium">
                {label}
              </FieldLabel>
            )}
            {children(field, invalid)}
            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </Field>
        );
      }}
    />
  );
}