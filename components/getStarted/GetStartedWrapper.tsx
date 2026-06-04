import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useWizardFormContext } from "@/app/context/WizardFormContext";

const GetStartedWrapper = ({
  description,
  imageUrl,
  title,
  tagline,
}: GetStartedCardProps) => {
  const { nextStep, jumpToStep } = useWizardFormContext();
  return (
    <Card className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/50 backdrop-blur-xl">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative grid items-center gap-10 p-8 md:grid-cols-2 md:p-10">
        {/* Left Content */}
        <CardHeader className="space-y-6 p-0">
          <div className="flex items-center gap-2">
            <Badge className="flex items-center gap-1 px-3 py-1 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              {tagline}
            </Badge>
          </div>

          <div className="space-y-3">
            <CardTitle className="text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </CardTitle>

            <CardDescription className="text-base leading-relaxed text-muted-foreground">
              {description}
            </CardDescription>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button
              className="group h-11 rounded-xl text-sm font-semibold"
              onClick={() => {
                nextStep();
              }}
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              className="h-11 rounded-xl text-sm font-semibold"
              onClick={() => {
                jumpToStep(4);
              }}
            >
              Skip
            </Button>
          </div>
        </CardHeader>

        {/* Right Image */}
        <CardContent className="flex justify-center p-0">
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/40 backdrop-blur-md">
            <Image
              src={imageUrl}
              alt={title}
              width={500}
              height={500}
              className="h-auto w-full max-w-sm object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default GetStartedWrapper;
