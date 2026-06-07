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

const ContactInformation = () => {
  const formSchema = z.object({
    email: z.string().trim().email("Please enter a valid email address"),

    phone: z
      .string()
      .trim()
      .regex(/^[0-9+\-\s()]{10,15}$/, "Please enter a valid phone number"),

    addressLine1: z
      .string()
      .trim()
      .min(5, "Address Line 1 must be at least 5 characters"),

    addressLine2: z.string().trim().optional(),

    city: z.string().trim().min(2, "City is required"),

    state: z.string().trim().min(2, "State is required"),

    country: z.string().trim().min(2, "Country is required"),

    postalCode: z
      .string()
      .trim()
      .min(3, "Postal code is required")
      .max(10, "Postal code is too long"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
  });

  const fields = [
    {
      name: "email" as const,
      label: "Email Address",
      type: "email",
    },
    {
      name: "phone" as const,
      label: "Phone Number",
      type: "tel",
    },
    {
      name: "addressLine1" as const,
      label: "Address Line 1",
      type: "text",
    },
    {
      name: "addressLine2" as const,
      label: "Address Line 2",
      type: "text",
    },
    {
      name: "city" as const,
      label: "City",
      type: "text",
    },
    {
      name: "state" as const,
      label: "State",
      type: "text",
    },
    {
      name: "country" as const,
      label: "Country",
      type: "text",
    },
    {
      name: "postalCode" as const,
      label: "Postal Code",
      type: "text",
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
          <span>Contact</span>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <FieldGroup className="grid grid-cols-2 w-full gap-10">
              {fields.slice(0,2).map(({ name, label, type }) => (
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
                        type={type}
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
            <span>Address</span>
            <FieldGroup className="grid grid-cols-2 w-full gap-10">
              {fields.slice(2).map(({ name, label, type }) => (
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
                        type={type}
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

export default ContactInformation;
