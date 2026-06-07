"use client";
import { memo } from "react";
import { FieldValues } from "react-hook-form";
import { Input } from "../ui/input";
import { ControllerField } from "./ControllerField";

export const FormField = memo(function FormField<T extends FieldValues>({
  name,
  label,
  control,
  inputProps,
  renderInput: RenderInput,
  disabled = false
}: FormFieldProps<T>) {
  return (
    <ControllerField name={name} control={control} label={label}>
      {(field, invalid) =>
        RenderInput ? (
          <RenderInput {...field} {...inputProps} id={String(name)} invalid={invalid} />
        ) : (
          <Input
            {...field}
            {...inputProps}
            id={String(name)}
            autoComplete="off"
            aria-invalid={invalid}
            className="h-11 rounded-xl border-border/60 bg-background/60 backdrop-blur-sm transition-all focus:border-primary focus:ring-0"
            disabled={disabled}
          />
        )
      }
    </ControllerField>
  );
}) as <T extends FieldValues>(props: FormFieldProps<T>) => React.ReactElement;