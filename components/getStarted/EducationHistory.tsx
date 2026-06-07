"use client";
import { GraduationCap } from "lucide-react";
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { defaultEducation, educationHistoryFormSchema, educationInputFields } from "@/constants";
import { FormStepLayout } from "./FormStepLayout";
import { FieldArraySection } from "./FieldArraySection";
import { useWizardStep } from "../../app/hooks/useWizardStepForm";

const EducationHistory = () => {
  const { data } = useWizardFormContext();
  const { form, onSubmit, prevStep, isSubmitting } = useWizardStep({
    schema: educationHistoryFormSchema,
    defaultValues: { education: data?.education?.length ? data.education : [defaultEducation] },
    advance: false,
    onAfterSubmit: async (values) => console.log(values),
  });

  return (
    <FormStepLayout
      icon={GraduationCap}
      title="Education History"
      submitLabel={isSubmitting ? "Submitting..." : "Complete Profile"}
      onSubmit={onSubmit}
      onBack={prevStep}
    >
      <FieldArraySection
        control={form.control}
        name="education"
        title="Academic Background"
        description="Add your educational qualifications, institutions, and graduation details."
        cardLabel="Education"
        cardSubtitle="Academic qualification details"
        fields={educationInputFields}
        defaultItem={defaultEducation}
        addLabel="Add Education"
      />
    </FormStepLayout>
  );
};

export default EducationHistory;