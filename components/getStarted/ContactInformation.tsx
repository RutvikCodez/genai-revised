"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const ContactInformation = () => {
  const { nextStep, prevStep, setData, data } =
    useWizardFormContext();

  const form = useForm<
    z.infer<typeof contactInformationFormSchema>
  >({
    resolver: zodResolver(contactInformationFormSchema),
    mode: "onTouched",
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

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (
    values: z.infer<typeof contactInformationFormSchema>
  ) => {
    setData((prev) => ({
      ...prev,
      ...values,
    }));

    nextStep();
  };

  return (
    <FormStepLayout
      icon={SquareUserRound}
      title="Contact Information"
      submitLabel={isSubmitting ? "Saving..." : "Continue"}
      onSubmit={handleSubmit(onSubmit)}
      onBack={prevStep}
    >
      {/* Contact Section */}
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold tracking-wide">
            Contact Details
          </h3>

          <p className="text-sm text-muted-foreground">
            We&apos;ll use this information to communicate with you and
            verify your profile.
          </p>
        </div>

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
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold tracking-wide">
            Address Information
          </h3>

          <p className="text-sm text-muted-foreground">
            Provide your current residential address for profile
            completion.
          </p>
        </div>

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