"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
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

const WorkHistory = () => {
  const { nextStep, setData, data, prevStep } = useWizardFormContext();

  const form = useForm<z.infer<typeof workHistoryFormSchema>>({
    resolver: zodResolver(workHistoryFormSchema),
    defaultValues: {
      jobs: data?.jobs?.length ? data.jobs : [defaultJob],
    },
  });

  const onSubmit = (data: z.infer<typeof workHistoryFormSchema>) => {
    setData((prev) => ({ ...prev, ...data }));
    nextStep();
  };

  return (
    <FormStepLayout
      icon={BriefcaseBusiness}
      title="Professional Experience"
      onSubmit={form.handleSubmit(onSubmit)}
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
          <div className="relative rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Experience #{index + 1}</h3>

                <p className="text-sm text-muted-foreground">
                  Add details about your professional experience
                </p>
              </div>

              {index > 0 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Remove
                </button>
              )}
            </div>

            {/* Fields */}
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

            {/* Current Job */}
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
          </div>
        )}
      />
    </FormStepLayout>
  );
};

export default WorkHistory;
