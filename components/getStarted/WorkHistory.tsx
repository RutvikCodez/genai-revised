"use client";
import { BriefcaseBusiness } from "lucide-react";
import { Controller } from "react-hook-form";
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { defaultJob, jobInputFields, workHistoryFormSchema } from "@/constants";
import { FormStepLayout } from "./FormStepLayout";
import { FieldArraySection } from "./FieldArraySection";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useWizardStep } from "../../app/hooks/useWizardStepForm";

const WorkHistory = () => {
  const { data } = useWizardFormContext();
  const { form, onSubmit, prevStep } = useWizardStep({
    schema: workHistoryFormSchema,
    defaultValues: { jobs: data?.jobs?.length ? data.jobs : [defaultJob] },
  });

  return (
    <FormStepLayout
      icon={BriefcaseBusiness}
      title="Professional Experience"
      onSubmit={onSubmit}
      onBack={prevStep}
    >
      <FieldArraySection
        control={form.control}
        name="jobs"
        title="Employment History"
        description="Showcase your professional experience, responsibilities, and achievements."
        cardLabel="Experience"
        cardSubtitle="Add details about your professional experience"
        fields={jobInputFields}
        defaultItem={defaultJob}
        addLabel="Add Experience"
        renderExtra={(index) => (
          <>
            {/* Currently working checkbox */}
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

            {/* Description textarea */}
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
          </>
        )}
      />
    </FormStepLayout>
  );
};

export default WorkHistory;
