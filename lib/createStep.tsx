// Before: every step component repeats schema, defaultValues, useWizardStep, FormStepLayout
// After: one call produces the full component
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { useWizardStep } from "@/app/hooks/useWizardStepForm";
import { FieldValues } from "react-hook-form";
import { FormStepLayout } from "../components/getStarted/FormStepLayout";

export function createStep<T extends FieldValues>(
  config: StepConfig<T>,
  render: (
    form: ReturnType<typeof useWizardStep<T>>["form"],
    data: Partial<T>,
  ) => React.ReactNode,
) {
  return function Step() {
    const { data } = useWizardFormContext();
    const step = useWizardStep<T>({
      schema: config.schema,
      defaultValues: config.getDefaults(data as Partial<T>),
      advance: config.advance,
      onAfterSubmit: config.onAfterSubmit,
    });

    const label =
      typeof config.submitLabel === "function"
        ? config.submitLabel(step.isSubmitting)
        : (config.submitLabel ?? "Continue");

    return (
      <FormStepLayout
        icon={config.icon}
        title={config.title}
        submitLabel={step.isSubmitting ? label : label}
        onSubmit={step.onSubmit}
        onBack={
          "prevStep" in step
            ? (step as { prevStep: () => void }).prevStep
            : undefined
        }
      >
        {render(step.form, data as Partial<T>)}
      </FormStepLayout>
    );
  };
}
