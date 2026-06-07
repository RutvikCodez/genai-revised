"use client";
import { SquareUserRound } from "lucide-react";
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { FormStepLayout } from "./FormStepLayout";
import { FieldGrid } from "./FieldGrid";
import { FormField } from "./FormField";
import { contactInformationFormSchema, sections } from "@/constants";
import { FormSection } from "./FormSection";
import { useWizardStep } from "../../app/hooks/useWizardStepForm";

const ContactInformation = () => {
  const { data } = useWizardFormContext();

  const { form, onSubmit, prevStep, isSubmitting } = useWizardStep({
    schema: contactInformationFormSchema,
    defaultValues: {
      email: data?.email ?? "",
      phone: data?.phone ?? "",
      addressLine1: data?.addressLine1 ?? "",
      addressLine2: data?.addressLine2 ?? "",
      city: data?.city ?? "",
      state: data?.state ?? "",
      country: data?.country ?? "",
      postalCode: data?.postalCode ?? "",
    },
  });

  return (
    <FormStepLayout
      icon={SquareUserRound}
      title="Contact Information"
      submitLabel={isSubmitting ? "Saving..." : "Continue"}
      onSubmit={onSubmit}
      onBack={prevStep}
    >
      {sections.map(({ title, description, fields }, sectionIndex) => (
        <div key={title}>
          <section className="flex flex-col gap-5">
            <FormSection title={title} description={description} />

            <FieldGrid cols={2}>
              {fields.map(({ name, label, type }, index) => (
                <FormField
                  key={index}
                  name={name}
                  label={label}
                  control={form.control}
                  inputProps={{
                    type,
                    placeholder: label,
                  }}
                />
              ))}
            </FieldGrid>
          </section>

          {sectionIndex < sections.length - 1 && (
            <div className="h-px w-full bg-border my-6" />
          )}
        </div>
      ))}
    </FormStepLayout>
  );
};

export default ContactInformation;
