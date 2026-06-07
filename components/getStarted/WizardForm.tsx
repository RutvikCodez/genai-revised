import { Check } from "lucide-react";
import { FunctionComponent } from "react";

const WizardForm: FunctionComponent<typesforWizardForm> = ({
  currentStep,
  Steps,
}) => {
  const renderStep = Steps[currentStep - 1];

  const progress = (currentStep / Steps.length) * 100;

  return (
    <div className="mx-auto w-full max-w-5xl flex flex-col gap-12 px-4 sm:px-6 lg:px-8 xl:px-0 max-md:p-4">
      <div className="flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">
              Step {currentStep} of {Steps.length}
            </p>

            <div className="hidden rounded-full border border-border/50 bg-background/60 px-4 py-2 text-sm font-medium backdrop-blur-md md:block">
              {Math.round(progress)}% Complete
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Stepper */}
        <div className="max-md:hidden">
          <div className="flex items-center justify-between">
            {Steps.map((_, index) => {
              const stepNumber = index + 1;

              const completed = stepNumber < currentStep;
              const active = stepNumber === currentStep;

              return (
                <div
                  key={stepNumber}
                  className="relative flex flex-1 items-center"
                >
                  <div
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                      completed
                        ? "border-primary bg-primary text-primary-foreground"
                        : active
                          ? "border-primary bg-background"
                          : "border-border bg-background"
                    }`}
                  >
                    {completed ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-semibold">
                        {stepNumber}
                      </span>
                    )}
                  </div>

                  {stepNumber !== Steps.length && (
                    <div className="mx-2 h-px flex-1 bg-border">
                      <div
                        className={`h-full transition-all duration-500 ${
                          completed ? "bg-primary" : ""
                        }`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="rounded-3xl border border-border/50 bg-background/50 backdrop-blur-xl">
        {renderStep?.element}
      </div>
    </div>
  );
};

export default WizardForm;
