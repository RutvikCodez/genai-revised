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
  const { nextStep, setData, data, prevStep } = useWizardFormContext();

  const form = useForm<z.infer<typeof contactInformationFormSchema>>({
    resolver: zodResolver(contactInformationFormSchema),
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

  const onSubmit = (data: z.infer<typeof contactInformationFormSchema>) => {
    setData((prev) => ({ ...prev, ...data }));
    nextStep();
  };

  return (
    <FormStepLayout
      icon={SquareUserRound}
      title="Contact Information"
      onSubmit={form.handleSubmit(onSubmit)}
      onBack={prevStep}
    >
      <span>Contact</span>
      <FieldGrid className="max-md:flex-col max-md:flex max-md:gap-5">
        {contactFields.map(({ name, label, type }, index) => (
          <FormField
            key={index}
            name={name}
            label={label}
            control={form.control}
            inputProps={{ type }}
          />
        ))}
      </FieldGrid>

      <span>Address</span>
      <FieldGrid className="max-md:flex-col max-md:flex max-md:gap-5">
        {addressFields.map(({ name, label, type }, index) => (
          <FormField
            key={index}
            name={name}
            label={label}
            control={form.control}
            inputProps={{ type }}
          />
        ))}
      </FieldGrid>
    </FormStepLayout>
  );
};

export default ContactInformation;
