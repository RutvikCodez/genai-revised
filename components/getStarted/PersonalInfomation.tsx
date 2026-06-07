"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CircleUserRound } from "lucide-react";

import { useWizardFormContext } from "@/app/context/WizardFormContext";

import { FormStepLayout } from "./FormStepLayout";
import { FieldGrid } from "./FieldGrid";
import { FormField } from "./FormField";

import { perosnalInfomrationFormSchema } from "@/constants";

const PersonalInfomation = () => {
  const { nextStep, setData, data } = useWizardFormContext();

  const form = useForm<
    z.infer<typeof perosnalInfomrationFormSchema>
  >({
    resolver: zodResolver(perosnalInfomrationFormSchema),
    defaultValues: {
      firstName: data?.firstName ?? "",
      lastName: data?.lastName ?? "",
    },
    mode: "onTouched",
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (
    values: z.infer<typeof perosnalInfomrationFormSchema>
  ) => {
    setData((prev) => ({ ...prev, ...values }));
    nextStep();
  };

  return (
    <FormStepLayout
      icon={CircleUserRound}
      title="Personal Information"
      submitLabel={isSubmitting ? "Saving..." : "Continue"}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-foreground">
          Legal Identity
        </p>
        <p className="text-xs text-muted-foreground">
          Please enter your official name as it appears on documents
        </p>
      </div>

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