import { FieldValues } from "react-hook-form";
import { FormSection } from "./FormSection";
import { FormFieldArray } from "./FormFieldArray";
import { FieldArrayCard } from "./FieldArrayCard";
import { FieldGrid } from "./FieldGrid";
import { FormField } from "./FormField";

export function FieldArraySection<
  T extends FieldValues,
  Item extends FieldValues,
>({
  control,
  name,
  title,
  description,
  cardLabel,
  cardSubtitle,
  fields,
  defaultItem,
  addLabel,
  renderExtra,
}: FieldArraySectionProps<T, Item>) {
  return (
    <>
      <FormSection title={title} description={description} />

      <FormFieldArray
        control={control}
        name={name}
        addLabel={addLabel}
        defaultItem={defaultItem}
        renderItem={(index, remove) => (
          <FieldArrayCard
            index={index}
            label={cardLabel}
            subtitle={cardSubtitle}
            onRemove={remove}
          >
            <FieldGrid cols={2}>
              {fields.map(({ name: fieldName, label, type }, i) => (
                <FormField
                  key={i}
                  name={
                    `${String(name)}.${index}.${String(fieldName)}` as unknown
                  }
                  label={label}
                  control={control}
                  inputProps={{ type, placeholder: label }}
                />
              ))}
            </FieldGrid>

            {renderExtra?.(index)}
          </FieldArrayCard>
        )}
      />
    </>
  );
}
