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
import { FieldArrayCard } from "./FieldArrayCard";

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
          <FieldArrayCard
            index={index}
            label="Education"
            subtitle="Academic qualification details"
            onRemove={remove}
          >
            <FieldGrid cols={2}>
              {educationInputFields.map(({ name, label, type }, fieldIndex) => (
                <FormField
                  key={fieldIndex}
                  name={`education.${index}.${String(name)}` as const}
                  label={label}
                  control={form.control}
                  inputProps={{ type, placeholder: label }}
                />
              ))}
            </FieldGrid>
          </FieldArrayCard>
        )}
      />

    </FormStepLayout>
  );
};

export default EducationHistory;
