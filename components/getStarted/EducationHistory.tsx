"use client";
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
import { useWizardStep } from "../../app/hooks/useWizardStepForm";

const EducationHistory = () => {
  const { data } = useWizardFormContext();

  const { form, onSubmit, prevStep, isSubmitting } = useWizardStep({
    schema: educationHistoryFormSchema,
    defaultValues: {
      education: data?.education?.length ? data.education : [defaultEducation],
    },
    advance: false,
    onAfterSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <FormStepLayout
      icon={GraduationCap}
      title="Education History"
      submitLabel={isSubmitting ? "Submitting..." : "Complete Profile"}
      onSubmit={onSubmit}
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
