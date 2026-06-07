"use client";
import { FieldValues, useFieldArray, Path } from "react-hook-form";
import { Button } from "../ui/button";
import { FieldGrid } from "./FieldGrid";
import { FormField } from "./FormField";
import { FormSection } from "./FormSection";

export function FieldArray<T extends FieldValues>({
  control,
  name,
  title,
  description,
  cardLabel,
  cardSubtitle,
  fields,
  defaultItem,
  addLabel = "Add",
  renderExtra,
}: FieldArrayProps<T>) {
  const { fields: items, append, remove } = useFieldArray({ control, name });

  return (
    <>
      <FormSection title={title} description={description} />

      {items.map((item, index) => (
        <div
          key={item.id}
          className="relative rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm flex flex-col gap-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">
                {cardLabel} #{index + 1}
              </h3>
              {cardSubtitle && (
                <p className="text-sm text-muted-foreground">{cardSubtitle}</p>
              )}
            </div>
            {index > 0 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Remove
              </button>
            )}
          </div>

          <FieldGrid cols={2}>
            {fields.map(({ name: fieldName, label, type }, i) => (
              <FormField
                key={i}
                name={`${name}.${index}.${fieldName}` as Path<T>}
                label={label}
                control={control}
                inputProps={{ type, placeholder: label }}
              />
            ))}
          </FieldGrid>

          {renderExtra?.(index)}
        </div>
      ))}

      <Button
        type="button"
        onClick={() => append(defaultItem)}
        className="w-fit"
      >
        {addLabel}
      </Button>
    </>
  );
}
