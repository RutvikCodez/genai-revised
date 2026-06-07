"use client"
import { CircleUserRound } from "lucide-react";
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { FormStepLayout } from "./FormStepLayout";
import { FieldGrid } from "./FieldGrid";
import { FormField } from "./FormField";
import { perosnalInfomrationFormSchema } from "@/constants";
import { FormSection } from "./FormSection";
import { useWizardStep } from "./useWizardStepForm";

const PersonalInfomation = () => {
  const { data } = useWizardFormContext();

  const { form, onSubmit, isSubmitting } = useWizardStep({
    schema: perosnalInfomrationFormSchema,
    defaultValues: {
      firstName: data?.firstName ?? "",
      lastName: data?.lastName ?? "",
    },
  });

  return (
    <FormStepLayout
      icon={CircleUserRound}
      title="Personal Information"
      submitLabel={isSubmitting ? "Saving..." : "Continue"}
      onSubmit={onSubmit}
    >
      {/* Section Header */}
      <FormSection
        title="Legal Identity"
        description="Please enter your official name as it appears on documents"
      />

      {/* Fields */}
      <FieldGrid cols={2}>
        {(["firstName", "lastName"] as const).map((name) => (
          <FormField
            key={name}
            name={name}
            label={name === "firstName" ? "First Name" : "Last Name"}
            control={form.control}
          />
        ))}
      </FieldGrid>
    </FormStepLayout>
  );
};

export default PersonalInfomation;