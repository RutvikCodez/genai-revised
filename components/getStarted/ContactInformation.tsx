"use client";
import { SquareUserRound } from "lucide-react";
import { createStep } from "@/lib/createStep";
import { contactInformationFormSchema, sections } from "@/constants";
import { FormSection } from "./FormSection";
import { FieldGrid } from "./FieldGrid";
import { FormField } from "./FormField";

export default createStep(
  {
    icon: SquareUserRound,
    title: "Contact Information",
    schema: contactInformationFormSchema,
    getDefaults: (d) => ({
      email: d.email ?? "",
      phone: d.phone ?? "",
      addressLine1: d.addressLine1 ?? "",
      addressLine2: d.addressLine2 ?? "",
      city: d.city ?? "",
      state: d.state ?? "",
      country: d.country ?? "",
      postalCode: d.postalCode ?? "",
    }),
    submitLabel: (s) => (s ? "Saving..." : "Continue"),
  },
  (form) =>
    sections.map(({ title, description, fields }, i) => (
      <div key={title}>
        <section className="flex flex-col gap-5">
          <FormSection title={title} description={description} />
          <FieldGrid cols={2}>
            {fields.map(({ name, label, type }, j) => (
              <FormField
                key={j}
                name={name}
                label={label}
                control={form.control}
                inputProps={{ type, placeholder: label }}
              />
            ))}
          </FieldGrid>
        </section>
        {i < sections.length - 1 && (
          <div className="h-px w-full bg-border my-6" />
        )}
      </div>
    )),
);
  