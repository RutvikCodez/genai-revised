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
import { FormSection } from "./FormSection";

const EducationHistory = () => {
  const { prevStep, setData, data } = useWizardFormContext();

  const form = useForm<z.infer<typeof educationHistoryFormSchema>>({
    resolver: zodResolver(educationHistoryFormSchema),
    mode: "onTouched",
    defaultValues: {
      education: data?.education?.length ? data.education : [defaultEducation],
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (
    values: z.infer<typeof educationHistoryFormSchema>,
  ) => {
    setData((prev) => ({
      ...prev,
      ...values,
    }));

    // Final submit logic
  };

  return (
    <FormStepLayout
      icon={GraduationCap}
      title="Education History"
      submitLabel={isSubmitting ? "Submitting..." : "Complete Profile"}
      onSubmit={handleSubmit(onSubmit)}
      onBack={prevStep}
    >
      {/* Intro */}
      <FormSection
        title="Academic Background"
        description="Add your educational qualifications, institutions, and graduation details."
      />

      <FormFieldArray
        control={form.control}
        name="education"
        addLabel="Add Education"
        defaultItem={defaultEducation}
        renderItem={(index, remove) => (
          <div className="rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm flex flex-col gap-6">
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Education #{index + 1}</h3>

                <p className="text-sm text-muted-foreground">
                  Academic qualification details
                </p>
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

            {/* Fields */}
            <FieldGrid cols={2}>
              {educationInputFields.map(({ name, label, type }, fieldIndex) => (
                <FormField
                  key={fieldIndex}
                  name={`education.${index}.${String(name)}` as const}
                  label={label}
                  control={form.control}
                  inputProps={{
                    type,
                    placeholder: label,
                  }}
                />
              ))}
            </FieldGrid>
          </div>
        )}
      />
    </FormStepLayout>
  );
};

export default EducationHistory;
