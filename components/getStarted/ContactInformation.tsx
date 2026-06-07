"use client";
import { SquareUserRound } from "lucide-react";
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { FormStepLayout } from "./FormStepLayout";
import { FieldGrid } from "./FieldGrid";
import { FormField } from "./FormField";
import {
  addressFields,
  contactFields,
  contactInformationFormSchema,
} from "@/constants";
import { FormSection } from "./FormSection";
import { useWizardStep } from "./useWizardStepForm";

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
      {/* Contact Section */}
      <section className="flex flex-col gap-5">
        <FormSection
          title="Contact Details"
          description="We'll use this information to communicate with you and verify your profile."
        />

        <FieldGrid cols={2}>
          {contactFields.map(({ name, label, type }, index) => (
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

      {/* Divider */}
      <div className="h-px w-full bg-border" />

      {/* Address Section */}
      <section className="flex flex-col gap-5">
        <FormSection
          title="Address Information"
          description="Provide your current residential address for profile completion."
        />

        <FieldGrid cols={2}>
          {addressFields.map(({ name, label, type }, index) => (
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
    </FormStepLayout>
  );
};

export default ContactInformation;
