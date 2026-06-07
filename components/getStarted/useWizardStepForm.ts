"use client"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { useWizardFormContext } from "@/app/context/WizardFormContext";

interface UseWizardStepOptions<T extends FieldValues> {
  schema: z.ZodType<T>;
  defaultValues: DefaultValues<T>;
  onAfterSubmit?: (values: T) => Promise<void> | void;
  advance?: boolean;
}

export function useWizardStep<T extends FieldValues>({
  schema,
  defaultValues,
  onAfterSubmit,
  advance = true,
}: UseWizardStepOptions<T>) {
  const { nextStep, prevStep, setData } = useWizardFormContext();

  const form = useForm<T>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema as any),
    defaultValues,
    mode: "onTouched",
  });

  const handleSubmit: SubmitHandler<T> = async (values) => {
    setData((prev) => ({ ...prev, ...values }));
    await onAfterSubmit?.(values);
    if (advance) nextStep();
  };

  return {
    form,
    onSubmit: form.handleSubmit(handleSubmit as SubmitHandler<FieldValues>),
    prevStep,
    isSubmitting: form.formState.isSubmitting,
  };
}