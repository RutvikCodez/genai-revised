"use client";
import { CircleUserRound } from "lucide-react";
import { createStep } from "@/lib/createStep";
import { perosnalInfomrationFormSchema } from "@/constants";
import { FormSection } from "./FormSection";
import { FieldGrid } from "./FieldGrid";
import { FormField } from "./FormField";

export default createStep(
  {
    icon: CircleUserRound,
    title: "Personal Information",
    schema: perosnalInfomrationFormSchema,
    getDefaults: (d) => ({
      firstName: d?.firstName ?? "",
      lastName: d?.lastName ?? "",
    }),
    submitLabel: (s) => (s ? "Saving..." : "Continue"),
  },
  (form) => (
    <>
      <FormSection
        title="Legal Identity"
        description="Please enter your official name as it appears on documents"
      />
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
    </>
  ),
);
