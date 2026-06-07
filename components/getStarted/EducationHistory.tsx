"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GraduationCap } from "lucide-react";
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import {
  defaultEducation,
  educationHistoryFormSchema,
  educationInputFields,
} from "@/constants";
import { FormStepLayout } from "./FormStepLayout";
import { FormFieldArray } from "./FormFieldArray";
import { FieldGrid } from "./FieldGrid";
import { FormField } from "./FormField";

const EducationHistory = () => {
  const { prevStep, setData, data } = useWizardFormContext();
  const form = useForm<z.infer<typeof educationHistoryFormSchema>>({
    resolver: zodResolver(educationHistoryFormSchema),
    defaultValues: {
      education: data?.education?.length ? data.education : [defaultEducation],
    },
  });

  const onSubmit = (data: z.infer<typeof educationHistoryFormSchema>) => {
    setData((prev) => ({ ...prev, ...data }));
  };

  return (
    <FormStepLayout
      icon={GraduationCap}
      title="Education History"
      onSubmit={form.handleSubmit(onSubmit)}
      onBack={prevStep}
      submitLabel="Submit"
    >
      <FormFieldArray
        control={form.control}
        name="education"
        addLabel="Add Education"
        defaultItem={defaultEducation}
        renderItem={(index, remove) => (
          <>
            <div className="flex gap-2 items-center">
              <span>Education {index + 1}</span>
              <button
                type="button"
                className="text-red-500 text-sm"
                onClick={() => remove(index)}
              >
                Remove
              </button>
            </div>
            <FieldGrid>
              {educationInputFields.map(({ name, label, type }, fieldIndex) => (
                <FormField
                  key={fieldIndex}
                  name={`education.${index}.${String(name)}` as const}
                  label={label}
                  control={form.control}
                  inputProps={{ type }}
                />
              ))}
            </FieldGrid>
          </>
        )}
      />
    </FormStepLayout>
  );
};

export default EducationHistory;
