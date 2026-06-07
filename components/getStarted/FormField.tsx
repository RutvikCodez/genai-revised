import { memo } from "react";
import { Controller, FieldValues } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

function FormFieldBase<T extends FieldValues>({
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
      render={({ field, fieldState }) => {
        const isInvalid = !!fieldState.error;

        return (
          <Field data-invalid={isInvalid} className="space-y-2">
            {/* Label */}
            <FieldLabel htmlFor={name} className="text-sm font-medium">
              {label}
            </FieldLabel>

            {/* Input */}
            {RenderInput ? (
              <RenderInput
                {...field}
                {...inputProps}
                id={name}
                invalid={isInvalid}
              />
            ) : (
              <Input
                {...field}
                {...inputProps}
                id={name}
                autoComplete="off"
                aria-invalid={isInvalid}
                className="h-11 rounded-xl border-border/60 bg-background/60 backdrop-blur-sm transition-all focus:border-primary focus:ring-0"
              />
            )}

            {/* Error */}
            {isInvalid && fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        );
      }}
    />
  );
}

export const FormField = memo(FormFieldBase) as typeof FormFieldBase;