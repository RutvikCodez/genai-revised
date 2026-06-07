"use client";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import GetStartedWrapper from "./GetStartedWrapper";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { FileSearchCorner } from "lucide-react";
import { Button } from "../ui/button";
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { useState } from "react";
import { Badge } from "../ui/badge";

const ResumeAndLinks = () => {
  const formSchema = z.object({
    // Resume (PDF only)
    resume: z.custom<File>(
      (val) => val instanceof File && val.type === "application/pdf",
      { message: "Please upload a valid PDF file" },
    ),

    // Optional links (must be valid URLs if provided)
    linkedin: z
      .string()
      .trim()
      .url("Please enter a valid LinkedIn URL")
      .optional()
      .or(z.literal("")),

    x: z
      .string()
      .trim()
      .url("Please enter a valid X (Twitter) URL")
      .optional()
      .or(z.literal("")),

    github: z
      .string()
      .trim()
      .url("Please enter a valid GitHub URL")
      .optional()
      .or(z.literal("")),

    portfolio: z
      .string()
      .trim()
      .url("Please enter a valid portfolio URL")
      .optional()
      .or(z.literal("")),

    // Skills (max 25)
    skills: z
      .array(z.string().min(1, "Skill cannot be empty"))
      .max(25, "You can add up to 25 skills only")
      .optional(),
  });

  const [input, setInput] = useState("");

  const { nextStep, setData, data, prevStep } = useWizardFormContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resume: data?.resume ?? undefined,
      linkedin: data?.linkedin ?? "",
      x: data?.x ?? "",
      github: data?.github ?? "",
      portfolio: data?.portfolio ?? "",

      skills: data?.skills ?? [],
    },
  });

  const fields = [
    {
      name: "linkedin" as const,
      label: "LinkedIn",
    },
    {
      name: "x" as const,
      label: "X (Twitter)",
    },
    {
      name: "github" as const,
      label: "GitHub",
    },
    {
      name: "portfolio" as const,
      label: "Personal Portfolio",
    },
  ];

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    console.log("hello");

    setData((prev) => ({ ...prev, ...value }));
    console.log(data);

    nextStep();
  };

  const onError = (errors: unknown) => {
    console.log("FORM ERRORS:", errors);
  };

  return (
    <GetStartedWrapper>
      <div className="relative flex flex-col  gap-5 p-8 md:p-10">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <FileSearchCorner />
            Resume, Websites, & Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <span>Resume (PDF Only)</span>
          <form
            onSubmit={form.handleSubmit(onSubmit, onError)}
            className="flex flex-col gap-5"
          >
            <FieldGroup>
              <Controller
                name="resume"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      type="file"
                      accept="application/pdf"
                      ref={field.ref}
                      name={field.name}
                      onBlur={field.onBlur}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        field.onChange(file ?? null);
                        form.trigger("resume"); // force revalidation
                      }}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <span>Websites</span>
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
                        type={"url"}
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
            <span>Skills (Add up to 25)</span>
            <FieldGroup className="grid grid-cols-2 w-full gap-10">
              <Controller
                name="skills"
                control={form.control}
                render={({ field, fieldState }) => {
                  const addSkill = () => {
                    const value = input.trim();
                    if (!value) return;

                    const updated = [...(field.value || []), value];
                    field.onChange(updated);
                    setInput("");
                  };

                  const removeSkill = (index: number) => {
                    const updated = (field.value || []).filter(
                      (_, i) => i !== index,
                    );
                    field.onChange(updated);
                  };

                  return (
                    <Field
                      data-invalid={fieldState.invalid}
                      className="flex flex-col gap-3 col-span-2"
                    >
                      {/* Input */}
                      <Input
                        value={input}
                        placeholder="Type a skill and press Enter"
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addSkill();
                          }
                        }}
                      />

                      {/* Skills List */}
                      <div className="flex flex-wrap gap-2">
                        {(field.value || []).map(
                          (skill: string, index: number) => (
                            <Badge key={index}>
                              {skill}
                              <Button
                                type="button"
                                onClick={() => removeSkill(index)}
                              >
                                ×
                              </Button>
                            </Badge>
                          ),
                        )}
                      </div>

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
            <div className="grid grid-cols-2 gap-10 w-full">
              <Button
                type="button"
                onClick={() => prevStep()}
                variant={"secondary"}
              >
                Back
              </Button>
              <Button type="submit">Next</Button>
            </div>
          </form>
        </CardContent>
      </div>
    </GetStartedWrapper>
  );
};

export default ResumeAndLinks;
