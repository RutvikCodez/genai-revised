"use client";
import { Controller } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { BriefcaseBusiness } from "lucide-react";
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { defaultJob, jobInputFields, workHistoryFormSchema } from "@/constants";
import { FormStepLayout } from "./FormStepLayout";
import { FormFieldArray } from "./FormFieldArray";
import { FieldGrid } from "./FieldGrid";
import { FormField } from "./FormField";
import { FormSection } from "./FormSection";
import { FieldArrayCard } from "./FieldArrayCard";
import { useWizardStep } from "./useWizardStepForm";

const WorkHistory = () => {
   const { data } = useWizardFormContext();

  const { form, onSubmit, prevStep } = useWizardStep({
    schema: workHistoryFormSchema,
    defaultValues: {
      jobs: data?.jobs?.length ? data.jobs : [defaultJob],
    },
  });


  return (
    <FormStepLayout
      icon={BriefcaseBusiness}
      title="Professional Experience"
      onSubmit={onSubmit}
      onBack={prevStep}
    >
      <FormSection
        title="Employment History"
        description="Showcase your professional experience, responsibilities, and achievements."
      />
      <FormFieldArray
        control={form.control}
        name="jobs"
        addLabel="Add Experience"
        defaultItem={defaultJob}
        renderItem={(index, remove) => (
          <FieldArrayCard
            index={index}
            label="Experience"
            subtitle="Add details about your professional experience"
            onRemove={remove}
          >
            <FieldGrid cols={2}>
              {jobInputFields.map(({ name, label, type }, fieldIndex) => (
                <FormField
                  key={fieldIndex}
                  name={`jobs.${index}.${String(name)}` as const}
                  label={label}
                  control={form.control}
                  inputProps={{
                    type,
                    placeholder: label,
                    disabled:
                      name === "endDate" &&
                      !!form.watch(`jobs.${index}.currentlyWorking`),
                  }}
                />
              ))}
            </FieldGrid>

            {/* Currently Working */}
            <Controller
              name={`jobs.${index}.currentlyWorking`}
              control={form.control}
              render={({ field }) => (
                <Field orientation="horizontal">
                  <Checkbox
                    checked={field.value ?? false}
                    onCheckedChange={(checked) => field.onChange(checked)}
                  />
                  <FieldLabel>I currently work here</FieldLabel>
                </Field>
              )}
            />

            {/* Description */}
            <Controller
              name={`jobs.${index}.description`}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`description-${index}`}>
                    Responsibilities & Achievements
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id={`description-${index}`}
                    rows={5}
                    placeholder="Describe your responsibilities, achievements, technologies used, and impact..."
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldArrayCard>
        )}
      />
    </FormStepLayout>
  );
};

export default WorkHistory;
