import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import GetStartedWrapper from "./GetStartedWrapper";
import { cn } from "@/lib/utils";

export function FormStepLayout({
  icon: Icon,
  title,
  onBack,
  submitLabel = "Next",
  onSubmit,
  children,
}: FormStepLayoutProps) {
  return (
    <GetStartedWrapper>
      <div className="relative flex flex-col p-8 md:p-10 gap-6">
        {/* Header */}
        <CardHeader className="flex flex-col gap-4 p-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-background/60">
              <Icon className="h-5 w-5 text-foreground" />
            </div>

            <CardTitle className="text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
            </CardTitle>
          </div>

          {/* subtle divider */}
          <div className="h-px w-16 bg-border" />
        </CardHeader>

        {/* Form Content */}
        <CardContent className="p-0">
          <form onSubmit={onSubmit} className="flex flex-col gap-12">
            {/* Form Fields */}
            <div className="flex flex-col gap-5">{children}</div>

            {/* Actions */}
            <div
            className={cn("grid w-full gap-3 grid-cols-1", {
                "grid-cols-2": onBack
            })}
            >
              {onBack && (
                <Button
                  type="button"
                  onClick={onBack}
                  variant="outline"
                  className="h-11 rounded-xl font-medium"
                >
                  Back
                </Button>
              )}

              <Button
                type="submit"
                className="h-11 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                {submitLabel}
              </Button>
            </div>
          </form>
        </CardContent>
      </div>
    </GetStartedWrapper>
  );
}