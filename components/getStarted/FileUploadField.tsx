"use client";
import { Controller, FieldValues } from "react-hook-form";
import { Field, FieldError } from "../ui/field";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

export function FileUploadField<T extends FieldValues>({
  name,
  control,
  accept = "application/pdf",
  badgeLabel = "PDF",
  description = "Maximum size 5MB",
  placeholder = "Choose File",
}: FileUploadFieldProps<T>) {
  const inputId = `${String(name)}-upload`;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field
          data-invalid={fieldState.invalid}
          className="flex flex-col gap-3"
        >
          <label
            htmlFor={inputId}
            className="flex cursor-pointer items-center justify-between rounded-2xl border border-border bg-background/50 p-4 transition-all hover:bg-muted/50"
          >
            <div>
              <p className="font-medium">
                {(field.value as unknown) instanceof File
                  ? field.value.name
                  : placeholder}
              </p>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <Badge variant="secondary">{badgeLabel}</Badge>
          </label>

          <Input
            id={inputId}
            type="file"
            accept={accept}
            className="hidden"
            ref={field.ref}
            name={field.name}
            onBlur={field.onBlur}
            onChange={(e) => {
              field.onChange(e.target.files?.[0] ?? null);
              // trigger validation after selection
            }}
          />

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
