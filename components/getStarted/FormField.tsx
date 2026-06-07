import { Controller, FieldValues } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

export function FormField<T extends FieldValues>({
  name,
  label,
  control,
  inputProps,
  renderInput: RenderInput,
}: FormFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
          {RenderInput ? (
            <RenderInput
              {...field}
              {...inputProps}
              invalid={fieldState.invalid}
            />
          ) : (
            <Input
              {...field}
              {...inputProps}
              id={name}
              aria-invalid={fieldState.invalid}
              autoComplete="off"
            />
          )}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
