import { CardContent, CardHeader, CardTitle } from "../ui/card";
import GetStartedWrapper from "./GetStartedWrapper";
import { Button } from "../ui/button";

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
      <div className="relative flex flex-col gap-5 p-8 md:p-10">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <Icon />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            {children}
            <div
              className={`grid gap-10 w-full ${onBack ? "grid-cols-2" : ""}`}
            >
              {onBack && (
                <Button type="button" onClick={onBack} variant="secondary">
                  Back
                </Button>
              )}
              <Button type="submit">{submitLabel}</Button>
            </div>
          </form>
        </CardContent>
      </div>
    </GetStartedWrapper>
  );
}
