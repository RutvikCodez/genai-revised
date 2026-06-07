"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError } from "../ui/field";
import { Input } from "../ui/input";
import { FileSearchCorner } from "lucide-react";
import { Button } from "../ui/button";
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
      <span>Resume (PDF Only)</span>
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
                form.trigger("resume");
              }}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <span>Websites</span>
      <FieldGrid>
        {websiteFields.map(({ name, label }, index) => (
          <FormField
            key={index}
            name={name}
            label={label}
            control={form.control}
            inputProps={{ type: "url" }}
          />
        ))}
      </FieldGrid>

      <span>Skills (Add up to 25)</span>
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
                placeholder="Type a skill and press Enter"
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSkill();
                  }
                }}
              />
              <div className="flex flex-wrap gap-2">
                {(field.value ?? []).map((skill, index) => (
                  <Badge key={index}>
                    {skill}
                    <Button type="button" onClick={() => removeSkill(index)}>
                      ×
                    </Button>
                  </Badge>
                ))}
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          );
        }}
      />
    </FormStepLayout>
  );
};

export default ResumeAndLinks;