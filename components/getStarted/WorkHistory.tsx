"use client";
import { BriefcaseBusiness } from "lucide-react";
import { Controller } from "react-hook-form";
import { createStep } from "@/lib/createStep";
import { defaultJob, jobInputFields, workHistoryFormSchema } from "@/constants";
import { FieldArray } from "./FieldArray";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";

export default createStep(
  {
    icon: BriefcaseBusiness,
    title: "Professional Experience",
    schema: workHistoryFormSchema,
    getDefaults: (d) => ({ jobs: d.jobs?.length ? d.jobs : [defaultJob] }),
  },
  (form) => (
    <FieldArray
      control={form.control}
      name="jobs"
      title="Employment History"
      description="Showcase your professional experience, responsibilities, and achievements."
      cardLabel="Experience"
      cardSubtitle="Add details about your professional experience"
      fields={jobInputFields}
      defaultItem={defaultJob}
      addLabel="Add Experience"
      renderExtra={(index) => {
        return (
        <>
          <Controller
            name={`jobs.${index}.currentlyWorking`}
            control={form.control}
            render={({ field }) => (
              <Field orientation="horizontal">
                <Checkbox
                  checked={field.value ?? false}
                  onCheckedChange={field.onChange}
                />
                <FieldLabel>I currently work here</FieldLabel>
              </Field>
            )}
          />
          <Controller
            name={`jobs.${index}.description`}
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Responsibilities & Achievements</FieldLabel>
                <Textarea
                  {...field}
                  rows={5}
                  placeholder="Describe your responsibilities..."
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </>
      )
      }}
    />
  ),
);
