"use client";
import { FieldValues } from "react-hook-form";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { ControllerField } from "./ControllerField";

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
    <ControllerField name={name} control={control}>
      {(field) => (
        <>
          <label
            htmlFor={inputId}
            className="flex cursor-pointer items-center justify-between rounded-2xl border border-border bg-background/50 p-4 transition-all hover:bg-muted/50"
          >
            <div>
              <p className="font-medium">
                {field.value instanceof File ? field.value.name : placeholder}
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
            onChange={(e) => field.onChange(e.target.files?.[0] ?? null)}
          />
        </>
      )}
    </ControllerField>
  );
}
