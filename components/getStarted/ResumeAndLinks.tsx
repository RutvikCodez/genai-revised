"use client";
import { FileSearchCorner } from "lucide-react";
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import { resumeFormSchema, websiteFields } from "@/constants";
import { FormStepLayout } from "./FormStepLayout";
import { FieldGrid } from "./FieldGrid";
import { FormField } from "./FormField";
import { FormSection } from "./FormSection";
import { FileUploadField } from "./FileUploadField";
import { SkillsField } from "./SkillsField";
import { useWizardStep } from "../../app/hooks/useWizardStepForm";

const ResumeAndLinks = () => {
  const { data } = useWizardFormContext();
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
      <FileUploadField
        name="resume"
        control={form.control}
        placeholder="Choose PDF Resume"
      />

      <FormSection
        title="Professional Profiles"
        description="Add links that showcase your work and experience."
      />
      <FieldGrid cols={2}>
        {websiteFields.map(({ name, label }, i) => (
          <FormField
            key={i}
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
      <SkillsField name="skills" control={form.control} />
    </FormStepLayout>
  );
};

export default ResumeAndLinks;
