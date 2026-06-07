"use client";
import { SquareUserRound } from "lucide-react";
import { createStep } from "@/lib/createStep";
import { contactInformationFormSchema, sections } from "@/constants";
import { FieldSection } from "./FieldSection";
import { Divider } from "./Divider";

export default createStep(
  {
    icon: SquareUserRound,
    title: "Contact Information",
    schema: contactInformationFormSchema,
    getDefaults: (d) => ({
      email: d?.email ?? "",
      phone: d?.phone ?? "",
      addressLine1: d?.addressLine1 ?? "",
      addressLine2: d?.addressLine2 ?? "",
      city: d?.city ?? "",
      state: d?.state ?? "",
      country: d?.country ?? "",
      postalCode: d?.postalCode ?? "",
    }),
    submitLabel: (s) => (s ? "Saving..." : "Continue"),
  },
  (form) =>
    sections.map(({ title, description, fields }, i) => (
      <div key={title}>
        <FieldSection
          title={title}
          description={description}
          fields={fields}
          control={form.control}
        />
        {i < sections.length - 1 && <Divider />}
      </div>
    )),
);
