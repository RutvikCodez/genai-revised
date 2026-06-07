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
      title="Work History"
      onSubmit={form.handleSubmit(onSubmit)}
      onBack={prevStep}
    >
      <FormFieldArray
        control={form.control}
        name="jobs"
        addLabel="Add Job"
        defaultItem={defaultJob}
        renderItem={(index, remove) => (
          <>
            <div className="flex gap-2 items-center">
              <span>Job {index + 1}</span>
              <button
                type="button"
                className="text-red-500 text-sm"
                onClick={() => remove(index)}
              >
                Remove
              </button>
            </div>
            <FieldGrid>
              {jobInputFields.map(({ name, label, type }, fieldIndex) => (
                <FormField
                  key={fieldIndex}
                  name={`jobs.${index}.${String(name)}` as const}
                  label={label}
                  control={form.control}
                  inputProps={{
                    type,
                    disabled:
                      name === "endDate" &&
                      !!form.watch(`jobs.${index}.currentlyWorking`),
                  }}
                />
              ))}

              <Controller
                name={`jobs.${index}.currentlyWorking`}
                control={form.control}
                render={({ field }) => (
                  <Field orientation="horizontal">
                    <Checkbox
                      checked={field.value ?? false}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                    <FieldLabel>Currently Works Here</FieldLabel>
                  </Field>
                )}
              />

              <Controller
                name={`jobs.${index}.description`}
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    className="col-span-2"
                  >
                    <FieldLabel htmlFor={`description-${index}`}>
                      Description
                    </FieldLabel>
                    <Textarea
                      {...field}
                      id={`description-${index}`}
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGrid>
          </>
        )}
      />
    </FormStepLayout>
  );
};

export default WorkHistory;
