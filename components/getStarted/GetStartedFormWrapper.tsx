"use client";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import GetStartedWrapper from "./GetStartedWrapper";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { CircleUserRound } from "lucide-react";
import { Button } from "../ui/button";
import { useWizardFormContext } from "@/app/context/WizardFormContext";

const GetStartedFormWrapper = () => {
  const formSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const fields = [
    {
      name: "firstName" as const,
      label: "First Name",
    },
    {
      name: "lastName" as const,
      label: "Last Name",
    },
  ];

  const { nextStep, setData } = useWizardFormContext();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setData((prev) => ({ ...prev, ...data }));
    nextStep();
  };

  return (
    <GetStartedWrapper>
      <div className="relative flex flex-col  gap-5 p-8 md:p-10">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <CircleUserRound />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <span>Legal Name</span>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <FieldGroup className="grid grid-cols-2 w-full gap-10">
              {fields.map(({ name, label }) => (
                <Controller
                  key={name}
                  name={name}
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={name}>{label}</FieldLabel>
                      <Input
                        {...field}
                        id={name}
                        aria-invalid={fieldState.invalid}
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              ))}
            </FieldGroup>
            <Button type="submit">Next</Button>
          </form>
        </CardContent>
      </div>
    </GetStartedWrapper>
  );
};

export default GetStartedFormWrapper;
