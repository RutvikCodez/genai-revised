"use client";
import { Controller } from "react-hook-form";
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
import { FormSection } from "./FormSection";
import { useWizardStep } from "./useWizardStepForm";

const ResumeAndLinks = () => {
  const { data } = useWizardFormContext();
  const [skillInput, setSkillInput] = useState("");

  const { form, onSubmit, prevStep } = useWizardStep({
    schema: resumeFormSchema,
    defaultValues: {
      resume: data?.resume ?? undefined,
      linkedin: data?.linkedin ?? "",
      x: data?.x ?? "",
      github: data?.github ?? "",
      portfolio: data?.portfolio ?? "",
      skills: data?.skills ?? [],
    },
  });

  return (
    <FormStepLayout
      icon={FileSearchCorner}
      title="Resume, Websites, & Skills"
      onSubmit={onSubmit}
      onBack={prevStep}
    >
      <FormSection
        title="Resume"
        description="Upload your latest resume in PDF format."
      />
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
      <FormSection
        title="Professional Profiles"
        description="Add links that showcase your work and experience."
      />
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

      <FormSection
        title="Skills"
        description="Add up to 25 skills that best represent your expertise."
      />
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
