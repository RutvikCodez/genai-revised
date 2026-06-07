import { FieldValues, useFieldArray } from "react-hook-form";
import { Button } from "../ui/button";

export function FormFieldArray<T extends FieldValues>({
  control,
  name,
  addLabel,
  defaultItem,
  renderItem,
}: FormFieldArrayProps<T>) {
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col gap-5">
          {renderItem(index, (i) => {
            if (i !== 0) remove(i);
          })}
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
