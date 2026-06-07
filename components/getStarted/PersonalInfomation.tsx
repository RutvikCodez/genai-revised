"use client";
import { CircleUserRound } from "lucide-react";
import { createStep } from "@/lib/createStep";
import { perosnalInfomrationFormSchema } from "@/constants";
import { FieldSection } from "./FieldSection";

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
    <FieldSection
      title="Legal Identity"
      description="Please enter your official name as it appears on documents"
      control={form.control}
      fields={[
        { name: "firstName", label: "First Name" },
        { name: "lastName", label: "Last Name" },
      ]}
    />
  ),
);
