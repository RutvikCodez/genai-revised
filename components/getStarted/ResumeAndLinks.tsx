"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError } from "../ui/field";
import { Input } from "../ui/input";
import { FileSearchCorner } from "lucide-react";
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { resumeFormSchema, websiteFields } from "@/constants";
import { FormStepLayout } from "./FormStepLayout";
import { FieldGrid } from "./FieldGrid";
import { FormField } from "./FormField";

const ResumeAndLinks = () => {
  const [skillInput, setSkillInput] = useState("");
  const { nextStep, setData, data, prevStep } = useWizardFormContext();
  const form = useForm<z.infer<typeof resumeFormSchema>>({
    resolver: zodResolver(resumeFormSchema),
    defaultValues: {
      resume: data?.resume ?? undefined,
      linkedin: data?.linkedin ?? "",
      x: data?.x ?? "",
      github: data?.github ?? "",
      portfolio: data?.portfolio ?? "",
      skills: data?.skills ?? [],
    },
  });

  const onSubmit = (values: FormValues) => {
    setData((prev) => ({ ...prev, ...values }));
    nextStep();
  };

  return (
    <FormStepLayout
      icon={FileSearchCorner}
      title="Resume, Websites, & Skills"
      onSubmit={form.handleSubmit(onSubmit)}
      onBack={prevStep}
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold tracking-wide">Resume</h3>
        <p className="text-sm text-muted-foreground">
          Upload your latest resume in PDF format.
        </p>
      </div>
      <Controller
        name="resume"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field
            data-invalid={fieldState.invalid}
            className="flex flex-col gap-3"
          >
            <label
              htmlFor="resume-upload"
              className="flex cursor-pointer items-center justify-between rounded-2xl border border-border bg-background/50 p-4 transition-all hover:bg-muted/50"
            >
              <div>
                <p className="font-medium">
                  {field.value instanceof File
                    ? field.value.name
                    : "Choose PDF Resume"}
                </p>

                <p className="text-sm text-muted-foreground">
                  Maximum size 5MB
                </p>
              </div>

              <Badge variant="secondary">PDF</Badge>
            </label>

            <Input
              id="resume-upload"
              type="file"
              accept="application/pdf"
              className="hidden"
              ref={field.ref}
              name={field.name}
              onBlur={field.onBlur}
              onChange={(e) => {
                const file = e.target.files?.[0];
                field.onChange(file ?? null);
                form.trigger("resume");
              }}
            />

            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold tracking-wide">
          Professional Profiles
        </h3>

        <p className="text-sm text-muted-foreground">
          Add links that showcase your work and experience.
        </p>
      </div>
      <FieldGrid cols={2}>
        {websiteFields.map(({ name, label }, index) => (
          <FormField
            key={index}
            name={name}
            label={label}
            control={form.control}
            inputProps={{
              type: "url",
              placeholder: `https://${label.toLowerCase()}.com`,
            }}
          />
        ))}
      </FieldGrid>

      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold tracking-wide">Skills</h3>

        <p className="text-sm text-muted-foreground">
          Add up to 25 skills that best represent your expertise.
        </p>
      </div>
      <Controller
        name="skills"
        control={form.control}
        render={({ field, fieldState }) => {
          const addSkill = () => {
            const value = skillInput.trim();
            if (!value) return;
            field.onChange([...(field.value ?? []), value]);
            setSkillInput("");
          };

          const removeSkill = (index: number) => {
            field.onChange((field.value ?? []).filter((_, i) => i !== index));
          };

          return (
            <Field
              data-invalid={fieldState.invalid}
              className="flex flex-col gap-3"
            >
              <Input
                value={skillInput}
                placeholder="React, TypeScript, Node.js..."
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();

                    if ((field.value ?? []).length >= 25) return;

                    addSkill();
                  }
                }}
              />
              <div className="flex flex-wrap gap-2">
                {(field.value ?? []).map((skill, index) => (
                  <Badge
                    key={`${skill}-${index}`}
                    variant="secondary"
                    className="gap-2 px-3 py-1"
                  >
                    {skill}

                    <button
                      type="button"
                      onClick={() => removeSkill(index)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      x
                    </button>
                  </Badge>
                ))}
              </div>

              <p className="text-xs text-muted-foreground">
                {(field.value ?? []).length}/25 skills added
              </p>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          );
        }}
      />
    </FormStepLayout>
  );
};

export default ResumeAndLinks;
